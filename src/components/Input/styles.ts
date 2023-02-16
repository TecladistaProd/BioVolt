import styled, { css } from "styled-components/native";

export const Container = styled.View<{ mb?: string }>`
  width: 100%;
  margin-bottom: ${({ mb }) => mb || 0};
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 11px;
  font-family: "Sintony";
  color: ${({ theme }) => theme.colors.gray_4};
`;

export const FieldContainer = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.pureBlack};
    background-color: ${theme.colors.gray_1};
    border-radius: ${theme.radius.sm};
  `}
`;

export const TextField = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_3,
}))`
  width: 100%;
  height: 48px;
  border: none;
  padding: 15px 10px;
  font-size: 14px;
  font-family: "Sora-400";
`;

export const EyeBtn = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.lightCoral};
    font-size: 11px;
    margin-bottom: 2px;
    margin-top: 2px;
  `}
`;
