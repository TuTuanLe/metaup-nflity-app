import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens, enableFreeze} from 'react-native-screens';
import RootNavigation from './Navigator/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';
enableScreens(true);
enableFreeze(true);

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" translucent={true} />
      <SafeAreaView style={styles.droidSafeArea}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? -25 : 0,
  },
});
