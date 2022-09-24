import * as Keychain from 'react-native-keychain';

import { useAxiosPost } from '@/context/axios';
import { useAuthContext } from '@/context/Auth.Context';

import { SigninFormValues } from '../SignInScreen.mock';

type Response = { token: string; refreshToken: string };

const useLoginUser = () => {
  const { utilities } = useAuthContext();
  const { call, error, loading } = useAxiosPost('/api/login');

  const loginUser = async (data: SigninFormValues) => {
    const response = await call<Response>(data);
    if (response) {
      if (response.data) {
        const { token: accessToken, refreshToken } = response.data;

        utilities.setState({
          accessToken,
          refreshToken,
          isAuthenticated: true,
        });

        return await Keychain.setGenericPassword(
          'token',
          JSON.stringify({
            accessToken,
            refreshToken,
          }),
        );
      }
    }
  };

  return { loginUser, error, loading };
};

export default useLoginUser;
