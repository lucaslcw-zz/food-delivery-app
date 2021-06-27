import React from 'react';
import { useDispatch } from 'react-redux';

import { IProductCardProps } from '~/@types';
import { formatToBrazilianCurrency } from '~/utils/Formatting';

import { setContentProductModal } from '~/store/actions/Product';

import {
  Container,
  Image,
  Information,
  Content,
  Name,
  Description,
  Price,
} from '~/components/ProductsList/components/Card/styles';

const ProductCard: React.FC<IProductCardProps> = (props: IProductCardProps) => {
  const {
    name,
    description,
    price,
    image,
    id,
  } = props;

  const dispatch = useDispatch();

  const handleOpenProductModal = () => {
    dispatch(setContentProductModal({
      name, description, price, image, id,
    }));
  };

  return (
    <Container
      onPress={handleOpenProductModal}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Image source={{ uri: image }} />
      <Information>
        <Content>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Content>
        <Price>
          R$
          {' '}
          {formatToBrazilianCurrency(price)}
        </Price>
      </Information>
    </Container>
  );
};

export default ProductCard;
