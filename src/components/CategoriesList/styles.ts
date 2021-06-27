import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 40px;
  height: 65px;
  margin-bottom: 40px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
`;
