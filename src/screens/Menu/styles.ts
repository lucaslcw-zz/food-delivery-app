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
