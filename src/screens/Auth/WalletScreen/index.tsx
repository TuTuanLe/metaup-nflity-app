import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import HeaderPage from '@Components/HeaderPage';
import {NavigationProp} from '@react-navigation/native';
import styles from './styles';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const screen = Dimensions.get('screen');

function WalletScreen({navigation}: RouterProps) {
  const [openPass, setOpenPass] = React.useState(false);
  return (
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
          <Text style={styles.titlePage}>
            계정생성이 완료되었습니다 Nfilty 지갑을 생성하시겠어요?
          </Text>
          <Text style={styles.subTitlePage}>
            지갑은 NFT를 만들거나 보관할 때 필요해요
          </Text>
        </View>
        <View style={styles.form}>
          <Image
            source={require('@assets/images/Motion.png')}
            style={{height: 110, width: 121, resizeMode: 'contain'}}
          />
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
            onPress={() => navigation.navigate('GET_STARTING')}
            style={styles.buttonFooter}>
            <Text style={styles.textBtn}>지갑 생성하기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textFooter}>나중에 생성할게요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}

export default WalletScreen;
