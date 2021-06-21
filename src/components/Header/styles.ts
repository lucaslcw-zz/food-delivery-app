import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  margin-bottom: 25px;
  flex-direction: row;
  height: 35px;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: #333333;
  font-weight: 500;
`;

export const CartIcon = styled.View`
  position: absolute;
  right: 0px;
`;

export const Circle = styled.View`
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 101;
  background: #2D9CDB;
  position: absolute;
`;

export const Number = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
`;
