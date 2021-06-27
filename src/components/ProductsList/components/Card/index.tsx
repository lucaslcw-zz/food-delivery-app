import React from 'react';

import { IProductCardProps } from '~/@types';
import { formatToBrazilianCurrency } from '~/utils/Formatting';

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
  } = props;

  return (
    <Container
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
