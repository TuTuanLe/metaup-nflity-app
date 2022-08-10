import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import ProfileScreen from '@screens/Profile/ProfileScreen';
import EditProfileScreen from '@screens/Profile/EditProfileScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2C6BED'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
  headerTitleAlign: 'center',
};

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
function ProfileNavigation({navigation}: RouterProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
