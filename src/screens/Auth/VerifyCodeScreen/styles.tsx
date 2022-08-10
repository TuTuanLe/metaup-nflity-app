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
  },
  form: {
    paddingTop: 77,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '700',
    color: 'black',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
    // paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 30,
    textAlign: 'center',
  },

  labelInput: {
    // paddingBottom: 5,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },
  footer: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
