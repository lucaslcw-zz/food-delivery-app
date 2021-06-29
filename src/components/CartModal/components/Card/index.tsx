import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { IProductCardCartProps } from '~/@types';
import { formatToBrazilianCurrency } from '~/utils';

import { removeProductCart } from '~/store/actions/Cart';

import {
  Container,
  Image,
  Information,
  Name,
  Row,
  Price,
  TrashButton,
} from '~/components/CartModal/components/Card/styles';

const CardComponent: React.FC<IProductCardCartProps> = (props: IProductCardCartProps) => {
  const {
    name,
    price,
    index,
    image,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveProductCart = (index: number) => dispatch(removeProductCart(index));

  return (
    <Container>
      <Information>
        <Name>{name}</Name>
        <Row>
          <Price>
            R$
            {' '}
            {formatToBrazilianCurrency(price)}
          </Price>
          <TrashButton onPress={() => handleRemoveProductCart(index)}>
            <Feather name="trash-2" size={16} color="#fff" />
          </TrashButton>
        </Row>
      </Information>
      <Image source={{ uri: image }} />
    </Container>
  );
};

export default CardComponent;
