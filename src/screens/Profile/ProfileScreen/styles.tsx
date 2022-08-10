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
  type: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
  account: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginRight: 10,
  },
  contentView: {
    flexDirection: 'row',
    top: -25,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'start',
    paddingHorizontal: 20,
  },
  desc: {
    fontSize: 11,
    fontWeight: '700',
    color: '#676767',
    lineHeight: 20,
  },
  subDesc: {
    fontSize: 11,
    fontWeight: '400',
    color: '#676767',
    lineHeight: 20,
  },
  btnEdit: {
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  textBtn: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '500',
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

  //line divider
  lineDivider: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '100%',
  },

  selection: {
    // justifyContent: 'center',
    marginTop: 15,
    // backgroundColor: 'red',
    width: '70%',
  },
  background: {
    width: '100%',
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'space-evenly',
  },
  itemSelection: {
    flex: 1,
    // flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textSelection: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12.52,
  },
  titleSelection: {
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 12.52,
  },

  //body

  body: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  infoUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  avatarUser: {
    // backgroundColor: 'white',
    // borderRadius: 50,
    // width: 40,
    // height: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 10,
  },
  typeUser: {
    fontSize: 11,
    fontWeight: '700',
    color: 'black',
    lineHeight: 14,
    marginRight: 10,
  },
  accountUser: {
    fontSize: 10,
    fontWeight: '700',
    color: '#676767',
    lineHeight: 11.93,
  },
  hashTag: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  tag: {
    fontSize: 10,
    fontWeight: '400',
    color: '#007AFF',
    fontFamily: Theme.fontFamily.SFPro,
    marginRight: 10,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    width: 56,
  },
  textItem: {
    fontSize: 8,
    fontWeight: '500',
    color: '#007AFF',
  },
  textProj: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
  },
  figure: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColo: 'red',
    height: 40,
    backgroundColor: 'transparent',

    // justifyContent: 'space-evenly',
  },
  itemFigure: {
    marginRight: 20,
  },
  like: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
