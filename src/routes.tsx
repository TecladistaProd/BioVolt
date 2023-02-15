import React from 'react';
import { View, Text } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

enableFreeze(true);

const Stack = createNativeStackNavigator();

const Test = () => (
  <View style={{flex: 1, backgroundColor: '#333', alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{ fontSize: 30, color: '#fff' }}>Hello World</Text>
  </View>
)

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;