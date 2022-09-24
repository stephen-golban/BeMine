import React from 'react';

import { API } from '../base';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const useAxiosPost = (url: string) => {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const call = async <P = any>(
    payload: any,
    config?: AxiosRequestConfig<P>,
  ): Promise<AxiosResponse<P, any> | undefined> => {
    try {
      setLoading(true);
      const res = await API.post(url, payload, config);
      if (res.data) {
        setError('');
      }
      return res;
    } catch (error: any) {
      console.log('DEV: axios-post-req-error', error.message);

      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { call, error, loading };
};

export default useAxiosPost;
