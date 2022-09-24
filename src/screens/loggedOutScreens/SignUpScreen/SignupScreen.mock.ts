import { ReactNativeFile } from '@/types/file';
import { Gender, Orientation, SeekAge } from '@/graphql/generated';

export const DEFAULT_SIGNUP_FORM_VALUES = {
  name: '',
  email: { email: '', receiveUpdatesByEmail: true },
  password: '',
  gender: { gender: '' as Gender, genderPublic: true },
  birthDate: new Date(),
  seekAge: '' as SeekAge,
  orientation: { orientation: '' as Orientation, orientationPublic: true },
  seekGender: '' as Gender,
  photos: [] as ReactNativeFile[],
};

export type SignupFormValues = typeof DEFAULT_SIGNUP_FORM_VALUES;
