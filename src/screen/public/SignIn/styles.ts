import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
  text-align: center;
  margin-bottom: 34px;
`;

export const SignupRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SignupText = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
  text-align: center;
`;

export const SignupBtn = styled.TouchableOpacity`
  margin-left: 2px;
  margin-right: 2px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_4};
`;
