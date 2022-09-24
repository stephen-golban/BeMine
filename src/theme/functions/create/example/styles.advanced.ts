import createStyles from '../createStyles';

type Props = { width: number | string } | undefined;

export default createStyles((theme, props: Props) => ({
  container: {
    flex: 1,
    width: props?.width,
    backgroundColor: theme.colors.black,
  },
}));
