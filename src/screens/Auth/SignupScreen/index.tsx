import React from 'react';

import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import HeaderPage from '@Components/HeaderPage';
import {NavigationProp} from '@react-navigation/native';
import {HeightScreen, Theme} from '@common/theme';
import styles from './styles';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function SignupScreen({navigation}: RouterProps) {
  return (
    <View style={styles.container}>
      <HeaderPage title="계정생성" navigation={navigation} />
      <View
        style={{
          height: HeightScreen / 1.35,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text style={styles.titlePage}>계정을 생성합니다</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.labelInput}>이름</Text>
          <TextInput placeholder="이름" style={styles.textInput} />
          <View style={{position: 'relative', paddingTop: 25}}>
            <Text style={styles.labelInput}>프로필 아이디</Text>
            <TextInput placeholder="아이디" style={styles.textInputPass} />
            <TouchableOpacity>
              <Text
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 13,
                  color: Theme.colors.primary,
                }}>
                계정생성
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{position: 'relative', paddingTop: 25}}>
            <Text style={styles.labelInput}>휴대전화</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="-- ---- ----"
              style={styles.textInputPhone}
            />
            <View
              style={{
                position: 'absolute',
                left: 0,
                bottom: 13,
                width: 65,
                borderRightColor: Theme.colors.secondary,
                borderRightWidth: 1,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('@assets/images/korea.png')}
                  style={{
                    width: 24,
                    height: 18,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <Text style={{paddingLeft: 10, fontSize: 14, fontWeight: '400'}}>
                82+
              </Text>
            </View>
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
            onPress={() => navigation.navigate('VERIFYCODE')}
            style={styles.buttonFooter}>
            <Text style={styles.textBtn}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignupScreen;
