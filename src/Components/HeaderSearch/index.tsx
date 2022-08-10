import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
import Icons from '@assets/icon';
import styles from './styles';
interface HeaderProps {
  search: any;
}

function HeaderSearch({search}: HeaderProps) {
  const [text, setText] = React.useState('');
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.inLine}>
          <TouchableOpacity style={styles.icon} onPress={search}>
            <Icons.ChevronLeft />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'relative',
            flex: 1,
            marginRight: 10,
          }}>
          <TextInput
            placeholder="검색어를 입력해주세요"
            style={styles.textInput}
            autoFocus
            value={text}
            onChange={(
              e: NativeSyntheticEvent<TextInputChangeEventData>,
            ): void => setText(e.nativeEvent.text)}
          />
          <View style={styles.iconClose}>
            {text == '' ? (
              <TouchableOpacity>
                <Icons.IconSearchSmall />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setText('');
                }}>
                <Icons.IconClose />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.inLine}>
          <TouchableOpacity>
            <Icons.IconMenu />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HeaderSearch;
