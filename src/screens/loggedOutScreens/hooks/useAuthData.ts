import React from 'react';

import { FieldValues } from 'react-hook-form';

const useSigninData = <T extends FieldValues>(DEFAULT_FORM_VALUES: T) => {
  const [authState, setState] = React.useState(DEFAULT_FORM_VALUES);

  const setAuthState = React.useCallback((data: T) => {
    return setState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetAuthState = React.useCallback(() => setState(DEFAULT_FORM_VALUES), []);

  return { authState, DEFAULT_FORM_VALUES, setAuthState, resetAuthState };
};

export default useSigninData;
