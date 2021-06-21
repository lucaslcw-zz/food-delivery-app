import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Categories } from '~/components';

import { Container, Margin } from '~/screens/Menu/styles';

const Menu = () => {
  const { categories } = useSelector((state: any) => state.Menu);

  return (
    <Container>
      <Margin>
        <Header title="Cardápio" hasHeaderRight />
        <Categories data={categories} />
      </Margin>
    </Container>
  );
};

export default Menu;
