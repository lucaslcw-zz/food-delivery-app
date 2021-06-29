import React from 'react';
import { Feather } from '@expo/vector-icons';

import Firebase from '~/services';

import { WAITING_CONFIRMATION, ORDER_DELIVERY, ORDER_CANCELED } from '~/constants/Status';
import { IOrderCardProps } from '~/@types';
import { formatUnixToTimestamp, displayCurrentStatus } from '~/utils';

import {
  Container,
  Name,
  CreatedAt,
  Line,
  StatusContainer,
  StatusText,
  ProductsList,
  ProductDetail,
  ProductAmount,
  Amount,
  ProductName,
  ButtonContainer,
  Button,
  ButtonText,
} from '~/components/OrdersList/components/Card/styles';

const OrderCard: React.FC<IOrderCardProps> = (props: IOrderCardProps) => {
  const {
    createdAt,
    products,
    id,
    status,
  } = props;

  const handleCancelOrder = () => {
    Firebase.cancelOrderStatus(id);
  };

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
      <Name>
        Pedido
        {' '}
        #
        {id}
      </Name>
      <CreatedAt>
        Realizado às
        {' '}
        {formatUnixToTimestamp(createdAt)}
      </CreatedAt>
      <Line marginTop={15} marginBottom={15} />
      <StatusContainer>
        {status === ORDER_DELIVERY && (
          <Feather name="check-circle" size={14} color="#27AE60" style={{ marginRight: 5 }} />
        )}
        {status === ORDER_CANCELED && (
          <Feather name="alert-circle" size={14} color="#EB5757" style={{ marginRight: 5 }} />
        )}
        <StatusText>
          {displayCurrentStatus(status)}
        </StatusText>
      </StatusContainer>
      <Line marginTop={15} marginBottom={5} />
      <ProductsList>
        {products.map((product: any, index: number) => (
          <ProductDetail key={index}>
            <ProductAmount>
              <Amount>1</Amount>
            </ProductAmount>
            <ProductName key={index}>
              {product.name}
            </ProductName>
          </ProductDetail>
        ))}
      </ProductsList>
      <Line marginTop={15} marginBottom={15} />
      <ButtonContainer>
        <Button
          onPress={handleCancelOrder}
          opacity={status !== WAITING_CONFIRMATION && 0.5}
          disabled={status !== WAITING_CONFIRMATION}
        >
          <ButtonText>Cancelar</ButtonText>
        </Button>
        <Button>
          <ButtonText>Detalhes</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default OrderCard;
