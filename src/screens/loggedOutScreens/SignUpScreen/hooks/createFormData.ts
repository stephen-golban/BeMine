import moment from 'moment';
import { ReactNativeFile } from '@/types/file';

export const createFormData = <T extends Record<string, any>>(data: T) => {
  const { email, gender, orientation, photos, ...rest } = data;

  const Body = new FormData();

  const birthDate = moment(rest.birthDate).format('YYYY-MM-DD');
  const files = Array.from({ length: photos.length }).fill(null);

  const operations = JSON.stringify({
    query: `mutation ($files: [Upload!]!) { createUser(input: { name: "${rest.name}", email: "${email.email}", password:"${rest.password}", latitude: "${rest.latitude}", longitude: "${rest.longitude}", birthDate:"${birthDate}", seekAge: ${rest.seekAge}, gender: ${gender.gender}, genderPublic: ${gender.genderPublic}, seekGender: ${rest.seekGender}, orientation: ${orientation.orientation}, orientationPublic: ${orientation.orientationPublic}, receiveUpdatesByEmail: ${email.receiveUpdatesByEmail}, files: $files }) { user { id name } } }`,
    variables: { files: files },
  });

  const map = JSON.stringify({
    ...photos.map((_: ReactNativeFile, index: number) => {
      return [`variables.files.${index}`];
    }),
  });

  Body.append('operations', operations);
  Body.append('map', map);
  photos.forEach((file: ReactNativeFile, index: number) => {
    return Body.append(index.toString(), file);
  });

  return Body;
};
