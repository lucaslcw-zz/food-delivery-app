import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { signIn } from '~/services';

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
} from '~/screens/SignIn/styles';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleSignIn = () => {
    setIsLoading(true);

    signIn(email, password)
      .then((userInformation) => {
        console.log(userInformation);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Container>
      <Margin>
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
        <Button action={handleSignIn} isLoading={isLoading} title="Entrar" />
        <Redirect onPress={() => navigation.navigate('SignUp')}>
          <RedirectText>
            Ainda não tem conta?
            {' '}
            <Strong>Cadastre-se agora!</Strong>
          </RedirectText>
        </Redirect>
      </Margin>
    </Container>
  );
};

export default SignIn;
