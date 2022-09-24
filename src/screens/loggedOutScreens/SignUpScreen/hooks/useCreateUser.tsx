import React from 'react';
import { createFormData } from './createFormData';

import { useAxiosPost } from '@/context/axios';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useLoginUser from '../../SignInScreen/hooks/useLoginUser';

import { SignupFormValues } from '../SignupScreen.mock';

type CreateUserInputData = SignupFormValues & { longitude: string; latitude: string };

const HEADERS = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

const useCreateUser = () => {
  const { call, error, loading } = useAxiosPost('/graphql');
  const { loginUser, loading: loginLoading, error: loginError } = useLoginUser();
  const [combinedLoading, setCombinedLoading] = React.useState(loading ?? loginLoading);
  const [combinedError, setCombinedError] = React.useState<string[]>([error ?? loginError]);

  useUpdateEffect(() => {
    setCombinedLoading(loading === true ? loading : loginLoading);
  }, [loading, loginLoading]);

  useUpdateEffect(() => {
    setCombinedError([error !== '' ? error : loginError]);
  }, [error, loginError]);

  const createUser = async (data: CreateUserInputData) => {
    const response = await call(createFormData(data), HEADERS);
    if (response) {
      const errors = response.data?.errors?.map((err: { message: string }) => err.message);
      if (errors) {
        return setCombinedError(errors);
      }

      if (response.data.data.createUser) {
        return await loginUser({ email: data.email.email, password: data.password });
      }
    }
  };

  return { loading: combinedLoading, error: combinedError, createUser };
};

export default useCreateUser;
