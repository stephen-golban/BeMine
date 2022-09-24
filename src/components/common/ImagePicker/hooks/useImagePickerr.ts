import React from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { CameraOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const useImagePicker = () => {
  const [filePath, setFilePath] = React.useState<ImagePickerResponse>({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonPositive: 'Allow',
        });
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
          buttonPositive: 'Allow',
        });
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type: any) => {
    const options: CameraOptions = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
    };
    const isCameraPermitted = await requestCameraPermission();
    const isStoragePermitted = await requestExternalWritePermission();

    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          if (response.errorMessage) {
            return Alert.alert(response.errorMessage);
          }
          return;
        }
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type: any) => {
    const options: CameraOptions = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        if (response.errorMessage) {
          return Alert.alert(response.errorMessage);
        }
        return;
      }
      setFilePath(response);
    });
  };

  const pickerImage = filePath?.assets?.map((asset) => asset.uri);
  return {
    filePath,
    requestCameraPermission,
    captureImage,
    pickerImage,
    chooseFile,
  };
};

export default useImagePicker;
