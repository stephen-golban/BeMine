import React from 'react';
import * as Keychain from 'react-native-keychain';

import client from '@/ApolloClient';
import useMap from 'react-use/lib/useMap';

import { Gender, User as GUser } from '@/graphql/generated';

type User = {
  id: GUser['id'];
  name: GUser['name'];
  gender: Gender;
  images: { id: string; url: string }[];
};
export interface IAuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

interface IAuthContext {
  state: IAuthState;
  utilities: {
    logout: () => void;
    resetState: () => void;
    setState: (newState: Partial<IAuthState>) => void;
    setPropertyState: <K extends keyof IAuthState>(key: K, value: IAuthState[K]) => void;
  };
}

const DEFAULT_STATE: IAuthState = {
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const Context = React.createContext<IAuthContext | Record<string, never>>({});

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [state, { reset, set, setAll }] = useMap(DEFAULT_STATE);

  const setState = React.useCallback((data: Partial<IAuthState>) => setAll({ ...state, ...data }), [state]);

  const logout = React.useCallback(async () => {
    await Keychain.resetGenericPassword();
    await client.clearStore();

    return reset();
  }, []);

  const memoizedState = React.useMemo<IAuthContext>(() => {
    return { state, utilities: { resetState: reset, setPropertyState: set, setState, logout } };
  }, [state, set, reset, logout, setAll]);

  return <Context.Provider value={memoizedState}>{children}</Context.Provider>;
};

const useAuthContext = () => {
  const ctx = React.useContext(Context);

  if (!ctx) {
    throw new Error('useAuthContext should be used inside FilterProvider');
  }
  return ctx;
};

export { AuthProvider, useAuthContext };
