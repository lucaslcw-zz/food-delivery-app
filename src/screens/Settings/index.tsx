import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Firebase from '~/services';

import { resetStackNavigation } from '~/utils';

import { Header } from '~/components';

import {
  Container,
  Margin,
  Scroll,
  Card,
  ButtonImage,
  Image,
  Name,
  Email,
  Button,
  ButtonText,
} from '~/screens/Settings/styles';

const Settings: React.FC = () => {
  const { userInformation } = useSelector((state: any) => state.Authentication);

  const navigation = useNavigation();

  const handleSignOut = () => {
    Firebase.signOut()
      .then(() => resetStackNavigation(navigation));
  };

  return (
    <Container>
      <Margin>
        <Header title="Ajustes" />
      </Margin>
      <Margin flexGrow={1}>
        <Scroll>
          <Card
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <ButtonImage>
              <Image />
            </ButtonImage>
            <Name>{userInformation.name}</Name>
            <Email>{userInformation.email}</Email>
            <Button onPress={handleSignOut}>
              <ButtonText>Sair da Conta</ButtonText>
            </Button>
          </Card>
        </Scroll>
      </Margin>
    </Container>
  );
};

export default Settings;
