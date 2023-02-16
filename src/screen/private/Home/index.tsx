import React from 'react';
import { TouchableOpacity } from 'react-native';

import FooterBar from '@components/FooterBar';
import PageWrapper from '@components/PageWrapper';

import { PrivateSSP } from '@interfaces/screen';

import User from '@assets/icons/User.svg';
import Bell from '@assets/icons/Bell.svg';
import Up from '@assets/icons/Up.svg';
import Coin from '@assets/icons/Coin.svg';

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
  Title
} from './styles';

const Home: React.FC<PrivateSSP<'Home'>> = () => {
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
                Account: $1,457.23
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
                $1,245.23
              </NavValue1>
              <Up width={14} height={14}/>
              <NavValue2>
                31.82%
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
      </PageWrapper>
      <FooterBar/>
    </>
  );
}

export default Home;