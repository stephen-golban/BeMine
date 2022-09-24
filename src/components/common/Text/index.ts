import { createText } from '@shopify/restyle';
import { Theme } from '@/theme';

const Text = createText<Theme>();
Text.defaultProps = {
  color: 'white',
};
export default Text;
