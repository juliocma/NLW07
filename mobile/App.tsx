import React from 'react';
import { View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/home';
import { styles } from './src/screens/home/styles';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
      <StatusBar style="light" />
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
        <View style={styles.container}>
          <Home />
        </View>
      )}
    </>
  );
}
