import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, borderRadius: 100, backgroundColor: '#F9FAFB'},
  mesasgeNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    top: 12,
  },
  mesasgeNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', 600),
  },
});

export default globalStyle;
