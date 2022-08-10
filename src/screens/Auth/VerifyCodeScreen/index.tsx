import React, {useRef} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import HeaderPage from '@Components/HeaderPage';
import {NavigationProp} from '@react-navigation/native';
import styles from './styles';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function VerifyCodeScreen({navigation}: RouterProps) {
  const num1Ref = useRef<TextInput>(null);
  const num2Ref = useRef<TextInput>(null);
  const num3Ref = useRef<TextInput>(null);
  const num4Ref = useRef<TextInput>(null);
  const num5Ref = useRef<TextInput>(null);
  const num6Ref = useRef<TextInput>(null);

  const [pin1, setPin1] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');
  const [pin5, setPin5] = React.useState('');
  const [pin6, setPin6] = React.useState('');

  return (
    <View style={styles.container}>
      <HeaderPage navigation={navigation} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Text style={styles.titlePage}>인증번호가 발송되었습니다</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          keyboardType="number-pad"
          style={styles.textInput}
          maxLength={1}
          autoFocus
          ref={num1Ref}
          value={pin1}
          onSubmitEditing={() => num2Ref.current?.focus()}
          onChangeText={(text: string) => {
            setPin1(text);

            if (text !== '') {
              num2Ref.current?.focus();
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          maxLength={1}
          ref={num2Ref}
          value={pin2}
          onSubmitEditing={() => num3Ref.current?.focus()}
          onChangeText={(text: string) => {
            setPin2(text);

            if (text !== '') {
              num3Ref.current?.focus();
            } else {
              num1Ref.current?.focus();
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          maxLength={1}
          ref={num3Ref}
          value={pin3}
          onSubmitEditing={() => num4Ref.current?.focus()}
          onChangeText={(text: string) => {
            setPin3(text);

            if (text !== '') {
              num4Ref.current?.focus();
            } else {
              num2Ref.current?.focus();
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          maxLength={1}
          ref={num4Ref}
          value={pin4}
          onSubmitEditing={() => num5Ref.current?.focus()}
          onChangeText={(text: string) => {
            setPin4(text);

            if (text !== '') {
              num5Ref.current?.focus();
            } else {
              num3Ref.current?.focus();
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          maxLength={1}
          ref={num5Ref}
          value={pin5}
          onSubmitEditing={() => num6Ref.current?.focus()}
          onChangeText={(text: string) => {
            setPin5(text);

            if (text !== '') {
              num6Ref.current?.focus();
            } else {
              num4Ref.current?.focus();
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          maxLength={1}
          ref={num6Ref}
          value={pin6}
          onChangeText={(text: string) => {
            setPin6(text);
            if (text === '') {
              num5Ref.current?.focus();
            }
          }}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('PASSWORD')}>
          <Text style={styles.textFooter}>
            아이디 또는 비밀번호를 잊으셨나요?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VerifyCodeScreen;
