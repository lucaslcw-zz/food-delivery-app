import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from '~/components/Button/styles';

const Button = ({ action, title, isLoading }: any) => (
  <Container onPress={action} disabled={isLoading && true}>
    {!isLoading ? <Text>{title}</Text> : <ActivityIndicator size="small" color="white" />}
  </Container>
);

export default Button;
