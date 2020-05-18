import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  top: 60px;
  width: 300px;
  height: 60px;
  background: #3e94ff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
`;
