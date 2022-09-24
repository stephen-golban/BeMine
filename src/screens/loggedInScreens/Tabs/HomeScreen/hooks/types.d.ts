import { RouteProp } from '@react-navigation/native';
import { Suggestion } from './useDateSuggestions';

export type useGetSelectProfileProps = {
  routeId?: string;
  route?: RouteProp<{ params: { id?: string } }, 'params'>;
  suggestions: Suggestion[];
};
