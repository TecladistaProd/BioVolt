import React, { useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

import FooterBar from '@components/FooterBar';
import PageWrapper from '@components/PageWrapper';

import { PrivateSSP } from '@interfaces/screen';
import IStoreState from '@interfaces/store';

import { formatCoin } from '@utils/format';

import Up from '@assets/icons/Up.svg';
import Down from '@assets/icons/Down.svg';

import { TitleCol, Title, SubTitle, TopInfoRow, TopInfoCol, TopInfoTitle, TopInfoSubTitle, TopInfoSub, ChartContainer, FilterRow, FilterBtn, FilterBtnLabel } from './styles';
import Chart from '@components/Chart';

const filters = ['1h', '1d', '1w', '1m', '1y', 'All'];

const FundDetails: React.FC<PrivateSSP<'FundDetails'>> = ({ navigation, route }) => {
  const fundDetails = useSelector<IStoreState, IStoreState['funds'][0] | undefined>(state => state.funds.find(i => i.id === route.params.id));
  const percent = useMemo(() => fundDetails ? ((
    (fundDetails?.price_at_close - fundDetails?.price_at_open) / 
    (fundDetails?.price_at_open)) * 100) : 0, [fundDetails])
  return (
    <>
      <PageWrapper hasBack hasNav title={
        <TitleCol>
          <Title>
            {fundDetails?.type}
          </Title>
          <SubTitle>
            {`${fundDetails?.type.charAt(0)}FND`}
          </SubTitle>
        </TitleCol>
      }>
        <TopInfoRow>
          <TopInfoCol>
            <TopInfoTitle>
              ${formatCoin(fundDetails?.price_at_close || 0)}
            </TopInfoTitle>
            <TopInfoSub>
              {
                percent > 0 ? (
                  <Up width={14} height={14}/>
                ) : (
                  <Down width={14} height={14}/>
                )
              }
              <TopInfoSubTitle isNegative={percent <= 0}>
                {Math.abs(percent).toFixed(2)}%
              </TopInfoSubTitle>
            </TopInfoSub>
          </TopInfoCol>
          <TopInfoTitle>
            {format(Date.now(), 'yyyy')}
          </TopInfoTitle>
        </TopInfoRow>
        {
          !!fundDetails && (
            <ChartContainer>
              <Chart
                open={fundDetails?.price_at_open}
                close={fundDetails?.price_at_close}
                width={Dimensions.get('window').width}
                height={153}
              />
            </ChartContainer>
          )
        }
        <FilterRow>
          {
            filters.map((i, k) => (
              <FilterBtn key={k} isActive={k === 1}>
                <FilterBtnLabel isActive={k === 1}>
                  {i}
                </FilterBtnLabel>
              </FilterBtn>
            ))
          }
        </FilterRow>
      </PageWrapper>
      <FooterBar {...{navigation, route}} />
    </>
  );
}

export default FundDetails;