import React from 'react';

import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import HeaderPage from '@Components/HeaderPage';
import {NavigationProp} from '@react-navigation/native';
import styles from './styles';

import {HeightScreen} from 'common/theme';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function LoginPage({navigation}: RouterProps) {
  const [openPass, setOpenPass] = React.useState(false);
  return (
    <View style={styles.container}>
      <HeaderPage title="로그인" navigation={navigation} />
      <View
        style={{
          height: HeightScreen / 1.42,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text style={styles.titlePage}>
            서비스를 이용하시려면 먼저 로그인해주세요
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.labelInput}>프로필 아이디</Text>
          <TextInput placeholder="아이디" style={styles.textInput} />
          <View style={{position: 'relative', paddingTop: 25}}>
            <Text style={styles.labelInput}>비밀번호</Text>
            <TextInput
              placeholder="비밀번호"
              style={styles.textInput}
              secureTextEntry={openPass ? false : true}
            />
            <TouchableOpacity onPress={() => setOpenPass(!openPass)}>
              <Image
                source={
                  openPass
                    ? require('@assets/images/EyeOff.png')
                    : require('@assets/images/Eye.png')
                }
                style={{
                  width: 24,
                  height: 18,
                  position: 'absolute',
                  right: 0,
                  bottom: 13,
                }}
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
            <Text style={styles.textBtn}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textFooter}>
              아이디 또는 비밀번호를 잊으셨나요?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginPage;
