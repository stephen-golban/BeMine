import { createTheme } from '@shopify/restyle';
import { BOTTOM_BUTTON, CARD_BUTTON, CARD_BUTTON_LIST, COLORS, FONTS, METRICS_SIZES, TOP_BUTTON } from './constants';

export const theme = createTheme({
  // TODO: theme typography config
  textVariants: FONTS,
  // theme colors pallete
  colors: COLORS,
  // // spacings / distancing
  spacing: METRICS_SIZES,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardButtonVariants: {
    topLeftList: {
      ...CARD_BUTTON,
      ...CARD_BUTTON_LIST,
      top: 10,
      left: 10,
    },
    topLeft: {
      ...CARD_BUTTON,
      ...TOP_BUTTON,
      top: 15,
      left: 14,
    },
    topRight: {
      ...CARD_BUTTON,
      ...TOP_BUTTON,
      top: 15,
      right: 14,
    },
    bottomLeft: {
      ...CARD_BUTTON,
      ...BOTTOM_BUTTON,
      bottom: 20,
      left: 14,
    },
    bottomRight: {
      ...CARD_BUTTON,
      ...BOTTOM_BUTTON,
      bottom: 20,
      right: 14,
    },
  },
});

export type Theme = typeof theme;
