/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

//TODO: need to change color name
export const COLORS = {
  black: 'rgb(41, 41, 41)',
  black_two: 'rgb(0, 0, 0)',
  black_10: 'rgba(0, 0, 0, 0.1)',
  black_30: 'rgba(0, 0, 0, 0.3)',
  black_50: 'rgba(0, 0, 0, 0.5)',
  black_70: 'rgba(0, 0, 0, 0.7)',
  black_90: 'rgba(0, 0, 0, 0.9)',

  reddish: 'rgb(203, 62, 62)',
  carnationPink: 'rgb(255, 123, 172)',

  white: 'rgb(255, 255, 255)',
  white_two: 'rgb(235, 235, 235)',
  white_12: 'rgba(255, 255, 255, 0.12)',
  white_20: 'rgba(255, 255, 255, 0.2)',
  white_30: 'rgba(255, 255, 255, 0.3)',
  white_50: 'rgba(255, 255, 255, 0.5)',
  white_82: 'rgba(248, 248, 248, 0.82)',

  warmGrey: 'rgb(112, 112, 112)',
  warmGrey_two: 'rgb(143, 143, 143)',

  greyishBrown: 'rgb(82, 82, 82)',
  greyishBrown_two: 'rgb(63, 63, 63)',

  darkSkyBlue: 'rgb(41, 171, 226)',
  darkSkyBlue_12: 'rgba(41, 171, 226, 0.12)',
  darkSkyBlue_30: 'rgba(41, 171, 226, 0.3)',

  tealish: 'rgb(44, 194, 214)',
  tealish_20: 'rgba(44, 194, 214, 0.2)',

  light_gray: 'rgba(105, 105, 105, 0.1)',
  opac_light_gray: 'rgba(105, 105, 105, 0.07)',

  transparent: 'transparent',
};

export const FONTS = {
  font24Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  font20Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  font18Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  font16Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  font16Regular: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  font14Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
  font14Regular: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  font13Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
  },
  font12Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
  },
  defaults: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
};

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 36,
};

export const RADII = {
  zero: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  round: 999,
};

export const METRICS_SIZES = {
  zero: 0,
  xs: 5,
  sm: 10,
  md: 15,
  lg: 30,
  xl: 45,
  xxl: 60,
  xxxl: 100,
};

export const CARD_BUTTON = {
  zIndex: 5,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
};
export const TOP_BUTTON = {
  width: 46,
  height: 46,
  borderRadius: 23,
};
export const BOTTOM_BUTTON = {
  width: 56,
  height: 56,
  borderRadius: 28,
};

export const CARD_BUTTON_LIST = {
  width: 32,
  height: 32,
  borderRadius: 28,
};

export default { COLORS };
