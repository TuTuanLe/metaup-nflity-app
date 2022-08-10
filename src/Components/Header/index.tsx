import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from '@assets/icon';
import styles from './styles';
interface HeaderProps {
  navigation?: NavigationProp<any, any>;
  title?: String;
  des?: String;
  search?: any;
  hideSearch?: boolean;
}

function Header({navigation, title, des, search, hideSearch}: HeaderProps) {
  return (
    <View style={{elevation: 100, zIndex: 100}}>
      <View style={styles.header}>
        <View style={styles.inLine}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.des}>{des}</Text>
        </View>
        <View style={styles.inLine}>
          {!hideSearch && (
            <TouchableOpacity style={styles.icon} onPress={search}>
              <Icons.IconSearch />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Icons.IconMenu fill={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Header;
