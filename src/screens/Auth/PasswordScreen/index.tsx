import React from 'react';

import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import HeaderPage from '@Components/HeaderPage';
import {NavigationProp} from '@react-navigation/native';
import {HeightScreen} from '@common/theme';
import styles from './styles';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
function PasswordScreen({navigation}: RouterProps) {
  const [openPass, setOpenPass] = React.useState(false);
  const [openPassConfirm, setOpenPassConfirm] = React.useState(false);
  return (
    <View style={styles.container}>
      <HeaderPage navigation={navigation} />
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
          <Text style={styles.titlePage}>비밀번호를 생성해주세요</Text>
        </View>
        <View style={styles.form}>
          <View style={{position: 'relative'}}>
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
          <View style={{position: 'relative', paddingTop: 25}}>
            <Text style={styles.labelInput}>비밀번호 재입력</Text>
            <TextInput
              placeholder="비밀번호"
              style={styles.textInput}
              secureTextEntry={openPassConfirm ? false : true}
            />
            <TouchableOpacity
              onPress={() => setOpenPassConfirm(!openPassConfirm)}>
              <Image
                source={
                  openPassConfirm
                    ? require('@assets/images/EyeOff.png')
                    : require('@assets/images/Eye.png')
                }
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
            onPress={() => navigation.navigate('WALLET')}
            style={styles.buttonFooter}>
            <Text style={styles.textBtn}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PasswordScreen;
