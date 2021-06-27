import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { openCartModal } from '~/store/actions/Cart';

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

  const { cartModal: { items } } = useSelector((state: any) => state.Cart);

  const dispatch = useDispatch();

  const handleOpenCartModal = () => dispatch(openCartModal());

  return (
    <Container>
      <Text>{title}</Text>
      {hasHeaderRight && (
        <CartIcon onPress={handleOpenCartModal}>
          <Circle>
            <Number>{items.length}</Number>
          </Circle>
          <Feather name="shopping-bag" size={24} color="#333333" />
        </CartIcon>
      )}
    </Container>
  );
};

export default HeaderComponent;
