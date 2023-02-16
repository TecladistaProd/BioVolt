import styled, { css } from "styled-components/native";
import ChevronDownIcon from "@assets/icons/ChevronDown.svg";

export const NavBar = styled.View`
  padding: 12px 0;
  ${({ theme }) => css`
    background-color: ${theme.colors.pureWhite};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray_1};
  `}
  margin-bottom: 20px;
`;

export const NavRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavTitle = styled.Text`
  font-size: 14px;
  font-family: "Sora-600";
  margin-right: 2px;
  ${({ theme }) => css`
    color: ${theme.colors.pureBlack};
  `}
`;

export const ChevronDown = styled(ChevronDownIcon)`
  margin-top: 4px;
`;

export const NavSubtitle = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  margin-top: 16px;
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.colors.pureBlack};
  `}
`;

export const NavValueView = styled.View`
  align-items: flex-end;
  flex-direction: row;
`;

export const NavValue1 = styled.Text`
  font-size: 24px;
  font-family: 'Sora-600'
  margin-right: 2px;
  ${({ theme }) => css`
    color: ${theme.colors.pureBlack};
  `}
`;

export const NavValue2 = styled.Text`
  font-size: 14px;
  font-family: "Sora-400"
    ${({ theme }) => css`
      color: ${theme.colors.secondarySolid};
    `};
`;

export const NavBadget = styled.View`
  padding: 9px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryLight};
    border-radius: ${theme.radius.sm};
  `};
`;

export const NavBadgetTitle = styled.Text`
  font-size: 12px;
  font-family: "Sora-600";
  margin-left: 6px;
  ${({ theme }) => css`
    color: ${theme.colors.primarySolid};
  `};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Sora-600";
  margin-bottom: 20px;
  ${({ theme }) => css`
    color: ${theme.colors.pureBlack};
  `};
`;
