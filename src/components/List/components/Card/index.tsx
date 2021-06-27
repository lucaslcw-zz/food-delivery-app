import React from 'react';

import { IProductCardProps } from '~/@types';

import {
  Container,
  Image,
  Information,
  Content,
  Name,
  Description,
  Price,
} from '~/components/List/components/Card/styles';

const CardComponent: React.FC<IProductCardProps> = (props: IProductCardProps) => {
  const { name, description, price } = props;

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
      <Image />
      <Information>
        <Content>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Content>
        <Price>
          R$
          {' '}
          {(price.toFixed(2)).replace('.', ',')}
        </Price>
      </Information>
    </Container>
  );
};

export default CardComponent;
