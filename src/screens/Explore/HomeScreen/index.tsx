import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'redux/store';
import {FETCH_PRODUCTS} from 'redux/reducer/product';
import {FETCH_PROJECTS} from 'redux/reducer/project';
import {Theme} from '@common/theme';
import Icons from '@assets/icon';
import Card from '@Components/Card';
import ListMenu from '@Components/ListMenu';
import Header from '@Components/Header';

import CardGallery from '@Components/CardGallery';
import styles from './styles';
import HeaderSearch from '@Components/HeaderSearch';

function HomeScreen() {
  const navigation = useNavigation();
  const product = useSelector((state: RootState) => state.product.products);
  const loading = useSelector((state: RootState) => state.project.loading);
  const project = useSelector((state: RootState) => state.project.projects);
  const dispatch = useDispatch();
  const [selectedTab, SetSelectedTab] = React.useState(0);
  const [description, setDescription] = React.useState('인기');
  const [gallery, setGallery] = React.useState(1);
  const [openSearch, setOpenSearch] = React.useState(false);
  useEffect(() => {
    dispatch(FETCH_PRODUCTS());
    dispatch(FETCH_PROJECTS());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.root}>
      <View>
        {openSearch ? (
          <HeaderSearch search={() => setOpenSearch(false)} />
        ) : (
          <Header
            navigation={navigation}
            title={'Explore'}
            des={description}
            search={() => setOpenSearch(true)}
          />
        )}
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
            <Icons.IconFire
              fill={selectedTab == 0 ? Theme.colors.dark : Theme.colors.gray}
            />
            <Text
              style={{
                color: selectedTab == 0 ? Theme.colors.dark : Theme.colors.gray,
                ...styles.titleTab,
              }}>
              인기
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
            <Icons.IconCollection
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
            <Icons.IconUser
              fill={selectedTab == 2 ? Theme.colors.dark : Theme.colors.gray}
            />
            <Text
              style={{
                color: selectedTab == 2 ? Theme.colors.dark : Theme.colors.gray,
                ...styles.titleTab,
              }}>
              프로필
            </Text>
          </TouchableOpacity>
        </View>
        <ListMenu
          onPress={(x: React.SetStateAction<number>) => setGallery(x)}
          tab={description}
        />
      </View>
      {selectedTab == 0 && (
        <SafeAreaView style={styles.flatList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={product}
            renderItem={({item}) => <Card item={item} />}
          />
        </SafeAreaView>
      )}
      {selectedTab == 1 && (
        <SafeAreaView style={styles.flatList}>
          {gallery == 1 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={project}
              renderItem={({item}) => <CardGallery item={item} />}
            />
          )}
          {gallery == 2 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={project}
              renderItem={({item}) => <CardGallery item={item} union={2} />}
            />
          )}
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
