import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {NavigationProp} from '@react-navigation/native';

import HeaderPage from '@Components/HeaderPage';
import styles from './styles';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const screen = Dimensions.get('screen');

function GetStartingScreen({navigation}: RouterProps) {
  const [openPass, setOpenPass] = React.useState(false);

  const copyToClipboard = () => {
    Clipboard.setString('0x77d5cad22a9386C263782f27aa634D9ca355Ff83');
  };

  return (
    // <TouchableOpacity>
    <View style={[styles.container, {height: screen.height}]}>
      <HeaderPage navigation={navigation} />
      <View
        style={{
          height: screen.height / 1.42,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text style={styles.titlePage}>Nfilty 지갑이 생성되었습니다</Text>
          <Text style={styles.subTitlePage}>
            생성된 지갑은 자동으로 프로필에 연결됩니다
          </Text>
        </View>
        <View style={styles.form}>
          <Image
            source={require('@assets/images/wallet.png')}
            style={{height: 52.59, width: 72.96, resizeMode: 'contain'}}
          />
          <View style={{position: 'relative', paddingTop: 99.15}}>
            <TextInput
              value="0x77d5cad22a9386C263782f27aa634D9ca355Ff83"
              style={styles.textInput}
              editable={false}
            />
            <TouchableOpacity onPress={() => copyToClipboard()}>
              <Image
                source={require('@assets/images/clipboard.png')}
                style={styles.iconEye}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.footer, {elevation: -2, flex: 1}]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TAB')}
            style={styles.buttonFooter}>
            <Text style={styles.textBtn}>지갑 생성하기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textFooter}>나중에 생성할게요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default GetStartingScreen;
