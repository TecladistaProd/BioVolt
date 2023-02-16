import theme from "src/style/theme";
import styled, { css } from "styled-components/native";

export interface ICProps {
  bgColor: keyof typeof theme.colors;
  mt?: string;
  mb?: string;
}

export const Container = styled.TouchableOpacity<ICProps>`
  width: 100%;
  height: 58px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${({ theme, bgColor, mb, mt }) => css`
    background-color: ${theme.colors[bgColor]};
    border-radius: ${theme.radius.sm};
    margin-top: ${mt || 0};
    margin-bottom: ${mb || 0};
  `}
`;

export interface ILProps {
  color: keyof typeof theme.colors;
}

export const Label = styled.Text<ILProps>`
  font-size: 16px;
  font-family: "Sitara";
  font-weight: 400;
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
  `};
`;
