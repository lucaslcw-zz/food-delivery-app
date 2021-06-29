import styled from 'styled-components/native';

import { IMarginStylesProps } from '~/@types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f7f7;
`;

export const Margin = styled.View<IMarginStylesProps>`
  flex-grow: ${(props) => props.flexGrow || 0};
  padding-left: 15px;
  padding-right: 15px;
`;

export const Scroll = styled.ScrollView``;

export const Card = styled.View`
  width: 100%;
  align-items: center;
  padding: 25px;
  flex-direction: column;
  border-radius: 5px;
  background: #ffffff;
`;

export const ButtonImage = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  background: #F7F7F7;
  border-radius: 5px;
  border-width: 1px;
  border-color: #2D9CDB;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  margin-top: 10px;
`;

export const Email = styled.Text`
  font-size: 12px;
  color: #696969;
  font-weight: 400;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #2D9CDB;
  border-radius: 5px;
  margin-top: 25px;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;
