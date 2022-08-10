import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Icons from '@assets/icon';
import {WidthScreen} from '@common/theme';
import styles from './styles';

interface projectProps {
  id: String;
  name?: String;
  des?: String;
  count?: String;
  partner?: String;
  total?: String;
  image?: any;
}

interface cardProps {
  item: projectProps;
  union?: Number;
}

function CardGallery({item, union = 1}: cardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          width: union == 1 ? WidthScreen - 30 : (WidthScreen - 40) / 2,
          display: 'flex',
          flexDirection: union == 1 ? 'row' : 'column',

          ...styles.container,
        }}>
        <Image
          style={{
            width: union == 1 ? 120 : (WidthScreen - 40) / 2,
            height: union == 1 ? 120 : (WidthScreen - 40) / 2,
            ...styles.image,
          }}
          source={item.image}
        />
        <TouchableOpacity style={styles.heart}>
          <Icons.IconHeart />
        </TouchableOpacity>
        <View style={styles.information}>
          <TouchableOpacity style={styles.button}>
            <Icons.IconBox />
            <Text style={styles.title}>아이템</Text>
          </TouchableOpacity>
          <Text style={styles.description} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.inline}>
            <Text style={styles.txtAccount}>{item.des}</Text>
            <Icons.IconVerifyAccount width={10} height={10} />
          </View>

          <View style={styles.detail}>
            <View style={styles.des}>
              <View style={styles.txtDes}>
                <Text style={styles.label}>마감일</Text>
                <Text style={styles.values}>{item.count}</Text>
              </View>
              <View style={styles.txtDesCenter}>
                <Text style={styles.label}>파트너</Text>
                <Text style={styles.values}>{item.partner}</Text>
              </View>
              <View style={styles.txtDes}>
                <Text style={styles.label}>누적 금액</Text>
                <Text style={styles.values}>{item.total}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardGallery;
