import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import { IProduct } from '~/@types';

import {
  Header,
  CategoriesList,
  ProductModal,
  CartModal,
  ProductsList,
} from '~/components';

import { Container, Margin } from '~/screens/Menu/styles';

const Menu: React.FC = () => {
  const {
    categories,
    typeOfCategory,
    products,
    productModal: { isVisibled },
  } = useSelector((state: any) => state.Product);

  const productsFiltered = useMemo(() => {
    return products.filter((product: IProduct) => product.category === typeOfCategory);
  }, [typeOfCategory]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Margin>
        <Header title="Cardápio" hasHeaderRight />
      </Margin>
      <CategoriesList data={categories} />
      <Margin flexGrow={1}>
        <ProductsList
          data={productsFiltered}
          title={typeOfCategory}
          length={productsFiltered.length}
        />
      </Margin>
      {isVisibled && <ProductModal />}
      <CartModal />
    </Container>
  );
};

export default Menu;
