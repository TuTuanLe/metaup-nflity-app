import React from 'react';
import {View, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import {Theme} from '@common/theme';
import Icons from '@assets/icon';
import {Text} from 'react-native-svg';

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

function CustomTabBar({state, descriptors, navigation}: CustomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.barStyle, styles.shadowProp]}>
        {state.routes.map((route: {name: any; key: any}, index: Number) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            const {options} = descriptors[route.key];
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              accessibilityState={isFocused ? {selected: true} : {}}
              key={`tab_${index}`}>
              {route.name === 'StorageNavigation' &&
                (isFocused ? (
                  <View style={styles.activeTab}>
                    <Icons.IconStorage fill={'#F3F3F3'} />
                  </View>
                ) : (
                  <View style={styles.Tab}>
                    <Icons.IconStorage fill={'#007AFF'} />
                  </View>
                ))}
              {route.name === 'ExploreNavigation' &&
                (isFocused ? (
                  <View style={styles.activeTab}>
                    <Icons.IconExplore fill={'#F3F3F3'} />
                  </View>
                ) : (
                  <View style={styles.Tab}>
                    <Icons.IconExplore fill={'#007AFF'} />
                  </View>
                ))}
              {route.name === 'ProfileNavigation' &&
                (isFocused ? (
                  <>
                    <StatusBar
                      barStyle="light-content"
                      backgroundColor={Theme.colors.transparent}
                      translucent={true}
                    />
                    <View style={styles.activeTab}>
                      <Icons.IconProfile fill={'#F3F3F3'} />
                    </View>
                  </>
                ) : (
                  <View style={styles.Tab}>
                    <Icons.IconProfile fill={'#007AFF'} />
                  </View>
                ))}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default CustomTabBar;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 44,
  },
  barStyle: {
    width: 360,
    height: 40,

    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Theme.colors.writeBlur,
  },
  shadowProp: {
    elevation: 1,
  },
  activeTab: {
    borderRadius: 15,
    width: 110,
    height: 30,
    backgroundColor: '#007AFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Tab: {
    width: 110,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
