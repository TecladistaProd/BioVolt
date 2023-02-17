import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0 32px;
  ${({ theme }) => css`
    background-color: ${theme.colors.pureWhite};
    border-top-width: 1px;
    border-top-color: ${theme.colors.gray_1};
  `}
`;

export const FooterBtn = styled.TouchableOpacity`
  align-items: center;
  color: ${({ theme }) => theme.colors.primarySolid};
`;

export const FooterBtnLabel = styled.Text<{ isSelected?: boolean }>`
  font-size: 10px;
  ${({ theme, isSelected }) => css`
    font-family: "Sora-${isSelected ? 400 : 700}";
    color: ${theme.colors[isSelected ? "primarySolid" : "pureBlack"]};
  `}
`;
