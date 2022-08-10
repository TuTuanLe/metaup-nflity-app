import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Svg, {Polygon, Text} from 'react-native-svg';
import {Theme} from '@common/theme';
function Loading() {
  return (
    <View
      style={{
        backgroundColor: '#0008',
        top: 0,
        left: 0,
        zIndex: 9,
        ...styles.loading,
      }}>
      <Svg style={styles.svg} width="205" height="250" viewBox="0 0 40 50">
        <Polygon
          strokeWidth="1"
          stroke={Theme.colors.white}
          fill="none"
          points="20,1 40,40 1,40"></Polygon>
        <Text fill={Theme.colors.white} x="5" y="47">
          Loading
        </Text>
      </Svg>
    </View>
  );
}

export default Loading;
