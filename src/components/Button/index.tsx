import React from 'react';
import { ActivityIndicator } from 'react-native';

import { IButtonProps } from '~/@types';

import { Container, Text } from '~/components/Button/styles';

const ButtonComponent: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { action, title, isLoading } = props;

  return (
    <Container onPress={action} disabled={isLoading}>
      {!isLoading ? <Text>{title}</Text> : <ActivityIndicator size="small" color="white" />}
    </Container>
  );
};

export default ButtonComponent;
