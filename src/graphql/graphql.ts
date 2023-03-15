/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ICacheControlScope =
  | 'PRIVATE'
  | 'PUBLIC';

export type ICharacter = {
  __typename: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<IEpisode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<ILocation>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<ILocation>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type ICharacters = {
  __typename: 'Characters';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<ICharacter>>>;
};

export type IEpisode = {
  __typename: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<ICharacter>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type IEpisodes = {
  __typename: 'Episodes';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<IEpisode>>>;
};

export type IFilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IFilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IFilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IInfo = {
  __typename: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type ILocation = {
  __typename: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<ICharacter>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type ILocations = {
  __typename: 'Locations';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<ILocation>>>;
};

export type IQuery = {
  __typename: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<ICharacter>;
  /** Get the list of all characters */
  characters?: Maybe<ICharacters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<ICharacter>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<IEpisode>;
  /** Get the list of all episodes */
  episodes?: Maybe<IEpisodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<IEpisode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<ILocation>;
  /** Get the list of all locations */
  locations?: Maybe<ILocations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<ILocation>>>;
};


export type IQueryCharacterArgs = {
  id: Scalars['ID'];
};


export type IQueryCharactersArgs = {
  filter?: InputMaybe<IFilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type IQueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type IQueryEpisodesArgs = {
  filter?: InputMaybe<IFilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type IQueryLocationArgs = {
  id: Scalars['ID'];
};


export type IQueryLocationsArgs = {
  filter?: InputMaybe<IFilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type IMyQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type IMyQuery = { __typename: 'Query', characters?: { __typename: 'Characters', info?: { __typename: 'Info', count?: number | null } | null, results?: Array<{ __typename: 'Character', name?: string | null } | null> | null } | null };


export const MyQueryDoc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<IMyQuery, IMyQueryVariables>;
export type CharacterKeySpecifier = ('created' | 'episode' | 'gender' | 'id' | 'image' | 'location' | 'name' | 'origin' | 'species' | 'status' | 'type' | CharacterKeySpecifier)[];
export type CharacterFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	species?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharactersKeySpecifier = ('info' | 'results' | CharactersKeySpecifier)[];
export type CharactersFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EpisodeKeySpecifier = ('air_date' | 'characters' | 'created' | 'episode' | 'id' | 'name' | EpisodeKeySpecifier)[];
export type EpisodeFieldPolicy = {
	air_date?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EpisodesKeySpecifier = ('info' | 'results' | EpisodesKeySpecifier)[];
export type EpisodesFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfoKeySpecifier = ('count' | 'next' | 'pages' | 'prev' | InfoKeySpecifier)[];
export type InfoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	prev?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('created' | 'dimension' | 'id' | 'name' | 'residents' | 'type' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	dimension?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	residents?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationsKeySpecifier = ('info' | 'results' | LocationsKeySpecifier)[];
export type LocationsFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('character' | 'characters' | 'charactersByIds' | 'episode' | 'episodes' | 'episodesByIds' | 'location' | 'locations' | 'locationsByIds' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	character?: FieldPolicy<any> | FieldReadFunction<any>,
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	charactersByIds?: FieldPolicy<any> | FieldReadFunction<any>,
	episode?: FieldPolicy<any> | FieldReadFunction<any>,
	episodes?: FieldPolicy<any> | FieldReadFunction<any>,
	episodesByIds?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	locationsByIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterKeySpecifier | (() => undefined | CharacterKeySpecifier),
		fields?: CharacterFieldPolicy,
	},
	Characters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharactersKeySpecifier | (() => undefined | CharactersKeySpecifier),
		fields?: CharactersFieldPolicy,
	},
	Episode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EpisodeKeySpecifier | (() => undefined | EpisodeKeySpecifier),
		fields?: EpisodeFieldPolicy,
	},
	Episodes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EpisodesKeySpecifier | (() => undefined | EpisodesKeySpecifier),
		fields?: EpisodesFieldPolicy,
	},
	Info?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfoKeySpecifier | (() => undefined | InfoKeySpecifier),
		fields?: InfoFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	Locations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationsKeySpecifier | (() => undefined | LocationsKeySpecifier),
		fields?: LocationsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    