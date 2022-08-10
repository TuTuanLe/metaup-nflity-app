import React from 'react';
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {Theme} from '@common/theme';

import styles from './styles';
import Icons from '@assets/icon';
import {NavigationProp} from '@react-navigation/native';
const screen = Dimensions.get('screen');

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function EditProfileScreen({navigation}: RouterProps) {
  const [selectedTab, SetSelectedTab] = React.useState(0);
  const [description, setDescription] = React.useState('인기');

  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <Image
          source={require('@assets/images/poster-kongzo.png')}
          style={{
            height: 177,
            width: screen.width,
            resizeMode: 'stretch',
            backgroundColor: '#000000',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={{
          position: 'absolute',
          top: 70,
          left: 20,
        }}>
        <Icons.IconCHevronLeftLight />
      </TouchableOpacity>
      <View style={styles.info}>
        <TouchableOpacity style={styles.avatar} activeOpacity={0.9}>
          <Image
            source={require('@assets/images/avatar-kongz.png')}
            style={{
              width: 86,
              height: 86,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.labelInput}>이름</Text>
        <TextInput value="메타콩즈" style={styles.textInput} editable={false} />
        <View style={{position: 'relative', paddingTop: 25}}>
          <Text style={styles.labelInput}>프로필 아이디</Text>
          <TextInput
            // secureTextEntry={true}
            value="kongzofficial"
            style={styles.textInputId}
            editable={false}
          />
          <TouchableOpacity>
            <Text
              style={{
                position: 'absolute',
                right: 0,
                bottom: 13,
                color: '#007AFF',
              }}>
              중복확인
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative', paddingTop: 25}}>
          <Text style={styles.labelInput}>프로필 아이디</Text>
          <TextInput
            multiline={true}
            value="메타콩즈 프로젝트를 통해 새로운 유토피아를 개척하여 세상을 바꿀 수 있다는 것이 믿어지시나요? 우리와 함께 세상을 바꾸시겠습니까?"
            style={styles.textInput}
            editable={false}
          />
        </View>
        <View style={{position: 'relative', paddingTop: 25}}>
          <Text style={styles.labelInput}>분류</Text>
          <TextInput
            value="비영리 단체"
            style={styles.textInput}
            editable={false}
          />
        </View>

        <View style={{position: 'relative', paddingTop: 25}}>
          <Text style={styles.application}>오피셜 프로필 인증 신청 {`>`}</Text>
          <Text style={styles.application1}>오피셜 프로필이 무엇인가요?</Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.buttonFooter}>
          <Text style={styles.textBtn}>저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default EditProfileScreen;
