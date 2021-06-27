import React from 'react';

import { IProductsListProps, IProduct, IProductListRenderItem } from '~/@types';

import { Card } from '~/components/ProductsList/components';

import { Container, Title, List } from '~/components/ProductsList/styles';

const ProductsListComponent: React.FC<IProductsListProps> = (props: IProductsListProps) => {
  const { data, title, length } = props;

  const keyExtractor = (item: IProduct) => item.id;

  const renderItem = ({ item }: IProductListRenderItem) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  );

  return (
    <Container>
      <Title>
        {title}
        {' '}
        (
        {length}
        )
      </Title>
      <List<any>
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default ProductsListComponent;
