import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import {Theme} from '@common/theme';
import styles from './styles';
import Icons from '@assets/icon';
import {NavigationProp} from '@react-navigation/native';

import {WidthScreen} from '@common/theme';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View style={styles.lineDivider}></View>
    </View>
  );
};

const ButtonSelection = () => {
  return (
    <View style={styles.selection}>
      <View style={styles.background}>
        <TouchableOpacity>
          <View style={styles.itemSelection}>
            <Text style={styles.titleSelection}>아이템</Text>
            <Text style={styles.textSelection}>512</Text>
          </View>
        </TouchableOpacity>

        <LineDivider />

        <TouchableOpacity>
          <View style={styles.itemSelection}>
            <Text style={styles.titleSelection}>파트너</Text>
            <Text style={styles.textSelection}>383,124</Text>
          </View>
        </TouchableOpacity>

        <LineDivider />

        <TouchableOpacity>
          <View style={styles.itemSelection}>
            <Text style={styles.titleSelection}>거래액</Text>
            <Text style={styles.textSelection}>400백만↑</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

function ProfileScreen({navigation}: RouterProps) {
  const [selectedTab, SetSelectedTab] = React.useState(0);
  const [description, setDescription] = React.useState('인기');

  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        <Image
          source={require('@assets/images/poster-kongzo.png')}
          style={{
            height: 177,
            width: WidthScreen,
            resizeMode: 'stretch',
            backgroundColor: '#000000',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 70,
          right: 20,
        }}>
        <Icons.IconMenu fill="white" />
      </View>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image
            source={require('@assets/images/avatar-kongz.png')}
            style={{
              width: 86,
              height: 86,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{alignItems: 'flex-start', width: '100%'}}>
          <Text style={styles.type}>메타콩즈</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.account}>kongzofficial</Text>
            <Icons.IconVerifyAccount width={20} height={20} />
          </View>
          <ButtonSelection />
        </View>
      </View>

      <View style={styles.contentView}>
        <Text>
          <Text style={styles.desc}>메타콩즈.</Text>
          <Text style={styles.subDesc}>
            {' '}
            메타콩즈 프로젝트를 통해 새로운 유토피아를 개척하여 세상을 바꿀 수
            있다는 것이 믿어지시나요? 우리와 함께 세상을 바꾸시겠습니까?
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnEdit}
        onPress={() => navigation.navigate('EditProfileScreen')}>
        <Text style={styles.textBtn}>프로필 편집</Text>
      </TouchableOpacity>

      <View style={styles.TabView}>
        <TouchableOpacity
          style={{
            borderBottomWidth: selectedTab == 0 ? 2 : 1,
            borderColor:
              selectedTab == 0 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.tabContainer,
          }}
          onPress={() => {
            SetSelectedTab(0);
            setDescription('인기');
          }}>
          <Icons.IconFeed
            fill={selectedTab == 0 ? Theme.colors.dark : Theme.colors.gray}
          />
          <Text
            style={{
              color: selectedTab == 0 ? Theme.colors.dark : Theme.colors.gray,
              ...styles.titleTab,
            }}>
            피드
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomWidth: selectedTab == 1 ? 2 : 1,
            borderColor:
              selectedTab == 1 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.tabContainer,
          }}
          onPress={() => {
            SetSelectedTab(1);
            setDescription('아이템');
          }}>
          <Icons.IconCollage
            fill={selectedTab == 1 ? Theme.colors.dark : Theme.colors.gray}
          />
          <Text
            style={{
              color: selectedTab == 1 ? Theme.colors.dark : Theme.colors.gray,
              ...styles.titleTab,
            }}>
            프로젝트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomWidth: selectedTab == 2 ? 2 : 1,
            borderColor:
              selectedTab == 2 ? Theme.colors.dark : Theme.colors.gray,
            ...styles.tabContainer,
          }}
          onPress={() => {
            SetSelectedTab(2);
            setDescription('사용자');
          }}>
          <Icons.IconInfo
            fill={selectedTab == 2 ? Theme.colors.dark : Theme.colors.gray}
          />
          <Text
            style={{
              color: selectedTab == 2 ? Theme.colors.dark : Theme.colors.gray,
              ...styles.titleTab,
            }}>
            정보
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.user}>
          <View style={styles.infoUser}>
            <View style={styles.avatarUser}>
              <Image
                source={require('@assets/images/avatar-kongz.png')}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{alignItems: 'flex-start', width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.typeUser}>메타콩즈</Text>
                <Icons.IconVerifyAccount width={10} height={10} />
              </View>
              <Text style={styles.accountUser}>kongzofficial</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text>:</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.desc}>💫The Kongz : Beginz 💫</Text>
          <Text style={styles.subDesc}>
            {' '}
            메타콩즈를 응원해주시고, 함께 해주시는 홀더분들게 감사의 인사를
            드립니다.
          </Text>
        </View>
        <View style={styles.hashTag}>
          <TouchableOpacity>
            <Text style={styles.tag}>#3dgraphic</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tag}>#graphic</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tag}>#charactor</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 15, ...styles.infoUser}}>
          <View style={{marginRight: 20}}>
            <Image
              source={require('@assets/images/avatar-kongz.png')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <View style={styles.item}>
              <Icons.IconPortraits fill="#007AFF" />
              <Text style={styles.textItem}>아이템</Text>
            </View>
            <View style={{}}>
              <Text style={styles.textProj}>Project KONGZ</Text>
            </View>
            <View style={styles.figure}>
              <TouchableOpacity>
                <View style={styles.itemFigure}>
                  <Text style={styles.titleSelection}>아이템</Text>
                  <Text style={styles.textSelection}>19.9천</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.itemFigure}>
                  <Text style={styles.titleSelection}>파트너</Text>
                  <Text style={styles.textSelection}>6.7천</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.itemFigure}>
                  <Text style={styles.titleSelection}>총 규모</Text>
                  <Text style={styles.textSelection}>25.8억 원</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: 15, ...styles.infoUser}}>
          <View style={styles.like}>
            <Icons.IconHeart />
            <Text style={{fontSize: 10}}>123,456</Text>
          </View>
          <Text style={{fontSize: 10}}>1시간 전</Text>
        </View>
      </View>
    </View>
  );
}
export default ProfileScreen;
