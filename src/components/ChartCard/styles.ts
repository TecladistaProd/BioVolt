import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  min-width: 140px;
  min-height: 145px;
  padding: 12px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_2};
    border-radius: ${theme.radius.sm};
  `}
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: "Sora-600";
  margin: 5px 0 14px;
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const BottomInfo = styled.View`
  width: 100%;
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
`;

export const BottomValue = styled.Text`
  font-size: 14px;
  font-family: "Sora-400";
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const BottomPercent = styled.Text<{ isNegative: boolean }>`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme, isNegative }) =>
    theme.colors[isNegative ? "lightCoral" : "secondarySolid"]};
`;
