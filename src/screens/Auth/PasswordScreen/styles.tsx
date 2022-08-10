import {StyleSheet} from 'react-native';

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
    // width: 180,
  },
  form: {
    paddingTop: 77,
    paddingHorizontal: 25,
  },
  iconEye: {
    width: 24,
    height: 18,
    position: 'absolute',
    right: 0,
    bottom: 13,
  },
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingRight: 30,
  },

  labelInput: {
    // paddingBottom: 5,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
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
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    color: '#676767',
    paddingTop: 12,
  },
});
export default styles;
