import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #ffffff;
`;

export const Name = styled.Text`
  color: #333333;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CreatedAt = styled.Text`
  color: #696969;
  font-weight: 400;
  font-size: 14px;
`;

export const Line = styled.View<any>`
  background-color: #DDD;
  width: 100%;
  height: 0.5px;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

export const StatusContainer = styled.View`
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;

export const StatusText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

export const ProductsList = styled.View``;

export const ProductDetail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ProductAmount = styled.View`
  border-radius: 2px;
  background-color: #F4F4F4;
  width: 15px;
  height: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Amount = styled.Text`
  color: #696969;
  font-weight: 400;
  font-size: 12px;
`;

export const ProductName = styled.Text`
  color: #696969;
  font-weight: 400;
  font-size: 14px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<any>`
  width: 45%;
  opacity: ${(props) => props.opacity || 1};
`;

export const ButtonText = styled.Text`
  color: #2D9CDB;
  text-align: center;
  font-weight: 600;
`;
