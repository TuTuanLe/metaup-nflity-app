import {StyleSheet} from 'react-native';
import {Theme} from '../../common/theme';

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
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
});

export default styles;
