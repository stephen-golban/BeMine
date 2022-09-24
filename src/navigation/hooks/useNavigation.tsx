import { LoggedInStackParams } from '@/interfaces/loggedInStack';
import { LoggedOutStackParams } from '@/interfaces/LoggedOutStack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useLoggedInNavigation = () => useNavigation<NativeStackNavigationProp<LoggedInStackParams>>();

export const useLoggedOutNavigation = () => useNavigation<NativeStackNavigationProp<LoggedOutStackParams>>();
