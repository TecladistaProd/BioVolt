import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';


import * as Font from 'expo-font';
import theme from './style/theme';

import './services/Server'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

let customFonts = {
  'Sora-100': require('../assets/fonts/Sora-Thin.ttf'),
  'Sora-200': require('../assets/fonts/Sora-ExtraLight.ttf'),
  'Sora-300': require('../assets/fonts/Sora-Light.ttf'),
  'Sora-400': require('../assets/fonts/Sora-Regular.ttf'),
  'Sora-500': require('../assets/fonts/Sora-Medium.ttf'),
  'Sora-600': require('../assets/fonts/Sora-SemiBold.ttf'),
  'Sora-700': require('../assets/fonts/Sora-Bold.ttf'),
  'Sora-800': require('../assets/fonts/Sora-ExtraBold.ttf'),
};

class Index extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Container>
              <StatusBar  style='auto'/>
            </Container>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Index

const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.pureWhite };
  align-items: center;
  justify-content: center;
`;