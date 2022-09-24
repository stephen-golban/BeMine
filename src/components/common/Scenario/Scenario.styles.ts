/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStyles } from '@/theme';

type Props = { translateX: any; focused?: boolean } | undefined;

export default createStyles((theme, props: Props) => ({
  wrapper: {
    // because of the translateX animation
    left: -theme.spacing.sm,

    width: 90,
    height: 90,
    transform: [{ translateX: props?.translateX }],
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
