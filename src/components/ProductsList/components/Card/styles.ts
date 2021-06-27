import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 140px;
  padding: 20px;
  flex-direction: row;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #ffffff;
`;

export const Image = styled.Image`
  width: 90px;
  height: 100%;
  border-radius: 5px;
  background: #f7f7f7;
`;

export const Information = styled.View`
  flex: 1;
  margin-left: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.View``;

export const Name = styled.Text`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: #696969;
  font-weight: 400;
  font-size: 14px;
`;

export const Price = styled.Text`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
`;
