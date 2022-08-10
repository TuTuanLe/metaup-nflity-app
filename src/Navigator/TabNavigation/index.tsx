import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreNavigation from '@Navigator/ExploreNavigation';
import StorageNavigation from '@Navigator/StorageNavigation';
import ProfileNavigation from '@Navigator/ProfileNavigation';
import CustomTabBar from './CustomTabBar';
import {View} from 'react-native';
import {Text} from 'react-native-svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="ExploreNavigation"
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="StorageNavigation"
        component={StorageNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ExploreNavigation"
        component={ExploreNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
