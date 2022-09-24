import { createStyles } from '@/theme';

type Props = { length: number } | undefined;

export default createStyles((_, props: Props) => {
  const isLongList = props && props?.length > 3;

  return {
    scrollView: {
      width: 'auto',
      height: 85,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: isLongList ? 'space-between' : 'space-evenly',
    },
    errWrapper: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  };
});
