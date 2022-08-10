import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icons from '@assets/icon';
import styles from './styles';

interface HeaderProps {
  navigation: NavigationProp<any, any>;
  title?: String;
}
const HeaderPage = ({title, navigation}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icons.ChevronLeft />
      </TouchableOpacity>
      {title && <Text style={styles.titlePage}>{title}</Text>}
    </View>
  );
};

export default HeaderPage;
