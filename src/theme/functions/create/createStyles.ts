import { StyleSheet } from 'react-native';

import { theme, Theme } from '../../utilities/theme';

type BuildStylesCallback<T, Params> = (theme: Theme, params?: Params) => StyleSheet.NamedStyles<T>;

/**
 * It takes a function that returns a styles object, and returns a function that takes a parameter and
 * returns a styles object
 * @param build - A function that takes in the theme and any parameters you want to pass in and returns
 * an object of styles.
 * @example
 * interface IProps {
 *  width: string | number;
 * }
 *
 * export default createStyles((theme, props?: IProps) => ({
 *  container: {
 *    flex: 1,
 *    backgroundColor: theme.colors.black,
 *    width: props?.width
 *  },
 * }));
 */

export const createStyles = <T extends StyleSheet.NamedStyles<T>, Params = object | undefined>(
  build: BuildStylesCallback<T, Params>,
) => {
  return (params?: Params) => StyleSheet.create(build(theme, params));
};
