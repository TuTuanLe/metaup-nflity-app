import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProp} from '@react-navigation/native';
import LoginPage from '@screens/Auth/LoginScreen';
import SignupScreen from '@screens/Auth/SignupScreen';
import PasswordScreen from '@screens/Auth/PasswordScreen';
import VerifyCodeScreen from '@screens/Auth/VerifyCodeScreen';
import WalletScreen from '@screens/Auth/WalletScreen';
import GetStartingScreen from '@screens/Auth/GetStartingScreen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const Auth = createNativeStackNavigator();

export default function AuthNavigation({navigation}: RouterProps) {
  return (
    <Auth.Navigator initialRouteName="SIGNUP">
      <Auth.Screen
        options={{headerShown: false}}
        name="LOGIN"
        component={LoginPage}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="SIGNUP"
        component={SignupScreen}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="PASSWORD"
        component={PasswordScreen}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="VERIFYCODE"
        component={VerifyCodeScreen}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="WALLET"
        component={WalletScreen}
      />
      <Auth.Screen
        options={{headerShown: false}}
        name="GET_STARTING"
        component={GetStartingScreen}
      />
    </Auth.Navigator>
  );
}
