import {StyleSheet} from 'react-native';
import {Theme} from '../../../common/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titlePage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    width: 230,
  },
  subTitlePage: {
    fontFamily: Theme.fontFamily.SFPro,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
  },
  form: {
    paddingTop: 170,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    // height: 70,
    // justifyContent: 'flex-end',

    // bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  buttonFooter: {
    backgroundColor: '#007AFF',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderRadius: 20,
  },
  textBtn: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
    color: 'white',
  },
  textFooter: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
    color: '#676767',
    paddingTop: 12,
  },
});
export default styles;
