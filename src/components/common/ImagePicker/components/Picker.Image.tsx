import React from 'react';
import { Image } from 'react-native';

const PickerImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Image
      key={src}
      resizeMode="cover"
      resizeMethod="scale"
      style={{
        width: '100%',
        height: '100%',
      }}
      source={{ uri: src }}
    />
  );
};

export default PickerImage;
