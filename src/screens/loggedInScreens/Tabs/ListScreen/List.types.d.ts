import { NavigationProp } from '@react-navigation/native';

export type Data = {
  dateSuggestionUsers?: [];
};

export interface IListData {
  id: string;
  navigation: NavigationProp<string | boolean>;
  loading: boolean;
}

export type ListDataType = {
  id: string;
  name: string;
  images: string[];
};
