import { Platform } from 'react-native';
import { COLOR_DARK } from './colors';

const elevation = Platform.select({
  android: {
    elevation: 2,
  },
  ios: {
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: COLOR_DARK,
    shadowOffset: { height: 1, width: 0 },
  }
});

export default elevation;