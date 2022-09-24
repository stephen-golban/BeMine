import { createStyles } from '@/theme';

export default createStyles((theme) => {
  return {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.black,
    },
    footerText: {
      bottom: 40,
      position: 'absolute',
    },
  };
});
