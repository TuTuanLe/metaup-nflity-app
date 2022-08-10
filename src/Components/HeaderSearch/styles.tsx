import {StyleSheet} from 'react-native';
import {Theme} from '../../common/theme';

const styles = StyleSheet.create({
  header: {
    height: 62,
    paddingHorizontal: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // paddingBottom: 20,
  },
  inLine: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26,
    color: Theme.colors.dark,
    fontFamily: Theme.fontFamily.SFPro,
  },
  des: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    color: Theme.colors.dark,
    opacity: 0.4,
    marginLeft: 10,
    fontFamily: Theme.fontFamily.SFPro,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: '100%',
    height: 30,
    // backgroundColor: 'red',
    borderRadius: 30,
    borderColor: '#FBFBFB',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 40,
    paddingVertical: 5,
    alignItems: 'center',
    fontSize: 14,
    lineHeight: 14,
    color: '#000000',
  },
  iconClose: {
    position: 'absolute',
    right: 10,
    bottom: 8,
  },
});

export default styles;
