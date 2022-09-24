import { createStyles } from '@/theme';

type Props = { backgroundColor?: string } | undefined;

export default createStyles((theme, props: Props) => {
  return {
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: props?.backgroundColor ?? theme.colors.gray_light,
    },
  };
});
