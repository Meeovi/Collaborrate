/* eslint-disable */
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateApitoken = {
  __typename?: 'AggregateApitoken';
  _avg?: Maybe<ApitokenAvgAggregate>;
  _count?: Maybe<ApitokenCountAggregate>;
  _max?: Maybe<ApitokenMaxAggregate>;
  _min?: Maybe<ApitokenMinAggregate>;
  _sum?: Maybe<ApitokenSumAggregate>;
};

export type AggregateCategories = {
  __typename?: 'AggregateCategories';
  _avg?: Maybe<CategoriesAvgAggregate>;
  _count?: Maybe<CategoriesCountAggregate>;
  _max?: Maybe<CategoriesMaxAggregate>;
  _min?: Maybe<CategoriesMinAggregate>;
  _sum?: Maybe<CategoriesSumAggregate>;
};

export type AggregateContent_Type = {
  __typename?: 'AggregateContent_type';
  _avg?: Maybe<Content_TypeAvgAggregate>;
  _count?: Maybe<Content_TypeCountAggregate>;
  _max?: Maybe<Content_TypeMaxAggregate>;
  _min?: Maybe<Content_TypeMinAggregate>;
  _sum?: Maybe<Content_TypeSumAggregate>;
};

export type AggregateCustomers = {
  __typename?: 'AggregateCustomers';
  _avg?: Maybe<CustomersAvgAggregate>;
  _count?: Maybe<CustomersCountAggregate>;
  _max?: Maybe<CustomersMaxAggregate>;
  _min?: Maybe<CustomersMinAggregate>;
  _sum?: Maybe<CustomersSumAggregate>;
};

export type AggregateDashboardgraphql = {
  __typename?: 'AggregateDashboardgraphql';
  _avg?: Maybe<DashboardgraphqlAvgAggregate>;
  _count?: Maybe<DashboardgraphqlCountAggregate>;
  _max?: Maybe<DashboardgraphqlMaxAggregate>;
  _min?: Maybe<DashboardgraphqlMinAggregate>;
  _sum?: Maybe<DashboardgraphqlSumAggregate>;
};

export type AggregateDashboardjson = {
  __typename?: 'AggregateDashboardjson';
  _avg?: Maybe<DashboardjsonAvgAggregate>;
  _count?: Maybe<DashboardjsonCountAggregate>;
  _max?: Maybe<DashboardjsonMaxAggregate>;
  _min?: Maybe<DashboardjsonMinAggregate>;
  _sum?: Maybe<DashboardjsonSumAggregate>;
};

export type AggregateDashboardrestapi = {
  __typename?: 'AggregateDashboardrestapi';
  _avg?: Maybe<DashboardrestapiAvgAggregate>;
  _count?: Maybe<DashboardrestapiCountAggregate>;
  _max?: Maybe<DashboardrestapiMaxAggregate>;
  _min?: Maybe<DashboardrestapiMinAggregate>;
  _sum?: Maybe<DashboardrestapiSumAggregate>;
};

export type AggregateDashboards = {
  __typename?: 'AggregateDashboards';
  _avg?: Maybe<DashboardsAvgAggregate>;
  _count?: Maybe<DashboardsCountAggregate>;
  _max?: Maybe<DashboardsMaxAggregate>;
  _min?: Maybe<DashboardsMinAggregate>;
  _sum?: Maybe<DashboardsSumAggregate>;
};

export type AggregateDashboardslides = {
  __typename?: 'AggregateDashboardslides';
  _avg?: Maybe<DashboardslidesAvgAggregate>;
  _count?: Maybe<DashboardslidesCountAggregate>;
  _max?: Maybe<DashboardslidesMaxAggregate>;
  _min?: Maybe<DashboardslidesMinAggregate>;
  _sum?: Maybe<DashboardslidesSumAggregate>;
};

export type AggregateDashboardslist = {
  __typename?: 'AggregateDashboardslist';
  _avg?: Maybe<DashboardslistAvgAggregate>;
  _count?: Maybe<DashboardslistCountAggregate>;
  _max?: Maybe<DashboardslistMaxAggregate>;
  _min?: Maybe<DashboardslistMinAggregate>;
  _sum?: Maybe<DashboardslistSumAggregate>;
};

export type AggregateIntegrations = {
  __typename?: 'AggregateIntegrations';
  _avg?: Maybe<IntegrationsAvgAggregate>;
  _count?: Maybe<IntegrationsCountAggregate>;
  _max?: Maybe<IntegrationsMaxAggregate>;
  _min?: Maybe<IntegrationsMinAggregate>;
  _sum?: Maybe<IntegrationsSumAggregate>;
};

export type AggregateInternalization = {
  __typename?: 'AggregateInternalization';
  _avg?: Maybe<InternalizationAvgAggregate>;
  _count?: Maybe<InternalizationCountAggregate>;
  _max?: Maybe<InternalizationMaxAggregate>;
  _min?: Maybe<InternalizationMinAggregate>;
  _sum?: Maybe<InternalizationSumAggregate>;
};

export type AggregateLogIn = {
  __typename?: 'AggregateLogIn';
  _avg?: Maybe<LogInAvgAggregate>;
  _count?: Maybe<LogInCountAggregate>;
  _max?: Maybe<LogInMaxAggregate>;
  _min?: Maybe<LogInMinAggregate>;
  _sum?: Maybe<LogInSumAggregate>;
};

export type AggregateMediamanager = {
  __typename?: 'AggregateMediamanager';
  _avg?: Maybe<MediamanagerAvgAggregate>;
  _count?: Maybe<MediamanagerCountAggregate>;
  _max?: Maybe<MediamanagerMaxAggregate>;
  _min?: Maybe<MediamanagerMinAggregate>;
  _sum?: Maybe<MediamanagerSumAggregate>;
};

export type AggregatePages = {
  __typename?: 'AggregatePages';
  _avg?: Maybe<PagesAvgAggregate>;
  _count?: Maybe<PagesCountAggregate>;
  _max?: Maybe<PagesMaxAggregate>;
  _min?: Maybe<PagesMinAggregate>;
  _sum?: Maybe<PagesSumAggregate>;
};

export type AggregatePermissions = {
  __typename?: 'AggregatePermissions';
  _avg?: Maybe<PermissionsAvgAggregate>;
  _count?: Maybe<PermissionsCountAggregate>;
  _max?: Maybe<PermissionsMaxAggregate>;
  _min?: Maybe<PermissionsMinAggregate>;
  _sum?: Maybe<PermissionsSumAggregate>;
};

export type AggregatePlugins = {
  __typename?: 'AggregatePlugins';
  _avg?: Maybe<PluginsAvgAggregate>;
  _count?: Maybe<PluginsCountAggregate>;
  _max?: Maybe<PluginsMaxAggregate>;
  _min?: Maybe<PluginsMinAggregate>;
  _sum?: Maybe<PluginsSumAggregate>;
};

export type AggregateProviders = {
  __typename?: 'AggregateProviders';
  _avg?: Maybe<ProvidersAvgAggregate>;
  _count?: Maybe<ProvidersCountAggregate>;
  _max?: Maybe<ProvidersMaxAggregate>;
  _min?: Maybe<ProvidersMinAggregate>;
  _sum?: Maybe<ProvidersSumAggregate>;
};

export type AggregateRoles = {
  __typename?: 'AggregateRoles';
  _avg?: Maybe<RolesAvgAggregate>;
  _count?: Maybe<RolesCountAggregate>;
  _max?: Maybe<RolesMaxAggregate>;
  _min?: Maybe<RolesMinAggregate>;
  _sum?: Maybe<RolesSumAggregate>;
};

export type AggregateSettings = {
  __typename?: 'AggregateSettings';
  _avg?: Maybe<SettingsAvgAggregate>;
  _count?: Maybe<SettingsCountAggregate>;
  _max?: Maybe<SettingsMaxAggregate>;
  _min?: Maybe<SettingsMinAggregate>;
  _sum?: Maybe<SettingsSumAggregate>;
};

export type AggregateTags = {
  __typename?: 'AggregateTags';
  _avg?: Maybe<TagsAvgAggregate>;
  _count?: Maybe<TagsCountAggregate>;
  _max?: Maybe<TagsMaxAggregate>;
  _min?: Maybe<TagsMinAggregate>;
  _sum?: Maybe<TagsSumAggregate>;
};

export type AggregateThemes = {
  __typename?: 'AggregateThemes';
  _avg?: Maybe<ThemesAvgAggregate>;
  _count?: Maybe<ThemesCountAggregate>;
  _max?: Maybe<ThemesMaxAggregate>;
  _min?: Maybe<ThemesMinAggregate>;
  _sum?: Maybe<ThemesSumAggregate>;
};

export type AggregateUpload_File = {
  __typename?: 'AggregateUpload_file';
  _avg?: Maybe<Upload_FileAvgAggregate>;
  _count?: Maybe<Upload_FileCountAggregate>;
  _max?: Maybe<Upload_FileMaxAggregate>;
  _min?: Maybe<Upload_FileMinAggregate>;
  _sum?: Maybe<Upload_FileSumAggregate>;
};

export type AggregateUsers = {
  __typename?: 'AggregateUsers';
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
};

export type AggregateWebhooks = {
  __typename?: 'AggregateWebhooks';
  _avg?: Maybe<WebhooksAvgAggregate>;
  _count?: Maybe<WebhooksCountAggregate>;
  _max?: Maybe<WebhooksMaxAggregate>;
  _min?: Maybe<WebhooksMinAggregate>;
  _sum?: Maybe<WebhooksSumAggregate>;
};

export type Apitoken = {
  __typename?: 'Apitoken';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  token: Scalars['BigInt'];
  token_type?: Maybe<Scalars['String']>;
};

export type ApitokenAvgAggregate = {
  __typename?: 'ApitokenAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['Float']>;
};

export type ApitokenAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type ApitokenCountAggregate = {
  __typename?: 'ApitokenCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  token: Scalars['Int'];
  token_type: Scalars['Int'];
};

export type ApitokenCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
};

export type ApitokenCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  token: Scalars['BigInt'];
  token_type?: InputMaybe<Scalars['String']>;
};

export type ApitokenCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  token: Scalars['BigInt'];
  token_type?: InputMaybe<Scalars['String']>;
};

export type ApitokenGroupBy = {
  __typename?: 'ApitokenGroupBy';
  _avg?: Maybe<ApitokenAvgAggregate>;
  _count?: Maybe<ApitokenCountAggregate>;
  _max?: Maybe<ApitokenMaxAggregate>;
  _min?: Maybe<ApitokenMinAggregate>;
  _sum?: Maybe<ApitokenSumAggregate>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  token: Scalars['BigInt'];
  token_type?: Maybe<Scalars['String']>;
};

export type ApitokenMaxAggregate = {
  __typename?: 'ApitokenMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['BigInt']>;
  token_type?: Maybe<Scalars['String']>;
};

export type ApitokenMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
};

export type ApitokenMinAggregate = {
  __typename?: 'ApitokenMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['BigInt']>;
  token_type?: Maybe<Scalars['String']>;
};

export type ApitokenMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
};

export enum ApitokenOrderByRelevanceFieldEnum {
  Description = 'description',
  Name = 'name',
  TokenType = 'token_type'
}

export type ApitokenOrderByRelevanceInput = {
  fields: Array<ApitokenOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ApitokenOrderByWithAggregationInput = {
  _avg?: InputMaybe<ApitokenAvgOrderByAggregateInput>;
  _count?: InputMaybe<ApitokenCountOrderByAggregateInput>;
  _max?: InputMaybe<ApitokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<ApitokenMinOrderByAggregateInput>;
  _sum?: InputMaybe<ApitokenSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
};

export type ApitokenOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ApitokenOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
};

export enum ApitokenScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Token = 'token',
  TokenType = 'token_type'
}

export type ApitokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ApitokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ApitokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ApitokenScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<BigIntWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ApitokenSumAggregate = {
  __typename?: 'ApitokenSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  token?: Maybe<Scalars['BigInt']>;
};

export type ApitokenSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type ApitokenUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ApitokenUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ApitokenWhereInput = {
  AND?: InputMaybe<Array<ApitokenWhereInput>>;
  NOT?: InputMaybe<Array<ApitokenWhereInput>>;
  OR?: InputMaybe<Array<ApitokenWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  token?: InputMaybe<BigIntFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
};

export type ApitokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['BigInt']>;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type Categories = {
  __typename?: 'Categories';
  content?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  product?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type CategoriesAvgAggregate = {
  __typename?: 'CategoriesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CategoriesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoriesCountAggregate = {
  __typename?: 'CategoriesCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  country: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  meta_description: Scalars['Int'];
  meta_keywords: Scalars['Int'];
  meta_title: Scalars['Int'];
  meta_url: Scalars['Int'];
  name: Scalars['Int'];
  product: Scalars['Int'];
  status: Scalars['Int'];
  thumbnail: Scalars['Int'];
  visibility: Scalars['Int'];
  websites: Scalars['Int'];
  workspaces: Scalars['Int'];
};

export type CategoriesCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  meta_url?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  visibility?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type CategoriesCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_keywords?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  meta_url?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  product?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['String']>;
  websites?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
};

export type CategoriesCreateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_keywords?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  meta_url?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  product?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['String']>;
  websites?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
};

export type CategoriesGroupBy = {
  __typename?: 'CategoriesGroupBy';
  _avg?: Maybe<CategoriesAvgAggregate>;
  _count?: Maybe<CategoriesCountAggregate>;
  _max?: Maybe<CategoriesMaxAggregate>;
  _min?: Maybe<CategoriesMinAggregate>;
  _sum?: Maybe<CategoriesSumAggregate>;
  content?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  product?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type CategoriesMaxAggregate = {
  __typename?: 'CategoriesMaxAggregate';
  content?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type CategoriesMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  meta_url?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  visibility?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type CategoriesMinAggregate = {
  __typename?: 'CategoriesMinAggregate';
  content?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type CategoriesMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  meta_url?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  visibility?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export enum CategoriesOrderByRelevanceFieldEnum {
  Content = 'content',
  Country = 'country',
  Description = 'description',
  Image = 'image',
  MetaDescription = 'meta_description',
  MetaKeywords = 'meta_keywords',
  MetaTitle = 'meta_title',
  MetaUrl = 'meta_url',
  Name = 'name',
  Product = 'product',
  Thumbnail = 'thumbnail',
  Visibility = 'visibility',
  Websites = 'websites',
  Workspaces = 'workspaces'
}

export type CategoriesOrderByRelevanceInput = {
  fields: Array<CategoriesOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CategoriesOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoriesAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoriesCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoriesMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoriesMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategoriesSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  meta_url?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  visibility?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type CategoriesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CategoriesOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  meta_url?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  visibility?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export enum CategoriesScalarFieldEnum {
  Content = 'content',
  Country = 'country',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  MetaDescription = 'meta_description',
  MetaKeywords = 'meta_keywords',
  MetaTitle = 'meta_title',
  MetaUrl = 'meta_url',
  Name = 'name',
  Product = 'product',
  Status = 'status',
  Thumbnail = 'thumbnail',
  Visibility = 'visibility',
  Websites = 'websites',
  Workspaces = 'workspaces'
}

export type CategoriesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoriesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoriesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoriesScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_description?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_keywords?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_title?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  product?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<BoolNullableWithAggregatesFilter>;
  thumbnail?: InputMaybe<StringNullableWithAggregatesFilter>;
  visibility?: InputMaybe<StringNullableWithAggregatesFilter>;
  websites?: InputMaybe<StringNullableWithAggregatesFilter>;
  workspaces?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CategoriesSumAggregate = {
  __typename?: 'CategoriesSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CategoriesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoriesUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visibility?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  websites?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoriesUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visibility?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  websites?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoriesWhereInput = {
  AND?: InputMaybe<Array<CategoriesWhereInput>>;
  NOT?: InputMaybe<Array<CategoriesWhereInput>>;
  OR?: InputMaybe<Array<CategoriesWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  meta_description?: InputMaybe<StringNullableFilter>;
  meta_keywords?: InputMaybe<StringNullableFilter>;
  meta_title?: InputMaybe<StringNullableFilter>;
  meta_url?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<BoolNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<StringNullableFilter>;
  websites?: InputMaybe<StringNullableFilter>;
  workspaces?: InputMaybe<StringNullableFilter>;
};

export type CategoriesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Content_Type = {
  __typename?: 'Content_type';
  boolean?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  database_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  json?: Maybe<Scalars['JSON']>;
  link?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Decimal']>;
  password?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['String']>;
};

export type Content_TypeAvgAggregate = {
  __typename?: 'Content_typeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Decimal']>;
};

export type Content_TypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
};

export type Content_TypeCountAggregate = {
  __typename?: 'Content_typeCountAggregate';
  _all: Scalars['Int'];
  boolean: Scalars['Int'];
  created_at: Scalars['Int'];
  database_name: Scalars['Int'];
  date: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  json: Scalars['Int'];
  link: Scalars['Int'];
  media: Scalars['Int'];
  number: Scalars['Int'];
  password: Scalars['Int'];
  rich_text: Scalars['Int'];
  text: Scalars['Int'];
  time: Scalars['Int'];
  timestamp: Scalars['Int'];
  uid: Scalars['Int'];
};

export type Content_TypeCountOrderByAggregateInput = {
  boolean?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  database_name?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  json?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rich_text?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type Content_TypeCreateInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  database_name?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  json?: InputMaybe<Scalars['JSON']>;
  link?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Decimal']>;
  password?: InputMaybe<Scalars['String']>;
  rich_text?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['DateTime']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type Content_TypeCreateManyInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  database_name?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  json?: InputMaybe<Scalars['JSON']>;
  link?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Decimal']>;
  password?: InputMaybe<Scalars['String']>;
  rich_text?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['DateTime']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type Content_TypeGroupBy = {
  __typename?: 'Content_typeGroupBy';
  _avg?: Maybe<Content_TypeAvgAggregate>;
  _count?: Maybe<Content_TypeCountAggregate>;
  _max?: Maybe<Content_TypeMaxAggregate>;
  _min?: Maybe<Content_TypeMinAggregate>;
  _sum?: Maybe<Content_TypeSumAggregate>;
  boolean?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  database_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  json?: Maybe<Scalars['JSON']>;
  link?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Decimal']>;
  password?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['String']>;
};

export type Content_TypeMaxAggregate = {
  __typename?: 'Content_typeMaxAggregate';
  boolean?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  database_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  link?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Decimal']>;
  password?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['String']>;
};

export type Content_TypeMaxOrderByAggregateInput = {
  boolean?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  database_name?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rich_text?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type Content_TypeMinAggregate = {
  __typename?: 'Content_typeMinAggregate';
  boolean?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  database_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  link?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Decimal']>;
  password?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  uid?: Maybe<Scalars['String']>;
};

export type Content_TypeMinOrderByAggregateInput = {
  boolean?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  database_name?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rich_text?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export enum Content_TypeOrderByRelevanceFieldEnum {
  DatabaseName = 'database_name',
  Email = 'email',
  Link = 'link',
  Media = 'media',
  Password = 'password',
  RichText = 'rich_text',
  Text = 'text',
  Uid = 'uid'
}

export type Content_TypeOrderByRelevanceInput = {
  fields: Array<Content_TypeOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type Content_TypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<Content_TypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<Content_TypeCountOrderByAggregateInput>;
  _max?: InputMaybe<Content_TypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<Content_TypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<Content_TypeSumOrderByAggregateInput>;
  boolean?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  database_name?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  json?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rich_text?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type Content_TypeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<Content_TypeOrderByRelevanceInput>;
  boolean?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  database_name?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  json?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  rich_text?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export enum Content_TypeScalarFieldEnum {
  Boolean = 'boolean',
  CreatedAt = 'created_at',
  DatabaseName = 'database_name',
  Date = 'date',
  Email = 'email',
  Id = 'id',
  Json = 'json',
  Link = 'link',
  Media = 'media',
  Number = 'number',
  Password = 'password',
  RichText = 'rich_text',
  Text = 'text',
  Time = 'time',
  Timestamp = 'timestamp',
  Uid = 'uid'
}

export type Content_TypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Content_TypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Content_TypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Content_TypeScalarWhereWithAggregatesInput>>;
  boolean?: InputMaybe<BoolNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  database_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  date?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  json?: InputMaybe<JsonNullableWithAggregatesFilter>;
  link?: InputMaybe<StringNullableWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  number?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  rich_text?: InputMaybe<StringNullableWithAggregatesFilter>;
  text?: InputMaybe<StringNullableWithAggregatesFilter>;
  time?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  uid?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type Content_TypeSumAggregate = {
  __typename?: 'Content_typeSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  number?: Maybe<Scalars['Decimal']>;
};

export type Content_TypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
};

export type Content_TypeUpdateInput = {
  boolean?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  database_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  json?: InputMaybe<Scalars['JSON']>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rich_text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type Content_TypeUpdateManyMutationInput = {
  boolean?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  database_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  json?: InputMaybe<Scalars['JSON']>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  number?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rich_text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  uid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type Content_TypeWhereInput = {
  AND?: InputMaybe<Array<Content_TypeWhereInput>>;
  NOT?: InputMaybe<Array<Content_TypeWhereInput>>;
  OR?: InputMaybe<Array<Content_TypeWhereInput>>;
  boolean?: InputMaybe<BoolNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  database_name?: InputMaybe<StringNullableFilter>;
  date?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  json?: InputMaybe<JsonNullableFilter>;
  link?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<StringNullableFilter>;
  number?: InputMaybe<DecimalNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  rich_text?: InputMaybe<StringNullableFilter>;
  text?: InputMaybe<StringNullableFilter>;
  time?: InputMaybe<DateTimeNullableFilter>;
  timestamp?: InputMaybe<DateTimeNullableFilter>;
  uid?: InputMaybe<StringNullableFilter>;
};

export type Content_TypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Customers = {
  __typename?: 'Customers';
  Address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed_email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  credit_memos?: Maybe<Scalars['String']>;
  customer_group?: Maybe<Scalars['String']>;
  customer_payment?: Maybe<Scalars['String']>;
  customer_since?: Maybe<Scalars['DateTime']>;
  date_of_birth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emails?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  name_prefix?: Maybe<Scalars['String']>;
  name_suffix?: Maybe<Scalars['String']>;
  newsletter_subscribers?: Maybe<Scalars['String']>;
  orders?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  quotes?: Maybe<Scalars['String']>;
  returns?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tax_vat_number?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomersAvgAggregate = {
  __typename?: 'CustomersAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CustomersAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CustomersCountAggregate = {
  __typename?: 'CustomersCountAggregate';
  Address: Scalars['Int'];
  _all: Scalars['Int'];
  address_two: Scalars['Int'];
  comments: Scalars['Int'];
  confirmed_email: Scalars['Int'];
  country: Scalars['Int'];
  credit_memos: Scalars['Int'];
  customer_group: Scalars['Int'];
  customer_payment: Scalars['Int'];
  customer_since: Scalars['Int'];
  date_of_birth: Scalars['Int'];
  description: Scalars['Int'];
  email: Scalars['Int'];
  emails: Scalars['Int'];
  first_name: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  last_name: Scalars['Int'];
  mediamanager: Scalars['Int'];
  messages: Scalars['Int'];
  middle_name: Scalars['Int'];
  name_prefix: Scalars['Int'];
  name_suffix: Scalars['Int'];
  newsletter_subscribers: Scalars['Int'];
  orders: Scalars['Int'];
  password: Scalars['Int'];
  payment_type: Scalars['Int'];
  phone: Scalars['Int'];
  product: Scalars['Int'];
  projects: Scalars['Int'];
  quotes: Scalars['Int'];
  returns: Scalars['Int'];
  short_description: Scalars['Int'];
  state: Scalars['Int'];
  tax_vat_number: Scalars['Int'];
  thumbnail: Scalars['Int'];
  username: Scalars['Int'];
  websites: Scalars['Int'];
  workspaces: Scalars['Int'];
  zipcode: Scalars['Int'];
};

export type CustomersCountOrderByAggregateInput = {
  Address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  confirmed_email?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  credit_memos?: InputMaybe<SortOrder>;
  customer_group?: InputMaybe<SortOrder>;
  customer_payment?: InputMaybe<SortOrder>;
  customer_since?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  name_prefix?: InputMaybe<SortOrder>;
  name_suffix?: InputMaybe<SortOrder>;
  newsletter_subscribers?: InputMaybe<SortOrder>;
  orders?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payment_type?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  quotes?: InputMaybe<SortOrder>;
  returns?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tax_vat_number?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomersCreateInput = {
  Address?: InputMaybe<Scalars['String']>;
  address_two?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  confirmed_email?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  credit_memos?: InputMaybe<Scalars['String']>;
  customer_group?: InputMaybe<Scalars['String']>;
  customer_payment?: InputMaybe<Scalars['String']>;
  customer_since?: InputMaybe<Scalars['DateTime']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  emails?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  last_name: Scalars['String'];
  mediamanager?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  name_prefix?: InputMaybe<Scalars['String']>;
  name_suffix?: InputMaybe<Scalars['String']>;
  newsletter_subscribers?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  payment_type?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  quotes?: InputMaybe<Scalars['String']>;
  returns?: InputMaybe<Scalars['String']>;
  short_description?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax_vat_number?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  websites?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type CustomersCreateManyInput = {
  Address?: InputMaybe<Scalars['String']>;
  address_two?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  confirmed_email?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  credit_memos?: InputMaybe<Scalars['String']>;
  customer_group?: InputMaybe<Scalars['String']>;
  customer_payment?: InputMaybe<Scalars['String']>;
  customer_since?: InputMaybe<Scalars['DateTime']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  emails?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  last_name: Scalars['String'];
  mediamanager?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  name_prefix?: InputMaybe<Scalars['String']>;
  name_suffix?: InputMaybe<Scalars['String']>;
  newsletter_subscribers?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  payment_type?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  quotes?: InputMaybe<Scalars['String']>;
  returns?: InputMaybe<Scalars['String']>;
  short_description?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax_vat_number?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  websites?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type CustomersGroupBy = {
  __typename?: 'CustomersGroupBy';
  Address?: Maybe<Scalars['String']>;
  _avg?: Maybe<CustomersAvgAggregate>;
  _count?: Maybe<CustomersCountAggregate>;
  _max?: Maybe<CustomersMaxAggregate>;
  _min?: Maybe<CustomersMinAggregate>;
  _sum?: Maybe<CustomersSumAggregate>;
  address_two?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed_email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  credit_memos?: Maybe<Scalars['String']>;
  customer_group?: Maybe<Scalars['String']>;
  customer_payment?: Maybe<Scalars['String']>;
  customer_since?: Maybe<Scalars['DateTime']>;
  date_of_birth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emails?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  name_prefix?: Maybe<Scalars['String']>;
  name_suffix?: Maybe<Scalars['String']>;
  newsletter_subscribers?: Maybe<Scalars['String']>;
  orders?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  quotes?: Maybe<Scalars['String']>;
  returns?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tax_vat_number?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomersMaxAggregate = {
  __typename?: 'CustomersMaxAggregate';
  Address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed_email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  credit_memos?: Maybe<Scalars['String']>;
  customer_group?: Maybe<Scalars['String']>;
  customer_payment?: Maybe<Scalars['String']>;
  customer_since?: Maybe<Scalars['DateTime']>;
  date_of_birth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  name_prefix?: Maybe<Scalars['String']>;
  name_suffix?: Maybe<Scalars['String']>;
  newsletter_subscribers?: Maybe<Scalars['String']>;
  orders?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  quotes?: Maybe<Scalars['String']>;
  returns?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tax_vat_number?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomersMaxOrderByAggregateInput = {
  Address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  confirmed_email?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  credit_memos?: InputMaybe<SortOrder>;
  customer_group?: InputMaybe<SortOrder>;
  customer_payment?: InputMaybe<SortOrder>;
  customer_since?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  name_prefix?: InputMaybe<SortOrder>;
  name_suffix?: InputMaybe<SortOrder>;
  newsletter_subscribers?: InputMaybe<SortOrder>;
  orders?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payment_type?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  quotes?: InputMaybe<SortOrder>;
  returns?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tax_vat_number?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomersMinAggregate = {
  __typename?: 'CustomersMinAggregate';
  Address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  confirmed_email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  credit_memos?: Maybe<Scalars['String']>;
  customer_group?: Maybe<Scalars['String']>;
  customer_payment?: Maybe<Scalars['String']>;
  customer_since?: Maybe<Scalars['DateTime']>;
  date_of_birth?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  name_prefix?: Maybe<Scalars['String']>;
  name_suffix?: Maybe<Scalars['String']>;
  newsletter_subscribers?: Maybe<Scalars['String']>;
  orders?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  quotes?: Maybe<Scalars['String']>;
  returns?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  tax_vat_number?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  websites?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomersMinOrderByAggregateInput = {
  Address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  confirmed_email?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  credit_memos?: InputMaybe<SortOrder>;
  customer_group?: InputMaybe<SortOrder>;
  customer_payment?: InputMaybe<SortOrder>;
  customer_since?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  name_prefix?: InputMaybe<SortOrder>;
  name_suffix?: InputMaybe<SortOrder>;
  newsletter_subscribers?: InputMaybe<SortOrder>;
  orders?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payment_type?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  quotes?: InputMaybe<SortOrder>;
  returns?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tax_vat_number?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export enum CustomersOrderByRelevanceFieldEnum {
  Address = 'Address',
  AddressTwo = 'address_two',
  Comments = 'comments',
  ConfirmedEmail = 'confirmed_email',
  Country = 'country',
  CreditMemos = 'credit_memos',
  CustomerGroup = 'customer_group',
  CustomerPayment = 'customer_payment',
  DateOfBirth = 'date_of_birth',
  Description = 'description',
  Email = 'email',
  Emails = 'emails',
  FirstName = 'first_name',
  Gender = 'gender',
  Image = 'image',
  LastName = 'last_name',
  Mediamanager = 'mediamanager',
  Messages = 'messages',
  MiddleName = 'middle_name',
  NamePrefix = 'name_prefix',
  NameSuffix = 'name_suffix',
  NewsletterSubscribers = 'newsletter_subscribers',
  Orders = 'orders',
  Password = 'password',
  PaymentType = 'payment_type',
  Phone = 'phone',
  Product = 'product',
  Projects = 'projects',
  Quotes = 'quotes',
  Returns = 'returns',
  ShortDescription = 'short_description',
  State = 'state',
  TaxVatNumber = 'tax_vat_number',
  Thumbnail = 'thumbnail',
  Username = 'username',
  Websites = 'websites',
  Workspaces = 'workspaces',
  Zipcode = 'zipcode'
}

export type CustomersOrderByRelevanceInput = {
  fields: Array<CustomersOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type CustomersOrderByWithAggregationInput = {
  Address?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<CustomersAvgOrderByAggregateInput>;
  _count?: InputMaybe<CustomersCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomersMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomersMinOrderByAggregateInput>;
  _sum?: InputMaybe<CustomersSumOrderByAggregateInput>;
  address_two?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  confirmed_email?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  credit_memos?: InputMaybe<SortOrder>;
  customer_group?: InputMaybe<SortOrder>;
  customer_payment?: InputMaybe<SortOrder>;
  customer_since?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  name_prefix?: InputMaybe<SortOrder>;
  name_suffix?: InputMaybe<SortOrder>;
  newsletter_subscribers?: InputMaybe<SortOrder>;
  orders?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payment_type?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  quotes?: InputMaybe<SortOrder>;
  returns?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tax_vat_number?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type CustomersOrderByWithRelationAndSearchRelevanceInput = {
  Address?: InputMaybe<SortOrder>;
  _relevance?: InputMaybe<CustomersOrderByRelevanceInput>;
  address_two?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  confirmed_email?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  credit_memos?: InputMaybe<SortOrder>;
  customer_group?: InputMaybe<SortOrder>;
  customer_payment?: InputMaybe<SortOrder>;
  customer_since?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  name_prefix?: InputMaybe<SortOrder>;
  name_suffix?: InputMaybe<SortOrder>;
  newsletter_subscribers?: InputMaybe<SortOrder>;
  orders?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payment_type?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  product?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  quotes?: InputMaybe<SortOrder>;
  returns?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  tax_vat_number?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export enum CustomersScalarFieldEnum {
  Address = 'Address',
  AddressTwo = 'address_two',
  Comments = 'comments',
  ConfirmedEmail = 'confirmed_email',
  Country = 'country',
  CreditMemos = 'credit_memos',
  CustomerGroup = 'customer_group',
  CustomerPayment = 'customer_payment',
  CustomerSince = 'customer_since',
  DateOfBirth = 'date_of_birth',
  Description = 'description',
  Email = 'email',
  Emails = 'emails',
  FirstName = 'first_name',
  Gender = 'gender',
  Id = 'id',
  Image = 'image',
  LastName = 'last_name',
  Mediamanager = 'mediamanager',
  Messages = 'messages',
  MiddleName = 'middle_name',
  NamePrefix = 'name_prefix',
  NameSuffix = 'name_suffix',
  NewsletterSubscribers = 'newsletter_subscribers',
  Orders = 'orders',
  Password = 'password',
  PaymentType = 'payment_type',
  Phone = 'phone',
  Product = 'product',
  Projects = 'projects',
  Quotes = 'quotes',
  Returns = 'returns',
  ShortDescription = 'short_description',
  State = 'state',
  TaxVatNumber = 'tax_vat_number',
  Thumbnail = 'thumbnail',
  Username = 'username',
  Websites = 'websites',
  Workspaces = 'workspaces',
  Zipcode = 'zipcode'
}

export type CustomersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomersScalarWhereWithAggregatesInput>>;
  Address?: InputMaybe<StringNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<CustomersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomersScalarWhereWithAggregatesInput>>;
  address_two?: InputMaybe<StringNullableWithAggregatesFilter>;
  comments?: InputMaybe<StringNullableWithAggregatesFilter>;
  confirmed_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  credit_memos?: InputMaybe<StringNullableWithAggregatesFilter>;
  customer_group?: InputMaybe<StringNullableWithAggregatesFilter>;
  customer_payment?: InputMaybe<StringNullableWithAggregatesFilter>;
  customer_since?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  date_of_birth?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emails?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  gender?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  mediamanager?: InputMaybe<StringNullableWithAggregatesFilter>;
  messages?: InputMaybe<StringNullableWithAggregatesFilter>;
  middle_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  name_prefix?: InputMaybe<StringNullableWithAggregatesFilter>;
  name_suffix?: InputMaybe<StringNullableWithAggregatesFilter>;
  newsletter_subscribers?: InputMaybe<StringNullableWithAggregatesFilter>;
  orders?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  payment_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  product?: InputMaybe<StringNullableWithAggregatesFilter>;
  projects?: InputMaybe<StringNullableWithAggregatesFilter>;
  quotes?: InputMaybe<StringNullableWithAggregatesFilter>;
  returns?: InputMaybe<StringNullableWithAggregatesFilter>;
  short_description?: InputMaybe<StringNullableWithAggregatesFilter>;
  state?: InputMaybe<StringNullableWithAggregatesFilter>;
  tax_vat_number?: InputMaybe<StringNullableWithAggregatesFilter>;
  thumbnail?: InputMaybe<StringNullableWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
  websites?: InputMaybe<StringNullableWithAggregatesFilter>;
  workspaces?: InputMaybe<StringNullableWithAggregatesFilter>;
  zipcode?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CustomersSumAggregate = {
  __typename?: 'CustomersSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CustomersSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CustomersUpdateInput = {
  Address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address_two?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  confirmed_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  credit_memos?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_group?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_payment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_since?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middle_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name_prefix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name_suffix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  newsletter_subscribers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  returns?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  short_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tax_vat_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  websites?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomersUpdateManyMutationInput = {
  Address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address_two?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  confirmed_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  credit_memos?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_group?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_payment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer_since?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  mediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  middle_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name_prefix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name_suffix?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  newsletter_subscribers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  product?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  quotes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  returns?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  short_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tax_vat_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  websites?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomersWhereInput = {
  AND?: InputMaybe<Array<CustomersWhereInput>>;
  Address?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<CustomersWhereInput>>;
  OR?: InputMaybe<Array<CustomersWhereInput>>;
  address_two?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<StringNullableFilter>;
  confirmed_email?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  credit_memos?: InputMaybe<StringNullableFilter>;
  customer_group?: InputMaybe<StringNullableFilter>;
  customer_payment?: InputMaybe<StringNullableFilter>;
  customer_since?: InputMaybe<DateTimeNullableFilter>;
  date_of_birth?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emails?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringFilter>;
  mediamanager?: InputMaybe<StringNullableFilter>;
  messages?: InputMaybe<StringNullableFilter>;
  middle_name?: InputMaybe<StringNullableFilter>;
  name_prefix?: InputMaybe<StringNullableFilter>;
  name_suffix?: InputMaybe<StringNullableFilter>;
  newsletter_subscribers?: InputMaybe<StringNullableFilter>;
  orders?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  payment_type?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<StringNullableFilter>;
  projects?: InputMaybe<StringNullableFilter>;
  quotes?: InputMaybe<StringNullableFilter>;
  returns?: InputMaybe<StringNullableFilter>;
  short_description?: InputMaybe<StringNullableFilter>;
  state?: InputMaybe<StringNullableFilter>;
  tax_vat_number?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
  websites?: InputMaybe<StringNullableFilter>;
  workspaces?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type CustomersWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Dashboardgraphql = {
  __typename?: 'Dashboardgraphql';
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  urlValue?: Maybe<Scalars['String']>;
};

export type DashboardgraphqlAvgAggregate = {
  __typename?: 'DashboardgraphqlAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardgraphqlAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardgraphqlCountAggregate = {
  __typename?: 'DashboardgraphqlCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  headerKey: Scalars['Int'];
  headerValue: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
  urlKey: Scalars['Int'];
  urlValue: Scalars['Int'];
};

export type DashboardgraphqlCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  urlKey?: InputMaybe<SortOrder>;
  urlValue?: InputMaybe<SortOrder>;
};

export type DashboardgraphqlCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  headerKey?: InputMaybe<Scalars['String']>;
  headerValue?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
  urlKey?: InputMaybe<Scalars['String']>;
  urlValue?: InputMaybe<Scalars['String']>;
};

export type DashboardgraphqlCreateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  headerKey?: InputMaybe<Scalars['String']>;
  headerValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
  urlKey?: InputMaybe<Scalars['String']>;
  urlValue?: InputMaybe<Scalars['String']>;
};

export type DashboardgraphqlGroupBy = {
  __typename?: 'DashboardgraphqlGroupBy';
  _avg?: Maybe<DashboardgraphqlAvgAggregate>;
  _count?: Maybe<DashboardgraphqlCountAggregate>;
  _max?: Maybe<DashboardgraphqlMaxAggregate>;
  _min?: Maybe<DashboardgraphqlMinAggregate>;
  _sum?: Maybe<DashboardgraphqlSumAggregate>;
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  urlValue?: Maybe<Scalars['String']>;
};

export type DashboardgraphqlMaxAggregate = {
  __typename?: 'DashboardgraphqlMaxAggregate';
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  urlValue?: Maybe<Scalars['String']>;
};

export type DashboardgraphqlMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  urlKey?: InputMaybe<SortOrder>;
  urlValue?: InputMaybe<SortOrder>;
};

export type DashboardgraphqlMinAggregate = {
  __typename?: 'DashboardgraphqlMinAggregate';
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlKey?: Maybe<Scalars['String']>;
  urlValue?: Maybe<Scalars['String']>;
};

export type DashboardgraphqlMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  urlKey?: InputMaybe<SortOrder>;
  urlValue?: InputMaybe<SortOrder>;
};

export enum DashboardgraphqlOrderByRelevanceFieldEnum {
  Description = 'description',
  HeaderKey = 'headerKey',
  HeaderValue = 'headerValue',
  Name = 'name',
  Url = 'url',
  UrlKey = 'urlKey',
  UrlValue = 'urlValue'
}

export type DashboardgraphqlOrderByRelevanceInput = {
  fields: Array<DashboardgraphqlOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardgraphqlOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardgraphqlAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardgraphqlCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardgraphqlMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardgraphqlMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardgraphqlSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  urlKey?: InputMaybe<SortOrder>;
  urlValue?: InputMaybe<SortOrder>;
};

export type DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardgraphqlOrderByRelevanceInput>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  urlKey?: InputMaybe<SortOrder>;
  urlValue?: InputMaybe<SortOrder>;
};

export enum DashboardgraphqlScalarFieldEnum {
  Description = 'description',
  HeaderKey = 'headerKey',
  HeaderValue = 'headerValue',
  Id = 'id',
  Name = 'name',
  Url = 'url',
  UrlKey = 'urlKey',
  UrlValue = 'urlValue'
}

export type DashboardgraphqlScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardgraphqlScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardgraphqlScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardgraphqlScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  headerKey?: InputMaybe<StringNullableWithAggregatesFilter>;
  headerValue?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
  urlKey?: InputMaybe<StringNullableWithAggregatesFilter>;
  urlValue?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DashboardgraphqlSumAggregate = {
  __typename?: 'DashboardgraphqlSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DashboardgraphqlSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardgraphqlUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  urlKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  urlValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardgraphqlUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  urlKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  urlValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardgraphqlWhereInput = {
  AND?: InputMaybe<Array<DashboardgraphqlWhereInput>>;
  NOT?: InputMaybe<Array<DashboardgraphqlWhereInput>>;
  OR?: InputMaybe<Array<DashboardgraphqlWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  headerKey?: InputMaybe<StringNullableFilter>;
  headerValue?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringNullableFilter>;
  urlKey?: InputMaybe<StringNullableFilter>;
  urlValue?: InputMaybe<StringNullableFilter>;
};

export type DashboardgraphqlWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Dashboardjson = {
  __typename?: 'Dashboardjson';
  definition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DashboardjsonAvgAggregate = {
  __typename?: 'DashboardjsonAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardjsonAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardjsonCountAggregate = {
  __typename?: 'DashboardjsonCountAggregate';
  _all: Scalars['Int'];
  definition: Scalars['Int'];
  description: Scalars['Int'];
  format: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
};

export type DashboardjsonCountOrderByAggregateInput = {
  definition?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardjsonCreateInput = {
  definition?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type DashboardjsonCreateManyInput = {
  definition?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type DashboardjsonGroupBy = {
  __typename?: 'DashboardjsonGroupBy';
  _avg?: Maybe<DashboardjsonAvgAggregate>;
  _count?: Maybe<DashboardjsonCountAggregate>;
  _max?: Maybe<DashboardjsonMaxAggregate>;
  _min?: Maybe<DashboardjsonMinAggregate>;
  _sum?: Maybe<DashboardjsonSumAggregate>;
  definition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DashboardjsonMaxAggregate = {
  __typename?: 'DashboardjsonMaxAggregate';
  definition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DashboardjsonMaxOrderByAggregateInput = {
  definition?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardjsonMinAggregate = {
  __typename?: 'DashboardjsonMinAggregate';
  definition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DashboardjsonMinOrderByAggregateInput = {
  definition?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum DashboardjsonOrderByRelevanceFieldEnum {
  Definition = 'definition',
  Description = 'description',
  Format = 'format',
  Name = 'name',
  Url = 'url'
}

export type DashboardjsonOrderByRelevanceInput = {
  fields: Array<DashboardjsonOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardjsonOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardjsonAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardjsonCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardjsonMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardjsonMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardjsonSumOrderByAggregateInput>;
  definition?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardjsonOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardjsonOrderByRelevanceInput>;
  definition?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum DashboardjsonScalarFieldEnum {
  Definition = 'definition',
  Description = 'description',
  Format = 'format',
  Id = 'id',
  Name = 'name',
  Url = 'url'
}

export type DashboardjsonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardjsonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardjsonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardjsonScalarWhereWithAggregatesInput>>;
  definition?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  format?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DashboardjsonSumAggregate = {
  __typename?: 'DashboardjsonSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DashboardjsonSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardjsonUpdateInput = {
  definition?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  format?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardjsonUpdateManyMutationInput = {
  definition?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  format?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardjsonWhereInput = {
  AND?: InputMaybe<Array<DashboardjsonWhereInput>>;
  NOT?: InputMaybe<Array<DashboardjsonWhereInput>>;
  OR?: InputMaybe<Array<DashboardjsonWhereInput>>;
  definition?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  format?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type DashboardjsonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Dashboardrestapi = {
  __typename?: 'Dashboardrestapi';
  authenticationType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DashboardrestapiAvgAggregate = {
  __typename?: 'DashboardrestapiAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardrestapiAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardrestapiCountAggregate = {
  __typename?: 'DashboardrestapiCountAggregate';
  _all: Scalars['Int'];
  authenticationType: Scalars['Int'];
  description: Scalars['Int'];
  headerKey: Scalars['Int'];
  headerValue: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
};

export type DashboardrestapiCountOrderByAggregateInput = {
  authenticationType?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardrestapiCreateInput = {
  authenticationType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  headerKey?: InputMaybe<Scalars['String']>;
  headerValue?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type DashboardrestapiCreateManyInput = {
  authenticationType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  headerKey?: InputMaybe<Scalars['String']>;
  headerValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type DashboardrestapiGroupBy = {
  __typename?: 'DashboardrestapiGroupBy';
  _avg?: Maybe<DashboardrestapiAvgAggregate>;
  _count?: Maybe<DashboardrestapiCountAggregate>;
  _max?: Maybe<DashboardrestapiMaxAggregate>;
  _min?: Maybe<DashboardrestapiMinAggregate>;
  _sum?: Maybe<DashboardrestapiSumAggregate>;
  authenticationType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DashboardrestapiMaxAggregate = {
  __typename?: 'DashboardrestapiMaxAggregate';
  authenticationType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DashboardrestapiMaxOrderByAggregateInput = {
  authenticationType?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardrestapiMinAggregate = {
  __typename?: 'DashboardrestapiMinAggregate';
  authenticationType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerKey?: Maybe<Scalars['String']>;
  headerValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DashboardrestapiMinOrderByAggregateInput = {
  authenticationType?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum DashboardrestapiOrderByRelevanceFieldEnum {
  AuthenticationType = 'authenticationType',
  Description = 'description',
  HeaderKey = 'headerKey',
  HeaderValue = 'headerValue',
  Name = 'name',
  Url = 'url'
}

export type DashboardrestapiOrderByRelevanceInput = {
  fields: Array<DashboardrestapiOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardrestapiOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardrestapiAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardrestapiCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardrestapiMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardrestapiMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardrestapiSumOrderByAggregateInput>;
  authenticationType?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DashboardrestapiOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardrestapiOrderByRelevanceInput>;
  authenticationType?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  headerKey?: InputMaybe<SortOrder>;
  headerValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum DashboardrestapiScalarFieldEnum {
  AuthenticationType = 'authenticationType',
  Description = 'description',
  HeaderKey = 'headerKey',
  HeaderValue = 'headerValue',
  Id = 'id',
  Name = 'name',
  Url = 'url'
}

export type DashboardrestapiScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardrestapiScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardrestapiScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardrestapiScalarWhereWithAggregatesInput>>;
  authenticationType?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  headerKey?: InputMaybe<StringNullableWithAggregatesFilter>;
  headerValue?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DashboardrestapiSumAggregate = {
  __typename?: 'DashboardrestapiSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DashboardrestapiSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardrestapiUpdateInput = {
  authenticationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardrestapiUpdateManyMutationInput = {
  authenticationType?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerKey?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headerValue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardrestapiWhereInput = {
  AND?: InputMaybe<Array<DashboardrestapiWhereInput>>;
  NOT?: InputMaybe<Array<DashboardrestapiWhereInput>>;
  OR?: InputMaybe<Array<DashboardrestapiWhereInput>>;
  authenticationType?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  headerKey?: InputMaybe<StringNullableFilter>;
  headerValue?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type DashboardrestapiWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Dashboards = {
  __typename?: 'Dashboards';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardsAvgAggregate = {
  __typename?: 'DashboardsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardsCountAggregate = {
  __typename?: 'DashboardsCountAggregate';
  _all: Scalars['Int'];
  articles: Scalars['Int'];
  category: Scalars['Int'];
  checklists: Scalars['Int'];
  client_id: Scalars['Int'];
  client_secret: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  customers: Scalars['Int'];
  id: Scalars['Int'];
  logo: Scalars['Int'];
  media: Scalars['Int'];
  name: Scalars['Int'];
  privacy: Scalars['Int'];
  products: Scalars['Int'];
  projects: Scalars['Int'];
  published: Scalars['Int'];
  reports: Scalars['Int'];
  sales: Scalars['Int'];
  tasks: Scalars['Int'];
  tickets: Scalars['Int'];
  url: Scalars['Int'];
  users: Scalars['Int'];
  visits: Scalars['Int'];
};

export type DashboardsCountOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardsCreateInput = {
  articles?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  checklists?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logo?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  tickets?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  visits?: InputMaybe<Scalars['String']>;
};

export type DashboardsCreateManyInput = {
  articles?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  checklists?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logo?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  tickets?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  visits?: InputMaybe<Scalars['String']>;
};

export type DashboardsGroupBy = {
  __typename?: 'DashboardsGroupBy';
  _avg?: Maybe<DashboardsAvgAggregate>;
  _count?: Maybe<DashboardsCountAggregate>;
  _max?: Maybe<DashboardsMaxAggregate>;
  _min?: Maybe<DashboardsMinAggregate>;
  _sum?: Maybe<DashboardsSumAggregate>;
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardsMaxAggregate = {
  __typename?: 'DashboardsMaxAggregate';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardsMaxOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardsMinAggregate = {
  __typename?: 'DashboardsMinAggregate';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardsMinOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export enum DashboardsOrderByRelevanceFieldEnum {
  Articles = 'articles',
  Category = 'category',
  Checklists = 'checklists',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  Content = 'content',
  Customers = 'customers',
  Logo = 'logo',
  Media = 'media',
  Name = 'name',
  Privacy = 'privacy',
  Products = 'products',
  Projects = 'projects',
  Published = 'published',
  Reports = 'reports',
  Sales = 'sales',
  Tasks = 'tasks',
  Tickets = 'tickets',
  Url = 'url',
  Users = 'users',
  Visits = 'visits'
}

export type DashboardsOrderByRelevanceInput = {
  fields: Array<DashboardsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardsOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardsAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardsCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardsMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardsMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardsSumOrderByAggregateInput>;
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardsOrderByRelevanceInput>;
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export enum DashboardsScalarFieldEnum {
  Articles = 'articles',
  Category = 'category',
  Checklists = 'checklists',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  Content = 'content',
  CreatedAt = 'created_at',
  Customers = 'customers',
  Id = 'id',
  Logo = 'logo',
  Media = 'media',
  Name = 'name',
  Privacy = 'privacy',
  Products = 'products',
  Projects = 'projects',
  Published = 'published',
  Reports = 'reports',
  Sales = 'sales',
  Tasks = 'tasks',
  Tickets = 'tickets',
  Url = 'url',
  Users = 'users',
  Visits = 'visits'
}

export type DashboardsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardsScalarWhereWithAggregatesInput>>;
  articles?: InputMaybe<StringNullableWithAggregatesFilter>;
  category?: InputMaybe<StringNullableWithAggregatesFilter>;
  checklists?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_secret?: InputMaybe<StringNullableWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  customers?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  privacy?: InputMaybe<StringNullableWithAggregatesFilter>;
  products?: InputMaybe<StringNullableWithAggregatesFilter>;
  projects?: InputMaybe<StringNullableWithAggregatesFilter>;
  published?: InputMaybe<StringNullableWithAggregatesFilter>;
  reports?: InputMaybe<StringNullableWithAggregatesFilter>;
  sales?: InputMaybe<StringNullableWithAggregatesFilter>;
  tasks?: InputMaybe<StringNullableWithAggregatesFilter>;
  tickets?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
  visits?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DashboardsSumAggregate = {
  __typename?: 'DashboardsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type DashboardsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardsUpdateInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  checklists?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  privacy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sales?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tickets?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visits?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardsUpdateManyMutationInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  checklists?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  privacy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sales?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tickets?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visits?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardsWhereInput = {
  AND?: InputMaybe<Array<DashboardsWhereInput>>;
  NOT?: InputMaybe<Array<DashboardsWhereInput>>;
  OR?: InputMaybe<Array<DashboardsWhereInput>>;
  articles?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<StringNullableFilter>;
  checklists?: InputMaybe<StringNullableFilter>;
  client_id?: InputMaybe<StringNullableFilter>;
  client_secret?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  customers?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  privacy?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<StringNullableFilter>;
  projects?: InputMaybe<StringNullableFilter>;
  published?: InputMaybe<StringNullableFilter>;
  reports?: InputMaybe<StringNullableFilter>;
  sales?: InputMaybe<StringNullableFilter>;
  tasks?: InputMaybe<StringNullableFilter>;
  tickets?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
  visits?: InputMaybe<StringNullableFilter>;
};

export type DashboardsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Dashboardslides = {
  __typename?: 'Dashboardslides';
  categories?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DashboardslidesAvgAggregate = {
  __typename?: 'DashboardslidesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardslidesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardslidesCountAggregate = {
  __typename?: 'DashboardslidesCountAggregate';
  _all: Scalars['Int'];
  categories: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  media: Scalars['Int'];
  name: Scalars['Int'];
};

export type DashboardslidesCountOrderByAggregateInput = {
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DashboardslidesCreateInput = {
  categories?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DashboardslidesCreateManyInput = {
  categories?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  media?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DashboardslidesGroupBy = {
  __typename?: 'DashboardslidesGroupBy';
  _avg?: Maybe<DashboardslidesAvgAggregate>;
  _count?: Maybe<DashboardslidesCountAggregate>;
  _max?: Maybe<DashboardslidesMaxAggregate>;
  _min?: Maybe<DashboardslidesMinAggregate>;
  _sum?: Maybe<DashboardslidesSumAggregate>;
  categories?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DashboardslidesMaxAggregate = {
  __typename?: 'DashboardslidesMaxAggregate';
  categories?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DashboardslidesMaxOrderByAggregateInput = {
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DashboardslidesMinAggregate = {
  __typename?: 'DashboardslidesMinAggregate';
  categories?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DashboardslidesMinOrderByAggregateInput = {
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum DashboardslidesOrderByRelevanceFieldEnum {
  Categories = 'categories',
  Description = 'description',
  Media = 'media',
  Name = 'name'
}

export type DashboardslidesOrderByRelevanceInput = {
  fields: Array<DashboardslidesOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardslidesOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardslidesAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardslidesCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardslidesMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardslidesMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardslidesSumOrderByAggregateInput>;
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DashboardslidesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardslidesOrderByRelevanceInput>;
  categories?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum DashboardslidesScalarFieldEnum {
  Categories = 'categories',
  Description = 'description',
  Id = 'id',
  Media = 'media',
  Name = 'name'
}

export type DashboardslidesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardslidesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardslidesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardslidesScalarWhereWithAggregatesInput>>;
  categories?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type DashboardslidesSumAggregate = {
  __typename?: 'DashboardslidesSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DashboardslidesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardslidesUpdateInput = {
  categories?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DashboardslidesUpdateManyMutationInput = {
  categories?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DashboardslidesWhereInput = {
  AND?: InputMaybe<Array<DashboardslidesWhereInput>>;
  NOT?: InputMaybe<Array<DashboardslidesWhereInput>>;
  OR?: InputMaybe<Array<DashboardslidesWhereInput>>;
  categories?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  media?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DashboardslidesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Dashboardslist = {
  __typename?: 'Dashboardslist';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardslistAvgAggregate = {
  __typename?: 'DashboardslistAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DashboardslistAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardslistCountAggregate = {
  __typename?: 'DashboardslistCountAggregate';
  _all: Scalars['Int'];
  articles: Scalars['Int'];
  category: Scalars['Int'];
  checklists: Scalars['Int'];
  client_id: Scalars['Int'];
  client_secret: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  customers: Scalars['Int'];
  id: Scalars['Int'];
  logo: Scalars['Int'];
  media: Scalars['Int'];
  name: Scalars['Int'];
  privacy: Scalars['Int'];
  products: Scalars['Int'];
  projects: Scalars['Int'];
  published: Scalars['Int'];
  reports: Scalars['Int'];
  sales: Scalars['Int'];
  tasks: Scalars['Int'];
  tickets: Scalars['Int'];
  url: Scalars['Int'];
  users: Scalars['Int'];
  visits: Scalars['Int'];
};

export type DashboardslistCountOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardslistCreateInput = {
  articles?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  checklists?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logo?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  tickets?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  visits?: InputMaybe<Scalars['String']>;
};

export type DashboardslistCreateManyInput = {
  articles?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  checklists?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logo?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  tickets?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  visits?: InputMaybe<Scalars['String']>;
};

export type DashboardslistGroupBy = {
  __typename?: 'DashboardslistGroupBy';
  _avg?: Maybe<DashboardslistAvgAggregate>;
  _count?: Maybe<DashboardslistCountAggregate>;
  _max?: Maybe<DashboardslistMaxAggregate>;
  _min?: Maybe<DashboardslistMinAggregate>;
  _sum?: Maybe<DashboardslistSumAggregate>;
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardslistMaxAggregate = {
  __typename?: 'DashboardslistMaxAggregate';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardslistMaxOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardslistMinAggregate = {
  __typename?: 'DashboardslistMinAggregate';
  articles?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checklists?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  reports?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  tickets?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  visits?: Maybe<Scalars['String']>;
};

export type DashboardslistMinOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export enum DashboardslistOrderByRelevanceFieldEnum {
  Articles = 'articles',
  Category = 'category',
  Checklists = 'checklists',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  Content = 'content',
  Customers = 'customers',
  Logo = 'logo',
  Media = 'media',
  Name = 'name',
  Privacy = 'privacy',
  Products = 'products',
  Projects = 'projects',
  Published = 'published',
  Reports = 'reports',
  Sales = 'sales',
  Tasks = 'tasks',
  Tickets = 'tickets',
  Url = 'url',
  Users = 'users',
  Visits = 'visits'
}

export type DashboardslistOrderByRelevanceInput = {
  fields: Array<DashboardslistOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DashboardslistOrderByWithAggregationInput = {
  _avg?: InputMaybe<DashboardslistAvgOrderByAggregateInput>;
  _count?: InputMaybe<DashboardslistCountOrderByAggregateInput>;
  _max?: InputMaybe<DashboardslistMaxOrderByAggregateInput>;
  _min?: InputMaybe<DashboardslistMinOrderByAggregateInput>;
  _sum?: InputMaybe<DashboardslistSumOrderByAggregateInput>;
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export type DashboardslistOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<DashboardslistOrderByRelevanceInput>;
  articles?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checklists?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  privacy?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  reports?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  visits?: InputMaybe<SortOrder>;
};

export enum DashboardslistScalarFieldEnum {
  Articles = 'articles',
  Category = 'category',
  Checklists = 'checklists',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  Content = 'content',
  CreatedAt = 'created_at',
  Customers = 'customers',
  Id = 'id',
  Logo = 'logo',
  Media = 'media',
  Name = 'name',
  Privacy = 'privacy',
  Products = 'products',
  Projects = 'projects',
  Published = 'published',
  Reports = 'reports',
  Sales = 'sales',
  Tasks = 'tasks',
  Tickets = 'tickets',
  Url = 'url',
  Users = 'users',
  Visits = 'visits'
}

export type DashboardslistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DashboardslistScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DashboardslistScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DashboardslistScalarWhereWithAggregatesInput>>;
  articles?: InputMaybe<StringNullableWithAggregatesFilter>;
  category?: InputMaybe<StringNullableWithAggregatesFilter>;
  checklists?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_secret?: InputMaybe<StringNullableWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  customers?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  privacy?: InputMaybe<StringNullableWithAggregatesFilter>;
  products?: InputMaybe<StringNullableWithAggregatesFilter>;
  projects?: InputMaybe<StringNullableWithAggregatesFilter>;
  published?: InputMaybe<StringNullableWithAggregatesFilter>;
  reports?: InputMaybe<StringNullableWithAggregatesFilter>;
  sales?: InputMaybe<StringNullableWithAggregatesFilter>;
  tasks?: InputMaybe<StringNullableWithAggregatesFilter>;
  tickets?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
  visits?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DashboardslistSumAggregate = {
  __typename?: 'DashboardslistSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type DashboardslistSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DashboardslistUpdateInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  checklists?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  privacy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sales?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tickets?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visits?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardslistUpdateManyMutationInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  checklists?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  privacy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sales?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tickets?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visits?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DashboardslistWhereInput = {
  AND?: InputMaybe<Array<DashboardslistWhereInput>>;
  NOT?: InputMaybe<Array<DashboardslistWhereInput>>;
  OR?: InputMaybe<Array<DashboardslistWhereInput>>;
  articles?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<StringNullableFilter>;
  checklists?: InputMaybe<StringNullableFilter>;
  client_id?: InputMaybe<StringNullableFilter>;
  client_secret?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  customers?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  privacy?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<StringNullableFilter>;
  projects?: InputMaybe<StringNullableFilter>;
  published?: InputMaybe<StringNullableFilter>;
  reports?: InputMaybe<StringNullableFilter>;
  sales?: InputMaybe<StringNullableFilter>;
  tasks?: InputMaybe<StringNullableFilter>;
  tickets?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
  visits?: InputMaybe<StringNullableFilter>;
};

export type DashboardslistWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Integrations = {
  __typename?: 'Integrations';
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['BigInt'];
  location?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IntegrationsAvgAggregate = {
  __typename?: 'IntegrationsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type IntegrationsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationsCountAggregate = {
  __typename?: 'IntegrationsCountAggregate';
  _all: Scalars['Int'];
  category: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  media: Scalars['Int'];
  name: Scalars['Int'];
};

export type IntegrationsCountOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type IntegrationsCreateInput = {
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  location?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntegrationsCreateManyInput = {
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  location?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntegrationsGroupBy = {
  __typename?: 'IntegrationsGroupBy';
  _avg?: Maybe<IntegrationsAvgAggregate>;
  _count?: Maybe<IntegrationsCountAggregate>;
  _max?: Maybe<IntegrationsMaxAggregate>;
  _min?: Maybe<IntegrationsMinAggregate>;
  _sum?: Maybe<IntegrationsSumAggregate>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['BigInt'];
  location?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IntegrationsMaxAggregate = {
  __typename?: 'IntegrationsMaxAggregate';
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  location?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IntegrationsMaxOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type IntegrationsMinAggregate = {
  __typename?: 'IntegrationsMinAggregate';
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  location?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IntegrationsMinOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum IntegrationsOrderByRelevanceFieldEnum {
  Category = 'category',
  Content = 'content',
  Location = 'location',
  Media = 'media',
  Name = 'name'
}

export type IntegrationsOrderByRelevanceInput = {
  fields: Array<IntegrationsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type IntegrationsOrderByWithAggregationInput = {
  _avg?: InputMaybe<IntegrationsAvgOrderByAggregateInput>;
  _count?: InputMaybe<IntegrationsCountOrderByAggregateInput>;
  _max?: InputMaybe<IntegrationsMaxOrderByAggregateInput>;
  _min?: InputMaybe<IntegrationsMinOrderByAggregateInput>;
  _sum?: InputMaybe<IntegrationsSumOrderByAggregateInput>;
  category?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type IntegrationsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<IntegrationsOrderByRelevanceInput>;
  category?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum IntegrationsScalarFieldEnum {
  Category = 'category',
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  Location = 'location',
  Media = 'media',
  Name = 'name'
}

export type IntegrationsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IntegrationsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IntegrationsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IntegrationsScalarWhereWithAggregatesInput>>;
  category?: InputMaybe<StringNullableWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type IntegrationsSumAggregate = {
  __typename?: 'IntegrationsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type IntegrationsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type IntegrationsUpdateInput = {
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type IntegrationsUpdateManyMutationInput = {
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type IntegrationsWhereInput = {
  AND?: InputMaybe<Array<IntegrationsWhereInput>>;
  NOT?: InputMaybe<Array<IntegrationsWhereInput>>;
  OR?: InputMaybe<Array<IntegrationsWhereInput>>;
  category?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  location?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
};

export type IntegrationsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Internalization = {
  __typename?: 'Internalization';
  created_at?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type InternalizationAvgAggregate = {
  __typename?: 'InternalizationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type InternalizationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type InternalizationCountAggregate = {
  __typename?: 'InternalizationCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  default: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  region: Scalars['Int'];
  website: Scalars['Int'];
};

export type InternalizationCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type InternalizationCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type InternalizationCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  default?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type InternalizationGroupBy = {
  __typename?: 'InternalizationGroupBy';
  _avg?: Maybe<InternalizationAvgAggregate>;
  _count?: Maybe<InternalizationCountAggregate>;
  _max?: Maybe<InternalizationMaxAggregate>;
  _min?: Maybe<InternalizationMinAggregate>;
  _sum?: Maybe<InternalizationSumAggregate>;
  created_at?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type InternalizationMaxAggregate = {
  __typename?: 'InternalizationMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type InternalizationMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type InternalizationMinAggregate = {
  __typename?: 'InternalizationMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type InternalizationMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export enum InternalizationOrderByRelevanceFieldEnum {
  Default = 'default',
  Description = 'description',
  Name = 'name',
  Region = 'region',
  Website = 'website'
}

export type InternalizationOrderByRelevanceInput = {
  fields: Array<InternalizationOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type InternalizationOrderByWithAggregationInput = {
  _avg?: InputMaybe<InternalizationAvgOrderByAggregateInput>;
  _count?: InputMaybe<InternalizationCountOrderByAggregateInput>;
  _max?: InputMaybe<InternalizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<InternalizationMinOrderByAggregateInput>;
  _sum?: InputMaybe<InternalizationSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type InternalizationOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<InternalizationOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  default?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export enum InternalizationScalarFieldEnum {
  CreatedAt = 'created_at',
  Default = 'default',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Region = 'region',
  Website = 'website'
}

export type InternalizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InternalizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InternalizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InternalizationScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  default?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  region?: InputMaybe<StringNullableWithAggregatesFilter>;
  website?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type InternalizationSumAggregate = {
  __typename?: 'InternalizationSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type InternalizationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type InternalizationUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type InternalizationUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  default?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type InternalizationWhereInput = {
  AND?: InputMaybe<Array<InternalizationWhereInput>>;
  NOT?: InputMaybe<Array<InternalizationWhereInput>>;
  OR?: InputMaybe<Array<InternalizationWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  default?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type InternalizationWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type LogIn = {
  __typename?: 'LogIn';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type LogInAvgAggregate = {
  __typename?: 'LogInAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type LogInAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LogInCountAggregate = {
  __typename?: 'LogInCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  expiresIn: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  token: Scalars['Int'];
  username: Scalars['Int'];
  users: Scalars['Int'];
};

export type LogInCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiresIn?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type LogInCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  expiresIn?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type LogInCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  expiresIn?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type LogInGroupBy = {
  __typename?: 'LogInGroupBy';
  _avg?: Maybe<LogInAvgAggregate>;
  _count?: Maybe<LogInCountAggregate>;
  _max?: Maybe<LogInMaxAggregate>;
  _min?: Maybe<LogInMinAggregate>;
  _sum?: Maybe<LogInSumAggregate>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type LogInMaxAggregate = {
  __typename?: 'LogInMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type LogInMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiresIn?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type LogInMinAggregate = {
  __typename?: 'LogInMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type LogInMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiresIn?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum LogInOrderByRelevanceFieldEnum {
  Email = 'email',
  ExpiresIn = 'expiresIn',
  Password = 'password',
  Token = 'token',
  Username = 'username',
  Users = 'users'
}

export type LogInOrderByRelevanceInput = {
  fields: Array<LogInOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type LogInOrderByWithAggregationInput = {
  _avg?: InputMaybe<LogInAvgOrderByAggregateInput>;
  _count?: InputMaybe<LogInCountOrderByAggregateInput>;
  _max?: InputMaybe<LogInMaxOrderByAggregateInput>;
  _min?: InputMaybe<LogInMinOrderByAggregateInput>;
  _sum?: InputMaybe<LogInSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiresIn?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type LogInOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<LogInOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expiresIn?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum LogInScalarFieldEnum {
  CreatedAt = 'created_at',
  Email = 'email',
  ExpiresIn = 'expiresIn',
  Id = 'id',
  Password = 'password',
  Token = 'token',
  Username = 'username',
  Users = 'users'
}

export type LogInScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LogInScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LogInScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LogInScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  expiresIn?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  token?: InputMaybe<StringNullableWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type LogInSumAggregate = {
  __typename?: 'LogInSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type LogInSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type LogInUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiresIn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LogInUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiresIn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type LogInWhereInput = {
  AND?: InputMaybe<Array<LogInWhereInput>>;
  NOT?: InputMaybe<Array<LogInWhereInput>>;
  OR?: InputMaybe<Array<LogInWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  expiresIn?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  password?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
};

export type LogInWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Mediamanager = {
  __typename?: 'Mediamanager';
  agreements?: Maybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: Maybe<Scalars['String']>;
  albums?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  brands?: Maybe<Scalars['String']>;
  brands_brandsTomediamanager?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  keywords?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  products_mediamanagerToproducts?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_description?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  task_type?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  versions?: Maybe<Scalars['String']>;
  watermark_description?: Maybe<Scalars['String']>;
  watermark_media?: Maybe<Scalars['String']>;
  watermark_name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['String']>;
};

export type MediamanagerAvgAggregate = {
  __typename?: 'MediamanagerAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type MediamanagerAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MediamanagerCountAggregate = {
  __typename?: 'MediamanagerCountAggregate';
  _all: Scalars['Int'];
  agreements: Scalars['Int'];
  agreements_agreementsTomediamanager: Scalars['Int'];
  albums: Scalars['Int'];
  author: Scalars['Int'];
  brands: Scalars['Int'];
  brands_brandsTomediamanager: Scalars['Int'];
  comment: Scalars['Int'];
  comments: Scalars['Int'];
  content_type: Scalars['Int'];
  copyright: Scalars['Int'];
  created_at: Scalars['Int'];
  customers: Scalars['Int'];
  description: Scalars['Int'];
  dimensions: Scalars['Int'];
  expiration_date: Scalars['Int'];
  id: Scalars['Int'];
  keywords: Scalars['Int'];
  media: Scalars['Int'];
  members: Scalars['Int'];
  name: Scalars['Int'];
  products: Scalars['Int'];
  products_mediamanagerToproducts: Scalars['Int'];
  status: Scalars['Int'];
  tags: Scalars['Int'];
  task_description: Scalars['Int'];
  task_name: Scalars['Int'];
  task_type: Scalars['Int'];
  tasks: Scalars['Int'];
  users: Scalars['Int'];
  versions: Scalars['Int'];
  watermark_description: Scalars['Int'];
  watermark_media: Scalars['Int'];
  watermark_name: Scalars['Int'];
  workspace: Scalars['Int'];
};

export type MediamanagerCountOrderByAggregateInput = {
  agreements?: InputMaybe<SortOrder>;
  agreements_agreementsTomediamanager?: InputMaybe<SortOrder>;
  albums?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  brands?: InputMaybe<SortOrder>;
  brands_brandsTomediamanager?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  content_type?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SortOrder>;
  expiration_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  members?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  products_mediamanagerToproducts?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  task_name?: InputMaybe<SortOrder>;
  task_type?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  versions?: InputMaybe<SortOrder>;
  watermark_description?: InputMaybe<SortOrder>;
  watermark_media?: InputMaybe<SortOrder>;
  watermark_name?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<SortOrder>;
};

export type MediamanagerCreateInput = {
  agreements?: InputMaybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: InputMaybe<Scalars['String']>;
  albums?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Scalars['String']>;
  brands_brandsTomediamanager?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  expiration_date?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  products_mediamanagerToproducts?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  task_description?: InputMaybe<Scalars['String']>;
  task_name?: InputMaybe<Scalars['String']>;
  task_type?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  versions?: InputMaybe<Scalars['String']>;
  watermark_description?: InputMaybe<Scalars['String']>;
  watermark_media?: InputMaybe<Scalars['String']>;
  watermark_name?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<Scalars['String']>;
};

export type MediamanagerCreateManyInput = {
  agreements?: InputMaybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: InputMaybe<Scalars['String']>;
  albums?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Scalars['String']>;
  brands_brandsTomediamanager?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  customers?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<Scalars['String']>;
  expiration_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Scalars['String']>;
  products_mediamanagerToproducts?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
  task_description?: InputMaybe<Scalars['String']>;
  task_name?: InputMaybe<Scalars['String']>;
  task_type?: InputMaybe<Scalars['String']>;
  tasks?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  versions?: InputMaybe<Scalars['String']>;
  watermark_description?: InputMaybe<Scalars['String']>;
  watermark_media?: InputMaybe<Scalars['String']>;
  watermark_name?: InputMaybe<Scalars['String']>;
  workspace?: InputMaybe<Scalars['String']>;
};

export type MediamanagerGroupBy = {
  __typename?: 'MediamanagerGroupBy';
  _avg?: Maybe<MediamanagerAvgAggregate>;
  _count?: Maybe<MediamanagerCountAggregate>;
  _max?: Maybe<MediamanagerMaxAggregate>;
  _min?: Maybe<MediamanagerMinAggregate>;
  _sum?: Maybe<MediamanagerSumAggregate>;
  agreements?: Maybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: Maybe<Scalars['String']>;
  albums?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  brands?: Maybe<Scalars['String']>;
  brands_brandsTomediamanager?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  keywords?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  products_mediamanagerToproducts?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_description?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  task_type?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  versions?: Maybe<Scalars['String']>;
  watermark_description?: Maybe<Scalars['String']>;
  watermark_media?: Maybe<Scalars['String']>;
  watermark_name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['String']>;
};

export type MediamanagerMaxAggregate = {
  __typename?: 'MediamanagerMaxAggregate';
  agreements?: Maybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: Maybe<Scalars['String']>;
  albums?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  brands?: Maybe<Scalars['String']>;
  brands_brandsTomediamanager?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  products_mediamanagerToproducts?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_description?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  task_type?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  versions?: Maybe<Scalars['String']>;
  watermark_description?: Maybe<Scalars['String']>;
  watermark_media?: Maybe<Scalars['String']>;
  watermark_name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['String']>;
};

export type MediamanagerMaxOrderByAggregateInput = {
  agreements?: InputMaybe<SortOrder>;
  agreements_agreementsTomediamanager?: InputMaybe<SortOrder>;
  albums?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  brands?: InputMaybe<SortOrder>;
  brands_brandsTomediamanager?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  content_type?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SortOrder>;
  expiration_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  members?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  products_mediamanagerToproducts?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  task_name?: InputMaybe<SortOrder>;
  task_type?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  versions?: InputMaybe<SortOrder>;
  watermark_description?: InputMaybe<SortOrder>;
  watermark_media?: InputMaybe<SortOrder>;
  watermark_name?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<SortOrder>;
};

export type MediamanagerMinAggregate = {
  __typename?: 'MediamanagerMinAggregate';
  agreements?: Maybe<Scalars['String']>;
  agreements_agreementsTomediamanager?: Maybe<Scalars['String']>;
  albums?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  brands?: Maybe<Scalars['String']>;
  brands_brandsTomediamanager?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  products_mediamanagerToproducts?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  task_description?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  task_type?: Maybe<Scalars['String']>;
  tasks?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
  versions?: Maybe<Scalars['String']>;
  watermark_description?: Maybe<Scalars['String']>;
  watermark_media?: Maybe<Scalars['String']>;
  watermark_name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['String']>;
};

export type MediamanagerMinOrderByAggregateInput = {
  agreements?: InputMaybe<SortOrder>;
  agreements_agreementsTomediamanager?: InputMaybe<SortOrder>;
  albums?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  brands?: InputMaybe<SortOrder>;
  brands_brandsTomediamanager?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  content_type?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SortOrder>;
  expiration_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  members?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  products_mediamanagerToproducts?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  task_name?: InputMaybe<SortOrder>;
  task_type?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  versions?: InputMaybe<SortOrder>;
  watermark_description?: InputMaybe<SortOrder>;
  watermark_media?: InputMaybe<SortOrder>;
  watermark_name?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<SortOrder>;
};

export enum MediamanagerOrderByRelevanceFieldEnum {
  Agreements = 'agreements',
  AgreementsAgreementsTomediamanager = 'agreements_agreementsTomediamanager',
  Albums = 'albums',
  Author = 'author',
  Brands = 'brands',
  BrandsBrandsTomediamanager = 'brands_brandsTomediamanager',
  Comment = 'comment',
  Comments = 'comments',
  ContentType = 'content_type',
  Copyright = 'copyright',
  Customers = 'customers',
  Description = 'description',
  Dimensions = 'dimensions',
  ExpirationDate = 'expiration_date',
  Keywords = 'keywords',
  Media = 'media',
  Members = 'members',
  Name = 'name',
  Products = 'products',
  ProductsMediamanagerToproducts = 'products_mediamanagerToproducts',
  Status = 'status',
  Tags = 'tags',
  TaskDescription = 'task_description',
  TaskName = 'task_name',
  TaskType = 'task_type',
  Tasks = 'tasks',
  Users = 'users',
  Versions = 'versions',
  WatermarkDescription = 'watermark_description',
  WatermarkMedia = 'watermark_media',
  WatermarkName = 'watermark_name',
  Workspace = 'workspace'
}

export type MediamanagerOrderByRelevanceInput = {
  fields: Array<MediamanagerOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type MediamanagerOrderByWithAggregationInput = {
  _avg?: InputMaybe<MediamanagerAvgOrderByAggregateInput>;
  _count?: InputMaybe<MediamanagerCountOrderByAggregateInput>;
  _max?: InputMaybe<MediamanagerMaxOrderByAggregateInput>;
  _min?: InputMaybe<MediamanagerMinOrderByAggregateInput>;
  _sum?: InputMaybe<MediamanagerSumOrderByAggregateInput>;
  agreements?: InputMaybe<SortOrder>;
  agreements_agreementsTomediamanager?: InputMaybe<SortOrder>;
  albums?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  brands?: InputMaybe<SortOrder>;
  brands_brandsTomediamanager?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  content_type?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SortOrder>;
  expiration_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  members?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  products_mediamanagerToproducts?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  task_name?: InputMaybe<SortOrder>;
  task_type?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  versions?: InputMaybe<SortOrder>;
  watermark_description?: InputMaybe<SortOrder>;
  watermark_media?: InputMaybe<SortOrder>;
  watermark_name?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<SortOrder>;
};

export type MediamanagerOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MediamanagerOrderByRelevanceInput>;
  agreements?: InputMaybe<SortOrder>;
  agreements_agreementsTomediamanager?: InputMaybe<SortOrder>;
  albums?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  brands?: InputMaybe<SortOrder>;
  brands_brandsTomediamanager?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  comments?: InputMaybe<SortOrder>;
  content_type?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SortOrder>;
  expiration_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  media?: InputMaybe<SortOrder>;
  members?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  products_mediamanagerToproducts?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  task_description?: InputMaybe<SortOrder>;
  task_name?: InputMaybe<SortOrder>;
  task_type?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
  versions?: InputMaybe<SortOrder>;
  watermark_description?: InputMaybe<SortOrder>;
  watermark_media?: InputMaybe<SortOrder>;
  watermark_name?: InputMaybe<SortOrder>;
  workspace?: InputMaybe<SortOrder>;
};

export enum MediamanagerScalarFieldEnum {
  Agreements = 'agreements',
  AgreementsAgreementsTomediamanager = 'agreements_agreementsTomediamanager',
  Albums = 'albums',
  Author = 'author',
  Brands = 'brands',
  BrandsBrandsTomediamanager = 'brands_brandsTomediamanager',
  Comment = 'comment',
  Comments = 'comments',
  ContentType = 'content_type',
  Copyright = 'copyright',
  CreatedAt = 'created_at',
  Customers = 'customers',
  Description = 'description',
  Dimensions = 'dimensions',
  ExpirationDate = 'expiration_date',
  Id = 'id',
  Keywords = 'keywords',
  Media = 'media',
  Members = 'members',
  Name = 'name',
  Products = 'products',
  ProductsMediamanagerToproducts = 'products_mediamanagerToproducts',
  Status = 'status',
  Tags = 'tags',
  TaskDescription = 'task_description',
  TaskName = 'task_name',
  TaskType = 'task_type',
  Tasks = 'tasks',
  Users = 'users',
  Versions = 'versions',
  WatermarkDescription = 'watermark_description',
  WatermarkMedia = 'watermark_media',
  WatermarkName = 'watermark_name',
  Workspace = 'workspace'
}

export type MediamanagerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MediamanagerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MediamanagerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MediamanagerScalarWhereWithAggregatesInput>>;
  agreements?: InputMaybe<StringNullableWithAggregatesFilter>;
  agreements_agreementsTomediamanager?: InputMaybe<StringNullableWithAggregatesFilter>;
  albums?: InputMaybe<StringNullableWithAggregatesFilter>;
  author?: InputMaybe<StringNullableWithAggregatesFilter>;
  brands?: InputMaybe<StringNullableWithAggregatesFilter>;
  brands_brandsTomediamanager?: InputMaybe<StringNullableWithAggregatesFilter>;
  comment?: InputMaybe<StringNullableWithAggregatesFilter>;
  comments?: InputMaybe<StringNullableWithAggregatesFilter>;
  content_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  copyright?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  customers?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  dimensions?: InputMaybe<StringNullableWithAggregatesFilter>;
  expiration_date?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  keywords?: InputMaybe<StringNullableWithAggregatesFilter>;
  media?: InputMaybe<StringNullableWithAggregatesFilter>;
  members?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  products?: InputMaybe<StringNullableWithAggregatesFilter>;
  products_mediamanagerToproducts?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<StringNullableWithAggregatesFilter>;
  tags?: InputMaybe<StringNullableWithAggregatesFilter>;
  task_description?: InputMaybe<StringNullableWithAggregatesFilter>;
  task_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  task_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  tasks?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
  versions?: InputMaybe<StringNullableWithAggregatesFilter>;
  watermark_description?: InputMaybe<StringNullableWithAggregatesFilter>;
  watermark_media?: InputMaybe<StringNullableWithAggregatesFilter>;
  watermark_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  workspace?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type MediamanagerSumAggregate = {
  __typename?: 'MediamanagerSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type MediamanagerSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MediamanagerUpdateInput = {
  agreements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  agreements_agreementsTomediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  albums?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  brands?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  brands_brandsTomediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  copyright?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dimensions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiration_date?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products_mediamanagerToproducts?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MediamanagerUpdateManyMutationInput = {
  agreements?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  agreements_agreementsTomediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  albums?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  brands?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  brands_brandsTomediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comment?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  comments?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  copyright?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dimensions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiration_date?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products_mediamanagerToproducts?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  task_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tasks?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  versions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_media?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MediamanagerWhereInput = {
  AND?: InputMaybe<Array<MediamanagerWhereInput>>;
  NOT?: InputMaybe<Array<MediamanagerWhereInput>>;
  OR?: InputMaybe<Array<MediamanagerWhereInput>>;
  agreements?: InputMaybe<StringNullableFilter>;
  agreements_agreementsTomediamanager?: InputMaybe<StringNullableFilter>;
  albums?: InputMaybe<StringNullableFilter>;
  author?: InputMaybe<StringNullableFilter>;
  brands?: InputMaybe<StringNullableFilter>;
  brands_brandsTomediamanager?: InputMaybe<StringNullableFilter>;
  comment?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<StringNullableFilter>;
  content_type?: InputMaybe<StringNullableFilter>;
  copyright?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  customers?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  dimensions?: InputMaybe<StringNullableFilter>;
  expiration_date?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  keywords?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<StringNullableFilter>;
  members?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<StringNullableFilter>;
  products_mediamanagerToproducts?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<StringNullableFilter>;
  task_description?: InputMaybe<StringNullableFilter>;
  task_name?: InputMaybe<StringNullableFilter>;
  task_type?: InputMaybe<StringNullableFilter>;
  tasks?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
  versions?: InputMaybe<StringNullableFilter>;
  watermark_description?: InputMaybe<StringNullableFilter>;
  watermark_media?: InputMaybe<StringNullableFilter>;
  watermark_name?: InputMaybe<StringNullableFilter>;
  workspace?: InputMaybe<StringNullableFilter>;
};

export type MediamanagerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyApitoken: AffectedRowsOutput;
  createManyCategories: AffectedRowsOutput;
  createManyContent_type: AffectedRowsOutput;
  createManyCustomers: AffectedRowsOutput;
  createManyDashboardgraphql: AffectedRowsOutput;
  createManyDashboardjson: AffectedRowsOutput;
  createManyDashboardrestapi: AffectedRowsOutput;
  createManyDashboards: AffectedRowsOutput;
  createManyDashboardslides: AffectedRowsOutput;
  createManyDashboardslist: AffectedRowsOutput;
  createManyIntegrations: AffectedRowsOutput;
  createManyInternalization: AffectedRowsOutput;
  createManyLogIn: AffectedRowsOutput;
  createManyMediamanager: AffectedRowsOutput;
  createManyPages: AffectedRowsOutput;
  createManyPermissions: AffectedRowsOutput;
  createManyPlugins: AffectedRowsOutput;
  createManyProviders: AffectedRowsOutput;
  createManyRoles: AffectedRowsOutput;
  createManySettings: AffectedRowsOutput;
  createManyTags: AffectedRowsOutput;
  createManyThemes: AffectedRowsOutput;
  createManyUpload_file: AffectedRowsOutput;
  createManyUsers: AffectedRowsOutput;
  createManyWebhooks: AffectedRowsOutput;
  createOneApitoken: Apitoken;
  createOneCategories: Categories;
  createOneContent_type: Content_Type;
  createOneCustomers: Customers;
  createOneDashboardgraphql: Dashboardgraphql;
  createOneDashboardjson: Dashboardjson;
  createOneDashboardrestapi: Dashboardrestapi;
  createOneDashboards: Dashboards;
  createOneDashboardslides: Dashboardslides;
  createOneDashboardslist: Dashboardslist;
  createOneIntegrations: Integrations;
  createOneInternalization: Internalization;
  createOneLogIn: LogIn;
  createOneMediamanager: Mediamanager;
  createOnePages: Pages;
  createOnePermissions: Permissions;
  createOnePlugins: Plugins;
  createOneProviders: Providers;
  createOneRoles: Roles;
  createOneSettings: Settings;
  createOneTags: Tags;
  createOneThemes: Themes;
  createOneUpload_file: Upload_File;
  createOneUsers: Users;
  createOneWebhooks: Webhooks;
  deleteManyApitoken: AffectedRowsOutput;
  deleteManyCategories: AffectedRowsOutput;
  deleteManyContent_type: AffectedRowsOutput;
  deleteManyCustomers: AffectedRowsOutput;
  deleteManyDashboardgraphql: AffectedRowsOutput;
  deleteManyDashboardjson: AffectedRowsOutput;
  deleteManyDashboardrestapi: AffectedRowsOutput;
  deleteManyDashboards: AffectedRowsOutput;
  deleteManyDashboardslides: AffectedRowsOutput;
  deleteManyDashboardslist: AffectedRowsOutput;
  deleteManyIntegrations: AffectedRowsOutput;
  deleteManyInternalization: AffectedRowsOutput;
  deleteManyLogIn: AffectedRowsOutput;
  deleteManyMediamanager: AffectedRowsOutput;
  deleteManyPages: AffectedRowsOutput;
  deleteManyPermissions: AffectedRowsOutput;
  deleteManyPlugins: AffectedRowsOutput;
  deleteManyProviders: AffectedRowsOutput;
  deleteManyRoles: AffectedRowsOutput;
  deleteManySettings: AffectedRowsOutput;
  deleteManyTags: AffectedRowsOutput;
  deleteManyThemes: AffectedRowsOutput;
  deleteManyUpload_file: AffectedRowsOutput;
  deleteManyUsers: AffectedRowsOutput;
  deleteManyWebhooks: AffectedRowsOutput;
  deleteOneApitoken?: Maybe<Apitoken>;
  deleteOneCategories?: Maybe<Categories>;
  deleteOneContent_type?: Maybe<Content_Type>;
  deleteOneCustomers?: Maybe<Customers>;
  deleteOneDashboardgraphql?: Maybe<Dashboardgraphql>;
  deleteOneDashboardjson?: Maybe<Dashboardjson>;
  deleteOneDashboardrestapi?: Maybe<Dashboardrestapi>;
  deleteOneDashboards?: Maybe<Dashboards>;
  deleteOneDashboardslides?: Maybe<Dashboardslides>;
  deleteOneDashboardslist?: Maybe<Dashboardslist>;
  deleteOneIntegrations?: Maybe<Integrations>;
  deleteOneInternalization?: Maybe<Internalization>;
  deleteOneLogIn?: Maybe<LogIn>;
  deleteOneMediamanager?: Maybe<Mediamanager>;
  deleteOnePages?: Maybe<Pages>;
  deleteOnePermissions?: Maybe<Permissions>;
  deleteOnePlugins?: Maybe<Plugins>;
  deleteOneProviders?: Maybe<Providers>;
  deleteOneRoles?: Maybe<Roles>;
  deleteOneSettings?: Maybe<Settings>;
  deleteOneTags?: Maybe<Tags>;
  deleteOneThemes?: Maybe<Themes>;
  deleteOneUpload_file?: Maybe<Upload_File>;
  deleteOneUsers?: Maybe<Users>;
  deleteOneWebhooks?: Maybe<Webhooks>;
  updateManyApitoken: AffectedRowsOutput;
  updateManyCategories: AffectedRowsOutput;
  updateManyContent_type: AffectedRowsOutput;
  updateManyCustomers: AffectedRowsOutput;
  updateManyDashboardgraphql: AffectedRowsOutput;
  updateManyDashboardjson: AffectedRowsOutput;
  updateManyDashboardrestapi: AffectedRowsOutput;
  updateManyDashboards: AffectedRowsOutput;
  updateManyDashboardslides: AffectedRowsOutput;
  updateManyDashboardslist: AffectedRowsOutput;
  updateManyIntegrations: AffectedRowsOutput;
  updateManyInternalization: AffectedRowsOutput;
  updateManyLogIn: AffectedRowsOutput;
  updateManyMediamanager: AffectedRowsOutput;
  updateManyPages: AffectedRowsOutput;
  updateManyPermissions: AffectedRowsOutput;
  updateManyPlugins: AffectedRowsOutput;
  updateManyProviders: AffectedRowsOutput;
  updateManyRoles: AffectedRowsOutput;
  updateManySettings: AffectedRowsOutput;
  updateManyTags: AffectedRowsOutput;
  updateManyThemes: AffectedRowsOutput;
  updateManyUpload_file: AffectedRowsOutput;
  updateManyUsers: AffectedRowsOutput;
  updateManyWebhooks: AffectedRowsOutput;
  updateOneApitoken?: Maybe<Apitoken>;
  updateOneCategories?: Maybe<Categories>;
  updateOneContent_type?: Maybe<Content_Type>;
  updateOneCustomers?: Maybe<Customers>;
  updateOneDashboardgraphql?: Maybe<Dashboardgraphql>;
  updateOneDashboardjson?: Maybe<Dashboardjson>;
  updateOneDashboardrestapi?: Maybe<Dashboardrestapi>;
  updateOneDashboards?: Maybe<Dashboards>;
  updateOneDashboardslides?: Maybe<Dashboardslides>;
  updateOneDashboardslist?: Maybe<Dashboardslist>;
  updateOneIntegrations?: Maybe<Integrations>;
  updateOneInternalization?: Maybe<Internalization>;
  updateOneLogIn?: Maybe<LogIn>;
  updateOneMediamanager?: Maybe<Mediamanager>;
  updateOnePages?: Maybe<Pages>;
  updateOnePermissions?: Maybe<Permissions>;
  updateOnePlugins?: Maybe<Plugins>;
  updateOneProviders?: Maybe<Providers>;
  updateOneRoles?: Maybe<Roles>;
  updateOneSettings?: Maybe<Settings>;
  updateOneTags?: Maybe<Tags>;
  updateOneThemes?: Maybe<Themes>;
  updateOneUpload_file?: Maybe<Upload_File>;
  updateOneUsers?: Maybe<Users>;
  updateOneWebhooks?: Maybe<Webhooks>;
  upsertOneApitoken: Apitoken;
  upsertOneCategories: Categories;
  upsertOneContent_type: Content_Type;
  upsertOneCustomers: Customers;
  upsertOneDashboardgraphql: Dashboardgraphql;
  upsertOneDashboardjson: Dashboardjson;
  upsertOneDashboardrestapi: Dashboardrestapi;
  upsertOneDashboards: Dashboards;
  upsertOneDashboardslides: Dashboardslides;
  upsertOneDashboardslist: Dashboardslist;
  upsertOneIntegrations: Integrations;
  upsertOneInternalization: Internalization;
  upsertOneLogIn: LogIn;
  upsertOneMediamanager: Mediamanager;
  upsertOnePages: Pages;
  upsertOnePermissions: Permissions;
  upsertOnePlugins: Plugins;
  upsertOneProviders: Providers;
  upsertOneRoles: Roles;
  upsertOneSettings: Settings;
  upsertOneTags: Tags;
  upsertOneThemes: Themes;
  upsertOneUpload_file: Upload_File;
  upsertOneUsers: Users;
  upsertOneWebhooks: Webhooks;
};


export type MutationCreateManyApitokenArgs = {
  data: Array<ApitokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoriesArgs = {
  data: Array<CategoriesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyContent_TypeArgs = {
  data: Array<Content_TypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCustomersArgs = {
  data: Array<CustomersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardgraphqlArgs = {
  data: Array<DashboardgraphqlCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardjsonArgs = {
  data: Array<DashboardjsonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardrestapiArgs = {
  data: Array<DashboardrestapiCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardsArgs = {
  data: Array<DashboardsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardslidesArgs = {
  data: Array<DashboardslidesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDashboardslistArgs = {
  data: Array<DashboardslistCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIntegrationsArgs = {
  data: Array<IntegrationsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInternalizationArgs = {
  data: Array<InternalizationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyLogInArgs = {
  data: Array<LogInCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMediamanagerArgs = {
  data: Array<MediamanagerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPagesArgs = {
  data: Array<PagesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPermissionsArgs = {
  data: Array<PermissionsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPluginsArgs = {
  data: Array<PluginsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProvidersArgs = {
  data: Array<ProvidersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRolesArgs = {
  data: Array<RolesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySettingsArgs = {
  data: Array<SettingsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTagsArgs = {
  data: Array<TagsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyThemesArgs = {
  data: Array<ThemesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUpload_FileArgs = {
  data: Array<Upload_FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUsersArgs = {
  data: Array<UsersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyWebhooksArgs = {
  data: Array<WebhooksCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneApitokenArgs = {
  data: ApitokenCreateInput;
};


export type MutationCreateOneCategoriesArgs = {
  data: CategoriesCreateInput;
};


export type MutationCreateOneContent_TypeArgs = {
  data: Content_TypeCreateInput;
};


export type MutationCreateOneCustomersArgs = {
  data: CustomersCreateInput;
};


export type MutationCreateOneDashboardgraphqlArgs = {
  data: DashboardgraphqlCreateInput;
};


export type MutationCreateOneDashboardjsonArgs = {
  data: DashboardjsonCreateInput;
};


export type MutationCreateOneDashboardrestapiArgs = {
  data: DashboardrestapiCreateInput;
};


export type MutationCreateOneDashboardsArgs = {
  data: DashboardsCreateInput;
};


export type MutationCreateOneDashboardslidesArgs = {
  data: DashboardslidesCreateInput;
};


export type MutationCreateOneDashboardslistArgs = {
  data: DashboardslistCreateInput;
};


export type MutationCreateOneIntegrationsArgs = {
  data: IntegrationsCreateInput;
};


export type MutationCreateOneInternalizationArgs = {
  data: InternalizationCreateInput;
};


export type MutationCreateOneLogInArgs = {
  data: LogInCreateInput;
};


export type MutationCreateOneMediamanagerArgs = {
  data: MediamanagerCreateInput;
};


export type MutationCreateOnePagesArgs = {
  data: PagesCreateInput;
};


export type MutationCreateOnePermissionsArgs = {
  data: PermissionsCreateInput;
};


export type MutationCreateOnePluginsArgs = {
  data: PluginsCreateInput;
};


export type MutationCreateOneProvidersArgs = {
  data: ProvidersCreateInput;
};


export type MutationCreateOneRolesArgs = {
  data: RolesCreateInput;
};


export type MutationCreateOneSettingsArgs = {
  data: SettingsCreateInput;
};


export type MutationCreateOneTagsArgs = {
  data: TagsCreateInput;
};


export type MutationCreateOneThemesArgs = {
  data: ThemesCreateInput;
};


export type MutationCreateOneUpload_FileArgs = {
  data: Upload_FileCreateInput;
};


export type MutationCreateOneUsersArgs = {
  data: UsersCreateInput;
};


export type MutationCreateOneWebhooksArgs = {
  data: WebhooksCreateInput;
};


export type MutationDeleteManyApitokenArgs = {
  where?: InputMaybe<ApitokenWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoriesWhereInput>;
};


export type MutationDeleteManyContent_TypeArgs = {
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type MutationDeleteManyCustomersArgs = {
  where?: InputMaybe<CustomersWhereInput>;
};


export type MutationDeleteManyDashboardgraphqlArgs = {
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type MutationDeleteManyDashboardjsonArgs = {
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type MutationDeleteManyDashboardrestapiArgs = {
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type MutationDeleteManyDashboardsArgs = {
  where?: InputMaybe<DashboardsWhereInput>;
};


export type MutationDeleteManyDashboardslidesArgs = {
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type MutationDeleteManyDashboardslistArgs = {
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type MutationDeleteManyIntegrationsArgs = {
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type MutationDeleteManyInternalizationArgs = {
  where?: InputMaybe<InternalizationWhereInput>;
};


export type MutationDeleteManyLogInArgs = {
  where?: InputMaybe<LogInWhereInput>;
};


export type MutationDeleteManyMediamanagerArgs = {
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PagesWhereInput>;
};


export type MutationDeleteManyPermissionsArgs = {
  where?: InputMaybe<PermissionsWhereInput>;
};


export type MutationDeleteManyPluginsArgs = {
  where?: InputMaybe<PluginsWhereInput>;
};


export type MutationDeleteManyProvidersArgs = {
  where?: InputMaybe<ProvidersWhereInput>;
};


export type MutationDeleteManyRolesArgs = {
  where?: InputMaybe<RolesWhereInput>;
};


export type MutationDeleteManySettingsArgs = {
  where?: InputMaybe<SettingsWhereInput>;
};


export type MutationDeleteManyTagsArgs = {
  where?: InputMaybe<TagsWhereInput>;
};


export type MutationDeleteManyThemesArgs = {
  where?: InputMaybe<ThemesWhereInput>;
};


export type MutationDeleteManyUpload_FileArgs = {
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type MutationDeleteManyUsersArgs = {
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationDeleteManyWebhooksArgs = {
  where?: InputMaybe<WebhooksWhereInput>;
};


export type MutationDeleteOneApitokenArgs = {
  where: ApitokenWhereUniqueInput;
};


export type MutationDeleteOneCategoriesArgs = {
  where: CategoriesWhereUniqueInput;
};


export type MutationDeleteOneContent_TypeArgs = {
  where: Content_TypeWhereUniqueInput;
};


export type MutationDeleteOneCustomersArgs = {
  where: CustomersWhereUniqueInput;
};


export type MutationDeleteOneDashboardgraphqlArgs = {
  where: DashboardgraphqlWhereUniqueInput;
};


export type MutationDeleteOneDashboardjsonArgs = {
  where: DashboardjsonWhereUniqueInput;
};


export type MutationDeleteOneDashboardrestapiArgs = {
  where: DashboardrestapiWhereUniqueInput;
};


export type MutationDeleteOneDashboardsArgs = {
  where: DashboardsWhereUniqueInput;
};


export type MutationDeleteOneDashboardslidesArgs = {
  where: DashboardslidesWhereUniqueInput;
};


export type MutationDeleteOneDashboardslistArgs = {
  where: DashboardslistWhereUniqueInput;
};


export type MutationDeleteOneIntegrationsArgs = {
  where: IntegrationsWhereUniqueInput;
};


export type MutationDeleteOneInternalizationArgs = {
  where: InternalizationWhereUniqueInput;
};


export type MutationDeleteOneLogInArgs = {
  where: LogInWhereUniqueInput;
};


export type MutationDeleteOneMediamanagerArgs = {
  where: MediamanagerWhereUniqueInput;
};


export type MutationDeleteOnePagesArgs = {
  where: PagesWhereUniqueInput;
};


export type MutationDeleteOnePermissionsArgs = {
  where: PermissionsWhereUniqueInput;
};


export type MutationDeleteOnePluginsArgs = {
  where: PluginsWhereUniqueInput;
};


export type MutationDeleteOneProvidersArgs = {
  where: ProvidersWhereUniqueInput;
};


export type MutationDeleteOneRolesArgs = {
  where: RolesWhereUniqueInput;
};


export type MutationDeleteOneSettingsArgs = {
  where: SettingsWhereUniqueInput;
};


export type MutationDeleteOneTagsArgs = {
  where: TagsWhereUniqueInput;
};


export type MutationDeleteOneThemesArgs = {
  where: ThemesWhereUniqueInput;
};


export type MutationDeleteOneUpload_FileArgs = {
  where: Upload_FileWhereUniqueInput;
};


export type MutationDeleteOneUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type MutationDeleteOneWebhooksArgs = {
  where: WebhooksWhereUniqueInput;
};


export type MutationUpdateManyApitokenArgs = {
  data: ApitokenUpdateManyMutationInput;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoriesUpdateManyMutationInput;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type MutationUpdateManyContent_TypeArgs = {
  data: Content_TypeUpdateManyMutationInput;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type MutationUpdateManyCustomersArgs = {
  data: CustomersUpdateManyMutationInput;
  where?: InputMaybe<CustomersWhereInput>;
};


export type MutationUpdateManyDashboardgraphqlArgs = {
  data: DashboardgraphqlUpdateManyMutationInput;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type MutationUpdateManyDashboardjsonArgs = {
  data: DashboardjsonUpdateManyMutationInput;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type MutationUpdateManyDashboardrestapiArgs = {
  data: DashboardrestapiUpdateManyMutationInput;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type MutationUpdateManyDashboardsArgs = {
  data: DashboardsUpdateManyMutationInput;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type MutationUpdateManyDashboardslidesArgs = {
  data: DashboardslidesUpdateManyMutationInput;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type MutationUpdateManyDashboardslistArgs = {
  data: DashboardslistUpdateManyMutationInput;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type MutationUpdateManyIntegrationsArgs = {
  data: IntegrationsUpdateManyMutationInput;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type MutationUpdateManyInternalizationArgs = {
  data: InternalizationUpdateManyMutationInput;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type MutationUpdateManyLogInArgs = {
  data: LogInUpdateManyMutationInput;
  where?: InputMaybe<LogInWhereInput>;
};


export type MutationUpdateManyMediamanagerArgs = {
  data: MediamanagerUpdateManyMutationInput;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PagesUpdateManyMutationInput;
  where?: InputMaybe<PagesWhereInput>;
};


export type MutationUpdateManyPermissionsArgs = {
  data: PermissionsUpdateManyMutationInput;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type MutationUpdateManyPluginsArgs = {
  data: PluginsUpdateManyMutationInput;
  where?: InputMaybe<PluginsWhereInput>;
};


export type MutationUpdateManyProvidersArgs = {
  data: ProvidersUpdateManyMutationInput;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type MutationUpdateManyRolesArgs = {
  data: RolesUpdateManyMutationInput;
  where?: InputMaybe<RolesWhereInput>;
};


export type MutationUpdateManySettingsArgs = {
  data: SettingsUpdateManyMutationInput;
  where?: InputMaybe<SettingsWhereInput>;
};


export type MutationUpdateManyTagsArgs = {
  data: TagsUpdateManyMutationInput;
  where?: InputMaybe<TagsWhereInput>;
};


export type MutationUpdateManyThemesArgs = {
  data: ThemesUpdateManyMutationInput;
  where?: InputMaybe<ThemesWhereInput>;
};


export type MutationUpdateManyUpload_FileArgs = {
  data: Upload_FileUpdateManyMutationInput;
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type MutationUpdateManyUsersArgs = {
  data: UsersUpdateManyMutationInput;
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationUpdateManyWebhooksArgs = {
  data: WebhooksUpdateManyMutationInput;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type MutationUpdateOneApitokenArgs = {
  data: ApitokenUpdateInput;
  where: ApitokenWhereUniqueInput;
};


export type MutationUpdateOneCategoriesArgs = {
  data: CategoriesUpdateInput;
  where: CategoriesWhereUniqueInput;
};


export type MutationUpdateOneContent_TypeArgs = {
  data: Content_TypeUpdateInput;
  where: Content_TypeWhereUniqueInput;
};


export type MutationUpdateOneCustomersArgs = {
  data: CustomersUpdateInput;
  where: CustomersWhereUniqueInput;
};


export type MutationUpdateOneDashboardgraphqlArgs = {
  data: DashboardgraphqlUpdateInput;
  where: DashboardgraphqlWhereUniqueInput;
};


export type MutationUpdateOneDashboardjsonArgs = {
  data: DashboardjsonUpdateInput;
  where: DashboardjsonWhereUniqueInput;
};


export type MutationUpdateOneDashboardrestapiArgs = {
  data: DashboardrestapiUpdateInput;
  where: DashboardrestapiWhereUniqueInput;
};


export type MutationUpdateOneDashboardsArgs = {
  data: DashboardsUpdateInput;
  where: DashboardsWhereUniqueInput;
};


export type MutationUpdateOneDashboardslidesArgs = {
  data: DashboardslidesUpdateInput;
  where: DashboardslidesWhereUniqueInput;
};


export type MutationUpdateOneDashboardslistArgs = {
  data: DashboardslistUpdateInput;
  where: DashboardslistWhereUniqueInput;
};


export type MutationUpdateOneIntegrationsArgs = {
  data: IntegrationsUpdateInput;
  where: IntegrationsWhereUniqueInput;
};


export type MutationUpdateOneInternalizationArgs = {
  data: InternalizationUpdateInput;
  where: InternalizationWhereUniqueInput;
};


export type MutationUpdateOneLogInArgs = {
  data: LogInUpdateInput;
  where: LogInWhereUniqueInput;
};


export type MutationUpdateOneMediamanagerArgs = {
  data: MediamanagerUpdateInput;
  where: MediamanagerWhereUniqueInput;
};


export type MutationUpdateOnePagesArgs = {
  data: PagesUpdateInput;
  where: PagesWhereUniqueInput;
};


export type MutationUpdateOnePermissionsArgs = {
  data: PermissionsUpdateInput;
  where: PermissionsWhereUniqueInput;
};


export type MutationUpdateOnePluginsArgs = {
  data: PluginsUpdateInput;
  where: PluginsWhereUniqueInput;
};


export type MutationUpdateOneProvidersArgs = {
  data: ProvidersUpdateInput;
  where: ProvidersWhereUniqueInput;
};


export type MutationUpdateOneRolesArgs = {
  data: RolesUpdateInput;
  where: RolesWhereUniqueInput;
};


export type MutationUpdateOneSettingsArgs = {
  data: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
};


export type MutationUpdateOneTagsArgs = {
  data: TagsUpdateInput;
  where: TagsWhereUniqueInput;
};


export type MutationUpdateOneThemesArgs = {
  data: ThemesUpdateInput;
  where: ThemesWhereUniqueInput;
};


export type MutationUpdateOneUpload_FileArgs = {
  data: Upload_FileUpdateInput;
  where: Upload_FileWhereUniqueInput;
};


export type MutationUpdateOneUsersArgs = {
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationUpdateOneWebhooksArgs = {
  data: WebhooksUpdateInput;
  where: WebhooksWhereUniqueInput;
};


export type MutationUpsertOneApitokenArgs = {
  create: ApitokenCreateInput;
  update: ApitokenUpdateInput;
  where: ApitokenWhereUniqueInput;
};


export type MutationUpsertOneCategoriesArgs = {
  create: CategoriesCreateInput;
  update: CategoriesUpdateInput;
  where: CategoriesWhereUniqueInput;
};


export type MutationUpsertOneContent_TypeArgs = {
  create: Content_TypeCreateInput;
  update: Content_TypeUpdateInput;
  where: Content_TypeWhereUniqueInput;
};


export type MutationUpsertOneCustomersArgs = {
  create: CustomersCreateInput;
  update: CustomersUpdateInput;
  where: CustomersWhereUniqueInput;
};


export type MutationUpsertOneDashboardgraphqlArgs = {
  create: DashboardgraphqlCreateInput;
  update: DashboardgraphqlUpdateInput;
  where: DashboardgraphqlWhereUniqueInput;
};


export type MutationUpsertOneDashboardjsonArgs = {
  create: DashboardjsonCreateInput;
  update: DashboardjsonUpdateInput;
  where: DashboardjsonWhereUniqueInput;
};


export type MutationUpsertOneDashboardrestapiArgs = {
  create: DashboardrestapiCreateInput;
  update: DashboardrestapiUpdateInput;
  where: DashboardrestapiWhereUniqueInput;
};


export type MutationUpsertOneDashboardsArgs = {
  create: DashboardsCreateInput;
  update: DashboardsUpdateInput;
  where: DashboardsWhereUniqueInput;
};


export type MutationUpsertOneDashboardslidesArgs = {
  create: DashboardslidesCreateInput;
  update: DashboardslidesUpdateInput;
  where: DashboardslidesWhereUniqueInput;
};


export type MutationUpsertOneDashboardslistArgs = {
  create: DashboardslistCreateInput;
  update: DashboardslistUpdateInput;
  where: DashboardslistWhereUniqueInput;
};


export type MutationUpsertOneIntegrationsArgs = {
  create: IntegrationsCreateInput;
  update: IntegrationsUpdateInput;
  where: IntegrationsWhereUniqueInput;
};


export type MutationUpsertOneInternalizationArgs = {
  create: InternalizationCreateInput;
  update: InternalizationUpdateInput;
  where: InternalizationWhereUniqueInput;
};


export type MutationUpsertOneLogInArgs = {
  create: LogInCreateInput;
  update: LogInUpdateInput;
  where: LogInWhereUniqueInput;
};


export type MutationUpsertOneMediamanagerArgs = {
  create: MediamanagerCreateInput;
  update: MediamanagerUpdateInput;
  where: MediamanagerWhereUniqueInput;
};


export type MutationUpsertOnePagesArgs = {
  create: PagesCreateInput;
  update: PagesUpdateInput;
  where: PagesWhereUniqueInput;
};


export type MutationUpsertOnePermissionsArgs = {
  create: PermissionsCreateInput;
  update: PermissionsUpdateInput;
  where: PermissionsWhereUniqueInput;
};


export type MutationUpsertOnePluginsArgs = {
  create: PluginsCreateInput;
  update: PluginsUpdateInput;
  where: PluginsWhereUniqueInput;
};


export type MutationUpsertOneProvidersArgs = {
  create: ProvidersCreateInput;
  update: ProvidersUpdateInput;
  where: ProvidersWhereUniqueInput;
};


export type MutationUpsertOneRolesArgs = {
  create: RolesCreateInput;
  update: RolesUpdateInput;
  where: RolesWhereUniqueInput;
};


export type MutationUpsertOneSettingsArgs = {
  create: SettingsCreateInput;
  update: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
};


export type MutationUpsertOneTagsArgs = {
  create: TagsCreateInput;
  update: TagsUpdateInput;
  where: TagsWhereUniqueInput;
};


export type MutationUpsertOneThemesArgs = {
  create: ThemesCreateInput;
  update: ThemesUpdateInput;
  where: ThemesWhereUniqueInput;
};


export type MutationUpsertOneUpload_FileArgs = {
  create: Upload_FileCreateInput;
  update: Upload_FileUpdateInput;
  where: Upload_FileWhereUniqueInput;
};


export type MutationUpsertOneUsersArgs = {
  create: UsersCreateInput;
  update: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationUpsertOneWebhooksArgs = {
  create: WebhooksCreateInput;
  update: WebhooksUpdateInput;
  where: WebhooksWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedJsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Pages = {
  __typename?: 'Pages';
  content?: Maybe<Scalars['String']>;
  content_title?: Maybe<Scalars['String']>;
  enable_page?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url_key?: Maybe<Scalars['String']>;
};

export type PagesAvgAggregate = {
  __typename?: 'PagesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PagesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PagesCountAggregate = {
  __typename?: 'PagesCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  content_title: Scalars['Int'];
  enable_page: Scalars['Int'];
  id: Scalars['Int'];
  meta_description: Scalars['Int'];
  meta_keywords: Scalars['Int'];
  meta_title: Scalars['Int'];
  title: Scalars['Int'];
  url_key: Scalars['Int'];
};

export type PagesCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  content_title?: InputMaybe<SortOrder>;
  enable_page?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url_key?: InputMaybe<SortOrder>;
};

export type PagesCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  content_title?: InputMaybe<Scalars['String']>;
  enable_page?: InputMaybe<Scalars['Boolean']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_keywords?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url_key?: InputMaybe<Scalars['String']>;
};

export type PagesCreateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  content_title?: InputMaybe<Scalars['String']>;
  enable_page?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_keywords?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  url_key?: InputMaybe<Scalars['String']>;
};

export type PagesGroupBy = {
  __typename?: 'PagesGroupBy';
  _avg?: Maybe<PagesAvgAggregate>;
  _count?: Maybe<PagesCountAggregate>;
  _max?: Maybe<PagesMaxAggregate>;
  _min?: Maybe<PagesMinAggregate>;
  _sum?: Maybe<PagesSumAggregate>;
  content?: Maybe<Scalars['String']>;
  content_title?: Maybe<Scalars['String']>;
  enable_page?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url_key?: Maybe<Scalars['String']>;
};

export type PagesMaxAggregate = {
  __typename?: 'PagesMaxAggregate';
  content?: Maybe<Scalars['String']>;
  content_title?: Maybe<Scalars['String']>;
  enable_page?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
};

export type PagesMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  content_title?: InputMaybe<SortOrder>;
  enable_page?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url_key?: InputMaybe<SortOrder>;
};

export type PagesMinAggregate = {
  __typename?: 'PagesMinAggregate';
  content?: Maybe<Scalars['String']>;
  content_title?: Maybe<Scalars['String']>;
  enable_page?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url_key?: Maybe<Scalars['String']>;
};

export type PagesMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  content_title?: InputMaybe<SortOrder>;
  enable_page?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url_key?: InputMaybe<SortOrder>;
};

export enum PagesOrderByRelevanceFieldEnum {
  Content = 'content',
  ContentTitle = 'content_title',
  MetaDescription = 'meta_description',
  MetaKeywords = 'meta_keywords',
  MetaTitle = 'meta_title',
  Title = 'title',
  UrlKey = 'url_key'
}

export type PagesOrderByRelevanceInput = {
  fields: Array<PagesOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PagesOrderByWithAggregationInput = {
  _avg?: InputMaybe<PagesAvgOrderByAggregateInput>;
  _count?: InputMaybe<PagesCountOrderByAggregateInput>;
  _max?: InputMaybe<PagesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PagesMinOrderByAggregateInput>;
  _sum?: InputMaybe<PagesSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  content_title?: InputMaybe<SortOrder>;
  enable_page?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url_key?: InputMaybe<SortOrder>;
};

export type PagesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PagesOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  content_title?: InputMaybe<SortOrder>;
  enable_page?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meta_description?: InputMaybe<SortOrder>;
  meta_keywords?: InputMaybe<SortOrder>;
  meta_title?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url_key?: InputMaybe<SortOrder>;
};

export enum PagesScalarFieldEnum {
  Content = 'content',
  ContentTitle = 'content_title',
  EnablePage = 'enable_page',
  Id = 'id',
  MetaDescription = 'meta_description',
  MetaKeywords = 'meta_keywords',
  MetaTitle = 'meta_title',
  Title = 'title',
  UrlKey = 'url_key'
}

export type PagesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PagesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PagesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PagesScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  content_title?: InputMaybe<StringNullableWithAggregatesFilter>;
  enable_page?: InputMaybe<BoolNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  meta_description?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_keywords?: InputMaybe<StringNullableWithAggregatesFilter>;
  meta_title?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  url_key?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PagesSumAggregate = {
  __typename?: 'PagesSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PagesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PagesUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  enable_page?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  meta_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url_key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PagesUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  content_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  enable_page?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  meta_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_keywords?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meta_title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  url_key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PagesWhereInput = {
  AND?: InputMaybe<Array<PagesWhereInput>>;
  NOT?: InputMaybe<Array<PagesWhereInput>>;
  OR?: InputMaybe<Array<PagesWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  content_title?: InputMaybe<StringNullableFilter>;
  enable_page?: InputMaybe<BoolNullableFilter>;
  id?: InputMaybe<IntFilter>;
  meta_description?: InputMaybe<StringNullableFilter>;
  meta_keywords?: InputMaybe<StringNullableFilter>;
  meta_title?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  url_key?: InputMaybe<StringNullableFilter>;
};

export type PagesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Permissions = {
  __typename?: 'Permissions';
  content?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type PermissionsAvgAggregate = {
  __typename?: 'PermissionsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PermissionsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionsCountAggregate = {
  __typename?: 'PermissionsCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  create: Scalars['Int'];
  created_at: Scalars['Int'];
  delete: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  read: Scalars['Int'];
  role: Scalars['Int'];
  update: Scalars['Int'];
  users: Scalars['Int'];
};

export type PermissionsCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type PermissionsCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  create?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  delete?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type PermissionsCreateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  create?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  delete?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type PermissionsGroupBy = {
  __typename?: 'PermissionsGroupBy';
  _avg?: Maybe<PermissionsAvgAggregate>;
  _count?: Maybe<PermissionsCountAggregate>;
  _max?: Maybe<PermissionsMaxAggregate>;
  _min?: Maybe<PermissionsMinAggregate>;
  _sum?: Maybe<PermissionsSumAggregate>;
  content?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type PermissionsMaxAggregate = {
  __typename?: 'PermissionsMaxAggregate';
  content?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type PermissionsMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type PermissionsMinAggregate = {
  __typename?: 'PermissionsMinAggregate';
  content?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type PermissionsMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum PermissionsOrderByRelevanceFieldEnum {
  Content = 'content',
  Create = 'create',
  Delete = 'delete',
  Name = 'name',
  Read = 'read',
  Role = 'role',
  Update = 'update',
  Users = 'users'
}

export type PermissionsOrderByRelevanceInput = {
  fields: Array<PermissionsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PermissionsOrderByWithAggregationInput = {
  _avg?: InputMaybe<PermissionsAvgOrderByAggregateInput>;
  _count?: InputMaybe<PermissionsCountOrderByAggregateInput>;
  _max?: InputMaybe<PermissionsMaxOrderByAggregateInput>;
  _min?: InputMaybe<PermissionsMinOrderByAggregateInput>;
  _sum?: InputMaybe<PermissionsSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type PermissionsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PermissionsOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum PermissionsScalarFieldEnum {
  Content = 'content',
  Create = 'create',
  CreatedAt = 'created_at',
  Delete = 'delete',
  Id = 'id',
  Name = 'name',
  Read = 'read',
  Role = 'role',
  Update = 'update',
  Users = 'users'
}

export type PermissionsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PermissionsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PermissionsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PermissionsScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  create?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  delete?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  read?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<StringNullableWithAggregatesFilter>;
  update?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PermissionsSumAggregate = {
  __typename?: 'PermissionsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type PermissionsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PermissionsUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  create?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  update?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PermissionsUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  create?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  read?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  update?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PermissionsWhereInput = {
  AND?: InputMaybe<Array<PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<PermissionsWhereInput>>;
  OR?: InputMaybe<Array<PermissionsWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  create?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  delete?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  read?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<StringNullableFilter>;
  update?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
};

export type PermissionsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Plugins = {
  __typename?: 'Plugins';
  agree_terms?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  github_link?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  last_updated?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publisher_email?: Maybe<Scalars['String']>;
  publisher_name?: Maybe<Scalars['String']>;
  screenshots?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PluginsAvgAggregate = {
  __typename?: 'PluginsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PluginsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PluginsCountAggregate = {
  __typename?: 'PluginsCountAggregate';
  _all: Scalars['Int'];
  agree_terms: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  github_link: Scalars['Int'];
  id: Scalars['Int'];
  last_updated: Scalars['Int'];
  logo: Scalars['Int'];
  name: Scalars['Int'];
  publisher_email: Scalars['Int'];
  publisher_name: Scalars['Int'];
  screenshots: Scalars['Int'];
  url: Scalars['Int'];
};

export type PluginsCountOrderByAggregateInput = {
  agree_terms?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  github_link?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publisher_email?: InputMaybe<SortOrder>;
  publisher_name?: InputMaybe<SortOrder>;
  screenshots?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type PluginsCreateInput = {
  agree_terms?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  github_link?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  last_updated?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publisher_email?: InputMaybe<Scalars['String']>;
  publisher_name?: InputMaybe<Scalars['String']>;
  screenshots?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PluginsCreateManyInput = {
  agree_terms?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  github_link?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  last_updated?: InputMaybe<Scalars['DateTime']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publisher_email?: InputMaybe<Scalars['String']>;
  publisher_name?: InputMaybe<Scalars['String']>;
  screenshots?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PluginsGroupBy = {
  __typename?: 'PluginsGroupBy';
  _avg?: Maybe<PluginsAvgAggregate>;
  _count?: Maybe<PluginsCountAggregate>;
  _max?: Maybe<PluginsMaxAggregate>;
  _min?: Maybe<PluginsMinAggregate>;
  _sum?: Maybe<PluginsSumAggregate>;
  agree_terms?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  github_link?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  last_updated?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publisher_email?: Maybe<Scalars['String']>;
  publisher_name?: Maybe<Scalars['String']>;
  screenshots?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PluginsMaxAggregate = {
  __typename?: 'PluginsMaxAggregate';
  agree_terms?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  github_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  last_updated?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publisher_email?: Maybe<Scalars['String']>;
  publisher_name?: Maybe<Scalars['String']>;
  screenshots?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PluginsMaxOrderByAggregateInput = {
  agree_terms?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  github_link?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publisher_email?: InputMaybe<SortOrder>;
  publisher_name?: InputMaybe<SortOrder>;
  screenshots?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type PluginsMinAggregate = {
  __typename?: 'PluginsMinAggregate';
  agree_terms?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  github_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  last_updated?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publisher_email?: Maybe<Scalars['String']>;
  publisher_name?: Maybe<Scalars['String']>;
  screenshots?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PluginsMinOrderByAggregateInput = {
  agree_terms?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  github_link?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publisher_email?: InputMaybe<SortOrder>;
  publisher_name?: InputMaybe<SortOrder>;
  screenshots?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum PluginsOrderByRelevanceFieldEnum {
  Description = 'description',
  GithubLink = 'github_link',
  Logo = 'logo',
  Name = 'name',
  PublisherEmail = 'publisher_email',
  PublisherName = 'publisher_name',
  Screenshots = 'screenshots',
  Url = 'url'
}

export type PluginsOrderByRelevanceInput = {
  fields: Array<PluginsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type PluginsOrderByWithAggregationInput = {
  _avg?: InputMaybe<PluginsAvgOrderByAggregateInput>;
  _count?: InputMaybe<PluginsCountOrderByAggregateInput>;
  _max?: InputMaybe<PluginsMaxOrderByAggregateInput>;
  _min?: InputMaybe<PluginsMinOrderByAggregateInput>;
  _sum?: InputMaybe<PluginsSumOrderByAggregateInput>;
  agree_terms?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  github_link?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publisher_email?: InputMaybe<SortOrder>;
  publisher_name?: InputMaybe<SortOrder>;
  screenshots?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type PluginsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<PluginsOrderByRelevanceInput>;
  agree_terms?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  github_link?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publisher_email?: InputMaybe<SortOrder>;
  publisher_name?: InputMaybe<SortOrder>;
  screenshots?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum PluginsScalarFieldEnum {
  AgreeTerms = 'agree_terms',
  CreatedAt = 'created_at',
  Description = 'description',
  GithubLink = 'github_link',
  Id = 'id',
  LastUpdated = 'last_updated',
  Logo = 'logo',
  Name = 'name',
  PublisherEmail = 'publisher_email',
  PublisherName = 'publisher_name',
  Screenshots = 'screenshots',
  Url = 'url'
}

export type PluginsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PluginsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PluginsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PluginsScalarWhereWithAggregatesInput>>;
  agree_terms?: InputMaybe<BoolNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  github_link?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  last_updated?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  publisher_email?: InputMaybe<StringNullableWithAggregatesFilter>;
  publisher_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  screenshots?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PluginsSumAggregate = {
  __typename?: 'PluginsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type PluginsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PluginsUpdateInput = {
  agree_terms?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  github_link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  last_updated?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publisher_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publisher_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  screenshots?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PluginsUpdateManyMutationInput = {
  agree_terms?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  github_link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  last_updated?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publisher_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publisher_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  screenshots?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PluginsWhereInput = {
  AND?: InputMaybe<Array<PluginsWhereInput>>;
  NOT?: InputMaybe<Array<PluginsWhereInput>>;
  OR?: InputMaybe<Array<PluginsWhereInput>>;
  agree_terms?: InputMaybe<BoolNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  github_link?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  last_updated?: InputMaybe<DateTimeNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  publisher_email?: InputMaybe<StringNullableFilter>;
  publisher_name?: InputMaybe<StringNullableFilter>;
  screenshots?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringNullableFilter>;
};

export type PluginsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Providers = {
  __typename?: 'Providers';
  active?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  host_uri?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
  redirect_url_app?: Maybe<Scalars['String']>;
};

export type ProvidersAvgAggregate = {
  __typename?: 'ProvidersAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ProvidersAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProvidersCountAggregate = {
  __typename?: 'ProvidersCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  client_id: Scalars['Int'];
  client_secret: Scalars['Int'];
  created_at: Scalars['Int'];
  host_uri: Scalars['Int'];
  icon: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  redirect_url: Scalars['Int'];
  redirect_url_app: Scalars['Int'];
};

export type ProvidersCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  host_uri?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  redirect_url?: InputMaybe<SortOrder>;
  redirect_url_app?: InputMaybe<SortOrder>;
};

export type ProvidersCreateInput = {
  active?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  host_uri?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  redirect_url?: InputMaybe<Scalars['String']>;
  redirect_url_app?: InputMaybe<Scalars['String']>;
};

export type ProvidersCreateManyInput = {
  active?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['String']>;
  client_secret?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  host_uri?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  redirect_url?: InputMaybe<Scalars['String']>;
  redirect_url_app?: InputMaybe<Scalars['String']>;
};

export type ProvidersGroupBy = {
  __typename?: 'ProvidersGroupBy';
  _avg?: Maybe<ProvidersAvgAggregate>;
  _count?: Maybe<ProvidersCountAggregate>;
  _max?: Maybe<ProvidersMaxAggregate>;
  _min?: Maybe<ProvidersMinAggregate>;
  _sum?: Maybe<ProvidersSumAggregate>;
  active?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  host_uri?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  redirect_url?: Maybe<Scalars['String']>;
  redirect_url_app?: Maybe<Scalars['String']>;
};

export type ProvidersMaxAggregate = {
  __typename?: 'ProvidersMaxAggregate';
  active?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  host_uri?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  redirect_url?: Maybe<Scalars['String']>;
  redirect_url_app?: Maybe<Scalars['String']>;
};

export type ProvidersMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  host_uri?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  redirect_url?: InputMaybe<SortOrder>;
  redirect_url_app?: InputMaybe<SortOrder>;
};

export type ProvidersMinAggregate = {
  __typename?: 'ProvidersMinAggregate';
  active?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  host_uri?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  redirect_url?: Maybe<Scalars['String']>;
  redirect_url_app?: Maybe<Scalars['String']>;
};

export type ProvidersMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  host_uri?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  redirect_url?: InputMaybe<SortOrder>;
  redirect_url_app?: InputMaybe<SortOrder>;
};

export enum ProvidersOrderByRelevanceFieldEnum {
  Active = 'active',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  HostUri = 'host_uri',
  Icon = 'icon',
  Name = 'name',
  RedirectUrl = 'redirect_url',
  RedirectUrlApp = 'redirect_url_app'
}

export type ProvidersOrderByRelevanceInput = {
  fields: Array<ProvidersOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ProvidersOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProvidersAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProvidersCountOrderByAggregateInput>;
  _max?: InputMaybe<ProvidersMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProvidersMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProvidersSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  host_uri?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  redirect_url?: InputMaybe<SortOrder>;
  redirect_url_app?: InputMaybe<SortOrder>;
};

export type ProvidersOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ProvidersOrderByRelevanceInput>;
  active?: InputMaybe<SortOrder>;
  client_id?: InputMaybe<SortOrder>;
  client_secret?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  host_uri?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  redirect_url?: InputMaybe<SortOrder>;
  redirect_url_app?: InputMaybe<SortOrder>;
};

export enum ProvidersScalarFieldEnum {
  Active = 'active',
  ClientId = 'client_id',
  ClientSecret = 'client_secret',
  CreatedAt = 'created_at',
  HostUri = 'host_uri',
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  RedirectUrl = 'redirect_url',
  RedirectUrlApp = 'redirect_url_app'
}

export type ProvidersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProvidersScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProvidersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProvidersScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  client_secret?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  host_uri?: InputMaybe<StringNullableWithAggregatesFilter>;
  icon?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  redirect_url?: InputMaybe<StringNullableWithAggregatesFilter>;
  redirect_url_app?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ProvidersSumAggregate = {
  __typename?: 'ProvidersSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type ProvidersSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProvidersUpdateInput = {
  active?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  host_uri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  redirect_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  redirect_url_app?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProvidersUpdateManyMutationInput = {
  active?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  client_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  host_uri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  redirect_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  redirect_url_app?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProvidersWhereInput = {
  AND?: InputMaybe<Array<ProvidersWhereInput>>;
  NOT?: InputMaybe<Array<ProvidersWhereInput>>;
  OR?: InputMaybe<Array<ProvidersWhereInput>>;
  active?: InputMaybe<StringNullableFilter>;
  client_id?: InputMaybe<StringNullableFilter>;
  client_secret?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  host_uri?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  redirect_url?: InputMaybe<StringNullableFilter>;
  redirect_url_app?: InputMaybe<StringNullableFilter>;
};

export type ProvidersWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateApitoken: AggregateApitoken;
  aggregateCategories: AggregateCategories;
  aggregateContent_type: AggregateContent_Type;
  aggregateCustomers: AggregateCustomers;
  aggregateDashboardgraphql: AggregateDashboardgraphql;
  aggregateDashboardjson: AggregateDashboardjson;
  aggregateDashboardrestapi: AggregateDashboardrestapi;
  aggregateDashboards: AggregateDashboards;
  aggregateDashboardslides: AggregateDashboardslides;
  aggregateDashboardslist: AggregateDashboardslist;
  aggregateIntegrations: AggregateIntegrations;
  aggregateInternalization: AggregateInternalization;
  aggregateLogIn: AggregateLogIn;
  aggregateMediamanager: AggregateMediamanager;
  aggregatePages: AggregatePages;
  aggregatePermissions: AggregatePermissions;
  aggregatePlugins: AggregatePlugins;
  aggregateProviders: AggregateProviders;
  aggregateRoles: AggregateRoles;
  aggregateSettings: AggregateSettings;
  aggregateTags: AggregateTags;
  aggregateThemes: AggregateThemes;
  aggregateUpload_file: AggregateUpload_File;
  aggregateUsers: AggregateUsers;
  aggregateWebhooks: AggregateWebhooks;
  apitoken?: Maybe<Apitoken>;
  apitokens: Array<Apitoken>;
  content_type?: Maybe<Content_Type>;
  content_types: Array<Content_Type>;
  dashboardgraphql?: Maybe<Dashboardgraphql>;
  dashboardgraphqls: Array<Dashboardgraphql>;
  dashboardjson?: Maybe<Dashboardjson>;
  dashboardjsons: Array<Dashboardjson>;
  dashboardrestapi?: Maybe<Dashboardrestapi>;
  dashboardrestapis: Array<Dashboardrestapi>;
  dashboardslist?: Maybe<Dashboardslist>;
  dashboardslists: Array<Dashboardslist>;
  findFirstApitoken?: Maybe<Apitoken>;
  findFirstApitokenOrThrow?: Maybe<Apitoken>;
  findFirstCategories?: Maybe<Categories>;
  findFirstCategoriesOrThrow?: Maybe<Categories>;
  findFirstContent_type?: Maybe<Content_Type>;
  findFirstContent_typeOrThrow?: Maybe<Content_Type>;
  findFirstCustomers?: Maybe<Customers>;
  findFirstCustomersOrThrow?: Maybe<Customers>;
  findFirstDashboardgraphql?: Maybe<Dashboardgraphql>;
  findFirstDashboardgraphqlOrThrow?: Maybe<Dashboardgraphql>;
  findFirstDashboardjson?: Maybe<Dashboardjson>;
  findFirstDashboardjsonOrThrow?: Maybe<Dashboardjson>;
  findFirstDashboardrestapi?: Maybe<Dashboardrestapi>;
  findFirstDashboardrestapiOrThrow?: Maybe<Dashboardrestapi>;
  findFirstDashboards?: Maybe<Dashboards>;
  findFirstDashboardsOrThrow?: Maybe<Dashboards>;
  findFirstDashboardslides?: Maybe<Dashboardslides>;
  findFirstDashboardslidesOrThrow?: Maybe<Dashboardslides>;
  findFirstDashboardslist?: Maybe<Dashboardslist>;
  findFirstDashboardslistOrThrow?: Maybe<Dashboardslist>;
  findFirstIntegrations?: Maybe<Integrations>;
  findFirstIntegrationsOrThrow?: Maybe<Integrations>;
  findFirstInternalization?: Maybe<Internalization>;
  findFirstInternalizationOrThrow?: Maybe<Internalization>;
  findFirstLogIn?: Maybe<LogIn>;
  findFirstLogInOrThrow?: Maybe<LogIn>;
  findFirstMediamanager?: Maybe<Mediamanager>;
  findFirstMediamanagerOrThrow?: Maybe<Mediamanager>;
  findFirstPages?: Maybe<Pages>;
  findFirstPagesOrThrow?: Maybe<Pages>;
  findFirstPermissions?: Maybe<Permissions>;
  findFirstPermissionsOrThrow?: Maybe<Permissions>;
  findFirstPlugins?: Maybe<Plugins>;
  findFirstPluginsOrThrow?: Maybe<Plugins>;
  findFirstProviders?: Maybe<Providers>;
  findFirstProvidersOrThrow?: Maybe<Providers>;
  findFirstRoles?: Maybe<Roles>;
  findFirstRolesOrThrow?: Maybe<Roles>;
  findFirstSettings?: Maybe<Settings>;
  findFirstSettingsOrThrow?: Maybe<Settings>;
  findFirstTags?: Maybe<Tags>;
  findFirstTagsOrThrow?: Maybe<Tags>;
  findFirstThemes?: Maybe<Themes>;
  findFirstThemesOrThrow?: Maybe<Themes>;
  findFirstUpload_file?: Maybe<Upload_File>;
  findFirstUpload_fileOrThrow?: Maybe<Upload_File>;
  findFirstUsers?: Maybe<Users>;
  findFirstUsersOrThrow?: Maybe<Users>;
  findFirstWebhooks?: Maybe<Webhooks>;
  findFirstWebhooksOrThrow?: Maybe<Webhooks>;
  findManyCategories: Array<Categories>;
  findManyCustomers: Array<Customers>;
  findManyDashboards: Array<Dashboards>;
  findManyDashboardslides: Array<Dashboardslides>;
  findManyIntegrations: Array<Integrations>;
  findManyPages: Array<Pages>;
  findManyPermissions: Array<Permissions>;
  findManyPlugins: Array<Plugins>;
  findManyProviders: Array<Providers>;
  findManyRoles: Array<Roles>;
  findManySettings: Array<Settings>;
  findManyTags: Array<Tags>;
  findManyThemes: Array<Themes>;
  findManyUsers: Array<Users>;
  findManyWebhooks: Array<Webhooks>;
  findUniqueCategories?: Maybe<Categories>;
  findUniqueCategoriesOrThrow?: Maybe<Categories>;
  findUniqueCustomers?: Maybe<Customers>;
  findUniqueCustomersOrThrow?: Maybe<Customers>;
  findUniqueDashboards?: Maybe<Dashboards>;
  findUniqueDashboardsOrThrow?: Maybe<Dashboards>;
  findUniqueDashboardslides?: Maybe<Dashboardslides>;
  findUniqueDashboardslidesOrThrow?: Maybe<Dashboardslides>;
  findUniqueIntegrations?: Maybe<Integrations>;
  findUniqueIntegrationsOrThrow?: Maybe<Integrations>;
  findUniquePages?: Maybe<Pages>;
  findUniquePagesOrThrow?: Maybe<Pages>;
  findUniquePermissions?: Maybe<Permissions>;
  findUniquePermissionsOrThrow?: Maybe<Permissions>;
  findUniquePlugins?: Maybe<Plugins>;
  findUniquePluginsOrThrow?: Maybe<Plugins>;
  findUniqueProviders?: Maybe<Providers>;
  findUniqueProvidersOrThrow?: Maybe<Providers>;
  findUniqueRoles?: Maybe<Roles>;
  findUniqueRolesOrThrow?: Maybe<Roles>;
  findUniqueSettings?: Maybe<Settings>;
  findUniqueSettingsOrThrow?: Maybe<Settings>;
  findUniqueTags?: Maybe<Tags>;
  findUniqueTagsOrThrow?: Maybe<Tags>;
  findUniqueThemes?: Maybe<Themes>;
  findUniqueThemesOrThrow?: Maybe<Themes>;
  findUniqueUsers?: Maybe<Users>;
  findUniqueUsersOrThrow?: Maybe<Users>;
  findUniqueWebhooks?: Maybe<Webhooks>;
  findUniqueWebhooksOrThrow?: Maybe<Webhooks>;
  getApitoken?: Maybe<Apitoken>;
  getContent_type?: Maybe<Content_Type>;
  getDashboardgraphql?: Maybe<Dashboardgraphql>;
  getDashboardjson?: Maybe<Dashboardjson>;
  getDashboardrestapi?: Maybe<Dashboardrestapi>;
  getDashboardslist?: Maybe<Dashboardslist>;
  getInternalization?: Maybe<Internalization>;
  getLogIn?: Maybe<LogIn>;
  getMediamanager?: Maybe<Mediamanager>;
  getUpload_file?: Maybe<Upload_File>;
  groupByApitoken: Array<ApitokenGroupBy>;
  groupByCategories: Array<CategoriesGroupBy>;
  groupByContent_type: Array<Content_TypeGroupBy>;
  groupByCustomers: Array<CustomersGroupBy>;
  groupByDashboardgraphql: Array<DashboardgraphqlGroupBy>;
  groupByDashboardjson: Array<DashboardjsonGroupBy>;
  groupByDashboardrestapi: Array<DashboardrestapiGroupBy>;
  groupByDashboards: Array<DashboardsGroupBy>;
  groupByDashboardslides: Array<DashboardslidesGroupBy>;
  groupByDashboardslist: Array<DashboardslistGroupBy>;
  groupByIntegrations: Array<IntegrationsGroupBy>;
  groupByInternalization: Array<InternalizationGroupBy>;
  groupByLogIn: Array<LogInGroupBy>;
  groupByMediamanager: Array<MediamanagerGroupBy>;
  groupByPages: Array<PagesGroupBy>;
  groupByPermissions: Array<PermissionsGroupBy>;
  groupByPlugins: Array<PluginsGroupBy>;
  groupByProviders: Array<ProvidersGroupBy>;
  groupByRoles: Array<RolesGroupBy>;
  groupBySettings: Array<SettingsGroupBy>;
  groupByTags: Array<TagsGroupBy>;
  groupByThemes: Array<ThemesGroupBy>;
  groupByUpload_file: Array<Upload_FileGroupBy>;
  groupByUsers: Array<UsersGroupBy>;
  groupByWebhooks: Array<WebhooksGroupBy>;
  internalization?: Maybe<Internalization>;
  internalizations: Array<Internalization>;
  logIn?: Maybe<LogIn>;
  logIns: Array<LogIn>;
  mediamanager?: Maybe<Mediamanager>;
  mediamanagers: Array<Mediamanager>;
  upload_file?: Maybe<Upload_File>;
  upload_files: Array<Upload_File>;
};


export type QueryAggregateApitokenArgs = {
  cursor?: InputMaybe<ApitokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ApitokenOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type QueryAggregateCategoriesArgs = {
  cursor?: InputMaybe<CategoriesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoriesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryAggregateContent_TypeArgs = {
  cursor?: InputMaybe<Content_TypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Content_TypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type QueryAggregateCustomersArgs = {
  cursor?: InputMaybe<CustomersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomersWhereInput>;
};


export type QueryAggregateDashboardgraphqlArgs = {
  cursor?: InputMaybe<DashboardgraphqlWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type QueryAggregateDashboardjsonArgs = {
  cursor?: InputMaybe<DashboardjsonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardjsonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type QueryAggregateDashboardrestapiArgs = {
  cursor?: InputMaybe<DashboardrestapiWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardrestapiOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type QueryAggregateDashboardsArgs = {
  cursor?: InputMaybe<DashboardsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type QueryAggregateDashboardslidesArgs = {
  cursor?: InputMaybe<DashboardslidesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardslidesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type QueryAggregateDashboardslistArgs = {
  cursor?: InputMaybe<DashboardslistWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DashboardslistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type QueryAggregateIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IntegrationsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type QueryAggregateInternalizationArgs = {
  cursor?: InputMaybe<InternalizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InternalizationOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type QueryAggregateLogInArgs = {
  cursor?: InputMaybe<LogInWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LogInOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogInWhereInput>;
};


export type QueryAggregateMediamanagerArgs = {
  cursor?: InputMaybe<MediamanagerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MediamanagerOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type QueryAggregatePagesArgs = {
  cursor?: InputMaybe<PagesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PagesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagesWhereInput>;
};


export type QueryAggregatePermissionsArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryAggregatePluginsArgs = {
  cursor?: InputMaybe<PluginsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PluginsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PluginsWhereInput>;
};


export type QueryAggregateProvidersArgs = {
  cursor?: InputMaybe<ProvidersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProvidersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type QueryAggregateRolesArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryAggregateSettingsArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryAggregateTagsArgs = {
  cursor?: InputMaybe<TagsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagsWhereInput>;
};


export type QueryAggregateThemesArgs = {
  cursor?: InputMaybe<ThemesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ThemesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThemesWhereInput>;
};


export type QueryAggregateUpload_FileArgs = {
  cursor?: InputMaybe<Upload_FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Upload_FileOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type QueryAggregateUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryAggregateWebhooksArgs = {
  cursor?: InputMaybe<WebhooksWhereUniqueInput>;
  orderBy?: InputMaybe<Array<WebhooksOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type QueryApitokenArgs = {
  where: ApitokenWhereUniqueInput;
};


export type QueryApitokensArgs = {
  cursor?: InputMaybe<ApitokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApitokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApitokenOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type QueryContent_TypeArgs = {
  where: Content_TypeWhereUniqueInput;
};


export type QueryContent_TypesArgs = {
  cursor?: InputMaybe<Content_TypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<Content_TypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Content_TypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type QueryDashboardgraphqlArgs = {
  where: DashboardgraphqlWhereUniqueInput;
};


export type QueryDashboardgraphqlsArgs = {
  cursor?: InputMaybe<DashboardgraphqlWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardgraphqlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type QueryDashboardjsonArgs = {
  where: DashboardjsonWhereUniqueInput;
};


export type QueryDashboardjsonsArgs = {
  cursor?: InputMaybe<DashboardjsonWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardjsonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardjsonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type QueryDashboardrestapiArgs = {
  where: DashboardrestapiWhereUniqueInput;
};


export type QueryDashboardrestapisArgs = {
  cursor?: InputMaybe<DashboardrestapiWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardrestapiScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardrestapiOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type QueryDashboardslistArgs = {
  where: DashboardslistWhereUniqueInput;
};


export type QueryDashboardslistsArgs = {
  cursor?: InputMaybe<DashboardslistWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type QueryFindFirstApitokenArgs = {
  cursor?: InputMaybe<ApitokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApitokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApitokenOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type QueryFindFirstApitokenOrThrowArgs = {
  cursor?: InputMaybe<ApitokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApitokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApitokenOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type QueryFindFirstCategoriesArgs = {
  cursor?: InputMaybe<CategoriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoriesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryFindFirstCategoriesOrThrowArgs = {
  cursor?: InputMaybe<CategoriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoriesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryFindFirstContent_TypeArgs = {
  cursor?: InputMaybe<Content_TypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<Content_TypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Content_TypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type QueryFindFirstContent_TypeOrThrowArgs = {
  cursor?: InputMaybe<Content_TypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<Content_TypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Content_TypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type QueryFindFirstCustomersArgs = {
  cursor?: InputMaybe<CustomersWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomersWhereInput>;
};


export type QueryFindFirstCustomersOrThrowArgs = {
  cursor?: InputMaybe<CustomersWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomersWhereInput>;
};


export type QueryFindFirstDashboardgraphqlArgs = {
  cursor?: InputMaybe<DashboardgraphqlWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardgraphqlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type QueryFindFirstDashboardgraphqlOrThrowArgs = {
  cursor?: InputMaybe<DashboardgraphqlWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardgraphqlScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type QueryFindFirstDashboardjsonArgs = {
  cursor?: InputMaybe<DashboardjsonWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardjsonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardjsonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type QueryFindFirstDashboardjsonOrThrowArgs = {
  cursor?: InputMaybe<DashboardjsonWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardjsonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardjsonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type QueryFindFirstDashboardrestapiArgs = {
  cursor?: InputMaybe<DashboardrestapiWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardrestapiScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardrestapiOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type QueryFindFirstDashboardrestapiOrThrowArgs = {
  cursor?: InputMaybe<DashboardrestapiWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardrestapiScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardrestapiOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type QueryFindFirstDashboardsArgs = {
  cursor?: InputMaybe<DashboardsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type QueryFindFirstDashboardsOrThrowArgs = {
  cursor?: InputMaybe<DashboardsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type QueryFindFirstDashboardslidesArgs = {
  cursor?: InputMaybe<DashboardslidesWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslidesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslidesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type QueryFindFirstDashboardslidesOrThrowArgs = {
  cursor?: InputMaybe<DashboardslidesWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslidesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslidesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type QueryFindFirstDashboardslistArgs = {
  cursor?: InputMaybe<DashboardslistWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type QueryFindFirstDashboardslistOrThrowArgs = {
  cursor?: InputMaybe<DashboardslistWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type QueryFindFirstIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationsWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type QueryFindFirstIntegrationsOrThrowArgs = {
  cursor?: InputMaybe<IntegrationsWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type QueryFindFirstInternalizationArgs = {
  cursor?: InputMaybe<InternalizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InternalizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InternalizationOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type QueryFindFirstInternalizationOrThrowArgs = {
  cursor?: InputMaybe<InternalizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InternalizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InternalizationOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type QueryFindFirstLogInArgs = {
  cursor?: InputMaybe<LogInWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogInScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogInOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogInWhereInput>;
};


export type QueryFindFirstLogInOrThrowArgs = {
  cursor?: InputMaybe<LogInWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogInScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogInOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogInWhereInput>;
};


export type QueryFindFirstMediamanagerArgs = {
  cursor?: InputMaybe<MediamanagerWhereUniqueInput>;
  distinct?: InputMaybe<Array<MediamanagerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MediamanagerOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type QueryFindFirstMediamanagerOrThrowArgs = {
  cursor?: InputMaybe<MediamanagerWhereUniqueInput>;
  distinct?: InputMaybe<Array<MediamanagerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MediamanagerOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type QueryFindFirstPagesArgs = {
  cursor?: InputMaybe<PagesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PagesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PagesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagesWhereInput>;
};


export type QueryFindFirstPagesOrThrowArgs = {
  cursor?: InputMaybe<PagesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PagesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PagesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagesWhereInput>;
};


export type QueryFindFirstPermissionsArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryFindFirstPermissionsOrThrowArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryFindFirstPluginsArgs = {
  cursor?: InputMaybe<PluginsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PluginsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PluginsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PluginsWhereInput>;
};


export type QueryFindFirstPluginsOrThrowArgs = {
  cursor?: InputMaybe<PluginsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PluginsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PluginsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PluginsWhereInput>;
};


export type QueryFindFirstProvidersArgs = {
  cursor?: InputMaybe<ProvidersWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProvidersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProvidersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type QueryFindFirstProvidersOrThrowArgs = {
  cursor?: InputMaybe<ProvidersWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProvidersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProvidersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type QueryFindFirstRolesArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryFindFirstRolesOrThrowArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryFindFirstSettingsArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryFindFirstSettingsOrThrowArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryFindFirstTagsArgs = {
  cursor?: InputMaybe<TagsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagsWhereInput>;
};


export type QueryFindFirstTagsOrThrowArgs = {
  cursor?: InputMaybe<TagsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagsWhereInput>;
};


export type QueryFindFirstThemesArgs = {
  cursor?: InputMaybe<ThemesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ThemesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ThemesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThemesWhereInput>;
};


export type QueryFindFirstThemesOrThrowArgs = {
  cursor?: InputMaybe<ThemesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ThemesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ThemesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThemesWhereInput>;
};


export type QueryFindFirstUpload_FileArgs = {
  cursor?: InputMaybe<Upload_FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<Upload_FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Upload_FileOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type QueryFindFirstUpload_FileOrThrowArgs = {
  cursor?: InputMaybe<Upload_FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<Upload_FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Upload_FileOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type QueryFindFirstUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindFirstUsersOrThrowArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindFirstWebhooksArgs = {
  cursor?: InputMaybe<WebhooksWhereUniqueInput>;
  distinct?: InputMaybe<Array<WebhooksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WebhooksOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type QueryFindFirstWebhooksOrThrowArgs = {
  cursor?: InputMaybe<WebhooksWhereUniqueInput>;
  distinct?: InputMaybe<Array<WebhooksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WebhooksOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type QueryFindManyCategoriesArgs = {
  cursor?: InputMaybe<CategoriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoriesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryFindManyCustomersArgs = {
  cursor?: InputMaybe<CustomersWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomersWhereInput>;
};


export type QueryFindManyDashboardsArgs = {
  cursor?: InputMaybe<DashboardsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type QueryFindManyDashboardslidesArgs = {
  cursor?: InputMaybe<DashboardslidesWhereUniqueInput>;
  distinct?: InputMaybe<Array<DashboardslidesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DashboardslidesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type QueryFindManyIntegrationsArgs = {
  cursor?: InputMaybe<IntegrationsWhereUniqueInput>;
  distinct?: InputMaybe<Array<IntegrationsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IntegrationsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type QueryFindManyPagesArgs = {
  cursor?: InputMaybe<PagesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PagesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PagesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagesWhereInput>;
};


export type QueryFindManyPermissionsArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryFindManyPluginsArgs = {
  cursor?: InputMaybe<PluginsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PluginsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PluginsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PluginsWhereInput>;
};


export type QueryFindManyProvidersArgs = {
  cursor?: InputMaybe<ProvidersWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProvidersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProvidersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type QueryFindManyRolesArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryFindManySettingsArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryFindManyTagsArgs = {
  cursor?: InputMaybe<TagsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagsOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagsWhereInput>;
};


export type QueryFindManyThemesArgs = {
  cursor?: InputMaybe<ThemesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ThemesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ThemesOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThemesWhereInput>;
};


export type QueryFindManyUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindManyWebhooksArgs = {
  cursor?: InputMaybe<WebhooksWhereUniqueInput>;
  distinct?: InputMaybe<Array<WebhooksScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WebhooksOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type QueryFindUniqueCategoriesArgs = {
  where: CategoriesWhereUniqueInput;
};


export type QueryFindUniqueCategoriesOrThrowArgs = {
  where: CategoriesWhereUniqueInput;
};


export type QueryFindUniqueCustomersArgs = {
  where: CustomersWhereUniqueInput;
};


export type QueryFindUniqueCustomersOrThrowArgs = {
  where: CustomersWhereUniqueInput;
};


export type QueryFindUniqueDashboardsArgs = {
  where: DashboardsWhereUniqueInput;
};


export type QueryFindUniqueDashboardsOrThrowArgs = {
  where: DashboardsWhereUniqueInput;
};


export type QueryFindUniqueDashboardslidesArgs = {
  where: DashboardslidesWhereUniqueInput;
};


export type QueryFindUniqueDashboardslidesOrThrowArgs = {
  where: DashboardslidesWhereUniqueInput;
};


export type QueryFindUniqueIntegrationsArgs = {
  where: IntegrationsWhereUniqueInput;
};


export type QueryFindUniqueIntegrationsOrThrowArgs = {
  where: IntegrationsWhereUniqueInput;
};


export type QueryFindUniquePagesArgs = {
  where: PagesWhereUniqueInput;
};


export type QueryFindUniquePagesOrThrowArgs = {
  where: PagesWhereUniqueInput;
};


export type QueryFindUniquePermissionsArgs = {
  where: PermissionsWhereUniqueInput;
};


export type QueryFindUniquePermissionsOrThrowArgs = {
  where: PermissionsWhereUniqueInput;
};


export type QueryFindUniquePluginsArgs = {
  where: PluginsWhereUniqueInput;
};


export type QueryFindUniquePluginsOrThrowArgs = {
  where: PluginsWhereUniqueInput;
};


export type QueryFindUniqueProvidersArgs = {
  where: ProvidersWhereUniqueInput;
};


export type QueryFindUniqueProvidersOrThrowArgs = {
  where: ProvidersWhereUniqueInput;
};


export type QueryFindUniqueRolesArgs = {
  where: RolesWhereUniqueInput;
};


export type QueryFindUniqueRolesOrThrowArgs = {
  where: RolesWhereUniqueInput;
};


export type QueryFindUniqueSettingsArgs = {
  where: SettingsWhereUniqueInput;
};


export type QueryFindUniqueSettingsOrThrowArgs = {
  where: SettingsWhereUniqueInput;
};


export type QueryFindUniqueTagsArgs = {
  where: TagsWhereUniqueInput;
};


export type QueryFindUniqueTagsOrThrowArgs = {
  where: TagsWhereUniqueInput;
};


export type QueryFindUniqueThemesArgs = {
  where: ThemesWhereUniqueInput;
};


export type QueryFindUniqueThemesOrThrowArgs = {
  where: ThemesWhereUniqueInput;
};


export type QueryFindUniqueUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type QueryFindUniqueUsersOrThrowArgs = {
  where: UsersWhereUniqueInput;
};


export type QueryFindUniqueWebhooksArgs = {
  where: WebhooksWhereUniqueInput;
};


export type QueryFindUniqueWebhooksOrThrowArgs = {
  where: WebhooksWhereUniqueInput;
};


export type QueryGetApitokenArgs = {
  where: ApitokenWhereUniqueInput;
};


export type QueryGetContent_TypeArgs = {
  where: Content_TypeWhereUniqueInput;
};


export type QueryGetDashboardgraphqlArgs = {
  where: DashboardgraphqlWhereUniqueInput;
};


export type QueryGetDashboardjsonArgs = {
  where: DashboardjsonWhereUniqueInput;
};


export type QueryGetDashboardrestapiArgs = {
  where: DashboardrestapiWhereUniqueInput;
};


export type QueryGetDashboardslistArgs = {
  where: DashboardslistWhereUniqueInput;
};


export type QueryGetInternalizationArgs = {
  where: InternalizationWhereUniqueInput;
};


export type QueryGetLogInArgs = {
  where: LogInWhereUniqueInput;
};


export type QueryGetMediamanagerArgs = {
  where: MediamanagerWhereUniqueInput;
};


export type QueryGetUpload_FileArgs = {
  where: Upload_FileWhereUniqueInput;
};


export type QueryGroupByApitokenArgs = {
  by: Array<ApitokenScalarFieldEnum>;
  having?: InputMaybe<ApitokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ApitokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApitokenWhereInput>;
};


export type QueryGroupByCategoriesArgs = {
  by: Array<CategoriesScalarFieldEnum>;
  having?: InputMaybe<CategoriesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoriesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryGroupByContent_TypeArgs = {
  by: Array<Content_TypeScalarFieldEnum>;
  having?: InputMaybe<Content_TypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Content_TypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Content_TypeWhereInput>;
};


export type QueryGroupByCustomersArgs = {
  by: Array<CustomersScalarFieldEnum>;
  having?: InputMaybe<CustomersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CustomersWhereInput>;
};


export type QueryGroupByDashboardgraphqlArgs = {
  by: Array<DashboardgraphqlScalarFieldEnum>;
  having?: InputMaybe<DashboardgraphqlScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardgraphqlOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardgraphqlWhereInput>;
};


export type QueryGroupByDashboardjsonArgs = {
  by: Array<DashboardjsonScalarFieldEnum>;
  having?: InputMaybe<DashboardjsonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardjsonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardjsonWhereInput>;
};


export type QueryGroupByDashboardrestapiArgs = {
  by: Array<DashboardrestapiScalarFieldEnum>;
  having?: InputMaybe<DashboardrestapiScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardrestapiOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardrestapiWhereInput>;
};


export type QueryGroupByDashboardsArgs = {
  by: Array<DashboardsScalarFieldEnum>;
  having?: InputMaybe<DashboardsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardsWhereInput>;
};


export type QueryGroupByDashboardslidesArgs = {
  by: Array<DashboardslidesScalarFieldEnum>;
  having?: InputMaybe<DashboardslidesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardslidesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslidesWhereInput>;
};


export type QueryGroupByDashboardslistArgs = {
  by: Array<DashboardslistScalarFieldEnum>;
  having?: InputMaybe<DashboardslistScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DashboardslistOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DashboardslistWhereInput>;
};


export type QueryGroupByIntegrationsArgs = {
  by: Array<IntegrationsScalarFieldEnum>;
  having?: InputMaybe<IntegrationsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IntegrationsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IntegrationsWhereInput>;
};


export type QueryGroupByInternalizationArgs = {
  by: Array<InternalizationScalarFieldEnum>;
  having?: InputMaybe<InternalizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InternalizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type QueryGroupByLogInArgs = {
  by: Array<LogInScalarFieldEnum>;
  having?: InputMaybe<LogInScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LogInOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogInWhereInput>;
};


export type QueryGroupByMediamanagerArgs = {
  by: Array<MediamanagerScalarFieldEnum>;
  having?: InputMaybe<MediamanagerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MediamanagerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type QueryGroupByPagesArgs = {
  by: Array<PagesScalarFieldEnum>;
  having?: InputMaybe<PagesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PagesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagesWhereInput>;
};


export type QueryGroupByPermissionsArgs = {
  by: Array<PermissionsScalarFieldEnum>;
  having?: InputMaybe<PermissionsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryGroupByPluginsArgs = {
  by: Array<PluginsScalarFieldEnum>;
  having?: InputMaybe<PluginsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PluginsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PluginsWhereInput>;
};


export type QueryGroupByProvidersArgs = {
  by: Array<ProvidersScalarFieldEnum>;
  having?: InputMaybe<ProvidersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProvidersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProvidersWhereInput>;
};


export type QueryGroupByRolesArgs = {
  by: Array<RolesScalarFieldEnum>;
  having?: InputMaybe<RolesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RolesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryGroupBySettingsArgs = {
  by: Array<SettingsScalarFieldEnum>;
  having?: InputMaybe<SettingsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryGroupByTagsArgs = {
  by: Array<TagsScalarFieldEnum>;
  having?: InputMaybe<TagsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagsWhereInput>;
};


export type QueryGroupByThemesArgs = {
  by: Array<ThemesScalarFieldEnum>;
  having?: InputMaybe<ThemesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ThemesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ThemesWhereInput>;
};


export type QueryGroupByUpload_FileArgs = {
  by: Array<Upload_FileScalarFieldEnum>;
  having?: InputMaybe<Upload_FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Upload_FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Upload_FileWhereInput>;
};


export type QueryGroupByUsersArgs = {
  by: Array<UsersScalarFieldEnum>;
  having?: InputMaybe<UsersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryGroupByWebhooksArgs = {
  by: Array<WebhooksScalarFieldEnum>;
  having?: InputMaybe<WebhooksScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<WebhooksOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WebhooksWhereInput>;
};


export type QueryInternalizationArgs = {
  where: InternalizationWhereUniqueInput;
};


export type QueryInternalizationsArgs = {
  cursor?: InputMaybe<InternalizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InternalizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InternalizationOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InternalizationWhereInput>;
};


export type QueryLogInArgs = {
  where: LogInWhereUniqueInput;
};


export type QueryLogInsArgs = {
  cursor?: InputMaybe<LogInWhereUniqueInput>;
  distinct?: InputMaybe<Array<LogInScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LogInOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogInWhereInput>;
};


export type QueryMediamanagerArgs = {
  where: MediamanagerWhereUniqueInput;
};


export type QueryMediamanagersArgs = {
  cursor?: InputMaybe<MediamanagerWhereUniqueInput>;
  distinct?: InputMaybe<Array<MediamanagerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MediamanagerOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MediamanagerWhereInput>;
};


export type QueryUpload_FileArgs = {
  where: Upload_FileWhereUniqueInput;
};


export type QueryUpload_FilesArgs = {
  cursor?: InputMaybe<Upload_FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<Upload_FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Upload_FileOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Upload_FileWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Roles = {
  __typename?: 'Roles';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  role_name: Scalars['String'];
};

export type RolesAvgAggregate = {
  __typename?: 'RolesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type RolesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type RolesCountAggregate = {
  __typename?: 'RolesCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  role_name: Scalars['Int'];
};

export type RolesCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role_name?: InputMaybe<SortOrder>;
};

export type RolesCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  role_name: Scalars['String'];
};

export type RolesCreateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  role_name: Scalars['String'];
};

export type RolesGroupBy = {
  __typename?: 'RolesGroupBy';
  _avg?: Maybe<RolesAvgAggregate>;
  _count?: Maybe<RolesCountAggregate>;
  _max?: Maybe<RolesMaxAggregate>;
  _min?: Maybe<RolesMinAggregate>;
  _sum?: Maybe<RolesSumAggregate>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  role_name: Scalars['String'];
};

export type RolesMaxAggregate = {
  __typename?: 'RolesMaxAggregate';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  role_name?: Maybe<Scalars['String']>;
};

export type RolesMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role_name?: InputMaybe<SortOrder>;
};

export type RolesMinAggregate = {
  __typename?: 'RolesMinAggregate';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  role_name?: Maybe<Scalars['String']>;
};

export type RolesMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role_name?: InputMaybe<SortOrder>;
};

export enum RolesOrderByRelevanceFieldEnum {
  Content = 'content',
  RoleName = 'role_name'
}

export type RolesOrderByRelevanceInput = {
  fields: Array<RolesOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type RolesOrderByWithAggregationInput = {
  _avg?: InputMaybe<RolesAvgOrderByAggregateInput>;
  _count?: InputMaybe<RolesCountOrderByAggregateInput>;
  _max?: InputMaybe<RolesMaxOrderByAggregateInput>;
  _min?: InputMaybe<RolesMinOrderByAggregateInput>;
  _sum?: InputMaybe<RolesSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role_name?: InputMaybe<SortOrder>;
};

export type RolesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<RolesOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role_name?: InputMaybe<SortOrder>;
};

export enum RolesScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  RoleName = 'role_name'
}

export type RolesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RolesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RolesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RolesScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  role_name?: InputMaybe<StringWithAggregatesFilter>;
};

export type RolesSumAggregate = {
  __typename?: 'RolesSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type RolesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type RolesUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RolesUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  role_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RolesWhereInput = {
  AND?: InputMaybe<Array<RolesWhereInput>>;
  NOT?: InputMaybe<Array<RolesWhereInput>>;
  OR?: InputMaybe<Array<RolesWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  role_name?: InputMaybe<StringFilter>;
};

export type RolesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Settings = {
  __typename?: 'Settings';
  address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  allow_countries?: Maybe<Scalars['String']>;
  allow_state?: Maybe<Scalars['String']>;
  allowed_currency?: Maybe<Scalars['String']>;
  awsS3?: Maybe<Scalars['String']>;
  base_currency?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  databaseUrl?: Maybe<Scalars['String']>;
  default_country?: Maybe<Scalars['String']>;
  default_currency?: Maybe<Scalars['String']>;
  european_union_countries?: Maybe<Scalars['String']>;
  googleAnalytics?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  isPublic?: Maybe<Scalars['String']>;
  mailServer?: Maybe<Scalars['String']>;
  optional_zip?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  searchSetting?: Maybe<Scalars['String']>;
  sentryDsn?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteTagline?: Maybe<Scalars['String']>;
  siteWebsite?: Maybe<Scalars['String']>;
  state_required_for?: Maybe<Scalars['String']>;
  store_hours?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  store_phone?: Maybe<Scalars['String']>;
  top_destinations?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type SettingsAvgAggregate = {
  __typename?: 'SettingsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SettingsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SettingsCountAggregate = {
  __typename?: 'SettingsCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  address_two: Scalars['Int'];
  allow_countries: Scalars['Int'];
  allow_state: Scalars['Int'];
  allowed_currency: Scalars['Int'];
  awsS3: Scalars['Int'];
  base_currency: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  created_at: Scalars['Int'];
  databaseUrl: Scalars['Int'];
  default_country: Scalars['Int'];
  default_currency: Scalars['Int'];
  european_union_countries: Scalars['Int'];
  googleAnalytics: Scalars['Int'];
  id: Scalars['Int'];
  isPublic: Scalars['Int'];
  mailServer: Scalars['Int'];
  optional_zip: Scalars['Int'];
  region: Scalars['Int'];
  searchSetting: Scalars['Int'];
  sentryDsn: Scalars['Int'];
  siteName: Scalars['Int'];
  siteTagline: Scalars['Int'];
  siteWebsite: Scalars['Int'];
  state_required_for: Scalars['Int'];
  store_hours: Scalars['Int'];
  store_name: Scalars['Int'];
  store_phone: Scalars['Int'];
  top_destinations: Scalars['Int'];
  type: Scalars['Int'];
  vat_number: Scalars['Int'];
  zipcode: Scalars['Int'];
};

export type SettingsCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  allow_countries?: InputMaybe<SortOrder>;
  allow_state?: InputMaybe<SortOrder>;
  allowed_currency?: InputMaybe<SortOrder>;
  awsS3?: InputMaybe<SortOrder>;
  base_currency?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  databaseUrl?: InputMaybe<SortOrder>;
  default_country?: InputMaybe<SortOrder>;
  default_currency?: InputMaybe<SortOrder>;
  european_union_countries?: InputMaybe<SortOrder>;
  googleAnalytics?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  mailServer?: InputMaybe<SortOrder>;
  optional_zip?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  searchSetting?: InputMaybe<SortOrder>;
  sentryDsn?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  siteTagline?: InputMaybe<SortOrder>;
  siteWebsite?: InputMaybe<SortOrder>;
  state_required_for?: InputMaybe<SortOrder>;
  store_hours?: InputMaybe<SortOrder>;
  store_name?: InputMaybe<SortOrder>;
  store_phone?: InputMaybe<SortOrder>;
  top_destinations?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  vat_number?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type SettingsCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  address_two?: InputMaybe<Scalars['String']>;
  allow_countries?: InputMaybe<Scalars['String']>;
  allow_state?: InputMaybe<Scalars['String']>;
  allowed_currency?: InputMaybe<Scalars['String']>;
  awsS3?: InputMaybe<Scalars['String']>;
  base_currency?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  databaseUrl?: InputMaybe<Scalars['String']>;
  default_country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  european_union_countries?: InputMaybe<Scalars['String']>;
  googleAnalytics?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  isPublic?: InputMaybe<Scalars['String']>;
  mailServer?: InputMaybe<Scalars['String']>;
  optional_zip?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  searchSetting?: InputMaybe<Scalars['String']>;
  sentryDsn?: InputMaybe<Scalars['String']>;
  siteName?: InputMaybe<Scalars['String']>;
  siteTagline?: InputMaybe<Scalars['String']>;
  siteWebsite?: InputMaybe<Scalars['String']>;
  state_required_for?: InputMaybe<Scalars['String']>;
  store_hours?: InputMaybe<Scalars['String']>;
  store_name?: InputMaybe<Scalars['String']>;
  store_phone?: InputMaybe<Scalars['String']>;
  top_destinations?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  vat_number?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type SettingsCreateManyInput = {
  address?: InputMaybe<Scalars['String']>;
  address_two?: InputMaybe<Scalars['String']>;
  allow_countries?: InputMaybe<Scalars['String']>;
  allow_state?: InputMaybe<Scalars['String']>;
  allowed_currency?: InputMaybe<Scalars['String']>;
  awsS3?: InputMaybe<Scalars['String']>;
  base_currency?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  databaseUrl?: InputMaybe<Scalars['String']>;
  default_country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  european_union_countries?: InputMaybe<Scalars['String']>;
  googleAnalytics?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  isPublic?: InputMaybe<Scalars['String']>;
  mailServer?: InputMaybe<Scalars['String']>;
  optional_zip?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  searchSetting?: InputMaybe<Scalars['String']>;
  sentryDsn?: InputMaybe<Scalars['String']>;
  siteName?: InputMaybe<Scalars['String']>;
  siteTagline?: InputMaybe<Scalars['String']>;
  siteWebsite?: InputMaybe<Scalars['String']>;
  state_required_for?: InputMaybe<Scalars['String']>;
  store_hours?: InputMaybe<Scalars['String']>;
  store_name?: InputMaybe<Scalars['String']>;
  store_phone?: InputMaybe<Scalars['String']>;
  top_destinations?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  vat_number?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type SettingsGroupBy = {
  __typename?: 'SettingsGroupBy';
  _avg?: Maybe<SettingsAvgAggregate>;
  _count?: Maybe<SettingsCountAggregate>;
  _max?: Maybe<SettingsMaxAggregate>;
  _min?: Maybe<SettingsMinAggregate>;
  _sum?: Maybe<SettingsSumAggregate>;
  address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  allow_countries?: Maybe<Scalars['String']>;
  allow_state?: Maybe<Scalars['String']>;
  allowed_currency?: Maybe<Scalars['String']>;
  awsS3?: Maybe<Scalars['String']>;
  base_currency?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  databaseUrl?: Maybe<Scalars['String']>;
  default_country?: Maybe<Scalars['String']>;
  default_currency?: Maybe<Scalars['String']>;
  european_union_countries?: Maybe<Scalars['String']>;
  googleAnalytics?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  isPublic?: Maybe<Scalars['String']>;
  mailServer?: Maybe<Scalars['String']>;
  optional_zip?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  searchSetting?: Maybe<Scalars['String']>;
  sentryDsn?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteTagline?: Maybe<Scalars['String']>;
  siteWebsite?: Maybe<Scalars['String']>;
  state_required_for?: Maybe<Scalars['String']>;
  store_hours?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  store_phone?: Maybe<Scalars['String']>;
  top_destinations?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type SettingsMaxAggregate = {
  __typename?: 'SettingsMaxAggregate';
  address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  allow_countries?: Maybe<Scalars['String']>;
  allow_state?: Maybe<Scalars['String']>;
  allowed_currency?: Maybe<Scalars['String']>;
  awsS3?: Maybe<Scalars['String']>;
  base_currency?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  databaseUrl?: Maybe<Scalars['String']>;
  default_country?: Maybe<Scalars['String']>;
  default_currency?: Maybe<Scalars['String']>;
  european_union_countries?: Maybe<Scalars['String']>;
  googleAnalytics?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isPublic?: Maybe<Scalars['String']>;
  mailServer?: Maybe<Scalars['String']>;
  optional_zip?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  searchSetting?: Maybe<Scalars['String']>;
  sentryDsn?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteTagline?: Maybe<Scalars['String']>;
  siteWebsite?: Maybe<Scalars['String']>;
  state_required_for?: Maybe<Scalars['String']>;
  store_hours?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  store_phone?: Maybe<Scalars['String']>;
  top_destinations?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type SettingsMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  allow_countries?: InputMaybe<SortOrder>;
  allow_state?: InputMaybe<SortOrder>;
  allowed_currency?: InputMaybe<SortOrder>;
  awsS3?: InputMaybe<SortOrder>;
  base_currency?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  databaseUrl?: InputMaybe<SortOrder>;
  default_country?: InputMaybe<SortOrder>;
  default_currency?: InputMaybe<SortOrder>;
  european_union_countries?: InputMaybe<SortOrder>;
  googleAnalytics?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  mailServer?: InputMaybe<SortOrder>;
  optional_zip?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  searchSetting?: InputMaybe<SortOrder>;
  sentryDsn?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  siteTagline?: InputMaybe<SortOrder>;
  siteWebsite?: InputMaybe<SortOrder>;
  state_required_for?: InputMaybe<SortOrder>;
  store_hours?: InputMaybe<SortOrder>;
  store_name?: InputMaybe<SortOrder>;
  store_phone?: InputMaybe<SortOrder>;
  top_destinations?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  vat_number?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type SettingsMinAggregate = {
  __typename?: 'SettingsMinAggregate';
  address?: Maybe<Scalars['String']>;
  address_two?: Maybe<Scalars['String']>;
  allow_countries?: Maybe<Scalars['String']>;
  allow_state?: Maybe<Scalars['String']>;
  allowed_currency?: Maybe<Scalars['String']>;
  awsS3?: Maybe<Scalars['String']>;
  base_currency?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  databaseUrl?: Maybe<Scalars['String']>;
  default_country?: Maybe<Scalars['String']>;
  default_currency?: Maybe<Scalars['String']>;
  european_union_countries?: Maybe<Scalars['String']>;
  googleAnalytics?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isPublic?: Maybe<Scalars['String']>;
  mailServer?: Maybe<Scalars['String']>;
  optional_zip?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  searchSetting?: Maybe<Scalars['String']>;
  sentryDsn?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteTagline?: Maybe<Scalars['String']>;
  siteWebsite?: Maybe<Scalars['String']>;
  state_required_for?: Maybe<Scalars['String']>;
  store_hours?: Maybe<Scalars['String']>;
  store_name?: Maybe<Scalars['String']>;
  store_phone?: Maybe<Scalars['String']>;
  top_destinations?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vat_number?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type SettingsMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  allow_countries?: InputMaybe<SortOrder>;
  allow_state?: InputMaybe<SortOrder>;
  allowed_currency?: InputMaybe<SortOrder>;
  awsS3?: InputMaybe<SortOrder>;
  base_currency?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  databaseUrl?: InputMaybe<SortOrder>;
  default_country?: InputMaybe<SortOrder>;
  default_currency?: InputMaybe<SortOrder>;
  european_union_countries?: InputMaybe<SortOrder>;
  googleAnalytics?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  mailServer?: InputMaybe<SortOrder>;
  optional_zip?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  searchSetting?: InputMaybe<SortOrder>;
  sentryDsn?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  siteTagline?: InputMaybe<SortOrder>;
  siteWebsite?: InputMaybe<SortOrder>;
  state_required_for?: InputMaybe<SortOrder>;
  store_hours?: InputMaybe<SortOrder>;
  store_name?: InputMaybe<SortOrder>;
  store_phone?: InputMaybe<SortOrder>;
  top_destinations?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  vat_number?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export enum SettingsOrderByRelevanceFieldEnum {
  Address = 'address',
  AddressTwo = 'address_two',
  AllowCountries = 'allow_countries',
  AllowState = 'allow_state',
  AllowedCurrency = 'allowed_currency',
  AwsS3 = 'awsS3',
  BaseCurrency = 'base_currency',
  City = 'city',
  Country = 'country',
  DatabaseUrl = 'databaseUrl',
  DefaultCountry = 'default_country',
  DefaultCurrency = 'default_currency',
  EuropeanUnionCountries = 'european_union_countries',
  GoogleAnalytics = 'googleAnalytics',
  IsPublic = 'isPublic',
  MailServer = 'mailServer',
  OptionalZip = 'optional_zip',
  Region = 'region',
  SearchSetting = 'searchSetting',
  SentryDsn = 'sentryDsn',
  SiteName = 'siteName',
  SiteTagline = 'siteTagline',
  SiteWebsite = 'siteWebsite',
  StateRequiredFor = 'state_required_for',
  StoreHours = 'store_hours',
  StoreName = 'store_name',
  StorePhone = 'store_phone',
  TopDestinations = 'top_destinations',
  Type = 'type',
  VatNumber = 'vat_number',
  Zipcode = 'zipcode'
}

export type SettingsOrderByRelevanceInput = {
  fields: Array<SettingsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SettingsOrderByWithAggregationInput = {
  _avg?: InputMaybe<SettingsAvgOrderByAggregateInput>;
  _count?: InputMaybe<SettingsCountOrderByAggregateInput>;
  _max?: InputMaybe<SettingsMaxOrderByAggregateInput>;
  _min?: InputMaybe<SettingsMinOrderByAggregateInput>;
  _sum?: InputMaybe<SettingsSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  allow_countries?: InputMaybe<SortOrder>;
  allow_state?: InputMaybe<SortOrder>;
  allowed_currency?: InputMaybe<SortOrder>;
  awsS3?: InputMaybe<SortOrder>;
  base_currency?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  databaseUrl?: InputMaybe<SortOrder>;
  default_country?: InputMaybe<SortOrder>;
  default_currency?: InputMaybe<SortOrder>;
  european_union_countries?: InputMaybe<SortOrder>;
  googleAnalytics?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  mailServer?: InputMaybe<SortOrder>;
  optional_zip?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  searchSetting?: InputMaybe<SortOrder>;
  sentryDsn?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  siteTagline?: InputMaybe<SortOrder>;
  siteWebsite?: InputMaybe<SortOrder>;
  state_required_for?: InputMaybe<SortOrder>;
  store_hours?: InputMaybe<SortOrder>;
  store_name?: InputMaybe<SortOrder>;
  store_phone?: InputMaybe<SortOrder>;
  top_destinations?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  vat_number?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export type SettingsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<SettingsOrderByRelevanceInput>;
  address?: InputMaybe<SortOrder>;
  address_two?: InputMaybe<SortOrder>;
  allow_countries?: InputMaybe<SortOrder>;
  allow_state?: InputMaybe<SortOrder>;
  allowed_currency?: InputMaybe<SortOrder>;
  awsS3?: InputMaybe<SortOrder>;
  base_currency?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  databaseUrl?: InputMaybe<SortOrder>;
  default_country?: InputMaybe<SortOrder>;
  default_currency?: InputMaybe<SortOrder>;
  european_union_countries?: InputMaybe<SortOrder>;
  googleAnalytics?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPublic?: InputMaybe<SortOrder>;
  mailServer?: InputMaybe<SortOrder>;
  optional_zip?: InputMaybe<SortOrder>;
  region?: InputMaybe<SortOrder>;
  searchSetting?: InputMaybe<SortOrder>;
  sentryDsn?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  siteTagline?: InputMaybe<SortOrder>;
  siteWebsite?: InputMaybe<SortOrder>;
  state_required_for?: InputMaybe<SortOrder>;
  store_hours?: InputMaybe<SortOrder>;
  store_name?: InputMaybe<SortOrder>;
  store_phone?: InputMaybe<SortOrder>;
  top_destinations?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  vat_number?: InputMaybe<SortOrder>;
  zipcode?: InputMaybe<SortOrder>;
};

export enum SettingsScalarFieldEnum {
  Address = 'address',
  AddressTwo = 'address_two',
  AllowCountries = 'allow_countries',
  AllowState = 'allow_state',
  AllowedCurrency = 'allowed_currency',
  AwsS3 = 'awsS3',
  BaseCurrency = 'base_currency',
  City = 'city',
  Country = 'country',
  CreatedAt = 'created_at',
  DatabaseUrl = 'databaseUrl',
  DefaultCountry = 'default_country',
  DefaultCurrency = 'default_currency',
  EuropeanUnionCountries = 'european_union_countries',
  GoogleAnalytics = 'googleAnalytics',
  Id = 'id',
  IsPublic = 'isPublic',
  MailServer = 'mailServer',
  OptionalZip = 'optional_zip',
  Region = 'region',
  SearchSetting = 'searchSetting',
  SentryDsn = 'sentryDsn',
  SiteName = 'siteName',
  SiteTagline = 'siteTagline',
  SiteWebsite = 'siteWebsite',
  StateRequiredFor = 'state_required_for',
  StoreHours = 'store_hours',
  StoreName = 'store_name',
  StorePhone = 'store_phone',
  TopDestinations = 'top_destinations',
  Type = 'type',
  VatNumber = 'vat_number',
  Zipcode = 'zipcode'
}

export type SettingsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SettingsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SettingsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SettingsScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  address_two?: InputMaybe<StringNullableWithAggregatesFilter>;
  allow_countries?: InputMaybe<StringNullableWithAggregatesFilter>;
  allow_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  allowed_currency?: InputMaybe<StringNullableWithAggregatesFilter>;
  awsS3?: InputMaybe<StringNullableWithAggregatesFilter>;
  base_currency?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringNullableWithAggregatesFilter>;
  country?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  databaseUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  default_country?: InputMaybe<StringNullableWithAggregatesFilter>;
  default_currency?: InputMaybe<StringNullableWithAggregatesFilter>;
  european_union_countries?: InputMaybe<StringNullableWithAggregatesFilter>;
  googleAnalytics?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  isPublic?: InputMaybe<StringNullableWithAggregatesFilter>;
  mailServer?: InputMaybe<StringNullableWithAggregatesFilter>;
  optional_zip?: InputMaybe<StringNullableWithAggregatesFilter>;
  region?: InputMaybe<StringNullableWithAggregatesFilter>;
  searchSetting?: InputMaybe<StringNullableWithAggregatesFilter>;
  sentryDsn?: InputMaybe<StringNullableWithAggregatesFilter>;
  siteName?: InputMaybe<StringNullableWithAggregatesFilter>;
  siteTagline?: InputMaybe<StringNullableWithAggregatesFilter>;
  siteWebsite?: InputMaybe<StringNullableWithAggregatesFilter>;
  state_required_for?: InputMaybe<StringNullableWithAggregatesFilter>;
  store_hours?: InputMaybe<StringNullableWithAggregatesFilter>;
  store_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  store_phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  top_destinations?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringNullableWithAggregatesFilter>;
  vat_number?: InputMaybe<StringNullableWithAggregatesFilter>;
  zipcode?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type SettingsSumAggregate = {
  __typename?: 'SettingsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type SettingsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SettingsUpdateInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address_two?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allow_countries?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allow_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allowed_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awsS3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  base_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  databaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  default_country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  default_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  european_union_countries?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  googleAnalytics?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mailServer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  optional_zip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchSetting?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sentryDsn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteTagline?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteWebsite?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state_required_for?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_hours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  top_destinations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vat_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SettingsUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  address_two?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allow_countries?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allow_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allowed_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  awsS3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  base_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  databaseUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  default_country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  default_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  european_union_countries?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  googleAnalytics?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  isPublic?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mailServer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  optional_zip?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  region?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  searchSetting?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sentryDsn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteTagline?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  siteWebsite?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state_required_for?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_hours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store_phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  top_destinations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vat_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  zipcode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SettingsWhereInput = {
  AND?: InputMaybe<Array<SettingsWhereInput>>;
  NOT?: InputMaybe<Array<SettingsWhereInput>>;
  OR?: InputMaybe<Array<SettingsWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  address_two?: InputMaybe<StringNullableFilter>;
  allow_countries?: InputMaybe<StringNullableFilter>;
  allow_state?: InputMaybe<StringNullableFilter>;
  allowed_currency?: InputMaybe<StringNullableFilter>;
  awsS3?: InputMaybe<StringNullableFilter>;
  base_currency?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  databaseUrl?: InputMaybe<StringNullableFilter>;
  default_country?: InputMaybe<StringNullableFilter>;
  default_currency?: InputMaybe<StringNullableFilter>;
  european_union_countries?: InputMaybe<StringNullableFilter>;
  googleAnalytics?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  isPublic?: InputMaybe<StringNullableFilter>;
  mailServer?: InputMaybe<StringNullableFilter>;
  optional_zip?: InputMaybe<StringNullableFilter>;
  region?: InputMaybe<StringNullableFilter>;
  searchSetting?: InputMaybe<StringNullableFilter>;
  sentryDsn?: InputMaybe<StringNullableFilter>;
  siteName?: InputMaybe<StringNullableFilter>;
  siteTagline?: InputMaybe<StringNullableFilter>;
  siteWebsite?: InputMaybe<StringNullableFilter>;
  state_required_for?: InputMaybe<StringNullableFilter>;
  store_hours?: InputMaybe<StringNullableFilter>;
  store_name?: InputMaybe<StringNullableFilter>;
  store_phone?: InputMaybe<StringNullableFilter>;
  top_destinations?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  vat_number?: InputMaybe<StringNullableFilter>;
  zipcode?: InputMaybe<StringNullableFilter>;
};

export type SettingsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tags = {
  __typename?: 'Tags';
  articles?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  customers?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  products?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type TagsAvgAggregate = {
  __typename?: 'TagsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TagsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagsCountAggregate = {
  __typename?: 'TagsCountAggregate';
  _all: Scalars['Int'];
  articles: Scalars['Int'];
  categories: Scalars['Int'];
  customers: Scalars['Int'];
  excerpt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  products: Scalars['Int'];
  users: Scalars['Int'];
};

export type TagsCountOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  categories?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type TagsCreateInput = {
  articles?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
  customers?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type TagsCreateManyInput = {
  articles?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
  customers?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  products?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
};

export type TagsGroupBy = {
  __typename?: 'TagsGroupBy';
  _avg?: Maybe<TagsAvgAggregate>;
  _count?: Maybe<TagsCountAggregate>;
  _max?: Maybe<TagsMaxAggregate>;
  _min?: Maybe<TagsMinAggregate>;
  _sum?: Maybe<TagsSumAggregate>;
  articles?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  customers?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  products?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type TagsMaxAggregate = {
  __typename?: 'TagsMaxAggregate';
  articles?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  customers?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type TagsMaxOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  categories?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type TagsMinAggregate = {
  __typename?: 'TagsMinAggregate';
  articles?: Maybe<Scalars['String']>;
  categories?: Maybe<Scalars['String']>;
  customers?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  users?: Maybe<Scalars['String']>;
};

export type TagsMinOrderByAggregateInput = {
  articles?: InputMaybe<SortOrder>;
  categories?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum TagsOrderByRelevanceFieldEnum {
  Articles = 'articles',
  Categories = 'categories',
  Customers = 'customers',
  Excerpt = 'excerpt',
  Name = 'name',
  Products = 'products',
  Users = 'users'
}

export type TagsOrderByRelevanceInput = {
  fields: Array<TagsOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type TagsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TagsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TagsCountOrderByAggregateInput>;
  _max?: InputMaybe<TagsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TagsSumOrderByAggregateInput>;
  articles?: InputMaybe<SortOrder>;
  categories?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export type TagsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<TagsOrderByRelevanceInput>;
  articles?: InputMaybe<SortOrder>;
  categories?: InputMaybe<SortOrder>;
  customers?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<SortOrder>;
  users?: InputMaybe<SortOrder>;
};

export enum TagsScalarFieldEnum {
  Articles = 'articles',
  Categories = 'categories',
  Customers = 'customers',
  Excerpt = 'excerpt',
  Id = 'id',
  Name = 'name',
  Products = 'products',
  Users = 'users'
}

export type TagsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagsScalarWhereWithAggregatesInput>>;
  articles?: InputMaybe<StringNullableWithAggregatesFilter>;
  categories?: InputMaybe<StringNullableWithAggregatesFilter>;
  customers?: InputMaybe<StringNullableWithAggregatesFilter>;
  excerpt?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  products?: InputMaybe<StringNullableWithAggregatesFilter>;
  users?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type TagsSumAggregate = {
  __typename?: 'TagsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TagsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagsUpdateInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  excerpt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagsUpdateManyMutationInput = {
  articles?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  categories?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  excerpt?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  users?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TagsWhereInput = {
  AND?: InputMaybe<Array<TagsWhereInput>>;
  NOT?: InputMaybe<Array<TagsWhereInput>>;
  OR?: InputMaybe<Array<TagsWhereInput>>;
  articles?: InputMaybe<StringNullableFilter>;
  categories?: InputMaybe<StringNullableFilter>;
  customers?: InputMaybe<StringNullableFilter>;
  excerpt?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<StringNullableFilter>;
};

export type TagsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Themes = {
  __typename?: 'Themes';
  action?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  parent_theme?: Maybe<Scalars['String']>;
  theme_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  website_id: Scalars['BigInt'];
  websites: Scalars['String'];
};

export type ThemesAvgAggregate = {
  __typename?: 'ThemesAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  website_id?: Maybe<Scalars['Float']>;
};

export type ThemesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
};

export type ThemesCountAggregate = {
  __typename?: 'ThemesCountAggregate';
  _all: Scalars['Int'];
  action: Scalars['Int'];
  id: Scalars['Int'];
  parent_theme: Scalars['Int'];
  theme_path: Scalars['Int'];
  title: Scalars['Int'];
  website_id: Scalars['Int'];
  websites: Scalars['Int'];
};

export type ThemesCountOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_theme?: InputMaybe<SortOrder>;
  theme_path?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
};

export type ThemesCreateInput = {
  action?: InputMaybe<Scalars['String']>;
  parent_theme?: InputMaybe<Scalars['String']>;
  theme_path?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  website_id: Scalars['BigInt'];
  websites: Scalars['String'];
};

export type ThemesCreateManyInput = {
  action?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  parent_theme?: InputMaybe<Scalars['String']>;
  theme_path?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  website_id: Scalars['BigInt'];
  websites: Scalars['String'];
};

export type ThemesGroupBy = {
  __typename?: 'ThemesGroupBy';
  _avg?: Maybe<ThemesAvgAggregate>;
  _count?: Maybe<ThemesCountAggregate>;
  _max?: Maybe<ThemesMaxAggregate>;
  _min?: Maybe<ThemesMinAggregate>;
  _sum?: Maybe<ThemesSumAggregate>;
  action?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  parent_theme?: Maybe<Scalars['String']>;
  theme_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  website_id: Scalars['BigInt'];
  websites: Scalars['String'];
};

export type ThemesMaxAggregate = {
  __typename?: 'ThemesMaxAggregate';
  action?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parent_theme?: Maybe<Scalars['String']>;
  theme_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  website_id?: Maybe<Scalars['BigInt']>;
  websites?: Maybe<Scalars['String']>;
};

export type ThemesMaxOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_theme?: InputMaybe<SortOrder>;
  theme_path?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
};

export type ThemesMinAggregate = {
  __typename?: 'ThemesMinAggregate';
  action?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  parent_theme?: Maybe<Scalars['String']>;
  theme_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  website_id?: Maybe<Scalars['BigInt']>;
  websites?: Maybe<Scalars['String']>;
};

export type ThemesMinOrderByAggregateInput = {
  action?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_theme?: InputMaybe<SortOrder>;
  theme_path?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
};

export enum ThemesOrderByRelevanceFieldEnum {
  Action = 'action',
  ParentTheme = 'parent_theme',
  ThemePath = 'theme_path',
  Title = 'title',
  Websites = 'websites'
}

export type ThemesOrderByRelevanceInput = {
  fields: Array<ThemesOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ThemesOrderByWithAggregationInput = {
  _avg?: InputMaybe<ThemesAvgOrderByAggregateInput>;
  _count?: InputMaybe<ThemesCountOrderByAggregateInput>;
  _max?: InputMaybe<ThemesMaxOrderByAggregateInput>;
  _min?: InputMaybe<ThemesMinOrderByAggregateInput>;
  _sum?: InputMaybe<ThemesSumOrderByAggregateInput>;
  action?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_theme?: InputMaybe<SortOrder>;
  theme_path?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
};

export type ThemesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ThemesOrderByRelevanceInput>;
  action?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parent_theme?: InputMaybe<SortOrder>;
  theme_path?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
  websites?: InputMaybe<SortOrder>;
};

export enum ThemesScalarFieldEnum {
  Action = 'action',
  Id = 'id',
  ParentTheme = 'parent_theme',
  ThemePath = 'theme_path',
  Title = 'title',
  WebsiteId = 'website_id',
  Websites = 'websites'
}

export type ThemesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ThemesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ThemesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ThemesScalarWhereWithAggregatesInput>>;
  action?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  parent_theme?: InputMaybe<StringNullableWithAggregatesFilter>;
  theme_path?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringNullableWithAggregatesFilter>;
  website_id?: InputMaybe<BigIntWithAggregatesFilter>;
  websites?: InputMaybe<StringWithAggregatesFilter>;
};

export type ThemesSumAggregate = {
  __typename?: 'ThemesSumAggregate';
  id?: Maybe<Scalars['Int']>;
  website_id?: Maybe<Scalars['BigInt']>;
};

export type ThemesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  website_id?: InputMaybe<SortOrder>;
};

export type ThemesUpdateInput = {
  action?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent_theme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  theme_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website_id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  websites?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ThemesUpdateManyMutationInput = {
  action?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  parent_theme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  theme_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  website_id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  websites?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ThemesWhereInput = {
  AND?: InputMaybe<Array<ThemesWhereInput>>;
  NOT?: InputMaybe<Array<ThemesWhereInput>>;
  OR?: InputMaybe<Array<ThemesWhereInput>>;
  action?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  parent_theme?: InputMaybe<StringNullableFilter>;
  theme_path?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  website_id?: InputMaybe<BigIntFilter>;
  websites?: InputMaybe<StringFilter>;
};

export type ThemesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Upload_File = {
  __typename?: 'Upload_file';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  size: Scalars['Decimal'];
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Upload_FileAvgAggregate = {
  __typename?: 'Upload_fileAvgAggregate';
  created_by?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Decimal']>;
  updated_by?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type Upload_FileAvgOrderByAggregateInput = {
  created_by?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type Upload_FileCountAggregate = {
  __typename?: 'Upload_fileCountAggregate';
  _all: Scalars['Int'];
  alternativeText: Scalars['Int'];
  caption: Scalars['Int'];
  created_at: Scalars['Int'];
  created_by: Scalars['Int'];
  ext: Scalars['Int'];
  formats: Scalars['Int'];
  hash: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  mime: Scalars['Int'];
  name: Scalars['Int'];
  previewUrl: Scalars['Int'];
  provider: Scalars['Int'];
  provider_metadata: Scalars['Int'];
  size: Scalars['Int'];
  updated_at: Scalars['Int'];
  updated_by: Scalars['Int'];
  url: Scalars['Int'];
  width: Scalars['Int'];
};

export type Upload_FileCountOrderByAggregateInput = {
  alternativeText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  ext?: InputMaybe<SortOrder>;
  formats?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  previewUrl?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  provider_metadata?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type Upload_FileCreateInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['Int']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size: Scalars['Decimal'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Upload_FileCreateManyInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['Int']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size: Scalars['Decimal'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Upload_FileGroupBy = {
  __typename?: 'Upload_fileGroupBy';
  _avg?: Maybe<Upload_FileAvgAggregate>;
  _count?: Maybe<Upload_FileCountAggregate>;
  _max?: Maybe<Upload_FileMaxAggregate>;
  _min?: Maybe<Upload_FileMinAggregate>;
  _sum?: Maybe<Upload_FileSumAggregate>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  size: Scalars['Decimal'];
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Upload_FileMaxAggregate = {
  __typename?: 'Upload_fileMaxAggregate';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Decimal']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Upload_FileMaxOrderByAggregateInput = {
  alternativeText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  ext?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  previewUrl?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type Upload_FileMinAggregate = {
  __typename?: 'Upload_fileMinAggregate';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Decimal']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Upload_FileMinOrderByAggregateInput = {
  alternativeText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  ext?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  previewUrl?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum Upload_FileOrderByRelevanceFieldEnum {
  AlternativeText = 'alternativeText',
  Caption = 'caption',
  Ext = 'ext',
  Hash = 'hash',
  Mime = 'mime',
  Name = 'name',
  PreviewUrl = 'previewUrl',
  Provider = 'provider',
  Url = 'url'
}

export type Upload_FileOrderByRelevanceInput = {
  fields: Array<Upload_FileOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type Upload_FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<Upload_FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<Upload_FileCountOrderByAggregateInput>;
  _max?: InputMaybe<Upload_FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<Upload_FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<Upload_FileSumOrderByAggregateInput>;
  alternativeText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  ext?: InputMaybe<SortOrder>;
  formats?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  previewUrl?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  provider_metadata?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type Upload_FileOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<Upload_FileOrderByRelevanceInput>;
  alternativeText?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  created_by?: InputMaybe<SortOrder>;
  ext?: InputMaybe<SortOrder>;
  formats?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  previewUrl?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  provider_metadata?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum Upload_FileScalarFieldEnum {
  AlternativeText = 'alternativeText',
  Caption = 'caption',
  CreatedAt = 'created_at',
  CreatedBy = 'created_by',
  Ext = 'ext',
  Formats = 'formats',
  Hash = 'hash',
  Height = 'height',
  Id = 'id',
  Mime = 'mime',
  Name = 'name',
  PreviewUrl = 'previewUrl',
  Provider = 'provider',
  ProviderMetadata = 'provider_metadata',
  Size = 'size',
  UpdatedAt = 'updated_at',
  UpdatedBy = 'updated_by',
  Url = 'url',
  Width = 'width'
}

export type Upload_FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Upload_FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Upload_FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Upload_FileScalarWhereWithAggregatesInput>>;
  alternativeText?: InputMaybe<StringNullableWithAggregatesFilter>;
  caption?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  created_by?: InputMaybe<IntNullableWithAggregatesFilter>;
  ext?: InputMaybe<StringNullableWithAggregatesFilter>;
  formats?: InputMaybe<JsonNullableWithAggregatesFilter>;
  hash?: InputMaybe<StringWithAggregatesFilter>;
  height?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mime?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  previewUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  provider_metadata?: InputMaybe<JsonNullableWithAggregatesFilter>;
  size?: InputMaybe<DecimalWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  updated_by?: InputMaybe<IntNullableWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
  width?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type Upload_FileSumAggregate = {
  __typename?: 'Upload_fileSumAggregate';
  created_by?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Decimal']>;
  updated_by?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Upload_FileSumOrderByAggregateInput = {
  created_by?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type Upload_FileUpdateInput = {
  alternativeText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_by?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ext?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mime?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  previewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_by?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type Upload_FileUpdateManyMutationInput = {
  alternativeText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  caption?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  created_by?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ext?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mime?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  previewUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_by?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type Upload_FileWhereInput = {
  AND?: InputMaybe<Array<Upload_FileWhereInput>>;
  NOT?: InputMaybe<Array<Upload_FileWhereInput>>;
  OR?: InputMaybe<Array<Upload_FileWhereInput>>;
  alternativeText?: InputMaybe<StringNullableFilter>;
  caption?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  created_by?: InputMaybe<IntNullableFilter>;
  ext?: InputMaybe<StringNullableFilter>;
  formats?: InputMaybe<JsonNullableFilter>;
  hash?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  mime?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  previewUrl?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  provider_metadata?: InputMaybe<JsonNullableFilter>;
  size?: InputMaybe<DecimalFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  updated_by?: InputMaybe<IntNullableFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type Upload_FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Users = {
  __typename?: 'Users';
  created_at?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emails?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['BigInt'];
  interface_locale?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type UsersAvgAggregate = {
  __typename?: 'UsersAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UsersAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  emails: Scalars['Int'];
  first_name: Scalars['Int'];
  id: Scalars['Int'];
  interface_locale: Scalars['Int'];
  last_name: Scalars['Int'];
  mediamanager: Scalars['Int'];
  messages: Scalars['Int'];
  password: Scalars['Int'];
  permissions: Scalars['Int'];
  projects: Scalars['Int'];
  username: Scalars['Int'];
  value: Scalars['Int'];
  workspaces: Scalars['Int'];
};

export type UsersCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interface_locale?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type UsersCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emails?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  interface_locale?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  mediamanager?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
};

export type UsersCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emails?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  interface_locale?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  mediamanager?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Scalars['String']>;
};

export type UsersGroupBy = {
  __typename?: 'UsersGroupBy';
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
  created_at?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emails?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['BigInt'];
  interface_locale?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  interface_locale?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type UsersMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interface_locale?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  interface_locale?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mediamanager?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  workspaces?: Maybe<Scalars['String']>;
};

export type UsersMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interface_locale?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export enum UsersOrderByRelevanceFieldEnum {
  Email = 'email',
  Emails = 'emails',
  FirstName = 'first_name',
  InterfaceLocale = 'interface_locale',
  LastName = 'last_name',
  Mediamanager = 'mediamanager',
  Messages = 'messages',
  Password = 'password',
  Permissions = 'permissions',
  Projects = 'projects',
  Username = 'username',
  Value = 'value',
  Workspaces = 'workspaces'
}

export type UsersOrderByRelevanceInput = {
  fields: Array<UsersOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type UsersOrderByWithAggregationInput = {
  _avg?: InputMaybe<UsersAvgOrderByAggregateInput>;
  _count?: InputMaybe<UsersCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersMinOrderByAggregateInput>;
  _sum?: InputMaybe<UsersSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interface_locale?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export type UsersOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UsersOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emails?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interface_locale?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  mediamanager?: InputMaybe<SortOrder>;
  messages?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  projects?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  workspaces?: InputMaybe<SortOrder>;
};

export enum UsersScalarFieldEnum {
  CreatedAt = 'created_at',
  Email = 'email',
  Emails = 'emails',
  FirstName = 'first_name',
  Id = 'id',
  InterfaceLocale = 'interface_locale',
  LastName = 'last_name',
  Mediamanager = 'mediamanager',
  Messages = 'messages',
  Password = 'password',
  Permissions = 'permissions',
  Projects = 'projects',
  Username = 'username',
  Value = 'value',
  Workspaces = 'workspaces'
}

export type UsersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emails?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  interface_locale?: InputMaybe<StringNullableWithAggregatesFilter>;
  last_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  mediamanager?: InputMaybe<StringNullableWithAggregatesFilter>;
  messages?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  permissions?: InputMaybe<StringNullableWithAggregatesFilter>;
  projects?: InputMaybe<StringNullableWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringNullableWithAggregatesFilter>;
  workspaces?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UsersSumAggregate = {
  __typename?: 'UsersSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type UsersSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  interface_locale?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UsersUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emails?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  interface_locale?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mediamanager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  workspaces?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emails?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  interface_locale?: InputMaybe<StringNullableFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  mediamanager?: InputMaybe<StringNullableFilter>;
  messages?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringNullableFilter>;
  projects?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
  workspaces?: InputMaybe<StringNullableFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Webhooks = {
  __typename?: 'Webhooks';
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  publish?: Maybe<Scalars['String']>;
  retrieve?: Maybe<Scalars['String']>;
  unpublish?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type WebhooksAvgAggregate = {
  __typename?: 'WebhooksAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type WebhooksAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type WebhooksCountAggregate = {
  __typename?: 'WebhooksCountAggregate';
  _all: Scalars['Int'];
  create: Scalars['Int'];
  created_at: Scalars['Int'];
  delete: Scalars['Int'];
  headers: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  publish: Scalars['Int'];
  retrieve: Scalars['Int'];
  unpublish: Scalars['Int'];
  update: Scalars['Int'];
  url: Scalars['Int'];
};

export type WebhooksCountOrderByAggregateInput = {
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  headers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publish?: InputMaybe<SortOrder>;
  retrieve?: InputMaybe<SortOrder>;
  unpublish?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebhooksCreateInput = {
  create?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  delete?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  publish?: InputMaybe<Scalars['String']>;
  retrieve?: InputMaybe<Scalars['String']>;
  unpublish?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type WebhooksCreateManyInput = {
  create?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  delete?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  publish?: InputMaybe<Scalars['String']>;
  retrieve?: InputMaybe<Scalars['String']>;
  unpublish?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type WebhooksGroupBy = {
  __typename?: 'WebhooksGroupBy';
  _avg?: Maybe<WebhooksAvgAggregate>;
  _count?: Maybe<WebhooksCountAggregate>;
  _max?: Maybe<WebhooksMaxAggregate>;
  _min?: Maybe<WebhooksMinAggregate>;
  _sum?: Maybe<WebhooksSumAggregate>;
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name: Scalars['String'];
  publish?: Maybe<Scalars['String']>;
  retrieve?: Maybe<Scalars['String']>;
  unpublish?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type WebhooksMaxAggregate = {
  __typename?: 'WebhooksMaxAggregate';
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  publish?: Maybe<Scalars['String']>;
  retrieve?: Maybe<Scalars['String']>;
  unpublish?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WebhooksMaxOrderByAggregateInput = {
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  headers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publish?: InputMaybe<SortOrder>;
  retrieve?: InputMaybe<SortOrder>;
  unpublish?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebhooksMinAggregate = {
  __typename?: 'WebhooksMinAggregate';
  create?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  delete?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  publish?: Maybe<Scalars['String']>;
  retrieve?: Maybe<Scalars['String']>;
  unpublish?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WebhooksMinOrderByAggregateInput = {
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  headers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publish?: InputMaybe<SortOrder>;
  retrieve?: InputMaybe<SortOrder>;
  unpublish?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum WebhooksOrderByRelevanceFieldEnum {
  Create = 'create',
  Delete = 'delete',
  Headers = 'headers',
  Name = 'name',
  Publish = 'publish',
  Retrieve = 'retrieve',
  Unpublish = 'unpublish',
  Update = 'update',
  Url = 'url'
}

export type WebhooksOrderByRelevanceInput = {
  fields: Array<WebhooksOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type WebhooksOrderByWithAggregationInput = {
  _avg?: InputMaybe<WebhooksAvgOrderByAggregateInput>;
  _count?: InputMaybe<WebhooksCountOrderByAggregateInput>;
  _max?: InputMaybe<WebhooksMaxOrderByAggregateInput>;
  _min?: InputMaybe<WebhooksMinOrderByAggregateInput>;
  _sum?: InputMaybe<WebhooksSumOrderByAggregateInput>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  headers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publish?: InputMaybe<SortOrder>;
  retrieve?: InputMaybe<SortOrder>;
  unpublish?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebhooksOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<WebhooksOrderByRelevanceInput>;
  create?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  delete?: InputMaybe<SortOrder>;
  headers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  publish?: InputMaybe<SortOrder>;
  retrieve?: InputMaybe<SortOrder>;
  unpublish?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum WebhooksScalarFieldEnum {
  Create = 'create',
  CreatedAt = 'created_at',
  Delete = 'delete',
  Headers = 'headers',
  Id = 'id',
  Name = 'name',
  Publish = 'publish',
  Retrieve = 'retrieve',
  Unpublish = 'unpublish',
  Update = 'update',
  Url = 'url'
}

export type WebhooksScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<WebhooksScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<WebhooksScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<WebhooksScalarWhereWithAggregatesInput>>;
  create?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  delete?: InputMaybe<StringNullableWithAggregatesFilter>;
  headers?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  publish?: InputMaybe<StringNullableWithAggregatesFilter>;
  retrieve?: InputMaybe<StringNullableWithAggregatesFilter>;
  unpublish?: InputMaybe<StringNullableWithAggregatesFilter>;
  update?: InputMaybe<StringNullableWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type WebhooksSumAggregate = {
  __typename?: 'WebhooksSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type WebhooksSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type WebhooksUpdateInput = {
  create?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  publish?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  retrieve?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unpublish?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  update?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebhooksUpdateManyMutationInput = {
  create?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  delete?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  headers?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  publish?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  retrieve?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  unpublish?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  update?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebhooksWhereInput = {
  AND?: InputMaybe<Array<WebhooksWhereInput>>;
  NOT?: InputMaybe<Array<WebhooksWhereInput>>;
  OR?: InputMaybe<Array<WebhooksWhereInput>>;
  create?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  delete?: InputMaybe<StringNullableFilter>;
  headers?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  publish?: InputMaybe<StringNullableFilter>;
  retrieve?: InputMaybe<StringNullableFilter>;
  unpublish?: InputMaybe<StringNullableFilter>;
  update?: InputMaybe<StringNullableFilter>;
  url?: InputMaybe<StringFilter>;
};

export type WebhooksWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};
