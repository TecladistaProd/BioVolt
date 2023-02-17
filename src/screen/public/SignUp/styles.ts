import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
  text-align: center;
  margin-bottom: 34px;
`;

export const Dash = styled.View`
  height: 5px;
  width: 50px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.gray_1};
  border-radius: 200px;
`;

export const TermsRow = styled.View`
  flex-direction: row;
`;

export const TermsText = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
`;

export const TermsTextBold = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const SignInRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SignInText = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
  text-align: center;
`;

export const SignInLabel = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.pureBlack};
  text-align: center;
`;

export const SignInBtn = styled.TouchableOpacity`
  margin-left: 2px;
  margin-right: 2px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.pureBlack};
`;

export const ErrorTerms = styled.Text`
  color: ${({ theme }) => theme.colors.lightCoral};
  font-size: 11px;
  margin-bottom: 2px;
  margin-top: 2px;
`;
