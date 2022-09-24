import { Theme } from '../utilities/theme';
import { useTheme as useShopifyTheme } from '@shopify/restyle';

export const useTheme = () => useShopifyTheme<Theme>();
