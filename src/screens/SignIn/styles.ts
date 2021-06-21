import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f7f7;
`;

export const Margin = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333333;
  font-weight: 400;
`;

export const Input = styled.TextInput`
  background: #ffffff;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #EEE;
  color: #333333;
  font-weight: 300;
`;

export const Redirect = styled.TouchableOpacity``;

export const RedirectText = styled.Text`
  font-size: 16px;
  color: #333333;
  font-weight: 400;
`;

export const Strong = styled.Text`
  color: #2D9CDB;
  font-weight: 500;
`;
