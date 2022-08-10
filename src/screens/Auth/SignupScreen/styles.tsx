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
    width: 175,
  },
  form: {
    paddingTop: 77,
    paddingHorizontal: 25,
  },
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  textInputPass: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingRight: 60,
  },
  textInputPhone: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#C4C4C4',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingLeft: 70,
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
