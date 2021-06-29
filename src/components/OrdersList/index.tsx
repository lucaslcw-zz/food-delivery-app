import React from 'react';

import { IOrdersListProps, IOrder, IOrderListRenderItem } from '~/@types';

import { Card } from '~/components/OrdersList/components';

import { Container, List } from '~/components/OrdersList/styles';

const OrdersListComponent: React.FC<IOrdersListProps> = (props: IOrdersListProps) => {
  const { data } = props;

  const keyExtractor = (item: IOrder) => item.id;

  const renderItem = ({ item }: IOrderListRenderItem) => (
    <Card
      key={item.id}
      id={item.id}
      status={item.status}
      createdAt={item.createdAt}
      products={item.products}
    />
  );

  return (
    <Container>
      <List<any>
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default OrdersListComponent;
