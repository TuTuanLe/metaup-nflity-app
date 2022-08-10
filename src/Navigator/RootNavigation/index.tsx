import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from '../AuthNavigation';
import TabNavigation from '../TabNavigation';
import CommonNavigation from '../CommonNavigation';

const Root = createNativeStackNavigator();
const option_default = {headerShown: false};
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="AUTH">
        <Root.Screen
          name="AUTH"
          component={AuthNavigation}
          options={option_default}
        />
        <Root.Screen
          name="TAB"
          component={TabNavigation}
          options={option_default}
        />
        <Root.Screen
          name="COMMON"
          component={CommonNavigation}
          options={option_default}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
