import styled, { css } from "styled-components/native";

export const TitleCol = styled.View`
  align-items: center;
  margin: 6px 0;
`;

export const Title = styled.Text`
  font-family: "Sora-600";
  font-size: 17px;
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const SubTitle = styled.Text`
  font-family: "Sora-400";
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_5};
`;

export const TopInfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 44px;
`;

export const TopInfoCol = styled.View``;

export const TopInfoTitle = styled.Text`
  font-size: 24px;
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const TopInfoSub = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TopInfoSubTitle = styled.Text<{ isNegative?: boolean }>`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme, isNegative }) =>
    theme.colors[isNegative ? "lightCoral" : "secondarySolid"]};
`;

export const ChartContainer = styled.View`
  min-width: 100%;
  margin-left: -20px;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

export const FilterBtn = styled.TouchableOpacity<{ isActive?: boolean }>`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  ${({ theme, isActive }) => css`
    border-radius: ${theme.radius.sm};
    background-color: ${theme.colors[isActive ? "primaryLight" : "pureWhite"]};
  `}
`;

export const FilterBtnLabel = styled.Text<{ isActive?: boolean }>`
  font-size: 15px;
  font-family: "Sora-500";
  ${({ theme, isActive }) => css`
    color: ${theme.colors[isActive ? "primarySolid" : "gray_4"]};
  `}
`;
