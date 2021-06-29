import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Firebase from '~/services';

import { Button } from '~/components';
import {
  Container,
  Margin,
  KeyboardAvoidingView,
  LogoContainer,
  InputContainer,
  Label,
  Input,
  Redirect,
  RedirectText,
  Strong,
} from '~/screens/SignUp/styles';

const SignUp: React.FC = () => {
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

    Firebase.signUp(name, email, password)
      .then(() => resetFields())
      .finally(() => {
        setIsLoading(false);
        navigation.goBack();
      });
  };

  return (
    <Container>
      <Margin>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'} keyboardVerticalOffset={200}>
          <LogoContainer>
            <Ionicons name="fast-food" size={100} color="#2D9CDB" style={{ marginBottom: 25 }} />
          </LogoContainer>
          <InputContainer>
            <Label>Nome</Label>
            <Input
              placeholder="Digite seu nome"
              selectionColor="#2D9CDB"
              maxLength={20}
              onChangeText={(text: string) => setName(text)}
              value={name}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              placeholder="Digite seu email"
              selectionColor="#2D9CDB"
              maxLength={50}
              onChangeText={(text: string) => setEmail(text)}
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
              onChangeText={(text: string) => setPassword(text)}
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
        </KeyboardAvoidingView>
      </Margin>
    </Container>
  );
};

export default SignUp;
