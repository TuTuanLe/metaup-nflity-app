import React from 'react';
import {StatusBar, View} from 'react-native';
import Header from '@Components/Header';
import {Theme} from '@common/theme';

function StorageScreen() {
  return (
    <View style={{height: 115, display: 'flex', justifyContent: 'flex-end'}}>
      <Header navigation={undefined} title={'갤러리'} des={'앨범'} />
    </View>
  );
}
export default StorageScreen;
