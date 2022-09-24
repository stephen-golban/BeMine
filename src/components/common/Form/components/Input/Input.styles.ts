import { createStyles } from '@/theme';

export default createStyles((theme) => {
  const { colors } = theme;
  return {
    input: {
      width: '100%',
      backgroundColor: colors.white_20,
      borderRadius: 25,
      height: theme.spacing.xl,
      paddingHorizontal: 25,
      color: colors.white,
    },
  };
});
