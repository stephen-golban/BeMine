import React from 'react';

import { InteractionType, QueryGetDateSuggestionsArgs, useGetDateSuggestionsQuery } from '@/graphql/generated';
import { Suggestion } from '@/types/suggestions';

type UseDateSuggestions = Partial<QueryGetDateSuggestionsArgs>;

const useDateSuggestions = (props: UseDateSuggestions) => {
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  const { loading, data, error, fetchMore } = useGetDateSuggestionsQuery({
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
    variables: {
      ...props,
    },
  });

  React.useEffect(() => {
    if (data?.getDateSuggestions?.edges) {
      const edges = data.getDateSuggestions.edges.map((edge) => {
        return {
          id: String(edge?.node?.id),
          name: String(edge?.node?.partner.name),
          interactionType: edge?.node?.type as InteractionType,
          proposal: {
            id: String(edge?.node?.proposal?.id),
            location: edge?.node?.proposal?.location,
            dateTime: edge?.node?.proposal?.dateTime,
            accepted: Boolean(edge?.node?.proposal?.accepted),
          },
          gender: String(edge?.node?.partner.userInfo?.gender),
          images: edge?.node?.partner.images?.edges?.map((img) => String(img?.node?.url)) as string[],
        };
      });

      return setSuggestions((prev) => [...new Set([...prev, ...edges])]);
    }
  }, [data]);

  return { suggestions, loading, error, fetchMore };
};

export default useDateSuggestions;
