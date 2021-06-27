import styled from 'styled-components/native';

export const Container = styled.Modal`
  flex: 1;
  background-color: #f7f7f7;
`;

export const Margin = styled.SafeAreaView`
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  margin: 25px 0;
`;

export const CloseButton = styled.TouchableOpacity``;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: #2D9CDB;
`;

export const Information = styled.View`
  margin-top: 25px;
`;

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

export const Button = styled.TouchableOpacity`
  margin-top: 25px;
  background: #2D9CDB;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 400;
`;
