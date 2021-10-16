export type Maybe<T> = T | null;
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
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
};

export type Beer = Node & {
  __typename?: 'Beer';
  children: Array<Node>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  price?: Maybe<Scalars['String']>;
  rating?: Maybe<BeerRating>;
};

export type BeerConnection = {
  __typename?: 'BeerConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<BeerEdge>;
  group: Array<BeerGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Beer>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type BeerConnectionDistinctArgs = {
  field: BeerFieldsEnum;
};


export type BeerConnectionGroupArgs = {
  field: BeerFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type BeerConnectionMaxArgs = {
  field: BeerFieldsEnum;
};


export type BeerConnectionMinArgs = {
  field: BeerFieldsEnum;
};


export type BeerConnectionSumArgs = {
  field: BeerFieldsEnum;
};

export type BeerEdge = {
  __typename?: 'BeerEdge';
  next?: Maybe<Beer>;
  node: Beer;
  previous?: Maybe<Beer>;
};

export enum BeerFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  Image = 'image',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Price = 'price',
  RatingAverage = 'rating___average',
  RatingReviews = 'rating___reviews'
}

export type BeerFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  rating?: Maybe<BeerRatingFilterInput>;
};

export type BeerGroupConnection = {
  __typename?: 'BeerGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<BeerEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<BeerGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Beer>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type BeerGroupConnectionDistinctArgs = {
  field: BeerFieldsEnum;
};


export type BeerGroupConnectionGroupArgs = {
  field: BeerFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type BeerGroupConnectionMaxArgs = {
  field: BeerFieldsEnum;
};


export type BeerGroupConnectionMinArgs = {
  field: BeerFieldsEnum;
};


export type BeerGroupConnectionSumArgs = {
  field: BeerFieldsEnum;
};

export type BeerRating = {
  __typename?: 'BeerRating';
  average?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Int']>;
};

export type BeerRatingFilterInput = {
  average?: Maybe<FloatQueryOperatorInput>;
  reviews?: Maybe<IntQueryOperatorInput>;
};

export type BeerSortInput = {
  fields?: Maybe<Array<Maybe<BeerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  avifOptions?: Maybe<AvifOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
  blurredOptions?: Maybe<BlurredOptions>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  height?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<ImagePlaceholder>;
  pngOptions?: Maybe<PngOptions>;
  quality?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  tracedSVGOptions?: Maybe<Potrace>;
  transformOptions?: Maybe<TransformOptions>;
  webpOptions?: Maybe<WebPOptions>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ne?: Maybe<Scalars['JSON']>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: Maybe<Scalars['Float']>;
  background?: Maybe<Scalars['String']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  turdSize?: Maybe<Scalars['Float']>;
  turnPolicy?: Maybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allBeer: BeerConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSanityFileAsset: SanityFileAssetConnection;
  allSanityImageAsset: SanityImageAssetConnection;
  allSanityPerson: SanityPersonConnection;
  allSanityPizza: SanityPizzaConnection;
  allSanityStoreSettings: SanityStoreSettingsConnection;
  allSanityTopping: SanityToppingConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  beer?: Maybe<Beer>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  sanityPerson?: Maybe<SanityPerson>;
  sanityPizza?: Maybe<SanityPizza>;
  sanityStoreSettings?: Maybe<SanityStoreSettings>;
  sanityTopping?: Maybe<SanityTopping>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllBeerArgs = {
  filter?: Maybe<BeerFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<BeerSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSharpSortInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityFileAssetSortInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityImageAssetSortInput>;
};


export type QueryAllSanityPersonArgs = {
  filter?: Maybe<SanityPersonFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityPersonSortInput>;
};


export type QueryAllSanityPizzaArgs = {
  filter?: Maybe<SanityPizzaFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityPizzaSortInput>;
};


export type QueryAllSanityStoreSettingsArgs = {
  filter?: Maybe<SanityStoreSettingsFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityStoreSettingsSortInput>;
};


export type QueryAllSanityToppingArgs = {
  filter?: Maybe<SanityToppingFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SanityToppingSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginSortInput>;
};


export type QueryBeerArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  rating?: Maybe<BeerRatingFilterInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};


export type QuerySanityFileAssetArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};


export type QuerySanityImageAssetArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};


export type QuerySanityPersonArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  slug?: Maybe<SanitySlugFilterInput>;
};


export type QuerySanityPizzaArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawToppings?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  toppings?: Maybe<SanityToppingFilterListInput>;
};


export type QuerySanityStoreSettingsArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawHotSlices?: Maybe<JsonQueryOperatorInput>;
  _rawSlicemaster?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  hotSlices?: Maybe<SanityPizzaFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  slicemaster?: Maybe<SanityPersonFilterListInput>;
};


export type QuerySanityToppingArgs = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  vegetarian?: Maybe<BooleanQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  __typename?: 'SanityBlock';
  _key?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
};

export type SanityFile = {
  __typename?: 'SanityFile';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = Node & SanityDocument & {
  __typename?: 'SanityFileAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityFileAssetConnection = {
  __typename?: 'SanityFileAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: 'SanityFileAssetEdge';
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  RawSource = '_rawSource',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  AssetId = 'assetId',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  Extension = 'extension',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  MimeType = 'mimeType',
  OriginalFilename = 'originalFilename',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  Sha1hash = 'sha1hash',
  Size = 'size',
  SourceKey = 'source____key',
  SourceType = 'source____type',
  SourceId = 'source___id',
  SourceName = 'source___name',
  SourceUrl = 'source___url',
  Title = 'title',
  Url = 'url'
}

export type SanityFileAssetFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: 'SanityFileAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityFileAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SanityGatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE'
}

export type SanityGeopoint = {
  __typename?: 'SanityGeopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImage = {
  __typename?: 'SanityImage';
  _key?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = Node & SanityDocument & {
  __typename?: 'SanityImageAsset';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  assetId?: Maybe<Scalars['String']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  backgroundColor?: Maybe<Scalars['String']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fit?: Maybe<SanityImageFit>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  height?: Maybe<Scalars['Int']>;
  layout?: Maybe<GatsbyImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<SanityGatsbyImagePlaceholder>;
  sizes?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SanityImageAssetConnection = {
  __typename?: 'SanityImageAssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: 'SanityImageAssetEdge';
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  RawMetadata = '_rawMetadata',
  RawSource = '_rawSource',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  AssetId = 'assetId',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  Extension = 'extension',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  MetadataKey = 'metadata____key',
  MetadataRawDimensions = 'metadata____rawDimensions',
  MetadataRawLocation = 'metadata____rawLocation',
  MetadataRawPalette = 'metadata____rawPalette',
  MetadataType = 'metadata____type',
  MetadataDimensionsKey = 'metadata___dimensions____key',
  MetadataDimensionsType = 'metadata___dimensions____type',
  MetadataDimensionsAspectRatio = 'metadata___dimensions___aspectRatio',
  MetadataDimensionsHeight = 'metadata___dimensions___height',
  MetadataDimensionsWidth = 'metadata___dimensions___width',
  MetadataHasAlpha = 'metadata___hasAlpha',
  MetadataIsOpaque = 'metadata___isOpaque',
  MetadataLocationKey = 'metadata___location____key',
  MetadataLocationType = 'metadata___location____type',
  MetadataLocationAlt = 'metadata___location___alt',
  MetadataLocationLat = 'metadata___location___lat',
  MetadataLocationLng = 'metadata___location___lng',
  MetadataLqip = 'metadata___lqip',
  MetadataPaletteKey = 'metadata___palette____key',
  MetadataPaletteRawDarkMuted = 'metadata___palette____rawDarkMuted',
  MetadataPaletteRawDarkVibrant = 'metadata___palette____rawDarkVibrant',
  MetadataPaletteRawDominant = 'metadata___palette____rawDominant',
  MetadataPaletteRawLightMuted = 'metadata___palette____rawLightMuted',
  MetadataPaletteRawLightVibrant = 'metadata___palette____rawLightVibrant',
  MetadataPaletteRawMuted = 'metadata___palette____rawMuted',
  MetadataPaletteRawVibrant = 'metadata___palette____rawVibrant',
  MetadataPaletteType = 'metadata___palette____type',
  MetadataPaletteDarkMutedKey = 'metadata___palette___darkMuted____key',
  MetadataPaletteDarkMutedType = 'metadata___palette___darkMuted____type',
  MetadataPaletteDarkMutedBackground = 'metadata___palette___darkMuted___background',
  MetadataPaletteDarkMutedForeground = 'metadata___palette___darkMuted___foreground',
  MetadataPaletteDarkMutedPopulation = 'metadata___palette___darkMuted___population',
  MetadataPaletteDarkMutedTitle = 'metadata___palette___darkMuted___title',
  MetadataPaletteDarkVibrantKey = 'metadata___palette___darkVibrant____key',
  MetadataPaletteDarkVibrantType = 'metadata___palette___darkVibrant____type',
  MetadataPaletteDarkVibrantBackground = 'metadata___palette___darkVibrant___background',
  MetadataPaletteDarkVibrantForeground = 'metadata___palette___darkVibrant___foreground',
  MetadataPaletteDarkVibrantPopulation = 'metadata___palette___darkVibrant___population',
  MetadataPaletteDarkVibrantTitle = 'metadata___palette___darkVibrant___title',
  MetadataPaletteDominantKey = 'metadata___palette___dominant____key',
  MetadataPaletteDominantType = 'metadata___palette___dominant____type',
  MetadataPaletteDominantBackground = 'metadata___palette___dominant___background',
  MetadataPaletteDominantForeground = 'metadata___palette___dominant___foreground',
  MetadataPaletteDominantPopulation = 'metadata___palette___dominant___population',
  MetadataPaletteDominantTitle = 'metadata___palette___dominant___title',
  MetadataPaletteLightMutedKey = 'metadata___palette___lightMuted____key',
  MetadataPaletteLightMutedType = 'metadata___palette___lightMuted____type',
  MetadataPaletteLightMutedBackground = 'metadata___palette___lightMuted___background',
  MetadataPaletteLightMutedForeground = 'metadata___palette___lightMuted___foreground',
  MetadataPaletteLightMutedPopulation = 'metadata___palette___lightMuted___population',
  MetadataPaletteLightMutedTitle = 'metadata___palette___lightMuted___title',
  MetadataPaletteLightVibrantKey = 'metadata___palette___lightVibrant____key',
  MetadataPaletteLightVibrantType = 'metadata___palette___lightVibrant____type',
  MetadataPaletteLightVibrantBackground = 'metadata___palette___lightVibrant___background',
  MetadataPaletteLightVibrantForeground = 'metadata___palette___lightVibrant___foreground',
  MetadataPaletteLightVibrantPopulation = 'metadata___palette___lightVibrant___population',
  MetadataPaletteLightVibrantTitle = 'metadata___palette___lightVibrant___title',
  MetadataPaletteMutedKey = 'metadata___palette___muted____key',
  MetadataPaletteMutedType = 'metadata___palette___muted____type',
  MetadataPaletteMutedBackground = 'metadata___palette___muted___background',
  MetadataPaletteMutedForeground = 'metadata___palette___muted___foreground',
  MetadataPaletteMutedPopulation = 'metadata___palette___muted___population',
  MetadataPaletteMutedTitle = 'metadata___palette___muted___title',
  MetadataPaletteVibrantKey = 'metadata___palette___vibrant____key',
  MetadataPaletteVibrantType = 'metadata___palette___vibrant____type',
  MetadataPaletteVibrantBackground = 'metadata___palette___vibrant___background',
  MetadataPaletteVibrantForeground = 'metadata___palette___vibrant___foreground',
  MetadataPaletteVibrantPopulation = 'metadata___palette___vibrant___population',
  MetadataPaletteVibrantTitle = 'metadata___palette___vibrant___title',
  MimeType = 'mimeType',
  OriginalFilename = 'originalFilename',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  Sha1hash = 'sha1hash',
  Size = 'size',
  SourceKey = 'source____key',
  SourceType = 'source____type',
  SourceId = 'source___id',
  SourceName = 'source___name',
  SourceUrl = 'source___url',
  Title = 'title',
  Url = 'url'
}

export type SanityImageAssetFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: 'SanityImageAssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityImageAssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
};

export enum SanityImageFit {
  Clip = 'CLIP',
  Crop = 'CROP',
  Fill = 'FILL',
  Fillmax = 'FILLMAX',
  Max = 'MAX',
  Min = 'MIN',
  Scale = 'SCALE'
}

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<SanityGeopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityPerson = Node & SanityDocument & {
  __typename?: 'SanityPerson';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SanityImage>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  slug?: Maybe<SanitySlug>;
};


export type SanityPerson_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPerson_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPerson_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPerson_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityPersonConnection = {
  __typename?: 'SanityPersonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPersonEdge>;
  group: Array<SanityPersonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPerson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPersonConnectionDistinctArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonConnectionGroupArgs = {
  field: SanityPersonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityPersonConnectionMaxArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonConnectionMinArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonConnectionSumArgs = {
  field: SanityPersonFieldsEnum;
};

export type SanityPersonEdge = {
  __typename?: 'SanityPersonEdge';
  next?: Maybe<SanityPerson>;
  node: SanityPerson;
  previous?: Maybe<SanityPerson>;
};

export enum SanityPersonFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  RawImage = '_rawImage',
  RawSlug = '_rawSlug',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Description = 'description',
  Id = 'id',
  ImageKey = 'image____key',
  ImageRawAsset = 'image____rawAsset',
  ImageRawCrop = 'image____rawCrop',
  ImageRawHotspot = 'image____rawHotspot',
  ImageType = 'image____type',
  ImageAssetCreatedAt = 'image___asset____createdAt',
  ImageAssetId = 'image___asset____id',
  ImageAssetKey = 'image___asset____key',
  ImageAssetRawMetadata = 'image___asset____rawMetadata',
  ImageAssetRawSource = 'image___asset____rawSource',
  ImageAssetRev = 'image___asset____rev',
  ImageAssetType = 'image___asset____type',
  ImageAssetUpdatedAt = 'image___asset____updatedAt',
  ImageAssetAssetId = 'image___asset___assetId',
  ImageAssetChildren = 'image___asset___children',
  ImageAssetChildrenChildren = 'image___asset___children___children',
  ImageAssetChildrenId = 'image___asset___children___id',
  ImageAssetDescription = 'image___asset___description',
  ImageAssetExtension = 'image___asset___extension',
  ImageAssetGatsbyImageData = 'image___asset___gatsbyImageData',
  ImageAssetId = 'image___asset___id',
  ImageAssetInternalContent = 'image___asset___internal___content',
  ImageAssetInternalContentDigest = 'image___asset___internal___contentDigest',
  ImageAssetInternalDescription = 'image___asset___internal___description',
  ImageAssetInternalFieldOwners = 'image___asset___internal___fieldOwners',
  ImageAssetInternalIgnoreType = 'image___asset___internal___ignoreType',
  ImageAssetInternalMediaType = 'image___asset___internal___mediaType',
  ImageAssetInternalOwner = 'image___asset___internal___owner',
  ImageAssetInternalType = 'image___asset___internal___type',
  ImageAssetLabel = 'image___asset___label',
  ImageAssetMetadataKey = 'image___asset___metadata____key',
  ImageAssetMetadataRawDimensions = 'image___asset___metadata____rawDimensions',
  ImageAssetMetadataRawLocation = 'image___asset___metadata____rawLocation',
  ImageAssetMetadataRawPalette = 'image___asset___metadata____rawPalette',
  ImageAssetMetadataType = 'image___asset___metadata____type',
  ImageAssetMetadataHasAlpha = 'image___asset___metadata___hasAlpha',
  ImageAssetMetadataIsOpaque = 'image___asset___metadata___isOpaque',
  ImageAssetMetadataLqip = 'image___asset___metadata___lqip',
  ImageAssetMimeType = 'image___asset___mimeType',
  ImageAssetOriginalFilename = 'image___asset___originalFilename',
  ImageAssetParentChildren = 'image___asset___parent___children',
  ImageAssetParentId = 'image___asset___parent___id',
  ImageAssetPath = 'image___asset___path',
  ImageAssetSha1hash = 'image___asset___sha1hash',
  ImageAssetSize = 'image___asset___size',
  ImageAssetSourceKey = 'image___asset___source____key',
  ImageAssetSourceType = 'image___asset___source____type',
  ImageAssetSourceId = 'image___asset___source___id',
  ImageAssetSourceName = 'image___asset___source___name',
  ImageAssetSourceUrl = 'image___asset___source___url',
  ImageAssetTitle = 'image___asset___title',
  ImageAssetUrl = 'image___asset___url',
  ImageCropKey = 'image___crop____key',
  ImageCropType = 'image___crop____type',
  ImageCropBottom = 'image___crop___bottom',
  ImageCropLeft = 'image___crop___left',
  ImageCropRight = 'image___crop___right',
  ImageCropTop = 'image___crop___top',
  ImageHotspotKey = 'image___hotspot____key',
  ImageHotspotType = 'image___hotspot____type',
  ImageHotspotHeight = 'image___hotspot___height',
  ImageHotspotWidth = 'image___hotspot___width',
  ImageHotspotX = 'image___hotspot___x',
  ImageHotspotY = 'image___hotspot___y',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current'
}

export type SanityPersonFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  slug?: Maybe<SanitySlugFilterInput>;
};

export type SanityPersonFilterListInput = {
  elemMatch?: Maybe<SanityPersonFilterInput>;
};

export type SanityPersonGroupConnection = {
  __typename?: 'SanityPersonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPersonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPersonGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPerson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPersonGroupConnectionDistinctArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonGroupConnectionGroupArgs = {
  field: SanityPersonFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityPersonGroupConnectionMaxArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonGroupConnectionMinArgs = {
  field: SanityPersonFieldsEnum;
};


export type SanityPersonGroupConnectionSumArgs = {
  field: SanityPersonFieldsEnum;
};

export type SanityPersonSortInput = {
  fields?: Maybe<Array<Maybe<SanityPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPizza = Node & SanityDocument & {
  __typename?: 'SanityPizza';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawToppings?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  image?: Maybe<SanityImage>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  price?: Maybe<Scalars['Float']>;
  slug?: Maybe<SanitySlug>;
  toppings?: Maybe<Array<Maybe<SanityTopping>>>;
};


export type SanityPizza_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPizza_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPizza_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPizza_RawToppingsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPizza_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityPizzaConnection = {
  __typename?: 'SanityPizzaConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPizzaEdge>;
  group: Array<SanityPizzaGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPizza>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPizzaConnectionDistinctArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaConnectionGroupArgs = {
  field: SanityPizzaFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityPizzaConnectionMaxArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaConnectionMinArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaConnectionSumArgs = {
  field: SanityPizzaFieldsEnum;
};

export type SanityPizzaEdge = {
  __typename?: 'SanityPizzaEdge';
  next?: Maybe<SanityPizza>;
  node: SanityPizza;
  previous?: Maybe<SanityPizza>;
};

export enum SanityPizzaFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  RawImage = '_rawImage',
  RawSlug = '_rawSlug',
  RawToppings = '_rawToppings',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  ImageKey = 'image____key',
  ImageRawAsset = 'image____rawAsset',
  ImageRawCrop = 'image____rawCrop',
  ImageRawHotspot = 'image____rawHotspot',
  ImageType = 'image____type',
  ImageAssetCreatedAt = 'image___asset____createdAt',
  ImageAssetId = 'image___asset____id',
  ImageAssetKey = 'image___asset____key',
  ImageAssetRawMetadata = 'image___asset____rawMetadata',
  ImageAssetRawSource = 'image___asset____rawSource',
  ImageAssetRev = 'image___asset____rev',
  ImageAssetType = 'image___asset____type',
  ImageAssetUpdatedAt = 'image___asset____updatedAt',
  ImageAssetAssetId = 'image___asset___assetId',
  ImageAssetChildren = 'image___asset___children',
  ImageAssetChildrenChildren = 'image___asset___children___children',
  ImageAssetChildrenId = 'image___asset___children___id',
  ImageAssetDescription = 'image___asset___description',
  ImageAssetExtension = 'image___asset___extension',
  ImageAssetGatsbyImageData = 'image___asset___gatsbyImageData',
  ImageAssetId = 'image___asset___id',
  ImageAssetInternalContent = 'image___asset___internal___content',
  ImageAssetInternalContentDigest = 'image___asset___internal___contentDigest',
  ImageAssetInternalDescription = 'image___asset___internal___description',
  ImageAssetInternalFieldOwners = 'image___asset___internal___fieldOwners',
  ImageAssetInternalIgnoreType = 'image___asset___internal___ignoreType',
  ImageAssetInternalMediaType = 'image___asset___internal___mediaType',
  ImageAssetInternalOwner = 'image___asset___internal___owner',
  ImageAssetInternalType = 'image___asset___internal___type',
  ImageAssetLabel = 'image___asset___label',
  ImageAssetMetadataKey = 'image___asset___metadata____key',
  ImageAssetMetadataRawDimensions = 'image___asset___metadata____rawDimensions',
  ImageAssetMetadataRawLocation = 'image___asset___metadata____rawLocation',
  ImageAssetMetadataRawPalette = 'image___asset___metadata____rawPalette',
  ImageAssetMetadataType = 'image___asset___metadata____type',
  ImageAssetMetadataHasAlpha = 'image___asset___metadata___hasAlpha',
  ImageAssetMetadataIsOpaque = 'image___asset___metadata___isOpaque',
  ImageAssetMetadataLqip = 'image___asset___metadata___lqip',
  ImageAssetMimeType = 'image___asset___mimeType',
  ImageAssetOriginalFilename = 'image___asset___originalFilename',
  ImageAssetParentChildren = 'image___asset___parent___children',
  ImageAssetParentId = 'image___asset___parent___id',
  ImageAssetPath = 'image___asset___path',
  ImageAssetSha1hash = 'image___asset___sha1hash',
  ImageAssetSize = 'image___asset___size',
  ImageAssetSourceKey = 'image___asset___source____key',
  ImageAssetSourceType = 'image___asset___source____type',
  ImageAssetSourceId = 'image___asset___source___id',
  ImageAssetSourceName = 'image___asset___source___name',
  ImageAssetSourceUrl = 'image___asset___source___url',
  ImageAssetTitle = 'image___asset___title',
  ImageAssetUrl = 'image___asset___url',
  ImageCropKey = 'image___crop____key',
  ImageCropType = 'image___crop____type',
  ImageCropBottom = 'image___crop___bottom',
  ImageCropLeft = 'image___crop___left',
  ImageCropRight = 'image___crop___right',
  ImageCropTop = 'image___crop___top',
  ImageHotspotKey = 'image___hotspot____key',
  ImageHotspotType = 'image___hotspot____type',
  ImageHotspotHeight = 'image___hotspot___height',
  ImageHotspotWidth = 'image___hotspot___width',
  ImageHotspotX = 'image___hotspot___x',
  ImageHotspotY = 'image___hotspot___y',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Price = 'price',
  SlugKey = 'slug____key',
  SlugType = 'slug____type',
  SlugCurrent = 'slug___current',
  Toppings = 'toppings',
  ToppingsCreatedAt = 'toppings____createdAt',
  ToppingsId = 'toppings____id',
  ToppingsKey = 'toppings____key',
  ToppingsRev = 'toppings____rev',
  ToppingsType = 'toppings____type',
  ToppingsUpdatedAt = 'toppings____updatedAt',
  ToppingsChildren = 'toppings___children',
  ToppingsChildrenChildren = 'toppings___children___children',
  ToppingsChildrenChildrenChildren = 'toppings___children___children___children',
  ToppingsChildrenChildrenId = 'toppings___children___children___id',
  ToppingsChildrenId = 'toppings___children___id',
  ToppingsChildrenInternalContent = 'toppings___children___internal___content',
  ToppingsChildrenInternalContentDigest = 'toppings___children___internal___contentDigest',
  ToppingsChildrenInternalDescription = 'toppings___children___internal___description',
  ToppingsChildrenInternalFieldOwners = 'toppings___children___internal___fieldOwners',
  ToppingsChildrenInternalIgnoreType = 'toppings___children___internal___ignoreType',
  ToppingsChildrenInternalMediaType = 'toppings___children___internal___mediaType',
  ToppingsChildrenInternalOwner = 'toppings___children___internal___owner',
  ToppingsChildrenInternalType = 'toppings___children___internal___type',
  ToppingsChildrenParentChildren = 'toppings___children___parent___children',
  ToppingsChildrenParentId = 'toppings___children___parent___id',
  ToppingsId = 'toppings___id',
  ToppingsInternalContent = 'toppings___internal___content',
  ToppingsInternalContentDigest = 'toppings___internal___contentDigest',
  ToppingsInternalDescription = 'toppings___internal___description',
  ToppingsInternalFieldOwners = 'toppings___internal___fieldOwners',
  ToppingsInternalIgnoreType = 'toppings___internal___ignoreType',
  ToppingsInternalMediaType = 'toppings___internal___mediaType',
  ToppingsInternalOwner = 'toppings___internal___owner',
  ToppingsInternalType = 'toppings___internal___type',
  ToppingsName = 'toppings___name',
  ToppingsParentChildren = 'toppings___parent___children',
  ToppingsParentChildrenChildren = 'toppings___parent___children___children',
  ToppingsParentChildrenId = 'toppings___parent___children___id',
  ToppingsParentId = 'toppings___parent___id',
  ToppingsParentInternalContent = 'toppings___parent___internal___content',
  ToppingsParentInternalContentDigest = 'toppings___parent___internal___contentDigest',
  ToppingsParentInternalDescription = 'toppings___parent___internal___description',
  ToppingsParentInternalFieldOwners = 'toppings___parent___internal___fieldOwners',
  ToppingsParentInternalIgnoreType = 'toppings___parent___internal___ignoreType',
  ToppingsParentInternalMediaType = 'toppings___parent___internal___mediaType',
  ToppingsParentInternalOwner = 'toppings___parent___internal___owner',
  ToppingsParentInternalType = 'toppings___parent___internal___type',
  ToppingsParentParentChildren = 'toppings___parent___parent___children',
  ToppingsParentParentId = 'toppings___parent___parent___id',
  ToppingsVegetarian = 'toppings___vegetarian'
}

export type SanityPizzaFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawToppings?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  toppings?: Maybe<SanityToppingFilterListInput>;
};

export type SanityPizzaFilterListInput = {
  elemMatch?: Maybe<SanityPizzaFilterInput>;
};

export type SanityPizzaGroupConnection = {
  __typename?: 'SanityPizzaGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityPizzaEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityPizzaGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityPizza>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityPizzaGroupConnectionDistinctArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaGroupConnectionGroupArgs = {
  field: SanityPizzaFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityPizzaGroupConnectionMaxArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaGroupConnectionMinArgs = {
  field: SanityPizzaFieldsEnum;
};


export type SanityPizzaGroupConnectionSumArgs = {
  field: SanityPizzaFieldsEnum;
};

export type SanityPizzaSortInput = {
  fields?: Maybe<Array<Maybe<SanityPizzaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanitySlug = {
  __typename?: 'SanitySlug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: 'SanitySpan';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityStoreSettings = Node & SanityDocument & {
  __typename?: 'SanityStoreSettings';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rawHotSlices?: Maybe<Scalars['JSON']>;
  _rawSlicemaster?: Maybe<Scalars['JSON']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  hotSlices?: Maybe<Array<Maybe<SanityPizza>>>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  slicemaster?: Maybe<Array<Maybe<SanityPerson>>>;
};


export type SanityStoreSettings_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityStoreSettings_RawHotSlicesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityStoreSettings_RawSlicemasterArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityStoreSettings_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityStoreSettingsConnection = {
  __typename?: 'SanityStoreSettingsConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityStoreSettingsEdge>;
  group: Array<SanityStoreSettingsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityStoreSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityStoreSettingsConnectionDistinctArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsConnectionGroupArgs = {
  field: SanityStoreSettingsFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityStoreSettingsConnectionMaxArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsConnectionMinArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsConnectionSumArgs = {
  field: SanityStoreSettingsFieldsEnum;
};

export type SanityStoreSettingsEdge = {
  __typename?: 'SanityStoreSettingsEdge';
  next?: Maybe<SanityStoreSettings>;
  node: SanityStoreSettings;
  previous?: Maybe<SanityStoreSettings>;
};

export enum SanityStoreSettingsFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  RawHotSlices = '_rawHotSlices',
  RawSlicemaster = '_rawSlicemaster',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  HotSlices = 'hotSlices',
  HotSlicesCreatedAt = 'hotSlices____createdAt',
  HotSlicesId = 'hotSlices____id',
  HotSlicesKey = 'hotSlices____key',
  HotSlicesRawImage = 'hotSlices____rawImage',
  HotSlicesRawSlug = 'hotSlices____rawSlug',
  HotSlicesRawToppings = 'hotSlices____rawToppings',
  HotSlicesRev = 'hotSlices____rev',
  HotSlicesType = 'hotSlices____type',
  HotSlicesUpdatedAt = 'hotSlices____updatedAt',
  HotSlicesChildren = 'hotSlices___children',
  HotSlicesChildrenChildren = 'hotSlices___children___children',
  HotSlicesChildrenChildrenChildren = 'hotSlices___children___children___children',
  HotSlicesChildrenChildrenId = 'hotSlices___children___children___id',
  HotSlicesChildrenId = 'hotSlices___children___id',
  HotSlicesChildrenInternalContent = 'hotSlices___children___internal___content',
  HotSlicesChildrenInternalContentDigest = 'hotSlices___children___internal___contentDigest',
  HotSlicesChildrenInternalDescription = 'hotSlices___children___internal___description',
  HotSlicesChildrenInternalFieldOwners = 'hotSlices___children___internal___fieldOwners',
  HotSlicesChildrenInternalIgnoreType = 'hotSlices___children___internal___ignoreType',
  HotSlicesChildrenInternalMediaType = 'hotSlices___children___internal___mediaType',
  HotSlicesChildrenInternalOwner = 'hotSlices___children___internal___owner',
  HotSlicesChildrenInternalType = 'hotSlices___children___internal___type',
  HotSlicesChildrenParentChildren = 'hotSlices___children___parent___children',
  HotSlicesChildrenParentId = 'hotSlices___children___parent___id',
  HotSlicesId = 'hotSlices___id',
  HotSlicesImageKey = 'hotSlices___image____key',
  HotSlicesImageRawAsset = 'hotSlices___image____rawAsset',
  HotSlicesImageRawCrop = 'hotSlices___image____rawCrop',
  HotSlicesImageRawHotspot = 'hotSlices___image____rawHotspot',
  HotSlicesImageType = 'hotSlices___image____type',
  HotSlicesImageAssetCreatedAt = 'hotSlices___image___asset____createdAt',
  HotSlicesImageAssetId = 'hotSlices___image___asset____id',
  HotSlicesImageAssetKey = 'hotSlices___image___asset____key',
  HotSlicesImageAssetRawMetadata = 'hotSlices___image___asset____rawMetadata',
  HotSlicesImageAssetRawSource = 'hotSlices___image___asset____rawSource',
  HotSlicesImageAssetRev = 'hotSlices___image___asset____rev',
  HotSlicesImageAssetType = 'hotSlices___image___asset____type',
  HotSlicesImageAssetUpdatedAt = 'hotSlices___image___asset____updatedAt',
  HotSlicesImageAssetAssetId = 'hotSlices___image___asset___assetId',
  HotSlicesImageAssetChildren = 'hotSlices___image___asset___children',
  HotSlicesImageAssetDescription = 'hotSlices___image___asset___description',
  HotSlicesImageAssetExtension = 'hotSlices___image___asset___extension',
  HotSlicesImageAssetGatsbyImageData = 'hotSlices___image___asset___gatsbyImageData',
  HotSlicesImageAssetId = 'hotSlices___image___asset___id',
  HotSlicesImageAssetLabel = 'hotSlices___image___asset___label',
  HotSlicesImageAssetMimeType = 'hotSlices___image___asset___mimeType',
  HotSlicesImageAssetOriginalFilename = 'hotSlices___image___asset___originalFilename',
  HotSlicesImageAssetPath = 'hotSlices___image___asset___path',
  HotSlicesImageAssetSha1hash = 'hotSlices___image___asset___sha1hash',
  HotSlicesImageAssetSize = 'hotSlices___image___asset___size',
  HotSlicesImageAssetTitle = 'hotSlices___image___asset___title',
  HotSlicesImageAssetUrl = 'hotSlices___image___asset___url',
  HotSlicesImageCropKey = 'hotSlices___image___crop____key',
  HotSlicesImageCropType = 'hotSlices___image___crop____type',
  HotSlicesImageCropBottom = 'hotSlices___image___crop___bottom',
  HotSlicesImageCropLeft = 'hotSlices___image___crop___left',
  HotSlicesImageCropRight = 'hotSlices___image___crop___right',
  HotSlicesImageCropTop = 'hotSlices___image___crop___top',
  HotSlicesImageHotspotKey = 'hotSlices___image___hotspot____key',
  HotSlicesImageHotspotType = 'hotSlices___image___hotspot____type',
  HotSlicesImageHotspotHeight = 'hotSlices___image___hotspot___height',
  HotSlicesImageHotspotWidth = 'hotSlices___image___hotspot___width',
  HotSlicesImageHotspotX = 'hotSlices___image___hotspot___x',
  HotSlicesImageHotspotY = 'hotSlices___image___hotspot___y',
  HotSlicesInternalContent = 'hotSlices___internal___content',
  HotSlicesInternalContentDigest = 'hotSlices___internal___contentDigest',
  HotSlicesInternalDescription = 'hotSlices___internal___description',
  HotSlicesInternalFieldOwners = 'hotSlices___internal___fieldOwners',
  HotSlicesInternalIgnoreType = 'hotSlices___internal___ignoreType',
  HotSlicesInternalMediaType = 'hotSlices___internal___mediaType',
  HotSlicesInternalOwner = 'hotSlices___internal___owner',
  HotSlicesInternalType = 'hotSlices___internal___type',
  HotSlicesName = 'hotSlices___name',
  HotSlicesParentChildren = 'hotSlices___parent___children',
  HotSlicesParentChildrenChildren = 'hotSlices___parent___children___children',
  HotSlicesParentChildrenId = 'hotSlices___parent___children___id',
  HotSlicesParentId = 'hotSlices___parent___id',
  HotSlicesParentInternalContent = 'hotSlices___parent___internal___content',
  HotSlicesParentInternalContentDigest = 'hotSlices___parent___internal___contentDigest',
  HotSlicesParentInternalDescription = 'hotSlices___parent___internal___description',
  HotSlicesParentInternalFieldOwners = 'hotSlices___parent___internal___fieldOwners',
  HotSlicesParentInternalIgnoreType = 'hotSlices___parent___internal___ignoreType',
  HotSlicesParentInternalMediaType = 'hotSlices___parent___internal___mediaType',
  HotSlicesParentInternalOwner = 'hotSlices___parent___internal___owner',
  HotSlicesParentInternalType = 'hotSlices___parent___internal___type',
  HotSlicesParentParentChildren = 'hotSlices___parent___parent___children',
  HotSlicesParentParentId = 'hotSlices___parent___parent___id',
  HotSlicesPrice = 'hotSlices___price',
  HotSlicesSlugKey = 'hotSlices___slug____key',
  HotSlicesSlugType = 'hotSlices___slug____type',
  HotSlicesSlugCurrent = 'hotSlices___slug___current',
  HotSlicesToppings = 'hotSlices___toppings',
  HotSlicesToppingsCreatedAt = 'hotSlices___toppings____createdAt',
  HotSlicesToppingsId = 'hotSlices___toppings____id',
  HotSlicesToppingsKey = 'hotSlices___toppings____key',
  HotSlicesToppingsRev = 'hotSlices___toppings____rev',
  HotSlicesToppingsType = 'hotSlices___toppings____type',
  HotSlicesToppingsUpdatedAt = 'hotSlices___toppings____updatedAt',
  HotSlicesToppingsChildren = 'hotSlices___toppings___children',
  HotSlicesToppingsChildrenChildren = 'hotSlices___toppings___children___children',
  HotSlicesToppingsChildrenId = 'hotSlices___toppings___children___id',
  HotSlicesToppingsId = 'hotSlices___toppings___id',
  HotSlicesToppingsInternalContent = 'hotSlices___toppings___internal___content',
  HotSlicesToppingsInternalContentDigest = 'hotSlices___toppings___internal___contentDigest',
  HotSlicesToppingsInternalDescription = 'hotSlices___toppings___internal___description',
  HotSlicesToppingsInternalFieldOwners = 'hotSlices___toppings___internal___fieldOwners',
  HotSlicesToppingsInternalIgnoreType = 'hotSlices___toppings___internal___ignoreType',
  HotSlicesToppingsInternalMediaType = 'hotSlices___toppings___internal___mediaType',
  HotSlicesToppingsInternalOwner = 'hotSlices___toppings___internal___owner',
  HotSlicesToppingsInternalType = 'hotSlices___toppings___internal___type',
  HotSlicesToppingsName = 'hotSlices___toppings___name',
  HotSlicesToppingsParentChildren = 'hotSlices___toppings___parent___children',
  HotSlicesToppingsParentId = 'hotSlices___toppings___parent___id',
  HotSlicesToppingsVegetarian = 'hotSlices___toppings___vegetarian',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Slicemaster = 'slicemaster',
  SlicemasterCreatedAt = 'slicemaster____createdAt',
  SlicemasterId = 'slicemaster____id',
  SlicemasterKey = 'slicemaster____key',
  SlicemasterRawImage = 'slicemaster____rawImage',
  SlicemasterRawSlug = 'slicemaster____rawSlug',
  SlicemasterRev = 'slicemaster____rev',
  SlicemasterType = 'slicemaster____type',
  SlicemasterUpdatedAt = 'slicemaster____updatedAt',
  SlicemasterChildren = 'slicemaster___children',
  SlicemasterChildrenChildren = 'slicemaster___children___children',
  SlicemasterChildrenChildrenChildren = 'slicemaster___children___children___children',
  SlicemasterChildrenChildrenId = 'slicemaster___children___children___id',
  SlicemasterChildrenId = 'slicemaster___children___id',
  SlicemasterChildrenInternalContent = 'slicemaster___children___internal___content',
  SlicemasterChildrenInternalContentDigest = 'slicemaster___children___internal___contentDigest',
  SlicemasterChildrenInternalDescription = 'slicemaster___children___internal___description',
  SlicemasterChildrenInternalFieldOwners = 'slicemaster___children___internal___fieldOwners',
  SlicemasterChildrenInternalIgnoreType = 'slicemaster___children___internal___ignoreType',
  SlicemasterChildrenInternalMediaType = 'slicemaster___children___internal___mediaType',
  SlicemasterChildrenInternalOwner = 'slicemaster___children___internal___owner',
  SlicemasterChildrenInternalType = 'slicemaster___children___internal___type',
  SlicemasterChildrenParentChildren = 'slicemaster___children___parent___children',
  SlicemasterChildrenParentId = 'slicemaster___children___parent___id',
  SlicemasterDescription = 'slicemaster___description',
  SlicemasterId = 'slicemaster___id',
  SlicemasterImageKey = 'slicemaster___image____key',
  SlicemasterImageRawAsset = 'slicemaster___image____rawAsset',
  SlicemasterImageRawCrop = 'slicemaster___image____rawCrop',
  SlicemasterImageRawHotspot = 'slicemaster___image____rawHotspot',
  SlicemasterImageType = 'slicemaster___image____type',
  SlicemasterImageAssetCreatedAt = 'slicemaster___image___asset____createdAt',
  SlicemasterImageAssetId = 'slicemaster___image___asset____id',
  SlicemasterImageAssetKey = 'slicemaster___image___asset____key',
  SlicemasterImageAssetRawMetadata = 'slicemaster___image___asset____rawMetadata',
  SlicemasterImageAssetRawSource = 'slicemaster___image___asset____rawSource',
  SlicemasterImageAssetRev = 'slicemaster___image___asset____rev',
  SlicemasterImageAssetType = 'slicemaster___image___asset____type',
  SlicemasterImageAssetUpdatedAt = 'slicemaster___image___asset____updatedAt',
  SlicemasterImageAssetAssetId = 'slicemaster___image___asset___assetId',
  SlicemasterImageAssetChildren = 'slicemaster___image___asset___children',
  SlicemasterImageAssetDescription = 'slicemaster___image___asset___description',
  SlicemasterImageAssetExtension = 'slicemaster___image___asset___extension',
  SlicemasterImageAssetGatsbyImageData = 'slicemaster___image___asset___gatsbyImageData',
  SlicemasterImageAssetId = 'slicemaster___image___asset___id',
  SlicemasterImageAssetLabel = 'slicemaster___image___asset___label',
  SlicemasterImageAssetMimeType = 'slicemaster___image___asset___mimeType',
  SlicemasterImageAssetOriginalFilename = 'slicemaster___image___asset___originalFilename',
  SlicemasterImageAssetPath = 'slicemaster___image___asset___path',
  SlicemasterImageAssetSha1hash = 'slicemaster___image___asset___sha1hash',
  SlicemasterImageAssetSize = 'slicemaster___image___asset___size',
  SlicemasterImageAssetTitle = 'slicemaster___image___asset___title',
  SlicemasterImageAssetUrl = 'slicemaster___image___asset___url',
  SlicemasterImageCropKey = 'slicemaster___image___crop____key',
  SlicemasterImageCropType = 'slicemaster___image___crop____type',
  SlicemasterImageCropBottom = 'slicemaster___image___crop___bottom',
  SlicemasterImageCropLeft = 'slicemaster___image___crop___left',
  SlicemasterImageCropRight = 'slicemaster___image___crop___right',
  SlicemasterImageCropTop = 'slicemaster___image___crop___top',
  SlicemasterImageHotspotKey = 'slicemaster___image___hotspot____key',
  SlicemasterImageHotspotType = 'slicemaster___image___hotspot____type',
  SlicemasterImageHotspotHeight = 'slicemaster___image___hotspot___height',
  SlicemasterImageHotspotWidth = 'slicemaster___image___hotspot___width',
  SlicemasterImageHotspotX = 'slicemaster___image___hotspot___x',
  SlicemasterImageHotspotY = 'slicemaster___image___hotspot___y',
  SlicemasterInternalContent = 'slicemaster___internal___content',
  SlicemasterInternalContentDigest = 'slicemaster___internal___contentDigest',
  SlicemasterInternalDescription = 'slicemaster___internal___description',
  SlicemasterInternalFieldOwners = 'slicemaster___internal___fieldOwners',
  SlicemasterInternalIgnoreType = 'slicemaster___internal___ignoreType',
  SlicemasterInternalMediaType = 'slicemaster___internal___mediaType',
  SlicemasterInternalOwner = 'slicemaster___internal___owner',
  SlicemasterInternalType = 'slicemaster___internal___type',
  SlicemasterName = 'slicemaster___name',
  SlicemasterParentChildren = 'slicemaster___parent___children',
  SlicemasterParentChildrenChildren = 'slicemaster___parent___children___children',
  SlicemasterParentChildrenId = 'slicemaster___parent___children___id',
  SlicemasterParentId = 'slicemaster___parent___id',
  SlicemasterParentInternalContent = 'slicemaster___parent___internal___content',
  SlicemasterParentInternalContentDigest = 'slicemaster___parent___internal___contentDigest',
  SlicemasterParentInternalDescription = 'slicemaster___parent___internal___description',
  SlicemasterParentInternalFieldOwners = 'slicemaster___parent___internal___fieldOwners',
  SlicemasterParentInternalIgnoreType = 'slicemaster___parent___internal___ignoreType',
  SlicemasterParentInternalMediaType = 'slicemaster___parent___internal___mediaType',
  SlicemasterParentInternalOwner = 'slicemaster___parent___internal___owner',
  SlicemasterParentInternalType = 'slicemaster___parent___internal___type',
  SlicemasterParentParentChildren = 'slicemaster___parent___parent___children',
  SlicemasterParentParentId = 'slicemaster___parent___parent___id',
  SlicemasterSlugKey = 'slicemaster___slug____key',
  SlicemasterSlugType = 'slicemaster___slug____type',
  SlicemasterSlugCurrent = 'slicemaster___slug___current'
}

export type SanityStoreSettingsFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rawHotSlices?: Maybe<JsonQueryOperatorInput>;
  _rawSlicemaster?: Maybe<JsonQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  hotSlices?: Maybe<SanityPizzaFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  slicemaster?: Maybe<SanityPersonFilterListInput>;
};

export type SanityStoreSettingsGroupConnection = {
  __typename?: 'SanityStoreSettingsGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityStoreSettingsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityStoreSettingsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityStoreSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityStoreSettingsGroupConnectionDistinctArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsGroupConnectionGroupArgs = {
  field: SanityStoreSettingsFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityStoreSettingsGroupConnectionMaxArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsGroupConnectionMinArgs = {
  field: SanityStoreSettingsFieldsEnum;
};


export type SanityStoreSettingsGroupConnectionSumArgs = {
  field: SanityStoreSettingsFieldsEnum;
};

export type SanityStoreSettingsSortInput = {
  fields?: Maybe<Array<Maybe<SanityStoreSettingsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityTopping = Node & SanityDocument & {
  __typename?: 'SanityTopping';
  _createdAt?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _rev?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  vegetarian?: Maybe<Scalars['Boolean']>;
};


export type SanityTopping_CreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityTopping_UpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SanityToppingConnection = {
  __typename?: 'SanityToppingConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityToppingEdge>;
  group: Array<SanityToppingGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityTopping>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityToppingConnectionDistinctArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingConnectionGroupArgs = {
  field: SanityToppingFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityToppingConnectionMaxArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingConnectionMinArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingConnectionSumArgs = {
  field: SanityToppingFieldsEnum;
};

export type SanityToppingEdge = {
  __typename?: 'SanityToppingEdge';
  next?: Maybe<SanityTopping>;
  node: SanityTopping;
  previous?: Maybe<SanityTopping>;
};

export enum SanityToppingFieldsEnum {
  CreatedAt = '_createdAt',
  Id = '_id',
  Key = '_key',
  Rev = '_rev',
  Type = '_type',
  UpdatedAt = '_updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Vegetarian = 'vegetarian'
}

export type SanityToppingFilterInput = {
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _id?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  vegetarian?: Maybe<BooleanQueryOperatorInput>;
};

export type SanityToppingFilterListInput = {
  elemMatch?: Maybe<SanityToppingFilterInput>;
};

export type SanityToppingGroupConnection = {
  __typename?: 'SanityToppingGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SanityToppingEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SanityToppingGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SanityTopping>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SanityToppingGroupConnectionDistinctArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingGroupConnectionGroupArgs = {
  field: SanityToppingFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SanityToppingGroupConnectionMaxArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingGroupConnectionMinArgs = {
  field: SanityToppingFieldsEnum;
};


export type SanityToppingGroupConnectionSumArgs = {
  field: SanityToppingFieldsEnum;
};

export type SanityToppingSortInput = {
  fields?: Maybe<Array<Maybe<SanityToppingFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  context?: Maybe<SitePageContext>;
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  matchPath?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  topping?: Maybe<Scalars['String']>;
  toppingRegex?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  currentPage?: Maybe<IntQueryOperatorInput>;
  pageSize?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  topping?: Maybe<StringQueryOperatorInput>;
  toppingRegex?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextCurrentPage = 'context___currentPage',
  ContextPageSize = 'context___pageSize',
  ContextSkip = 'context___skip',
  ContextSlug = 'context___slug',
  ContextTopping = 'context___topping',
  ContextToppingRegex = 'context___toppingRegex',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  MatchPath = 'matchPath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorId = 'pluginCreatorId',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsXapi = 'pluginCreator___pluginOptions____xapi',
  PluginCreatorPluginOptionsXcomponents = 'pluginCreator___pluginOptions____xcomponents',
  PluginCreatorPluginOptionsXfeatures = 'pluginCreator___pluginOptions____xfeatures',
  PluginCreatorPluginOptionsXgraphql = 'pluginCreator___pluginOptions____xgraphql',
  PluginCreatorPluginOptionsXpages = 'pluginCreator___pluginOptions____xpages',
  PluginCreatorPluginOptionsXtemplates = 'pluginCreator___pluginOptions____xtemplates',
  PluginCreatorPluginOptionsXtheme = 'pluginCreator___pluginOptions____xtheme',
  PluginCreatorPluginOptionsXutils = 'pluginCreator___pluginOptions____xutils',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsDataset = 'pluginCreator___pluginOptions___dataset',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsProjectId = 'pluginCreator___pluginOptions___projectId',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsWatchMode = 'pluginCreator___pluginOptions___watchMode',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<SitePluginPackageJson>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonMain = 'packageJson___main',
  PackageJsonName = 'packageJson___name',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonVersion = 'packageJson___version',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsXapi = 'pluginOptions____xapi',
  PluginOptionsXcomponents = 'pluginOptions____xcomponents',
  PluginOptionsXfeatures = 'pluginOptions____xfeatures',
  PluginOptionsXgraphql = 'pluginOptions____xgraphql',
  PluginOptionsXpages = 'pluginOptions____xpages',
  PluginOptionsXtemplates = 'pluginOptions____xtemplates',
  PluginOptionsXtheme = 'pluginOptions____xtheme',
  PluginOptionsXutils = 'pluginOptions____xutils',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsDataset = 'pluginOptions___dataset',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsProjectId = 'pluginOptions___projectId',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsWatchMode = 'pluginOptions___watchMode',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  author?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description?: Maybe<Scalars['String']>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  license?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  _xapi?: Maybe<Scalars['String']>;
  _xcomponents?: Maybe<Scalars['String']>;
  _xfeatures?: Maybe<Scalars['String']>;
  _xgraphql?: Maybe<Scalars['String']>;
  _xpages?: Maybe<Scalars['String']>;
  _xtemplates?: Maybe<Scalars['String']>;
  _xtheme?: Maybe<Scalars['String']>;
  _xutils?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  dataset?: Maybe<Scalars['String']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  projectId?: Maybe<Scalars['String']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  watchMode?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  _xapi?: Maybe<StringQueryOperatorInput>;
  _xcomponents?: Maybe<StringQueryOperatorInput>;
  _xfeatures?: Maybe<StringQueryOperatorInput>;
  _xgraphql?: Maybe<StringQueryOperatorInput>;
  _xpages?: Maybe<StringQueryOperatorInput>;
  _xtemplates?: Maybe<StringQueryOperatorInput>;
  _xtheme?: Maybe<StringQueryOperatorInput>;
  _xutils?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AllSanityPizzaGatsbyNodeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityPizzaGatsbyNodeQuery = { __typename?: 'Query', pizzas: { __typename?: 'SanityPizzaConnection', nodes: Array<{ __typename?: 'SanityPizza', name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined }> } };

export type AllSanityToppingGatsbyNodeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityToppingGatsbyNodeQuery = { __typename?: 'Query', allSanityTopping: { __typename?: 'SanityToppingConnection', nodes: Array<{ __typename?: 'SanityTopping', id: string, name?: string | null | undefined }> } };

export type AllSanityPersonGatsbyNodeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityPersonGatsbyNodeQuery = { __typename?: 'Query', slicemasters: { __typename?: 'SanityPersonConnection', totalCount: number, nodes: Array<{ __typename?: 'SanityPerson', id: string, name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined }> } };

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid', maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', allSiteFunction: { __typename?: 'SiteFunctionConnection', nodes: Array<{ __typename?: 'SiteFunction', functionRoute: string }> }, allSitePage: { __typename?: 'SitePageConnection', nodes: Array<{ __typename?: 'SitePage', path: string }> } };

export type SiteQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined };

export type PizzaToppingsQueryVariables = Exact<{ [key: string]: never; }>;


export type PizzaToppingsQuery = { __typename?: 'Query', pizzaToppings: { __typename?: 'SanityPizzaConnection', nodes: Array<{ __typename?: 'SanityPizza', id: string, name?: string | null | undefined, toppings?: Array<{ __typename?: 'SanityTopping', id: string, name?: string | null | undefined, vegetarian?: boolean | null | undefined } | null | undefined> | null | undefined }> } };

export type ToppingFragment = { __typename?: 'SanityTopping', id: string, name?: string | null | undefined, vegetarian?: boolean | null | undefined };

export type AllBeerQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBeerQuery = { __typename?: 'Query', beers: { __typename?: 'BeerConnection', nodes: Array<{ __typename?: 'Beer', id: string, name?: string | null | undefined, price?: string | null | undefined, image?: string | null | undefined, rating?: { __typename?: 'BeerRating', average?: number | null | undefined, reviews?: number | null | undefined } | null | undefined }> } };

export type SanityStoreSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SanityStoreSettingsQuery = { __typename?: 'Query', sanityStoreSettings?: { __typename?: 'SanityStoreSettings', name?: string | null | undefined, slicemaster?: Array<{ __typename?: 'SanityPerson', _id?: string | null | undefined, name?: string | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', url?: string | null | undefined, metadata?: { __typename?: 'SanityImageMetadata', lqip?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, hotSlices?: Array<{ __typename?: 'SanityPizza', _id?: string | null | undefined, price?: number | null | undefined, name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', _key?: string | null | undefined, _type?: string | null | undefined, current?: string | null | undefined } | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', url?: string | null | undefined, metadata?: { __typename?: 'SanityImageMetadata', lqip?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SlicemasterFragment = { __typename?: 'SanityPerson', _id?: string | null | undefined, name?: string | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', url?: string | null | undefined, metadata?: { __typename?: 'SanityImageMetadata', lqip?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type HotSliceFragment = { __typename?: 'SanityPizza', _id?: string | null | undefined, price?: number | null | undefined, name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', _key?: string | null | undefined, _type?: string | null | undefined, current?: string | null | undefined } | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', url?: string | null | undefined, metadata?: { __typename?: 'SanityImageMetadata', lqip?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type AllSanityPizza2QueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityPizza2Query = { __typename?: 'Query', pizzas: { __typename?: 'SanityPizzaConnection', nodes: Array<{ __typename?: 'SanityPizza', id: string, name?: string | null | undefined, price?: number | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined }> } };

export type AllSanityPizzaQueryVariables = Exact<{
  toppingRegex?: Maybe<Scalars['String']>;
}>;


export type AllSanityPizzaQuery = { __typename?: 'Query', allSanityPizza: { __typename?: 'SanityPizzaConnection', nodes: Array<{ __typename?: 'SanityPizza', id: string, name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined, toppings?: Array<{ __typename?: 'SanityTopping', id: string, name?: string | null | undefined } | null | undefined> | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined }> } };

export type SanityPizzaFragment = { __typename?: 'SanityPizza', id: string, name?: string | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined, toppings?: Array<{ __typename?: 'SanityTopping', id: string, name?: string | null | undefined } | null | undefined> | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined };

export type AllSanityPerson3QueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}>;


export type AllSanityPerson3Query = { __typename?: 'Query', slicemasters: { __typename?: 'SanityPersonConnection', totalCount: number, nodes: Array<{ __typename?: 'SanityPerson', id: string, name?: string | null | undefined, description?: string | null | undefined, slug?: { __typename?: 'SanitySlug', current?: string | null | undefined } | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined }> } };

export type SanityPizza2QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SanityPizza2Query = { __typename?: 'Query', pizza?: { __typename?: 'SanityPizza', id: string, name?: string | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined, toppings?: Array<{ __typename?: 'SanityTopping', id: string, name?: string | null | undefined, vegetarian?: boolean | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SanityPerson2QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type SanityPerson2Query = { __typename?: 'Query', person?: { __typename?: 'SanityPerson', id: string, name?: string | null | undefined, description?: string | null | undefined, image?: { __typename?: 'SanityImage', asset?: { __typename?: 'SanityImageAsset', gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined };
