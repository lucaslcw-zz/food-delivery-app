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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #333333;
  font-weight: 500;
`;

export const ClearButton = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
`;

export const ClearButtonText = styled.Text`
  color: #2D9CDB;
  font-weight: 400;
  font-size: 16px;
`;

export const Card = styled.View`
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

export const Button = styled.TouchableOpacity`
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

export const LoadingButton = styled.TouchableOpacity`
  background: #2D9CDB;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
`;
