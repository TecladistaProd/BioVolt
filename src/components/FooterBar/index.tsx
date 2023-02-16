import React, { useCallback } from 'react';

import { Container, FooterBtn, FooterBtnLabel } from './styles';

import Home from '@assets/icons/Home.svg';
import Trade from '@assets/icons/Trade.svg';
import Chart from '@assets/icons/Chart.svg';

import { PrivateSSP, PrivateStackParamList } from '@interfaces/screen';

import theme from 'src/style/theme';

interface IProps {
  route: PrivateSSP<'Home' | 'FundDetails' | 'Portfolio' | 'Trade'>['route'];
  navigation: PrivateSSP<'Home' | 'FundDetails' | 'Portfolio' | 'Trade'>['navigation'];
}

const FooterBar: React.FC<IProps> = ({ route, navigation }) => {
  const handleGoTo = useCallback((page: keyof PrivateStackParamList) => {
    if(route.name !== page) {
      navigation.navigate(page);
    }
  }, [route, navigation]);

  return (
    <Container>
      <FooterBtn onPress={handleGoTo.bind(null, 'Home')}>
        <Home fill={theme.colors[route.name === 'Home' ? 'primarySolid' : 'pureBlack']} width={24} height={24} />
        <FooterBtnLabel isSelected={route.name === 'Home'}>
          Home
        </FooterBtnLabel>
      </FooterBtn>
      <FooterBtn onPress={handleGoTo.bind(null, 'Trade')}>
        <Trade fill={theme.colors[['FundDetails', 'Trade'].includes(route.name) ? 'primarySolid' : 'pureBlack']} width={24} height={24} />
        <FooterBtnLabel isSelected={['FundDetails', 'Trade'].includes(route.name)}>
          Trade
        </FooterBtnLabel>
      </FooterBtn>
      <FooterBtn onPress={handleGoTo.bind(null, 'Portfolio')}>
        <Chart fill={theme.colors[route.name === 'Portfolio' ? 'primarySolid' : 'pureBlack']} width={24} height={24} />
        <FooterBtnLabel isSelected={route.name === 'Portfolio'}>
          Portfolio
        </FooterBtnLabel>
      </FooterBtn>
    </Container>
  );
}

export default FooterBar;