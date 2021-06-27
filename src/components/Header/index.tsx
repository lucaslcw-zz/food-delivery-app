import React from 'react';
import { Feather } from '@expo/vector-icons';

import { IHeaderProps } from '~/@types';

import {
  Container,
  Text,
  CartIcon,
  Circle,
  Number,
} from '~/components/Header/styles';

const HeaderComponent: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title, hasHeaderRight } = props;

  return (
    <Container>
      <Text>{title}</Text>
      {hasHeaderRight && (
      <CartIcon>
        <Circle>
          <Number>0</Number>
        </Circle>
        <Feather name="shopping-bag" size={24} color="#333333" />
      </CartIcon>
      )}
    </Container>
  );
};

export default HeaderComponent;
