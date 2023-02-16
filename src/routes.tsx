import React from 'react';
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { PrivateStackParamList, PublicStackParamList } from '@interfaces/screen';
import IStoreState from '@interfaces/store';

import SignIn from '@screen/public/SignIn';
import SignUp from '@screen/public/SignUp';
import Message from '@screen/public/Message';
import Home from '@screen/private/Home';
import VoidScreen from '@screen/private/VoidScreen/indext';

enableFreeze(true);

const PublicStack = createNativeStackNavigator<PublicStackParamList>();
const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();

const Routes: React.FC = () => {
  const isLogged = useSelector<IStoreState>((state) => !!(state.user.token));
  return (
    <NavigationContainer>
      {
        !isLogged ? (
          <PublicStack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="SignIn">
            <PublicStack.Screen name="SignIn" component={SignIn} />
            <PublicStack.Screen name="SignUp" component={SignUp} />
            <PublicStack.Screen name="Message" component={Message} />
          </PublicStack.Navigator>
        )
        : (
          <PrivateStack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>
            <PrivateStack.Screen name="Home" component={Home} />
            <PrivateStack.Screen name="Trade" component={VoidScreen} />
            <PrivateStack.Screen name="Portfolio" component={VoidScreen} />
          </PrivateStack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default Routes;