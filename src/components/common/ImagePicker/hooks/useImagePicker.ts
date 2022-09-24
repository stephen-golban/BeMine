import React from 'react';

import * as ImagePicker from 'react-native-image-picker';
import { CameraOptions, ImagePickerResponse } from 'react-native-image-picker';

const CAMERA_OPTIONS: CameraOptions = {
  mediaType: 'photo',
  maxWidth: 300,
  maxHeight: 550,
  quality: 1,
  saveToPhotos: true,
};

const useImagePicker = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [response, setResponse] = React.useState<ImagePickerResponse>({});

  const onOpenImagePicker = React.useCallback((type: 'capture' | 'library') => {
    if (type === 'capture') {
      ImagePicker.launchCamera(CAMERA_OPTIONS, setResponse);
    } else {
      ImagePicker.launchImageLibrary(CAMERA_OPTIONS, setResponse);
    }

    return setVisibleModal(false);
  }, []);

  const openModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  return { response, onOpenImagePicker, visibleModal, openModal, hideModal };
};

export default useImagePicker;
