import { createStyles } from '@/theme';

export default createStyles((theme) => ({
  container: {
    zIndex: 999,
    position: 'absolute',
    backgroundColor: theme.colors.black,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    bottom: 40,
    position: 'absolute',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))();
