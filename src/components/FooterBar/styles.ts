import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.pureWhite};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray_1};
  `}
`;

export const Text = styled.Text``;
