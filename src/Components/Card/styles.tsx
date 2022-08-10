import {StyleSheet} from 'react-native';

import {Theme} from '@common/theme';
import {WidthScreen} from '@common/theme';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: (WidthScreen - 40) / 2,
    height: 300,
    backgroundColor: Theme.colors.white,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 15,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    width: 50,
    borderRadius: 25,
  },
  heart: {
    position: 'absolute',
    right: 0,
    margin: 12,
    zIndex: 1,
  },
  image: {
    width: (WidthScreen - 40) / 2,
    height: 175,
    borderRadius: 5,
  },
  title: {
    fontSize: 8,
    marginLeft: 5,
    lineHeight: 10,
    fontWeight: '400',
    color: Theme.colors.primary,
  },
  inline: {
    marginHorizontal: 15,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtAccount: {
    color: Theme.colors.textGray,

    fontSize: 8,
    lineHeight: 10,
    fontWeight: '400',
    marginRight: 3,
  },
  description: {
    marginHorizontal: 15,
    fontWeight: '700',
    fontSize: 12,
    color: Theme.colors.lBlack,
    marginTop: 3,
  },
  inlineLink: {
    marginHorizontal: 15,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  link: {
    marginRight: 5,
    fontSize: 8,
  },
  value: {
    marginLeft: 10,
    color: Theme.colors.lBlack,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
});

export default styles;
