import React from 'react';

import { Container, FooterBtn, FooterBtnLabel } from './styles';

import Home from '@assets/icons/Home.svg';
import Trade from '@assets/icons/Trade.svg';
import Chart from '@assets/icons/Chart.svg';
import theme from 'src/style/theme';
import { PrivateSSP } from '@interfaces/screen';

interface IProps {
  route: PrivateSSP<any>['route']
}

const FooterBar: React.FC<IProps> = ({ route }) => {
  return (
    <Container>
      <FooterBtn>
        <Home fill={theme.colors[route.name === 'Home' ? 'primarySolid' : 'pureBlack']} width={24} height={24} />
        <FooterBtnLabel isSelected={route.name === 'Home'}>
          Home
        </FooterBtnLabel>
      </FooterBtn>
      <FooterBtn>
        <Trade fill={theme.colors[route.name === 'FundDetails' ? 'primarySolid' : 'pureBlack']} width={24} height={24} />
        <FooterBtnLabel isSelected={route.name === 'FundDetails'}>
          Trade
        </FooterBtnLabel>
      </FooterBtn>
      <FooterBtn>
        <Chart fill={theme.colors.pureBlack} width={24} height={24} />
        <FooterBtnLabel>
          Portfolio
        </FooterBtnLabel>
      </FooterBtn>
    </Container>
  );
}

export default FooterBar;