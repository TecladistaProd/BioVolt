import React from 'react';
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PublicStackParamList } from '@interfaces/screen';

import SignIn from '@screen/public/SignIn';
import SignUp from '@screen/public/SignUp';
import Message from '@screen/public/Message';

enableFreeze(true);

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <PublicStack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="SignIn">
        <PublicStack.Screen name="SignIn" component={SignIn} />
        <PublicStack.Screen name="SignUp" component={SignUp} />
        <PublicStack.Screen name="Message" component={Message} />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;