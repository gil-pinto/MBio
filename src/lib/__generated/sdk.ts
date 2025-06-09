import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
  socialLinkCollection?: Maybe<SocialLinkCollection>;
  upBottomCollection?: Maybe<UpBottomCollection>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSocialLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsUpBottomCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/button) */
export type Button = Entry & _Node & {
  __typename?: 'Button';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  label?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/button) */
export type ButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/button) */
export type ButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/button) */
export type ButtonVariantArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonLinkingCollectionsHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ButtonLinkingCollectionsHeroBannerCollectionOrder {
  BackgroundTypeAsc = 'backgroundType_ASC',
  BackgroundTypeDesc = 'backgroundType_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ButtonOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID'];
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties in the pages we render [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID'];
  companyInfo?: Maybe<FooterCompanyInfo>;
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Scalars['String']>;
  footerColumnsCollection?: Maybe<FooterFooterColumnsCollection>;
  legalLinksCollection?: Maybe<FooterLegalLinksCollection>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  socialLinksCollection?: Maybe<FooterSocialLinksCollection>;
  subscribeCallout?: Maybe<SubscriptionCallout>;
  sys: Sys;
  upBottom?: Maybe<UpBottom>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterCompanyInfoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterFooterColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterFooterColumnsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterColumnFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterLegalLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterLegalLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterSocialLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterSubscribeCalloutArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SubscriptionCalloutFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footer) */
export type FooterUpBottomArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<UpBottomFilter>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footerColumn) */
export type FooterColumn = Entry & _Node & {
  __typename?: 'FooterColumn';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FooterColumnLinkingCollections>;
  linksCollection?: Maybe<FooterColumnLinksCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footerColumn) */
export type FooterColumnLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footerColumn) */
export type FooterColumnLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/footerColumn) */
export type FooterColumnTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterColumnCollection = {
  __typename?: 'FooterColumnCollection';
  items: Array<Maybe<FooterColumn>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterColumnFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterColumnFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterColumnFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterColumnLinkingCollections = {
  __typename?: 'FooterColumnLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterColumnLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterColumnLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterColumnLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterColumnLinkingCollectionsFooterCollectionOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterColumnLinksCollection = {
  __typename?: 'FooterColumnLinksCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterColumnOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterCompanyInfo = {
  __typename?: 'FooterCompanyInfo';
  json: Scalars['JSON'];
  links: FooterCompanyInfoLinks;
};

export type FooterCompanyInfoAssets = {
  __typename?: 'FooterCompanyInfoAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterCompanyInfoEntries = {
  __typename?: 'FooterCompanyInfoEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterCompanyInfoLinks = {
  __typename?: 'FooterCompanyInfoLinks';
  assets: FooterCompanyInfoAssets;
  entries: FooterCompanyInfoEntries;
  resources: FooterCompanyInfoResources;
};

export type FooterCompanyInfoResources = {
  __typename?: 'FooterCompanyInfoResources';
  block: Array<FooterCompanyInfoResourcesBlock>;
  hyperlink: Array<FooterCompanyInfoResourcesHyperlink>;
  inline: Array<FooterCompanyInfoResourcesInline>;
};

export type FooterCompanyInfoResourcesBlock = ResourceLink & {
  __typename?: 'FooterCompanyInfoResourcesBlock';
  sys: ResourceSys;
};

export type FooterCompanyInfoResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterCompanyInfoResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterCompanyInfoResourcesInline = ResourceLink & {
  __typename?: 'FooterCompanyInfoResourcesInline';
  sys: ResourceSys;
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  companyInfo_contains?: InputMaybe<Scalars['String']>;
  companyInfo_exists?: InputMaybe<Scalars['Boolean']>;
  companyInfo_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<Scalars['String']>;
  footerColumns?: InputMaybe<CfFooterColumnNestedFilter>;
  footerColumnsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  footer_contains?: InputMaybe<Scalars['String']>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  footer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  footer_not?: InputMaybe<Scalars['String']>;
  footer_not_contains?: InputMaybe<Scalars['String']>;
  footer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalLinks?: InputMaybe<CfLinkNestedFilter>;
  legalLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  socialLinks?: InputMaybe<CfSocialLinkNestedFilter>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subscribeCallout?: InputMaybe<CfSubscriptionCalloutNestedFilter>;
  subscribeCallout_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  upBottom?: InputMaybe<CfUpBottomNestedFilter>;
  upBottom_exists?: InputMaybe<Scalars['Boolean']>;
};

export type FooterFooterColumnsCollection = {
  __typename?: 'FooterFooterColumnsCollection';
  items: Array<Maybe<FooterColumn>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterFooterColumnsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterLegalLinksCollection = {
  __typename?: 'FooterLegalLinksCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterLegalLinksCollectionOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkVariantAsc = 'linkVariant_ASC',
  LinkVariantDesc = 'linkVariant_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterSocialLinksCollection = {
  __typename?: 'FooterSocialLinksCollection';
  items: Array<Maybe<SocialLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterSocialLinksCollectionOrder {
  PlatformAsc = 'platform_ASC',
  PlatformDesc = 'platform_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPage = Entry & _Node & {
  __typename?: 'GenericContentPage';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GenericContentPageLinkingCollections>;
  modularBlocksCollection?: Maybe<GenericContentPageModularBlocksCollection>;
  pageTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sys: Sys;
  urlPath?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPageModularBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenericContentPageModularBlocksFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPagePageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPageSeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPageSeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/genericContentPage) */
export type GenericContentPageUrlPathArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GenericContentPageCollection = {
  __typename?: 'GenericContentPageCollection';
  items: Array<Maybe<GenericContentPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GenericContentPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<GenericContentPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GenericContentPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  modularBlocks?: InputMaybe<CfmodularBlocksMultiTypeNestedFilter>;
  modularBlocksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoDescription_contains?: InputMaybe<Scalars['String']>;
  seoDescription_exists?: InputMaybe<Scalars['Boolean']>;
  seoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoDescription_not?: InputMaybe<Scalars['String']>;
  seoDescription_not_contains?: InputMaybe<Scalars['String']>;
  seoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoTitle?: InputMaybe<Scalars['String']>;
  seoTitle_contains?: InputMaybe<Scalars['String']>;
  seoTitle_exists?: InputMaybe<Scalars['Boolean']>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoTitle_not?: InputMaybe<Scalars['String']>;
  seoTitle_not_contains?: InputMaybe<Scalars['String']>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  urlPath?: InputMaybe<Scalars['String']>;
  urlPath_contains?: InputMaybe<Scalars['String']>;
  urlPath_exists?: InputMaybe<Scalars['Boolean']>;
  urlPath_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  urlPath_not?: InputMaybe<Scalars['String']>;
  urlPath_not_contains?: InputMaybe<Scalars['String']>;
  urlPath_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GenericContentPageLinkingCollections = {
  __typename?: 'GenericContentPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GenericContentPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GenericContentPageModularBlocksCollection = {
  __typename?: 'GenericContentPageModularBlocksCollection';
  items: Array<Maybe<GenericContentPageModularBlocksItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GenericContentPageModularBlocksFilter = {
  AND?: InputMaybe<Array<InputMaybe<GenericContentPageModularBlocksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GenericContentPageModularBlocksFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type GenericContentPageModularBlocksItem = HeroBanner | PageProduct;

export enum GenericContentPageOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlPathAsc = 'urlPath_ASC',
  UrlPathDesc = 'urlPath_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBanner = Entry & _Node & {
  __typename?: 'HeroBanner';
  _id: Scalars['ID'];
  backgroundImage?: Maybe<Asset>;
  backgroundType?: Maybe<Scalars['String']>;
  backgroundVideo?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkCollection?: Maybe<HeroBannerLinkCollection>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerBackgroundTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerBackgroundVideoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundType?: InputMaybe<Scalars['String']>;
  backgroundType_contains?: InputMaybe<Scalars['String']>;
  backgroundType_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundType_not?: InputMaybe<Scalars['String']>;
  backgroundType_not_contains?: InputMaybe<Scalars['String']>;
  backgroundType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundVideo_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<CfButtonNestedFilter>;
  linkCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroBannerLinkCollection = {
  __typename?: 'HeroBannerLinkCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum HeroBannerLinkCollectionOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  genericContentPageCollection?: Maybe<GenericContentPageCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsGenericContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsGenericContentPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroBannerLinkingCollectionsGenericContentPageCollectionOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlPathAsc = 'urlPath_ASC',
  UrlPathDesc = 'urlPath_DESC'
}

export enum HeroBannerLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroBannerOrder {
  BackgroundTypeAsc = 'backgroundType_ASC',
  BackgroundTypeDesc = 'backgroundType_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/link) */
export type Link = Entry & _Node & {
  __typename?: 'Link';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  label?: Maybe<Scalars['String']>;
  linkVariant?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LinkLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/link) */
export type LinkLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/link) */
export type LinkLinkVariantArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/link) */
export type LinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkVariant?: InputMaybe<Scalars['String']>;
  linkVariant_contains?: InputMaybe<Scalars['String']>;
  linkVariant_exists?: InputMaybe<Scalars['Boolean']>;
  linkVariant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkVariant_not?: InputMaybe<Scalars['String']>;
  linkVariant_not_contains?: InputMaybe<Scalars['String']>;
  linkVariant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LinkLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LinkLinkingCollectionsFooterCollectionOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkVariantAsc = 'linkVariant_ASC',
  LinkVariantDesc = 'linkVariant_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageLanding) */
export type PageLanding = Entry & _Node & {
  __typename?: 'PageLanding';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  pageBlocksCollection?: Maybe<PageLandingPageBlocksCollection>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageLanding) */
export type PageLandingPageBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingPageBlocksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerFilter>;
};


/** To have an entry point for the app [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageBlocks?: InputMaybe<CfHeroBannerNestedFilter>;
  pageBlocksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageLandingPageBlocksCollection = {
  __typename?: 'PageLandingPageBlocksCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageLandingPageBlocksCollectionOrder {
  BackgroundTypeAsc = 'backgroundType_ASC',
  BackgroundTypeDesc = 'backgroundType_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProduct = Entry & _Node & {
  __typename?: 'PageProduct';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredProductImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productImagesCollection?: Maybe<AssetCollection>;
  relatedProductsCollection?: Maybe<PageProductRelatedProductsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductFeaturedProductImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductProductImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductRelatedProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** To output data for a single product [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/pageProduct) */
export type PageProductSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageProductCollection = {
  __typename?: 'PageProductCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProducts?: InputMaybe<CfPageProductNestedFilter>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageProductLinkingCollections = {
  __typename?: 'PageProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  genericContentPageCollection?: Maybe<GenericContentPageCollection>;
  pageProductCollection?: Maybe<PageProductCollection>;
};


export type PageProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsGenericContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsGenericContentPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageProductLinkingCollectionsPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductLinkingCollectionsPageProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageProductLinkingCollectionsGenericContentPageCollectionOrder {
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SeoTitleAsc = 'seoTitle_ASC',
  SeoTitleDesc = 'seoTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlPathAsc = 'urlPath_ASC',
  UrlPathDesc = 'urlPath_DESC'
}

export enum PageProductLinkingCollectionsPageProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageProductRelatedProductsCollection = {
  __typename?: 'PageProductRelatedProductsCollection';
  items: Array<Maybe<PageProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum PageProductRelatedProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  footerColumn?: Maybe<FooterColumn>;
  footerColumnCollection?: Maybe<FooterColumnCollection>;
  genericContentPage?: Maybe<GenericContentPage>;
  genericContentPageCollection?: Maybe<GenericContentPageCollection>;
  heroBanner?: Maybe<HeroBanner>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  link?: Maybe<Link>;
  linkCollection?: Maybe<LinkCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  pageProduct?: Maybe<PageProduct>;
  pageProductCollection?: Maybe<PageProductCollection>;
  socialLink?: Maybe<SocialLink>;
  socialLinkCollection?: Maybe<SocialLinkCollection>;
  subscriptionCallout?: Maybe<SubscriptionCallout>;
  subscriptionCalloutCollection?: Maybe<SubscriptionCalloutCollection>;
  upBottom?: Maybe<UpBottom>;
  upBottomCollection?: Maybe<UpBottomCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFooterColumnArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterColumnOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterColumnFilter>;
};


export type QueryGenericContentPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGenericContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GenericContentPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenericContentPageFilter>;
};


export type QueryHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerFilter>;
};


export type QueryLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LinkFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryPageProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageProductFilter>;
};


export type QuerySocialLinkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialLinkFilter>;
};


export type QuerySubscriptionCalloutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySubscriptionCalloutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SubscriptionCalloutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionCalloutFilter>;
};


export type QueryUpBottomArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUpBottomCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<UpBottomOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UpBottomFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/socialLink) */
export type SocialLink = Entry & _Node & {
  __typename?: 'SocialLink';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<SocialLinkLinkingCollections>;
  platform?: Maybe<Scalars['String']>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/socialLink) */
export type SocialLinkIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/socialLink) */
export type SocialLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/socialLink) */
export type SocialLinkPlatformArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/socialLink) */
export type SocialLinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SocialLinkCollection = {
  __typename?: 'SocialLinkCollection';
  items: Array<Maybe<SocialLink>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  platform?: InputMaybe<Scalars['String']>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_exists?: InputMaybe<Scalars['Boolean']>;
  platform_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialLinkLinkingCollections = {
  __typename?: 'SocialLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type SocialLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SocialLinkLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialLinkLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialLinkLinkingCollectionsFooterCollectionOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialLinkOrder {
  PlatformAsc = 'platform_ASC',
  PlatformDesc = 'platform_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCallout = Entry & _Node & {
  __typename?: 'SubscriptionCallout';
  _id: Scalars['ID'];
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SubscriptionCalloutDescription>;
  linkedFrom?: Maybe<SubscriptionCalloutLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCalloutButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCalloutButtonUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCalloutDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCalloutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/subscriptionCallout) */
export type SubscriptionCalloutTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SubscriptionCalloutCollection = {
  __typename?: 'SubscriptionCalloutCollection';
  items: Array<Maybe<SubscriptionCallout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SubscriptionCalloutDescription = {
  __typename?: 'SubscriptionCalloutDescription';
  json: Scalars['JSON'];
  links: SubscriptionCalloutDescriptionLinks;
};

export type SubscriptionCalloutDescriptionAssets = {
  __typename?: 'SubscriptionCalloutDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SubscriptionCalloutDescriptionEntries = {
  __typename?: 'SubscriptionCalloutDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SubscriptionCalloutDescriptionLinks = {
  __typename?: 'SubscriptionCalloutDescriptionLinks';
  assets: SubscriptionCalloutDescriptionAssets;
  entries: SubscriptionCalloutDescriptionEntries;
  resources: SubscriptionCalloutDescriptionResources;
};

export type SubscriptionCalloutDescriptionResources = {
  __typename?: 'SubscriptionCalloutDescriptionResources';
  block: Array<SubscriptionCalloutDescriptionResourcesBlock>;
  hyperlink: Array<SubscriptionCalloutDescriptionResourcesHyperlink>;
  inline: Array<SubscriptionCalloutDescriptionResourcesInline>;
};

export type SubscriptionCalloutDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'SubscriptionCalloutDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type SubscriptionCalloutDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'SubscriptionCalloutDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type SubscriptionCalloutDescriptionResourcesInline = ResourceLink & {
  __typename?: 'SubscriptionCalloutDescriptionResourcesInline';
  sys: ResourceSys;
};

export type SubscriptionCalloutFilter = {
  AND?: InputMaybe<Array<InputMaybe<SubscriptionCalloutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SubscriptionCalloutFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SubscriptionCalloutLinkingCollections = {
  __typename?: 'SubscriptionCalloutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type SubscriptionCalloutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionCalloutLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SubscriptionCalloutLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SubscriptionCalloutLinkingCollectionsFooterCollectionOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SubscriptionCalloutOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/upBottom) */
export type UpBottom = Entry & _Node & {
  __typename?: 'UpBottom';
  _id: Scalars['ID'];
  arrow?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<UpBottomLinkingCollections>;
  sys: Sys;
  upText?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/upBottom) */
export type UpBottomArrowArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/upBottom) */
export type UpBottomLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/upBottom) */
export type UpBottomUpTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/67jzzv34g9sk/content_types/upBottom) */
export type UpBottomUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type UpBottomCollection = {
  __typename?: 'UpBottomCollection';
  items: Array<Maybe<UpBottom>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UpBottomFilter = {
  AND?: InputMaybe<Array<InputMaybe<UpBottomFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UpBottomFilter>>>;
  arrow_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  upText?: InputMaybe<Scalars['String']>;
  upText_contains?: InputMaybe<Scalars['String']>;
  upText_exists?: InputMaybe<Scalars['Boolean']>;
  upText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  upText_not?: InputMaybe<Scalars['String']>;
  upText_not_contains?: InputMaybe<Scalars['String']>;
  upText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpBottomLinkingCollections = {
  __typename?: 'UpBottomLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type UpBottomLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type UpBottomLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<UpBottomLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum UpBottomLinkingCollectionsFooterCollectionOrder {
  FooterAsc = 'footer_ASC',
  FooterDesc = 'footer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum UpBottomOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UpTextAsc = 'upText_ASC',
  UpTextDesc = 'upText_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfButtonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfFooterColumnNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterColumnNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterColumnNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfHeroBannerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroBannerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroBannerNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundType?: InputMaybe<Scalars['String']>;
  backgroundType_contains?: InputMaybe<Scalars['String']>;
  backgroundType_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundType_not?: InputMaybe<Scalars['String']>;
  backgroundType_not_contains?: InputMaybe<Scalars['String']>;
  backgroundType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundVideo_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linkCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkVariant?: InputMaybe<Scalars['String']>;
  linkVariant_contains?: InputMaybe<Scalars['String']>;
  linkVariant_exists?: InputMaybe<Scalars['Boolean']>;
  linkVariant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkVariant_not?: InputMaybe<Scalars['String']>;
  linkVariant_not_contains?: InputMaybe<Scalars['String']>;
  linkVariant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPageProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredProductImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  productImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSocialLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSocialLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSocialLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  platform?: InputMaybe<Scalars['String']>;
  platform_contains?: InputMaybe<Scalars['String']>;
  platform_exists?: InputMaybe<Scalars['Boolean']>;
  platform_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  platform_not?: InputMaybe<Scalars['String']>;
  platform_not_contains?: InputMaybe<Scalars['String']>;
  platform_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfSubscriptionCalloutNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSubscriptionCalloutNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSubscriptionCalloutNestedFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl?: InputMaybe<Scalars['String']>;
  buttonUrl_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_exists?: InputMaybe<Scalars['Boolean']>;
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonUrl_not?: InputMaybe<Scalars['String']>;
  buttonUrl_not_contains?: InputMaybe<Scalars['String']>;
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfUpBottomNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfUpBottomNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfUpBottomNestedFilter>>>;
  arrow_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  upText?: InputMaybe<Scalars['String']>;
  upText_contains?: InputMaybe<Scalars['String']>;
  upText_exists?: InputMaybe<Scalars['Boolean']>;
  upText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  upText_not?: InputMaybe<Scalars['String']>;
  upText_not_contains?: InputMaybe<Scalars['String']>;
  upText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfmodularBlocksMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmodularBlocksMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmodularBlocksMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type BasePageProductFieldsFragment = { __typename: 'PageProduct', internalName?: string | null, slug?: string | null, name?: string | null, description?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, featuredProductImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, productImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type PageProductFieldsFragment = (
  { __typename?: 'PageProduct', relatedProductsCollection?: { __typename?: 'PageProductRelatedProductsCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & BasePageProductFieldsFragment
    ) | null> } | null }
  & BasePageProductFieldsFragment
);

export type PageProductQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type PageProductCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageProductCollectionQuery = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<(
      { __typename?: 'PageProduct' }
      & PageProductFieldsFragment
    ) | null> } | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageProductCollection?: { __typename?: 'PageProductCollection', items: Array<{ __typename?: 'PageProduct', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
}
    `;
export const BasePageProductFieldsFragmentDoc = gql`
    fragment BasePageProductFields on PageProduct {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  slug
  seoFields {
    ...SeoFields
  }
  name
  description
  price
  featuredProductImage {
    ...ImageFields
  }
  productImagesCollection(limit: 6) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const PageProductFieldsFragmentDoc = gql`
    fragment PageProductFields on PageProduct {
  ...BasePageProductFields
  relatedProductsCollection(limit: 6) {
    items {
      ...BasePageProductFields
    }
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageProductCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageProductDocument = gql`
    query pageProduct($slug: String!, $locale: String, $preview: Boolean) {
  pageProductCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const PageProductCollectionDocument = gql`
    query pageProductCollection($locale: String, $preview: Boolean) {
  pageProductCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageProductFields
    }
  }
}
    ${PageProductFieldsFragmentDoc}
${BasePageProductFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>(PageLandingCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLandingCollection', 'query');
    },
    pageProduct(variables: PageProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductQuery>(PageProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProduct', 'query');
    },
    pageProductCollection(variables?: PageProductCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageProductCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageProductCollectionQuery>(PageProductCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageProductCollection', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;