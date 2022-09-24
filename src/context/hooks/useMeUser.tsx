import React from 'react';

import { useMeQuery } from '@/graphql/generated';
import { useAuthContext } from '../Auth.Context';

const useMeUser = () => {
  const { utilities } = useAuthContext();
  const { loading, data, error } = useMeQuery();

  React.useEffect(() => {
    if (data) {
      if (data.me) {
        const { id, name, images, userInfo } = data.me;
        if (userInfo && images?.edges) {
          const imgs = images.edges.map((img) => {
            return {
              id: String(img?.node?.id),
              url: String(img?.node?.url),
            };
          });

          return utilities.setPropertyState('currentUser', {
            id,
            name,
            images: imgs,
            gender: userInfo.gender,
          });
        }
      }
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      if (error.message.includes('401')) {
        utilities.logout();
      }
    }
  }, [error]);

  return { loading, error: error?.message };
};

export default useMeUser;
