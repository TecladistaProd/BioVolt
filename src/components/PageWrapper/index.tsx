import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Left from '../../../assets/icons/Left.svg';

import { Container, NavBar, Content, Title } from './styles';

interface IProps {
  children: React.ReactNode;
  hasNav?: boolean;
  hasBack?: boolean;
  title?: string;
}

const PageWrapper: React.FC<IProps> = ({ children, hasNav, hasBack, title }) => {
  return (
    <Container>
      {
        hasNav && (
          <NavBar>
            {hasBack ? (
              <TouchableOpacity>
                <Left width={24} height={24} />
              </TouchableOpacity>
            ) : <View/>}
            <Title>{title}</Title>
            <View/>
          </NavBar>
        )
      }
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default PageWrapper;