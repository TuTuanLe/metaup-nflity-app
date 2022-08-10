import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StorageScreen from '@screens/Storage/StorageScreen';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function StorageNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StorageScreen"
        component={StorageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StorageNavigation;
