import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Text,
  CartIcon,
  Circle,
  Number,
} from '~/components/Header/styles';

const Header = ({ title, hasHeaderRight }: any) => (
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

export default Header;
