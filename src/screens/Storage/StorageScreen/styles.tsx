import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 115,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inLine: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26,
    color: '#000000',
  },
  des: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    color: '#000000',
    opacity: 0.4,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
