import React from 'react';

import FooterBar from '@components/FooterBar';
import PageWrapper from '@components/PageWrapper';

import { PrivateSSP } from '@interfaces/screen';

import { NavBar } from './styles';

const Home: React.FC<PrivateSSP<'Home'>> = () => {
  return (
    <PageWrapper>
      <NavBar>
      </NavBar>
      <FooterBar/>
    </PageWrapper>
  );
}

export default Home;