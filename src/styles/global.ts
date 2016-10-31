import { cssRule } from 'typestyle';
import { normalize, setupPage } from 'typestyle/csx';
import { colors, fonts } from './variables';

normalize();
setupPage('#root');

// import normal font for Montserrat
cssRule('@font-face', {
    fontFamily: fonts.baseFont,
    fontStyle: 'normal',
    fontWeight: 400,
    src: "local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v7/zhcz-_WihjSQC0oHJ9TCYAzyDMXhdD8sAj6OAJTFsBI.woff2) format('woff2')",
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
});

// import bold font for Montserrat
cssRule('@font-face', {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 700,
  src: "local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v7/IQHow_FEYlDC4Gzy_m8fcmaVI6zN22yiurzcBKxPjFE.woff2) format('woff2')",
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000'
});

cssRule('html, body', {
    height: '100%',
    margin: 0,        
    padding: 0
});

// set base values for colors
cssRule('body', {
    backgroundColor: colors.baseBgColor,
    color: colors.baseFgColor,
    fontFamily: fonts.baseFont,
    fontSize: fonts.baseFontSize
});

const navbarHeight = '3rem';
cssRule('#navigation', {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: navbarHeight
});

cssRule('#contents', {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: navbarHeight,
    height: `calc(100vh - ${navbarHeight})`
});

