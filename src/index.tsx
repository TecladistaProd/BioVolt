import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

import './services/Server'

import theme from './style/theme';

import store from './store';

import Routes from './routes';

let customFonts = {
  'Sora-100': require('../assets/fonts/Sora-Thin.ttf'),
  'Sora-200': require('../assets/fonts/Sora-ExtraLight.ttf'),
  'Sora-300': require('../assets/fonts/Sora-Light.ttf'),
  'Sora-400': require('../assets/fonts/Sora-Regular.ttf'),
  'Sora-500': require('../assets/fonts/Sora-Medium.ttf'),
  'Sora-600': require('../assets/fonts/Sora-SemiBold.ttf'),
  'Sora-700': require('../assets/fonts/Sora-Bold.ttf'),
  'Sora-800': require('../assets/fonts/Sora-ExtraBold.ttf'),
  'Sintony': require('../assets/fonts/Sintony-Regular.ttf'),
  'Sitara': require('../assets/fonts/Sitara-Regular.ttf'),
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
          <>
            <StatusBar style='auto'/>
            <Routes/>
            <Toast/>
          </>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Index