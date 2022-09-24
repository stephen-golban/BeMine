import { API } from '../base';
import * as Keychain from 'react-native-keychain';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { IAuthState } from '@/context/Auth.Context';

type Utilities = {
  reset: () => void;
  set: <K extends keyof IAuthState>(key: K, value: IAuthState[K]) => void;
};

const useAxiosTokens = (state: IAuthState, { set, reset }: Utilities) => {
  state.isAuthenticated &&
    API.interceptors.request.use(
      (config) => {
        if (config.headers && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

  const refreshAuthLogic = async (failedRequest: any) => {
    try {
      const tokenRefreshResponse = await API.post('/api/token-ul/refresh');
      failedRequest.response.config.headers.Authorization = 'Bearer ' + tokenRefreshResponse.data.accessToken;

      set('accessToken', tokenRefreshResponse.data.accessToken);

      await Keychain.setGenericPassword(
        'token',
        JSON.stringify({
          accessToken: tokenRefreshResponse.data.accessToken,
          refreshToken: state.refreshToken,
        }),
      );
      return await Promise.resolve();
    } catch (e) {
      console.log('Error refreshAuthLogic', e);
      return reset();
    }
  };

  state.isAuthenticated && createAuthRefreshInterceptor(API, refreshAuthLogic, {});
};

export default useAxiosTokens;
