import { Theme } from '@/theme';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';

import { Button } from '@/components/common';

const cardButtonVariants = createVariant<Theme, 'cardButtonVariants'>({
  themeKey: 'cardButtonVariants',
});

const CardButton = createRestyleComponent<
  VariantProps<Theme, 'cardButtonVariants'> & React.ComponentProps<typeof Button>,
  Theme
>([cardButtonVariants], Button);

export default CardButton;
