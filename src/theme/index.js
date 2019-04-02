import borderBox from './borderBox';
import colors from './colors';
import constants from './constants';
import elevation from './elevation';
import fonts from './fonts';
import hitSlops from './hitSlops';

export default { 
  ...borderBox,
  ...colors,
  ...constants,
  elevation,
  ...fonts,
  ...hitSlops,
}
