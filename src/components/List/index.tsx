import React from 'react';

import { IListProps, IProduct, IProductListRenderItem } from '~/@types';

import { Card } from '~/components/List/components';

import { Container, Title, List } from '~/components/List/styles';

const ListComponent: React.FC<IListProps> = (props: IListProps) => {
  const { data, title, length } = props;

  const keyExtractor = () => (item: IProduct) => item.id.toString();

  const renderItem = () => ({ item }: IProductListRenderItem) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
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

export default ListComponent;
