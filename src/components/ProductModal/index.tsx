import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { formatToBrazilianCurrency } from '~/utils/Formatting';

import { addProductCart } from '~/store/actions/Cart';
import { deleteContentProductModal } from '~/store/actions/Product';

import {
  Container,
  Margin,
  Scroll,
  Header,
  CloseButton,
  Image,
  Information,
  Name,
  Description,
  Button,
  ButtonText,
} from '~/components/ProductModal/styles';

const ProductModalComponent: React.FC = () => {
  const { productModal: { isVisibled, content } } = useSelector((state: any) => state.Product);

  const dispatch = useDispatch();

  const handleCloseProductModal = () => dispatch(deleteContentProductModal());

  const handleAddProductCart = () => {
    dispatch(addProductCart(content));
    handleCloseProductModal();
  };

  return (
    <Container visible={isVisibled} animationType="slide">
      <Margin>
        <Header>
          <CloseButton onPress={handleCloseProductModal}>
            <Feather name="chevron-down" size={30} color="#333333" />
          </CloseButton>
        </Header>
        <Scroll>
          <Image source={{ uri: content.image }} />
          <Information>
            <Name>{content.name}</Name>
            <Description>{content.description}</Description>
            <Button onPress={handleAddProductCart}>
              <ButtonText>Adicionar ao Carrinho</ButtonText>
              <ButtonText>
                R$
                {' '}
                {formatToBrazilianCurrency(content.price)}
              </ButtonText>
            </Button>
          </Information>
        </Scroll>
      </Margin>
    </Container>
  );
};

export default ProductModalComponent;
