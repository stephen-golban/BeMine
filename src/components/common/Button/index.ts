import { Theme } from '@/theme';
import { createBox } from '@shopify/restyle';
import { Pressable, PressableProps } from 'react-native';

const Button = createBox<Theme, PressableProps>(Pressable);
export default Button;
