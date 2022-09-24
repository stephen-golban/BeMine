import { createBox } from '@shopify/restyle';
import { Theme } from '@/theme';

const Box = createBox<Theme>();
Box.defaultProps = {
  margin: 'zero',
  zIndex: 1,
  padding: 'zero',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
};
export default Box;
