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
    // width: 230,
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
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    borderRadius: 30,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 30,
    color: '#007AFF',
    width: '100%',
    height: 35,
  },
  iconEye: {
    width: 13.33,
    height: 15.83,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  footer: {
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
