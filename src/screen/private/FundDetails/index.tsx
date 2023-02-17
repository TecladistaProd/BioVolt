import React, { useCallback, useMemo, useState } from 'react';
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';

import FooterBar from '@components/FooterBar';
import PageWrapper from '@components/PageWrapper';
import Chart from '@components/Chart';

import { PrivateSSP } from '@interfaces/screen';
import IStoreState from '@interfaces/store';

import { formatCoin } from '@utils/format';

import Up from '@assets/icons/Up.svg';
import Down from '@assets/icons/Down.svg';
import Info from '@assets/icons/Info.svg';
import ChartIcon from '@assets/icons/Chart.svg';

import { 
  TitleCol,
  Title,
  SubTitle,
  TopInfoRow,
  TopInfoCol,
  TopInfoTitle,
  TopInfoSubTitle,
  TopInfoSub,
  ChartContainer,
  FilterRow,
  FilterBtn,
  FilterBtnLabel,
  PageSubTitle,
  StatsRow,
  StatsCol,
  StatsItem,
  StatsTRow,
  StatsTitle,
  StatsInfo,
  Separator,
  Card,
  CardImg,
  CardImgTitle,
  CardText,
  CardTextBtn,
  PortfolioRow,
  TextPortfolio,
  PortRow,
  PortCol,
  LastPInfo,
  LastRetired,
  Note,
  NoteInfo,
  Center,
} from './styles';
import { useFocusEffect } from '@react-navigation/native';
import theme from 'src/style/theme';
import Button from '@components/Button';

const filters = ['1h', '1d', '1w', '1m', '1y', 'All'];

const FundDetails: React.FC<PrivateSSP<'FundDetails'>> = ({ navigation, route }) => {
  const fundDetails = useSelector<IStoreState, IStoreState['funds'][0] | undefined>(state => state.funds.find(i => i.id === route.params.id));
  const percent = useMemo(() => fundDetails ? ((
    (fundDetails?.price_at_close - fundDetails?.price_at_open) / 
    (fundDetails?.price_at_open)) * 100) : 0, [fundDetails]);

  const [bds, setBds] = useState<Array<{ text: string; image: number; title: number }>>([]);

  useFocusEffect(useCallback(() => {
    (async () => {
      const res = await fetch('/api/bds');
      const json = await res.json();

      setBds(json);
    })();
  }, []));

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
        <PageSubTitle>
          Info & Stats
        </PageSubTitle>
        <StatsRow>
          <StatsCol>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>AUM</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                ${formatCoin(fundDetails?.aum)}m
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>Vintage Range</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                {fundDetails?.vr}
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>Price at Close</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                ${formatCoin(fundDetails?.price_at_close)}
              </StatsInfo>
            </StatsItem>
          </StatsCol>
          <StatsCol>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>Issue Date</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                {format(fundDetails?.issue_date || Date.now(), "dd'/'MM'/'yyyy")}
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>TER</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                {formatCoin(fundDetails?.ter)}%
              </StatsInfo>
            </StatsItem>
            <StatsItem>
              <StatsTRow>
                <StatsTitle>Price at Open</StatsTitle>
                <Info width={14} height={14}/>
              </StatsTRow>
              <StatsInfo>
                ${formatCoin(fundDetails?.price_at_open)}
              </StatsInfo>
            </StatsItem>
          </StatsCol>
        </StatsRow>
        <PageSubTitle>
          Fund Breakdown
        </PageSubTitle>
        <FlatList
          data={bds}
          renderItem={({item}) => (
            <Card>
              <CardImg
                resizeMethod='auto'
                resizeMode='cover'
                source={item.image}
              />
              <CardImgTitle
                resizeMethod='auto'
                resizeMode='cover'
                source={item.title}
              />
              <CardText>
                {item.text}
              </CardText>
              <TouchableOpacity>
                <CardTextBtn>
                  Read more
                </CardTextBtn>
              </TouchableOpacity>
            </Card>
          )}
          keyExtractor={item => item.text}
          ItemSeparatorComponent={() => <Separator />}
          horizontal
        />
        <PortfolioRow>
          <ChartIcon
            width={24}
            height={24}
            fill={theme.colors.pureBlack}
          />
          <TextPortfolio>
            Your Portfolio
          </TextPortfolio>
        </PortfolioRow>
        <PortRow mb={20}>
          <PortCol>
            <TopInfoTitle>
              {`${fundDetails?.credits} credits`}
            </TopInfoTitle>
            <TopInfoSub>
              <Up width={14} height={14}/>
              <TopInfoSubTitle>
                {8.41}%
              </TopInfoSubTitle>
            </TopInfoSub>
          </PortCol>
          <PortCol alignLeft>
            <TopInfoTitle>
              ${formatCoin((fundDetails?.price_at_close || 0) * (fundDetails?.credits || 0))}
            </TopInfoTitle>
            <LastPInfo>
              {
                !!fundDetails && `Last purchase ${formatDistance(fundDetails.last_purchase, Date.now(), { addSuffix: true })}`
              }
            </LastPInfo>
            {/* formatDistance(
                new Date('2020-12-04T15:39:40.000Z'),
                new Date(),
              { addSuffix: true }
            )  */}
          </PortCol>
        </PortRow>
        <PortRow mb={15}>
          <Button bColor='gray_3' width='45%' bgColor='pureWhite' color='primarySolid' onPress={() => {}}>
            Sell
          </Button>
          <Button width='45%' bgColor='secondarySolid' color='pureWhite' onPress={() => {}}>
            Retire credits
          </Button>
        </PortRow>
        <LastRetired>
          You’ve previously retired 28 credits of this asset
        </LastRetired>
        <Note>
          <NoteInfo>
            Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. 
          </NoteInfo>
          <NoteInfo>
            The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
          </NoteInfo>
        </Note>
        <Center>
          <Button width='95%' bgColor='primarySolid' color='pureWhite' onPress={() => {}}>
            Buy
          </Button>
        </Center>
      </PageWrapper>
      <FooterBar {...{navigation, route}} />
    </>
  );
}

export default FundDetails;