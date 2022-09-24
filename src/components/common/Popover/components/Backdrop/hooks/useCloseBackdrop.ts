import React from 'react';
import { Alert } from 'react-native';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

const useCloseBackdrop = (onClose: () => void) => {
  const [showAlert, setShowAlert] = React.useState(false);

  /**
   * It sets the showAlert state to false, and then calls the onClose function
   * @returns The function onClose() is being returned.
   */
  const handleAlertConfirm = () => {
    setShowAlert(false);
    return onClose();
  };

  /* A custom hook that is being used to show an alert when the user tries to close the app. */
  useUpdateEffect(() => {
    showAlert &&
      Alert.alert('', 'Are you sure you want to quit?', [
        { text: 'No', onPress: () => setShowAlert(false) },
        { text: 'Yes', onPress: handleAlertConfirm },
      ]);

    return () => setShowAlert(false);
  }, [showAlert]);

  return () => setShowAlert(true);
};

export default useCloseBackdrop;
