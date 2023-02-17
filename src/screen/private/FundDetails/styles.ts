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

export const PageSubTitle = styled.Text`
  font-size: 17px;
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
  margin-bottom: 10px;
`;

export const StatsRow = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 31px;
`;

export const StatsCol = styled.View`
  width: 50%;
  align-items: flex-start;
`;

export const StatsItem = styled.View`
  margin-bottom: 9px;
`;

export const StatsTRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StatsTitle = styled.Text`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
  margin-right: 2px;
`;

export const StatsInfo = styled.Text`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const Separator = styled.View`
  width: 15px;
`;

export const Card = styled.View`
  width: 220px;
  height: 280px;
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
`;

export const CardImg = styled.Image`
  width: 220px;
  height: 106px;
  margin-bottom: 15px;
`;

export const CardImgTitle = styled.Image`
  width: 80px;
  height: 18.46px;
  margin-bottom: 10.54px;
  margin-left: 13px;
`;

export const CardText = styled.Text`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.pureBlack};
  margin-bottom: 10px;
  margin-left: 13px;
`;

export const CardTextBtn = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.pureBlack};
  text-decoration: underline;
  margin-left: 13px;
`;

export const PortfolioRow = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  margin-top: 62px;
  margin-bottom: 20px;
`;

export const TextPortfolio = styled.Text`
  font-size: 17px;
  font-family: "Sora-600";
  color: ${({ theme }) => theme.colors.pureBlack};
`;

export const PortRow = styled.View<{ mb: number }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ mb }) => mb}px;
`;

export const PortCol = styled.View<{ alignLeft?: boolean }>`
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-end" : "flex-start")};
`;

export const LastPInfo = styled.Text`
  font-size: 14px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
`;

export const LastRetired = styled.Text`
  font-size: 11px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
  margin-bottom: 40px;
`;

export const Note = styled.View`
  width: 100%;
  height: 130px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const NoteInfo = styled.Text`
  font-size: 12px;
  font-family: "Sora-400";
  color: ${({ theme }) => theme.colors.gray_4};
`;

export const Center = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

// export const PortRow = styled.View`
//   width: 100%;
//   flex-direction: row;
// `;
