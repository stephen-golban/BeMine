import React from 'react';

import axios from 'axios';

import { Suggestion } from './useDateSuggestions';

const useFakeDateSuggestions = () => {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  const getData = React.useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get('https://picsum.photos/v2/list?limit=80');

      if (res) {
        const edges = res.data.map((item: any) => {
          return {
            id: item.id,
            name: item.author,
            images: [item.download_url, item.download_url],
          };
        });

        setSuggestions((prev) => [...new Set([...prev, ...edges])]);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  return {
    error,
    loading,
    suggestions,
  };
};

export default useFakeDateSuggestions;
