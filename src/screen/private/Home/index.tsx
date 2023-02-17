import React, { useCallback } from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import FooterBar from '@components/FooterBar';
import PageWrapper from '@components/PageWrapper';
import ChartCard from '@components/ChartCard';

import { PrivateSSP } from '@interfaces/screen';
import IStoreState from '@interfaces/store';

import User from '@assets/icons/User.svg';
import Bell from '@assets/icons/Bell.svg';
import Up from '@assets/icons/Up.svg';
import Down from '@assets/icons/Down.svg';

import { formatCoin } from '@utils/format';

import { GET_FUNDS } from '@store/types';

import {
  NavBar,
  NavRow,
  NavTitle,
  ChevronDown,
  NavSubtitle,
  NavValueView,
  NavValue1,
  NavValue2,
  NavBadget,
  NavBadgetTitle,
  Title,
  Coin,
  FundsSeparator,
  Banner,
  BannerTitle,
  BannerSubTitle,
  BannerImage,
  BannerCol,
  Row,
  PlaceholderCard,
  PlaceholderText
} from './styles';

const Home: React.FC<PrivateSSP<'Home'>> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { id: userId, token } = useSelector<IStoreState, { id: string, token: string }>
    (state => state.user);

  const { fundsInfo } = useSelector<IStoreState, any>(state => {
    const funds = state.funds.map(i => {
      const totalOpen = i.price_at_open * i.credits;
      const totalClose = i.price_at_close * i.credits;
      return {
        id: i.id,
        type: i.type,
        totalOpen: formatCoin(totalOpen),
        totalClose: formatCoin(totalClose),
        percent: ((totalClose - totalOpen) / totalOpen) * 100
      }
    });
    const fundsOpen = (funds.reduce((acc, i) => acc + 
      parseFloat(i.totalOpen.replace(',', '')), 0) || 0);
    const fundsClose = (funds.reduce((acc, i) => acc + 
      parseFloat(i.totalClose.replace(',', '')), 0) || 0);
    return {
      id: state.user.id,
      token: state.user.token,
      fundsInfo: {
        funds: funds,
        open: formatCoin(fundsOpen),
        close: formatCoin(fundsClose),
        percent: ((fundsClose - fundsOpen) / fundsOpen) * 100
      }
    }
  });

  useFocusEffect(useCallback(() => {
    (async () => {
      const res = await fetch(`/api/funds?id=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'GET'
      });
      const json = await res.json()
      dispatch({ type: GET_FUNDS, payload: json })
    })()
  }, [userId, token, dispatch]));

  return (
    <>
      <PageWrapper>
        <NavBar>
          <NavRow>
            <TouchableOpacity>
              <User width={32} height={32} />
            </TouchableOpacity>
            <NavRow>
              <NavTitle>
                Account: ${fundsInfo.close}
              </NavTitle>
              <TouchableOpacity>
                <ChevronDown width={12} height={12} />
              </TouchableOpacity>
            </NavRow>
            <TouchableOpacity>
              <Bell width={24} height={24} />
            </TouchableOpacity>
          </NavRow>
          <NavSubtitle>
            Portfolio
          </NavSubtitle>
          <NavRow>
            <NavValueView>
              <NavValue1>
                ${fundsInfo.close}
              </NavValue1>
              {
                fundsInfo.percent > 0 ? (
                  <Up width={14} height={14}/>
                ) : (
                  <Down width={14} height={14}/>
                )
              }
              <NavValue2 isNegative={fundsInfo.percent <= 0}>
                {Math.abs(fundsInfo.percent).toFixed(2)}%
              </NavValue2>
            </NavValueView>
            <NavBadget>
              <Coin width={14} height={14} />
              <NavBadgetTitle>
                Earn Rewards
              </NavBadgetTitle>
            </NavBadget>
          </NavRow>
        </NavBar>
        <Title>
          Funds
        </Title>
        <FlatList
          data={fundsInfo.funds}
          renderItem={({item}) => <ChartCard {...item} navigation={navigation} />}
          keyExtractor={item => item.type}
          ItemSeparatorComponent={() => <FundsSeparator />}
          horizontal
        />
        <Banner>
          <BannerCol>
            <BannerTitle>
              Learn more about carbon credits
            </BannerTitle>
            <BannerSubTitle>
              Check out our top tips!
            </BannerSubTitle>
          </BannerCol>
          <BannerImage
            source={require('@assets/images/bs.png')}
            resizeMode='cover'
            resizeMethod='auto'
          />
        </Banner>
        <Row>
          <PlaceholderCard>
            <PlaceholderText>
              Why should you invest here?
            </PlaceholderText>
          </PlaceholderCard>
          <PlaceholderCard/>
        </Row>
      </PageWrapper>
      <FooterBar navigation={navigation} route={route}/>
    </>
  );
}

export default Home;