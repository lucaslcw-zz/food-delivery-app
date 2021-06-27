import styled from 'styled-components/native';

import { IContainerStylesProps } from '~/@types';

export const Container = styled.TouchableOpacity<IContainerStylesProps>`
  width: ${(props) => props.width}px;
  height: 100%;
  margin-right: ${(props) => (!props.noMargin ? '10' : '0')}px;
  border-radius: 5px;
  background: #2D9CDB;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-weight: 500;
  margin-top: 8px;
  font-size: 14px;
`;
