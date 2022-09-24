import React from 'react';

import Text from '../Text';
import Button from '../Button';
import { Picker, PickerButton, PickerImage } from './components';

import useImagePicker from './hooks/useImagePicker';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { ReactNativeFile } from '@/types/file';

interface IImagePickerProps extends React.PropsWithChildren {
  onPick: (asset: ReactNativeFile) => void;
}

const ImagePicker: React.FC<IImagePickerProps> = ({ children, onPick }) => {
  const { onOpenImagePicker, response, visibleModal, openModal, hideModal } = useImagePicker();

  useUpdateEffect(() => {
    if (response.assets) {
      const file = {
        uri: String(response.assets[0].uri),
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      };
      onPick(file);
    }
  }, [response]);

  return (
    <Button width="auto" height="auto" onPress={openModal}>
      <Picker closePicker={hideModal} isPickerVisible={visibleModal}>
        <PickerButton topRadius={false} onPress={() => onOpenImagePicker('library')}>
          <Text variant="font16Bold" color="darkSkyBlue">
            Pick from library
          </Text>
        </PickerButton>
        <PickerButton topRadius={false} bottomRadius onPress={() => onOpenImagePicker('capture')}>
          <Text variant="font16Bold" color="darkSkyBlue">
            Take a photo with camera
          </Text>
        </PickerButton>
      </Picker>
      {children}
    </Button>
  );
};

const ImagePickerNamespace = Object.assign(ImagePicker, { Image: PickerImage });

export default ImagePickerNamespace;
