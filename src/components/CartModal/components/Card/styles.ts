import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 25px;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #D0D0D0;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background: #2D9CDB;
`;

export const Information = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
`;

export const TrashButton = styled.TouchableOpacity`
  background: #2D9CDB;
  width: 25px;
  height: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
