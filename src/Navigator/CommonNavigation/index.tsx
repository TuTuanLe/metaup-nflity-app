import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Common = createNativeStackNavigator();

export default function CommonNavigation() {
  return (
    <Common.Navigator>
      <Common.Screen name="Sample" component={() => <View />} />
    </Common.Navigator>
  );
}