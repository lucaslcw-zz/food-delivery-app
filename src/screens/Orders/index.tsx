import React from 'react';
import { useSelector } from 'react-redux';

import { Header, OrdersList } from '~/components';

import { Container, Margin } from '~/screens/Orders/styles';

const Orders: React.FC = () => {
  const { userInformation: { orders } } = useSelector((state: any) => state.Authentication);

  return (
    <Container>
      <Margin>
        <Header title="Pedidos" />
      </Margin>
      <Margin flexGrow={1}>
        <OrdersList data={orders} />
      </Margin>
    </Container>
  );
};

export default Orders;
