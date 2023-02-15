import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pureWhite};
`;

export const NavBar = styled.View`
  height: 51px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  ${({ theme }) => css`
    background-color: ${theme.colors.pureWhite};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray_1};
  `}
`;

export const Content = styled.View<{ hasNav?: boolean }>`
  flex: 1;
  ${({ theme, hasNav }) => css`
    background-color: ${theme.colors.pureWhite};
    padding-top: ${!!hasNav ? 20 : 0}px;
    padding-horizontal: 20px;
  `}
`;

export const Title = styled.Text`
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
  font-size: 17px;
`;
