import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Left from '../../../assets/icons/Left.svg';

import { Container, NavBar, Content, Title, CenterView } from './styles';

interface IProps {
  children: React.ReactNode;
  hasNav?: boolean;
  hasBack?: boolean;
  title?: React.ReactNode;
}

const PageWrapper: React.FC<IProps> = ({ children, hasNav, hasBack, title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      {
        hasNav && (
          <NavBar>
            {hasBack ? (
              <TouchableOpacity onPress={navigation.goBack}>
                <Left width={24} height={24} />
              </TouchableOpacity>
            ) : <View/>}
            {
              typeof title === 'string' && <Title>{title}</Title>
            }
            {
              typeof title !== 'string' && (
                <CenterView>
                  {title}
                </CenterView>
              )
            }
            <View/>
          </NavBar>
        )
      }
      <Content {...{hasNav}}>
        {children}
      </Content>
    </Container>
  );
}

export default PageWrapper;