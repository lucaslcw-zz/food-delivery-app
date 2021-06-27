import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { IProduct } from '~/@types';
import { formatToBrazilianCurrency } from '~/utils/Formatting';

import { closeCartModal, cleanCart, removeProductCart } from '~/store/actions/Cart';

import {
  Container,
  Margin,
  Scroll,
  Header,
  CloseButton,
  Title,
  ClearButton,
  ClearButtonText,
  Card,
  Image,
  Information,
  Name,
  Row,
  Price,
  TrashButton,
  Button,
  ButtonText,
} from '~/components/CartModal/styles';

const CartModalComponent: React.FC = () => {
  const { cartModal: { isVisibled, items } } = useSelector((state: any) => state.Cart);

  const dispatch = useDispatch();

  const handleCloseCartModal = () => dispatch(closeCartModal());

  const handleRemoveProductCart = (index: number) => dispatch(removeProductCart(index));

  const handleCleanCart = () => {
    dispatch(cleanCart());
    handleCloseCartModal();
  };

  const totalCartValue = useMemo(() => {
    if (items.length === 1) return items.map((product: IProduct) => product.price);

    if (items.length !== 0) {
      return items.reduce((acc: IProduct, product: IProduct) => acc.price + product.price);
    }

    return 0;
  }, [items]);

  return (
    <Container visible={isVisibled} animationType="slide">
      <Margin>
        <Header>
          <CloseButton onPress={handleCloseCartModal}>
            <Feather name="chevron-down" size={30} color="#333333" />
          </CloseButton>
          <Title>Carrinho</Title>
          <ClearButton onPress={handleCleanCart}>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </Header>
        <Scroll>
          {items.length !== 0 && items.map((product: IProduct, index: number) => (
            <Card key={index}>
              <Information>
                <Name>{product.name}</Name>
                <Row>
                  <Price>
                    R$
                    {' '}
                    {formatToBrazilianCurrency(product.price)}
                  </Price>
                  <TrashButton onPress={() => handleRemoveProductCart(index)}>
                    <Feather name="trash-2" size={16} color="#fff" />
                  </TrashButton>
                </Row>
              </Information>
              <Image source={{ uri: product.image }} />
            </Card>
          ))}
          <Button>
            <ButtonText>Concluir Pedido</ButtonText>
            <ButtonText>
              R$
              {' '}
              {formatToBrazilianCurrency(totalCartValue)}
            </ButtonText>
          </Button>
        </Scroll>
      </Margin>
    </Container>
  );
};

export default CartModalComponent;
