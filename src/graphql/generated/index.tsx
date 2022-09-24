import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Iterable: any;
  Upload: any;
};

export type DateSuggestion = Node & {
  __typename?: 'DateSuggestion';
  _id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  owner: User;
  partner: User;
  proposal?: Maybe<Proposal>;
  startDate?: Maybe<Scalars['DateTime']>;
  type: InteractionType;
};

/** Connection for DateSuggestion. */
export type DateSuggestionConnection = {
  __typename?: 'DateSuggestionConnection';
  edges?: Maybe<Array<Maybe<DateSuggestionEdge>>>;
  pageInfo: DateSuggestionPageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of DateSuggestion. */
export type DateSuggestionEdge = {
  __typename?: 'DateSuggestionEdge';
  cursor: Scalars['String'];
  node?: Maybe<DateSuggestion>;
};

/** Information about the current page. */
export type DateSuggestionPageInfo = {
  __typename?: 'DateSuggestionPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The `Gender` enum type represents user gender. */
export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other',
}

export type Image = Node & {
  __typename?: 'Image';
  _id: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
};

/** Connection for Image. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges?: Maybe<Array<Maybe<ImageEdge>>>;
  pageInfo: ImagePageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of Image. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String'];
  node?: Maybe<Image>;
};

/** Information about the current page. */
export type ImagePageInfo = {
  __typename?: 'ImagePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The `InteractionType` enum type represent the type of interaction. */
export enum InteractionType {
  DateProposal = 'DateProposal',
  InviteMe = 'InviteMe',
  Like = 'Like',
  Suggestion = 'Suggestion',
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a Image. */
  createImage?: Maybe<CreateImagePayload>;
  /** Creates a Proposal. */
  createProposal?: Maybe<CreateProposalPayload>;
  /** Creates a User. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a UserInfo. */
  createUserInfo?: Maybe<CreateUserInfoPayload>;
  /** Deletes a Image. */
  deleteImage?: Maybe<DeleteImagePayload>;
  /** Deletes a UserInfo. */
  deleteUserInfo?: Maybe<DeleteUserInfoPayload>;
  /** InviteMes a Proposal. */
  inviteMeProposal?: Maybe<InviteMeProposalPayload>;
  /** Likes a DateSuggestion. */
  likeDateSuggestion?: Maybe<LikeDateSuggestionPayload>;
  /** Updates a Image. */
  updateImage?: Maybe<UpdateImagePayload>;
  /** Updates a UserInfo. */
  updateUserInfo?: Maybe<UpdateUserInfoPayload>;
};

export type MutationCreateImageArgs = {
  input: CreateImageInput;
};

export type MutationCreateProposalArgs = {
  input: CreateProposalInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationCreateUserInfoArgs = {
  input: CreateUserInfoInput;
};

export type MutationDeleteImageArgs = {
  input: DeleteImageInput;
};

export type MutationDeleteUserInfoArgs = {
  input: DeleteUserInfoInput;
};

export type MutationInviteMeProposalArgs = {
  input: InviteMeProposalInput;
};

export type MutationLikeDateSuggestionArgs = {
  input: LikeDateSuggestionInput;
};

export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};

export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};

/** A node, according to the Relay specification. */
export type Node = {
  /** The id of this node. */
  id: Scalars['ID'];
};

/** The `Orientation` enum type represents user's orientation. */
export enum Orientation {
  Asexual = 'Asexual',
  Bisexual = 'Bisexual',
  Gay = 'Gay',
  Lesbian = 'Lesbian',
  Straight = 'Straight',
}

export type Proposal = Node & {
  __typename?: 'Proposal';
  _id: Scalars['Int'];
  accepted: Scalars['Boolean'];
  dateSuggestion: DateSuggestion;
  dateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location: Scalars['Iterable'];
};

export type Query = {
  __typename?: 'Query';
  getDateSuggestions?: Maybe<DateSuggestionConnection>;
  image?: Maybe<Image>;
  images?: Maybe<ImageConnection>;
  me?: Maybe<User>;
  node?: Maybe<Node>;
  proposal?: Maybe<Proposal>;
  user?: Maybe<UserItem>;
  userInfo?: Maybe<UserInfo>;
  userInfos?: Maybe<UserInfoConnection>;
};

export type QueryGetDateSuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<InteractionType>;
};

export type QueryImageArgs = {
  id: Scalars['ID'];
};

export type QueryImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QueryProposalArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserInfoArgs = {
  id: Scalars['ID'];
};

export type QueryUserInfosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The `SeekAge` enum type represents interested year range. */
export enum SeekAge {
  EighteenToThirty = 'EighteenToThirty',
  FromFortyFive = 'FromFortyFive',
  ThirtyToFortyFive = 'ThirtyToFortyFive',
}

export type User = Node & {
  __typename?: 'User';
  _id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  images?: Maybe<ImageConnection>;
  name: Scalars['String'];
  userIdentifier: Scalars['String'];
  userInfo?: Maybe<UserInfo>;
};

export type UserImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserInfo = Node & {
  __typename?: 'UserInfo';
  _id: Scalars['Int'];
  age: Scalars['Int'];
  birthDate: Scalars['Date'];
  createdAt: Scalars['DateTime'];
  gender: Gender;
  genderPublic: Scalars['Boolean'];
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  male: Scalars['Boolean'];
  orientation: Orientation;
  orientationPublic: Scalars['Boolean'];
  receiveUpdatesByEmail: Scalars['Boolean'];
  seekAge?: Maybe<SeekAge>;
  seekGender?: Maybe<Gender>;
  updatedAt: Scalars['DateTime'];
  user: UserItem;
};

/** Connection for UserInfo. */
export type UserInfoConnection = {
  __typename?: 'UserInfoConnection';
  edges?: Maybe<Array<Maybe<UserInfoEdge>>>;
  pageInfo: UserInfoPageInfo;
  totalCount: Scalars['Int'];
};

/** Edge of UserInfo. */
export type UserInfoEdge = {
  __typename?: 'UserInfoEdge';
  cursor: Scalars['String'];
  node?: Maybe<UserInfo>;
};

/** Information about the current page. */
export type UserInfoPageInfo = {
  __typename?: 'UserInfoPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserItem = Node & {
  __typename?: 'UserItem';
  _id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  images?: Maybe<ImageConnection>;
  name: Scalars['String'];
  userIdentifier: Scalars['String'];
  userInfo?: Maybe<UserInfo>;
};

export type UserItemImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CreateImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  contentUrl?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  file?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: Scalars['String'];
};

export type CreateImagePayload = {
  __typename?: 'createImagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type CreateProposalInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  locations: Array<Scalars['String']>;
  partner: Scalars['ID'];
};

export type CreateProposalPayload = {
  __typename?: 'createProposalPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal>;
};

export type CreateUserInfoInput = {
  birthDate: Scalars['Date'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  gender: Gender;
  genderPublic: Scalars['Boolean'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  orientation: Orientation;
  orientationPublic: Scalars['Boolean'];
  receiveUpdatesByEmail: Scalars['Boolean'];
  seekAge?: InputMaybe<SeekAge>;
  seekGender?: InputMaybe<Gender>;
  updatedAt: Scalars['DateTime'];
  user: Scalars['String'];
};

export type CreateUserInfoPayload = {
  __typename?: 'createUserInfoPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserInfo>;
};

export type CreateUserInput = {
  birthDate: Scalars['Date'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  files: Array<Scalars['Upload']>;
  gender?: InputMaybe<Gender>;
  genderPublic: Scalars['Boolean'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  orientation?: InputMaybe<Orientation>;
  orientationPublic?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  receiveUpdatesByEmail?: InputMaybe<Scalars['Boolean']>;
  seekAge?: InputMaybe<SeekAge>;
  seekGender?: InputMaybe<Gender>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserItem>;
};

export type DeleteImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteImagePayload = {
  __typename?: 'deleteImagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type DeleteUserInfoInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteUserInfoPayload = {
  __typename?: 'deleteUserInfoPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserInfo>;
};

export type InviteMeProposalInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  locations: Array<Scalars['String']>;
  partner: Scalars['ID'];
};

export type InviteMeProposalPayload = {
  __typename?: 'inviteMeProposalPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal>;
};

export type LikeDateSuggestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  owner: Scalars['ID'];
};

export type LikeDateSuggestionPayload = {
  __typename?: 'likeDateSuggestionPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  dateSuggestion?: Maybe<DateSuggestion>;
};

export type UpdateImageInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  contentUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  path?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['String']>;
};

export type UpdateImagePayload = {
  __typename?: 'updateImagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type UpdateUserInfoInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  genderPublic?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  orientation?: InputMaybe<Orientation>;
  orientationPublic?: InputMaybe<Scalars['Boolean']>;
  receiveUpdatesByEmail?: InputMaybe<Scalars['Boolean']>;
  seekAge?: InputMaybe<SeekAge>;
  seekGender?: InputMaybe<Gender>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInfoPayload = {
  __typename?: 'updateUserInfoPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserInfo>;
};

export type CreateProposalMutationVariables = Exact<{
  input: CreateProposalInput;
}>;

export type CreateProposalMutation = {
  __typename?: 'Mutation';
  createProposal?: {
    __typename?: 'createProposalPayload';
    proposal?: { __typename?: 'Proposal'; id: string } | null;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?: { __typename?: 'createUserPayload'; user?: { __typename?: 'UserItem'; id: string } | null } | null;
};

export type InviteMeProposalMutationVariables = Exact<{
  input: InviteMeProposalInput;
}>;

export type InviteMeProposalMutation = {
  __typename?: 'Mutation';
  inviteMeProposal?: {
    __typename?: 'inviteMeProposalPayload';
    proposal?: { __typename?: 'Proposal'; id: string } | null;
  } | null;
};

export type LikeDateSuggestionMutationVariables = Exact<{
  input: LikeDateSuggestionInput;
}>;

export type LikeDateSuggestionMutation = {
  __typename?: 'Mutation';
  likeDateSuggestion?: {
    __typename?: 'likeDateSuggestionPayload';
    dateSuggestion?: { __typename?: 'DateSuggestion'; id: string; owner: { __typename?: 'User'; name: string } } | null;
  } | null;
};

export type GetDateSuggestionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<InteractionType>;
}>;

export type GetDateSuggestionsQuery = {
  __typename?: 'Query';
  getDateSuggestions?: {
    __typename?: 'DateSuggestionConnection';
    edges?: Array<{
      __typename?: 'DateSuggestionEdge';
      node?: {
        __typename?: 'DateSuggestion';
        id: string;
        type: InteractionType;
        proposal?: {
          __typename?: 'Proposal';
          id: string;
          accepted: boolean;
          location: any;
          dateTime?: any | null;
        } | null;
        partner: {
          __typename?: 'User';
          id: string;
          name: string;
          userInfo?: { __typename?: 'UserInfo'; gender: Gender } | null;
          images?: {
            __typename?: 'ImageConnection';
            edges?: Array<{
              __typename?: 'ImageEdge';
              node?: { __typename?: 'Image'; id: string; url: string } | null;
            } | null> | null;
          } | null;
        };
      } | null;
    } | null> | null;
  } | null;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: { __typename?: 'UserItem'; id: string; name: string; email: string } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id: string;
    _id: number;
    name: string;
    email: string;
    createdAt: any;
    userIdentifier: string;
    images?: {
      __typename?: 'ImageConnection';
      edges?: Array<{
        __typename?: 'ImageEdge';
        node?: { __typename?: 'Image'; id: string; url: string } | null;
      } | null> | null;
    } | null;
    userInfo?: {
      __typename?: 'UserInfo';
      id: string;
      birthDate: any;
      gender: Gender;
      genderPublic: boolean;
      orientation: Orientation;
      orientationPublic: boolean;
      seekAge?: SeekAge | null;
      createdAt: any;
      latitude: string;
      longitude: string;
    } | null;
  } | null;
};

export const CreateProposalDocument = gql`
  mutation CreateProposal($input: createProposalInput!) {
    createProposal(input: $input) {
      proposal {
        id
      }
    }
  }
`;
export type CreateProposalMutationFn = Apollo.MutationFunction<CreateProposalMutation, CreateProposalMutationVariables>;

/**
 * __useCreateProposalMutation__
 *
 * To run a mutation, you first call `useCreateProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProposalMutation, { data, loading, error }] = useCreateProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProposalMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProposalMutation, CreateProposalMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProposalMutation, CreateProposalMutationVariables>(CreateProposalDocument, options);
}
export type CreateProposalMutationHookResult = ReturnType<typeof useCreateProposalMutation>;
export type CreateProposalMutationResult = Apollo.MutationResult<CreateProposalMutation>;
export type CreateProposalMutationOptions = Apollo.BaseMutationOptions<
  CreateProposalMutation,
  CreateProposalMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      user {
        id
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const InviteMeProposalDocument = gql`
  mutation InviteMeProposal($input: inviteMeProposalInput!) {
    inviteMeProposal(input: $input) {
      proposal {
        id
      }
    }
  }
`;
export type InviteMeProposalMutationFn = Apollo.MutationFunction<
  InviteMeProposalMutation,
  InviteMeProposalMutationVariables
>;

/**
 * __useInviteMeProposalMutation__
 *
 * To run a mutation, you first call `useInviteMeProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteMeProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteMeProposalMutation, { data, loading, error }] = useInviteMeProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInviteMeProposalMutation(
  baseOptions?: Apollo.MutationHookOptions<InviteMeProposalMutation, InviteMeProposalMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InviteMeProposalMutation, InviteMeProposalMutationVariables>(
    InviteMeProposalDocument,
    options,
  );
}
export type InviteMeProposalMutationHookResult = ReturnType<typeof useInviteMeProposalMutation>;
export type InviteMeProposalMutationResult = Apollo.MutationResult<InviteMeProposalMutation>;
export type InviteMeProposalMutationOptions = Apollo.BaseMutationOptions<
  InviteMeProposalMutation,
  InviteMeProposalMutationVariables
>;
export const LikeDateSuggestionDocument = gql`
  mutation LikeDateSuggestion($input: likeDateSuggestionInput!) {
    likeDateSuggestion(input: $input) {
      dateSuggestion {
        id
        owner {
          name
        }
      }
    }
  }
`;
export type LikeDateSuggestionMutationFn = Apollo.MutationFunction<
  LikeDateSuggestionMutation,
  LikeDateSuggestionMutationVariables
>;

/**
 * __useLikeDateSuggestionMutation__
 *
 * To run a mutation, you first call `useLikeDateSuggestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeDateSuggestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeDateSuggestionMutation, { data, loading, error }] = useLikeDateSuggestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLikeDateSuggestionMutation(
  baseOptions?: Apollo.MutationHookOptions<LikeDateSuggestionMutation, LikeDateSuggestionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LikeDateSuggestionMutation, LikeDateSuggestionMutationVariables>(
    LikeDateSuggestionDocument,
    options,
  );
}
export type LikeDateSuggestionMutationHookResult = ReturnType<typeof useLikeDateSuggestionMutation>;
export type LikeDateSuggestionMutationResult = Apollo.MutationResult<LikeDateSuggestionMutation>;
export type LikeDateSuggestionMutationOptions = Apollo.BaseMutationOptions<
  LikeDateSuggestionMutation,
  LikeDateSuggestionMutationVariables
>;
export const GetDateSuggestionsDocument = gql`
  query getDateSuggestions($offset: Int, $limit: Int, $type: InteractionType) {
    getDateSuggestions(offset: $offset, limit: $limit, type: $type) {
      edges {
        node {
          id
          type
          proposal {
            id
            accepted
            location
            dateTime
          }
          partner {
            id
            name
            userInfo {
              gender
            }
            images {
              edges {
                node {
                  id
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetDateSuggestionsQuery__
 *
 * To run a query within a React component, call `useGetDateSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDateSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDateSuggestionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetDateSuggestionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDateSuggestionsQuery, GetDateSuggestionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDateSuggestionsQuery, GetDateSuggestionsQueryVariables>(
    GetDateSuggestionsDocument,
    options,
  );
}
export function useGetDateSuggestionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDateSuggestionsQuery, GetDateSuggestionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDateSuggestionsQuery, GetDateSuggestionsQueryVariables>(
    GetDateSuggestionsDocument,
    options,
  );
}
export type GetDateSuggestionsQueryHookResult = ReturnType<typeof useGetDateSuggestionsQuery>;
export type GetDateSuggestionsLazyQueryHookResult = ReturnType<typeof useGetDateSuggestionsLazyQuery>;
export type GetDateSuggestionsQueryResult = Apollo.QueryResult<
  GetDateSuggestionsQuery,
  GetDateSuggestionsQueryVariables
>;
export const UserDocument = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MeDocument = gql`
  query me {
    me {
      id
      _id
      name
      email
      images {
        edges {
          node {
            id
            url
          }
        }
      }
      createdAt
      userIdentifier
      userInfo {
        id
        birthDate
        gender
        genderPublic
        orientation
        orientationPublic
        seekAge
        createdAt
        latitude
        longitude
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
