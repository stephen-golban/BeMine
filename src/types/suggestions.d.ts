import { InteractionType } from '@/graphql/generated';

export type Suggestion = {
  id: string;
  name: string;
  images: string[];
  gender: string;
  interactionType: InteractionType;
  proposal: {
    id: string;
    dateTime: any;
    location: string;
    accepted: boolean;
  };
};
