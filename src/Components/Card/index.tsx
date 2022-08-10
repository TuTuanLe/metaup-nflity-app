import React from 'react';
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';

import Icons from '@assets/icon';

import styles from './styles';

interface productProps {
  id?: String;
  name?: String;
  des?: String;
  price?: String;
  image?: any;
}

interface cardProps {
  item: productProps;
}

function Card({item}: cardProps) {
  return (
    <TouchableHighlight activeOpacity={0.6}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.heart}>
          <Icons.IconHeart />
        </TouchableOpacity>
        <Image style={styles.image} source={item.image} />
        <TouchableOpacity style={styles.button}>
          <Icons.IconBox />
          <Text style={styles.title}>아이템</Text>
        </TouchableOpacity>
        <View style={styles.inline}>
          <Text style={styles.txtAccount}>{item.des}</Text>
          <Icons.IconVerifyAccount width={10} height={10} />
        </View>
        <Text style={styles.description} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.inline}>
          <Icons.IconWon />
          <Text style={styles.value}>{item.price}</Text>
        </View>
        <View style={styles.inlineLink}>
          <Text style={styles.link}>#3dgraphic</Text>
          <Text style={styles.link}>#graphic</Text>
          <Text style={styles.link}>#charactor</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Card;
