import React from 'react';

import { Controller } from 'react-hook-form';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, ImagePicker, Text } from '@/components/common';

import { ReactNativeFile } from '@/types/file';
import { StepWithChildren } from '@/components/common/Stepper/components';

const PhotosStep: React.FC = () => {
  const { control, setValue } = useTypedFormContext();

  const [pickedPhotos, setPickedPhotos] = React.useState<ReactNativeFile[]>([]);

  const handlePickPhotos = (asset: ReactNativeFile) => {
    return setPickedPhotos((prev) => [...new Set([...prev, asset])]);
  };

  useUpdateEffect(() => {
    setValue('photos', pickedPhotos, {
      shouldDirty: pickedPhotos.length > 1,
      shouldValidate: pickedPhotos.length > 1,
    });
  }, [pickedPhotos]);

  return (
    <Controller
      name="photos"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { value }, fieldState }) => {
        return (
          <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
            <Box flexDirection="column" height="auto">
              <Text color="white" variant="font20Bold" marginTop="md">
                Add Photos:
              </Text>
              <Text color="white" variant="font14Regular" marginBottom="md">
                Upload at least 2 photos
              </Text>
              <Box flexWrap="wrap" justifyContent="space-between" height="auto">
                {Array.from(Array(4)).map((_, i) => (
                  <Box margin="xs" overflow="hidden" width="47%" height={215} flexDirection="column" key={'box' + i}>
                    <ImagePicker onPick={handlePickPhotos}>
                      {value[i] ? (
                        <ImagePicker.Image src={value[i].uri} />
                      ) : (
                        <Box backgroundColor="white_12" alignItems="center" justifyContent="center">
                          <Box
                            width={35}
                            height={35}
                            borderRadius={999}
                            alignItems="center"
                            justifyContent="center"
                            backgroundColor="white"
                          >
                            <Text color="darkSkyBlue" fontSize={26} fontWeight="bold">
                              +
                            </Text>
                          </Box>
                        </Box>
                      )}
                    </ImagePicker>
                  </Box>
                ))}
              </Box>
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default PhotosStep;
