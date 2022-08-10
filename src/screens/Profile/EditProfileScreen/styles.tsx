import {StyleSheet} from 'react-native';
import {Theme, WidthScreen} from '@common/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  poster: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    elevation: -100,
    // width: '80%',
    opacity: 0.8,
  },
  info: {
    position: 'relative',
    top: -50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  content: {
    paddingHorizontal: 25,
    // backgroundColor: 'red',
    position: 'relative',
    top: -40,
  },
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: 'black',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingBottom: 10,
  },
  labelInput: {
    paddingBottom: 0,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    color: '#676767',
  },
  textInputId: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: 'black',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingBottom: 10,
    paddingRight: 60,
  },
  application: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,

    color: '#007AFF',
  },
  application1: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,

    color: '#c4c4c4',
  },
  buttonFooter: {
    backgroundColor: '#007AFF',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 30,
  },
  textBtn: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
    color: 'white',
  },
});

export default styles;
