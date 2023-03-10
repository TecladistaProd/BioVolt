import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primarySolid};
`;

export const Text = styled.Text`
  font-size: 40px;
  font-family: "Sora-800";
  color: ${({ theme }) => theme.colors.pureWhite};
`;
