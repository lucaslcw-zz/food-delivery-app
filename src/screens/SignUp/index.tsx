import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { signUp } from '~/services';

import { Button } from '~/components';
import {
  Container,
  Margin,
  InputContainer,
  Label,
  Input,
  Redirect,
  RedirectText,
  Strong,
} from '~/screens/SignUp/styles';

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSignUp = () => {
    setIsLoading(true);

    signUp(name, email, password)
      .then(() => resetFields())
      .finally(() => {
        setIsLoading(false);
        navigation.goBack();
      });
  };

  return (
    <Container>
      <Margin>
        <InputContainer>
          <Label>Nome</Label>
          <Input
            placeholder="Digite seu nome"
            selectionColor="#2D9CDB"
            maxLength={20}
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input
            placeholder="Digite seu email"
            selectionColor="#2D9CDB"
            maxLength={50}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <Label>Senha</Label>
          <Input
            placeholder="Digite sua senha"
            selectionColor="#2D9CDB"
            secureTextEntry
            maxLength={12}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </InputContainer>
        <Button action={handleSignUp} isLoading={isLoading} title="Cadastrar" />
        <Redirect onPress={() => navigation.goBack()}>
          <RedirectText>
            Já tem conta?
            {' '}
            <Strong>Entre agora!</Strong>
          </RedirectText>
        </Redirect>
      </Margin>
    </Container>
  );
};

export default SignUp;
