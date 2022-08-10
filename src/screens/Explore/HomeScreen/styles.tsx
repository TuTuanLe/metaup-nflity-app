import {StyleSheet} from 'react-native';
import {WidthScreen} from '@common/theme';
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
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
  flatList: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
  },
  TabView: {
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: (WidthScreen - 30) / 3,
  },
  titleTab: {
    marginLeft: 7,
  },
  test: {
    width: 500,
    height: 100,
  },
});

export default styles;
