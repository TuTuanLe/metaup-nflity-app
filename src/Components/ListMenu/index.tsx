import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Icons from '@assets/icon';
import styles from './styles';
import {Theme} from '@common/theme';

interface ListMenuProps {
  onPress: any;
  tab: String;
}

function ListMenu({onPress, tab}: ListMenuProps) {
  const [active, setActive] = React.useState(1);
  const [activeFilter, setActiveFilter] = React.useState(1);

  const ITEM_TAB = '아이템';
  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TouchableOpacity
          style={{
            borderColor:
              activeFilter == 1 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.button,
          }}>
          <Text
            style={{
              color: activeFilter == 1 ? Theme.colors.dark : Theme.colors.gray,
            }}>
            전체
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor:
              activeFilter == 2 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.button,
          }}>
          <Icons.IconShake
            fill={activeFilter == 2 ? Theme.colors.dark : Theme.colors.gray}
          />
          <Text
            style={{
              color: activeFilter == 2 ? Theme.colors.dark : Theme.colors.gray,
              marginLeft: 5,
            }}>
            캠페인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor:
              activeFilter == 2 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.button,
          }}>
          <Icons.IconPortraits
            fill={activeFilter == 3 ? Theme.colors.dark : Theme.colors.gray}
          />
          <Text
            style={{
              color: activeFilter == 3 ? Theme.colors.dark : Theme.colors.gray,
              marginLeft: 5,
            }}>
            콜렉션
          </Text>
        </TouchableOpacity>
      </View>
      {tab == ITEM_TAB && (
        <View style={styles.inline}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              onPress(1);
              setActive(1);
            }}>
            <Icons.IconUnion
              fill={active == 1 ? Theme.colors.primary : Theme.colors.gray}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              onPress(2);
              setActive(2);
            }}>
            <Icons.IconUnionEx
              fill={active == 2 ? Theme.colors.primary : Theme.colors.gray}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default ListMenu;
