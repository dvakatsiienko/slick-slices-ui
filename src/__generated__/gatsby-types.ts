/* eslint-disable */

declare namespace GatsbyTypes {
    type Maybe<T> = T | undefined;
    type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
    type MakeOptional<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]?: Maybe<T[SubKey]> };
    type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
        { [SubKey in K]: Maybe<T[SubKey]> };
    /** All built-in and custom scalars, mapped to their actual values */
    type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        Date: string;
        JSON: never;
    };

    type BooleanQueryOperatorInput = {
        readonly eq: Maybe<Scalars['Boolean']>;
        readonly ne: Maybe<Scalars['Boolean']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
    };

    type DateQueryOperatorInput = {
        readonly eq: Maybe<Scalars['Date']>;
        readonly ne: Maybe<Scalars['Date']>;
        readonly gt: Maybe<Scalars['Date']>;
        readonly gte: Maybe<Scalars['Date']>;
        readonly lt: Maybe<Scalars['Date']>;
        readonly lte: Maybe<Scalars['Date']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
    };

    type Directory = Node & {
        readonly sourceInstanceName: Scalars['String'];
        readonly absolutePath: Scalars['String'];
        readonly relativePath: Scalars['String'];
        readonly extension: Scalars['String'];
        readonly size: Scalars['Int'];
        readonly prettySize: Scalars['String'];
        readonly modifiedTime: Scalars['Date'];
        readonly accessTime: Scalars['Date'];
        readonly changeTime: Scalars['Date'];
        readonly birthTime: Scalars['Date'];
        readonly root: Scalars['String'];
        readonly dir: Scalars['String'];
        readonly base: Scalars['String'];
        readonly ext: Scalars['String'];
        readonly name: Scalars['String'];
        readonly relativeDirectory: Scalars['String'];
        readonly dev: Scalars['Int'];
        readonly mode: Scalars['Int'];
        readonly nlink: Scalars['Int'];
        readonly uid: Scalars['Int'];
        readonly gid: Scalars['Int'];
        readonly rdev: Scalars['Int'];
        readonly ino: Scalars['Float'];
        readonly atimeMs: Scalars['Float'];
        readonly mtimeMs: Scalars['Float'];
        readonly ctimeMs: Scalars['Float'];
        readonly atime: Scalars['Date'];
        readonly mtime: Scalars['Date'];
        readonly ctime: Scalars['Date'];
        /** @deprecated Use `birthTime` instead */
        readonly birthtime: Maybe<Scalars['Date']>;
        /** @deprecated Use `birthTime` instead */
        readonly birthtimeMs: Maybe<Scalars['Float']>;
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
    };

    type Directory_modifiedTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_accessTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_changeTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_birthTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_atimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_mtimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type Directory_ctimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type DirectoryConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<DirectoryEdge>;
        readonly nodes: ReadonlyArray<Directory>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<DirectoryGroupConnection>;
    };

    type DirectoryConnection_distinctArgs = {
        field: DirectoryFieldsEnum;
    };

    type DirectoryConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: DirectoryFieldsEnum;
    };

    type DirectoryEdge = {
        readonly next: Maybe<Directory>;
        readonly node: Directory;
        readonly previous: Maybe<Directory>;
    };

    type DirectoryFieldsEnum =
        | 'sourceInstanceName'
        | 'absolutePath'
        | 'relativePath'
        | 'extension'
        | 'size'
        | 'prettySize'
        | 'modifiedTime'
        | 'accessTime'
        | 'changeTime'
        | 'birthTime'
        | 'root'
        | 'dir'
        | 'base'
        | 'ext'
        | 'name'
        | 'relativeDirectory'
        | 'dev'
        | 'mode'
        | 'nlink'
        | 'uid'
        | 'gid'
        | 'rdev'
        | 'ino'
        | 'atimeMs'
        | 'mtimeMs'
        | 'ctimeMs'
        | 'atime'
        | 'mtime'
        | 'ctime'
        | 'birthtime'
        | 'birthtimeMs'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type DirectoryFilterInput = {
        readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
        readonly absolutePath: Maybe<StringQueryOperatorInput>;
        readonly relativePath: Maybe<StringQueryOperatorInput>;
        readonly extension: Maybe<StringQueryOperatorInput>;
        readonly size: Maybe<IntQueryOperatorInput>;
        readonly prettySize: Maybe<StringQueryOperatorInput>;
        readonly modifiedTime: Maybe<DateQueryOperatorInput>;
        readonly accessTime: Maybe<DateQueryOperatorInput>;
        readonly changeTime: Maybe<DateQueryOperatorInput>;
        readonly birthTime: Maybe<DateQueryOperatorInput>;
        readonly root: Maybe<StringQueryOperatorInput>;
        readonly dir: Maybe<StringQueryOperatorInput>;
        readonly base: Maybe<StringQueryOperatorInput>;
        readonly ext: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
        readonly dev: Maybe<IntQueryOperatorInput>;
        readonly mode: Maybe<IntQueryOperatorInput>;
        readonly nlink: Maybe<IntQueryOperatorInput>;
        readonly uid: Maybe<IntQueryOperatorInput>;
        readonly gid: Maybe<IntQueryOperatorInput>;
        readonly rdev: Maybe<IntQueryOperatorInput>;
        readonly ino: Maybe<FloatQueryOperatorInput>;
        readonly atimeMs: Maybe<FloatQueryOperatorInput>;
        readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
        readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
        readonly atime: Maybe<DateQueryOperatorInput>;
        readonly mtime: Maybe<DateQueryOperatorInput>;
        readonly ctime: Maybe<DateQueryOperatorInput>;
        readonly birthtime: Maybe<DateQueryOperatorInput>;
        readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type DirectoryGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<DirectoryEdge>;
        readonly nodes: ReadonlyArray<Directory>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type DirectorySortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type File = Node & {
        readonly sourceInstanceName: Scalars['String'];
        readonly absolutePath: Scalars['String'];
        readonly relativePath: Scalars['String'];
        readonly extension: Scalars['String'];
        readonly size: Scalars['Int'];
        readonly prettySize: Scalars['String'];
        readonly modifiedTime: Scalars['Date'];
        readonly accessTime: Scalars['Date'];
        readonly changeTime: Scalars['Date'];
        readonly birthTime: Scalars['Date'];
        readonly root: Scalars['String'];
        readonly dir: Scalars['String'];
        readonly base: Scalars['String'];
        readonly ext: Scalars['String'];
        readonly name: Scalars['String'];
        readonly relativeDirectory: Scalars['String'];
        readonly dev: Scalars['Int'];
        readonly mode: Scalars['Int'];
        readonly nlink: Scalars['Int'];
        readonly uid: Scalars['Int'];
        readonly gid: Scalars['Int'];
        readonly rdev: Scalars['Int'];
        readonly ino: Scalars['Float'];
        readonly atimeMs: Scalars['Float'];
        readonly mtimeMs: Scalars['Float'];
        readonly ctimeMs: Scalars['Float'];
        readonly atime: Scalars['Date'];
        readonly mtime: Scalars['Date'];
        readonly ctime: Scalars['Date'];
        /** @deprecated Use `birthTime` instead */
        readonly birthtime: Maybe<Scalars['Date']>;
        /** @deprecated Use `birthTime` instead */
        readonly birthtimeMs: Maybe<Scalars['Float']>;
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
    };

    type File_modifiedTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_accessTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_changeTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_birthTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_atimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_mtimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type File_ctimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type FileConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<FileEdge>;
        readonly nodes: ReadonlyArray<File>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<FileGroupConnection>;
    };

    type FileConnection_distinctArgs = {
        field: FileFieldsEnum;
    };

    type FileConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: FileFieldsEnum;
    };

    type FileEdge = {
        readonly next: Maybe<File>;
        readonly node: File;
        readonly previous: Maybe<File>;
    };

    type FileFieldsEnum =
        | 'sourceInstanceName'
        | 'absolutePath'
        | 'relativePath'
        | 'extension'
        | 'size'
        | 'prettySize'
        | 'modifiedTime'
        | 'accessTime'
        | 'changeTime'
        | 'birthTime'
        | 'root'
        | 'dir'
        | 'base'
        | 'ext'
        | 'name'
        | 'relativeDirectory'
        | 'dev'
        | 'mode'
        | 'nlink'
        | 'uid'
        | 'gid'
        | 'rdev'
        | 'ino'
        | 'atimeMs'
        | 'mtimeMs'
        | 'ctimeMs'
        | 'atime'
        | 'mtime'
        | 'ctime'
        | 'birthtime'
        | 'birthtimeMs'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type FileFilterInput = {
        readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
        readonly absolutePath: Maybe<StringQueryOperatorInput>;
        readonly relativePath: Maybe<StringQueryOperatorInput>;
        readonly extension: Maybe<StringQueryOperatorInput>;
        readonly size: Maybe<IntQueryOperatorInput>;
        readonly prettySize: Maybe<StringQueryOperatorInput>;
        readonly modifiedTime: Maybe<DateQueryOperatorInput>;
        readonly accessTime: Maybe<DateQueryOperatorInput>;
        readonly changeTime: Maybe<DateQueryOperatorInput>;
        readonly birthTime: Maybe<DateQueryOperatorInput>;
        readonly root: Maybe<StringQueryOperatorInput>;
        readonly dir: Maybe<StringQueryOperatorInput>;
        readonly base: Maybe<StringQueryOperatorInput>;
        readonly ext: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
        readonly dev: Maybe<IntQueryOperatorInput>;
        readonly mode: Maybe<IntQueryOperatorInput>;
        readonly nlink: Maybe<IntQueryOperatorInput>;
        readonly uid: Maybe<IntQueryOperatorInput>;
        readonly gid: Maybe<IntQueryOperatorInput>;
        readonly rdev: Maybe<IntQueryOperatorInput>;
        readonly ino: Maybe<FloatQueryOperatorInput>;
        readonly atimeMs: Maybe<FloatQueryOperatorInput>;
        readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
        readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
        readonly atime: Maybe<DateQueryOperatorInput>;
        readonly mtime: Maybe<DateQueryOperatorInput>;
        readonly ctime: Maybe<DateQueryOperatorInput>;
        readonly birthtime: Maybe<DateQueryOperatorInput>;
        readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type FileGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<FileEdge>;
        readonly nodes: ReadonlyArray<File>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type FileSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type FloatQueryOperatorInput = {
        readonly eq: Maybe<Scalars['Float']>;
        readonly ne: Maybe<Scalars['Float']>;
        readonly gt: Maybe<Scalars['Float']>;
        readonly gte: Maybe<Scalars['Float']>;
        readonly lt: Maybe<Scalars['Float']>;
        readonly lte: Maybe<Scalars['Float']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
    };

    type Internal = {
        readonly content: Maybe<Scalars['String']>;
        readonly contentDigest: Scalars['String'];
        readonly description: Maybe<Scalars['String']>;
        readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly ignoreType: Maybe<Scalars['Boolean']>;
        readonly mediaType: Maybe<Scalars['String']>;
        readonly owner: Scalars['String'];
        readonly type: Scalars['String'];
    };

    type InternalFilterInput = {
        readonly content: Maybe<StringQueryOperatorInput>;
        readonly contentDigest: Maybe<StringQueryOperatorInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly fieldOwners: Maybe<StringQueryOperatorInput>;
        readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
        readonly mediaType: Maybe<StringQueryOperatorInput>;
        readonly owner: Maybe<StringQueryOperatorInput>;
        readonly type: Maybe<StringQueryOperatorInput>;
    };

    type IntQueryOperatorInput = {
        readonly eq: Maybe<Scalars['Int']>;
        readonly ne: Maybe<Scalars['Int']>;
        readonly gt: Maybe<Scalars['Int']>;
        readonly gte: Maybe<Scalars['Int']>;
        readonly lt: Maybe<Scalars['Int']>;
        readonly lte: Maybe<Scalars['Int']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
    };

    type JSONQueryOperatorInput = {
        readonly eq: Maybe<Scalars['JSON']>;
        readonly ne: Maybe<Scalars['JSON']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
        readonly regex: Maybe<Scalars['JSON']>;
        readonly glob: Maybe<Scalars['JSON']>;
    };

    /** Node Interface */
    type Node = {
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
    };

    type NodeFilterInput = {
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type NodeFilterListInput = {
        readonly elemMatch: Maybe<NodeFilterInput>;
    };

    type PageInfo = {
        readonly currentPage: Scalars['Int'];
        readonly hasPreviousPage: Scalars['Boolean'];
        readonly hasNextPage: Scalars['Boolean'];
        readonly itemCount: Scalars['Int'];
        readonly pageCount: Scalars['Int'];
        readonly perPage: Maybe<Scalars['Int']>;
        readonly totalCount: Scalars['Int'];
    };

    type Query = {
        readonly file: Maybe<File>;
        readonly allFile: FileConnection;
        readonly directory: Maybe<Directory>;
        readonly allDirectory: DirectoryConnection;
        readonly site: Maybe<Site>;
        readonly allSite: SiteConnection;
        readonly sitePage: Maybe<SitePage>;
        readonly allSitePage: SitePageConnection;
        readonly sanityPerson: Maybe<SanityPerson>;
        readonly allSanityPerson: SanityPersonConnection;
        readonly sanityPizza: Maybe<SanityPizza>;
        readonly allSanityPizza: SanityPizzaConnection;
        readonly sanityFileAsset: Maybe<SanityFileAsset>;
        readonly allSanityFileAsset: SanityFileAssetConnection;
        readonly sanityImageAsset: Maybe<SanityImageAsset>;
        readonly allSanityImageAsset: SanityImageAssetConnection;
        readonly sanityTopping: Maybe<SanityTopping>;
        readonly allSanityTopping: SanityToppingConnection;
        readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
        readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
        readonly sitePlugin: Maybe<SitePlugin>;
        readonly allSitePlugin: SitePluginConnection;
    };

    type Query_fileArgs = {
        sourceInstanceName: Maybe<StringQueryOperatorInput>;
        absolutePath: Maybe<StringQueryOperatorInput>;
        relativePath: Maybe<StringQueryOperatorInput>;
        extension: Maybe<StringQueryOperatorInput>;
        size: Maybe<IntQueryOperatorInput>;
        prettySize: Maybe<StringQueryOperatorInput>;
        modifiedTime: Maybe<DateQueryOperatorInput>;
        accessTime: Maybe<DateQueryOperatorInput>;
        changeTime: Maybe<DateQueryOperatorInput>;
        birthTime: Maybe<DateQueryOperatorInput>;
        root: Maybe<StringQueryOperatorInput>;
        dir: Maybe<StringQueryOperatorInput>;
        base: Maybe<StringQueryOperatorInput>;
        ext: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        relativeDirectory: Maybe<StringQueryOperatorInput>;
        dev: Maybe<IntQueryOperatorInput>;
        mode: Maybe<IntQueryOperatorInput>;
        nlink: Maybe<IntQueryOperatorInput>;
        uid: Maybe<IntQueryOperatorInput>;
        gid: Maybe<IntQueryOperatorInput>;
        rdev: Maybe<IntQueryOperatorInput>;
        ino: Maybe<FloatQueryOperatorInput>;
        atimeMs: Maybe<FloatQueryOperatorInput>;
        mtimeMs: Maybe<FloatQueryOperatorInput>;
        ctimeMs: Maybe<FloatQueryOperatorInput>;
        atime: Maybe<DateQueryOperatorInput>;
        mtime: Maybe<DateQueryOperatorInput>;
        ctime: Maybe<DateQueryOperatorInput>;
        birthtime: Maybe<DateQueryOperatorInput>;
        birthtimeMs: Maybe<FloatQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allFileArgs = {
        filter: Maybe<FileFilterInput>;
        sort: Maybe<FileSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_directoryArgs = {
        sourceInstanceName: Maybe<StringQueryOperatorInput>;
        absolutePath: Maybe<StringQueryOperatorInput>;
        relativePath: Maybe<StringQueryOperatorInput>;
        extension: Maybe<StringQueryOperatorInput>;
        size: Maybe<IntQueryOperatorInput>;
        prettySize: Maybe<StringQueryOperatorInput>;
        modifiedTime: Maybe<DateQueryOperatorInput>;
        accessTime: Maybe<DateQueryOperatorInput>;
        changeTime: Maybe<DateQueryOperatorInput>;
        birthTime: Maybe<DateQueryOperatorInput>;
        root: Maybe<StringQueryOperatorInput>;
        dir: Maybe<StringQueryOperatorInput>;
        base: Maybe<StringQueryOperatorInput>;
        ext: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        relativeDirectory: Maybe<StringQueryOperatorInput>;
        dev: Maybe<IntQueryOperatorInput>;
        mode: Maybe<IntQueryOperatorInput>;
        nlink: Maybe<IntQueryOperatorInput>;
        uid: Maybe<IntQueryOperatorInput>;
        gid: Maybe<IntQueryOperatorInput>;
        rdev: Maybe<IntQueryOperatorInput>;
        ino: Maybe<FloatQueryOperatorInput>;
        atimeMs: Maybe<FloatQueryOperatorInput>;
        mtimeMs: Maybe<FloatQueryOperatorInput>;
        ctimeMs: Maybe<FloatQueryOperatorInput>;
        atime: Maybe<DateQueryOperatorInput>;
        mtime: Maybe<DateQueryOperatorInput>;
        ctime: Maybe<DateQueryOperatorInput>;
        birthtime: Maybe<DateQueryOperatorInput>;
        birthtimeMs: Maybe<FloatQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allDirectoryArgs = {
        filter: Maybe<DirectoryFilterInput>;
        sort: Maybe<DirectorySortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_siteArgs = {
        buildTime: Maybe<DateQueryOperatorInput>;
        siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
        port: Maybe<IntQueryOperatorInput>;
        host: Maybe<StringQueryOperatorInput>;
        polyfill: Maybe<BooleanQueryOperatorInput>;
        pathPrefix: Maybe<StringQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSiteArgs = {
        filter: Maybe<SiteFilterInput>;
        sort: Maybe<SiteSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sitePageArgs = {
        path: Maybe<StringQueryOperatorInput>;
        component: Maybe<StringQueryOperatorInput>;
        internalComponentName: Maybe<StringQueryOperatorInput>;
        componentChunkName: Maybe<StringQueryOperatorInput>;
        matchPath: Maybe<StringQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
        isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
        pluginCreator: Maybe<SitePluginFilterInput>;
        pluginCreatorId: Maybe<StringQueryOperatorInput>;
        componentPath: Maybe<StringQueryOperatorInput>;
    };

    type Query_allSitePageArgs = {
        filter: Maybe<SitePageFilterInput>;
        sort: Maybe<SitePageSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sanityPersonArgs = {
        _id: Maybe<StringQueryOperatorInput>;
        _type: Maybe<StringQueryOperatorInput>;
        _createdAt: Maybe<DateQueryOperatorInput>;
        _updatedAt: Maybe<DateQueryOperatorInput>;
        _rev: Maybe<StringQueryOperatorInput>;
        _key: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        slug: Maybe<SanitySlugFilterInput>;
        description: Maybe<StringQueryOperatorInput>;
        image: Maybe<SanityImageFilterInput>;
        _rawSlug: Maybe<JSONQueryOperatorInput>;
        _rawImage: Maybe<JSONQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSanityPersonArgs = {
        filter: Maybe<SanityPersonFilterInput>;
        sort: Maybe<SanityPersonSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sanityPizzaArgs = {
        _id: Maybe<StringQueryOperatorInput>;
        _type: Maybe<StringQueryOperatorInput>;
        _createdAt: Maybe<DateQueryOperatorInput>;
        _updatedAt: Maybe<DateQueryOperatorInput>;
        _rev: Maybe<StringQueryOperatorInput>;
        _key: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        slug: Maybe<SanitySlugFilterInput>;
        image: Maybe<SanityImageFilterInput>;
        price: Maybe<FloatQueryOperatorInput>;
        toppings: Maybe<SanityToppingFilterListInput>;
        _rawSlug: Maybe<JSONQueryOperatorInput>;
        _rawImage: Maybe<JSONQueryOperatorInput>;
        _rawToppings: Maybe<JSONQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSanityPizzaArgs = {
        filter: Maybe<SanityPizzaFilterInput>;
        sort: Maybe<SanityPizzaSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sanityFileAssetArgs = {
        _id: Maybe<StringQueryOperatorInput>;
        _type: Maybe<StringQueryOperatorInput>;
        _createdAt: Maybe<DateQueryOperatorInput>;
        _updatedAt: Maybe<DateQueryOperatorInput>;
        _rev: Maybe<StringQueryOperatorInput>;
        _key: Maybe<StringQueryOperatorInput>;
        originalFilename: Maybe<StringQueryOperatorInput>;
        label: Maybe<StringQueryOperatorInput>;
        title: Maybe<StringQueryOperatorInput>;
        description: Maybe<StringQueryOperatorInput>;
        sha1hash: Maybe<StringQueryOperatorInput>;
        extension: Maybe<StringQueryOperatorInput>;
        mimeType: Maybe<StringQueryOperatorInput>;
        size: Maybe<FloatQueryOperatorInput>;
        assetId: Maybe<StringQueryOperatorInput>;
        path: Maybe<StringQueryOperatorInput>;
        url: Maybe<StringQueryOperatorInput>;
        source: Maybe<SanityAssetSourceDataFilterInput>;
        _rawSource: Maybe<JSONQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSanityFileAssetArgs = {
        filter: Maybe<SanityFileAssetFilterInput>;
        sort: Maybe<SanityFileAssetSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sanityImageAssetArgs = {
        _id: Maybe<StringQueryOperatorInput>;
        _type: Maybe<StringQueryOperatorInput>;
        _createdAt: Maybe<DateQueryOperatorInput>;
        _updatedAt: Maybe<DateQueryOperatorInput>;
        _rev: Maybe<StringQueryOperatorInput>;
        _key: Maybe<StringQueryOperatorInput>;
        originalFilename: Maybe<StringQueryOperatorInput>;
        label: Maybe<StringQueryOperatorInput>;
        title: Maybe<StringQueryOperatorInput>;
        description: Maybe<StringQueryOperatorInput>;
        sha1hash: Maybe<StringQueryOperatorInput>;
        extension: Maybe<StringQueryOperatorInput>;
        mimeType: Maybe<StringQueryOperatorInput>;
        size: Maybe<FloatQueryOperatorInput>;
        assetId: Maybe<StringQueryOperatorInput>;
        path: Maybe<StringQueryOperatorInput>;
        url: Maybe<StringQueryOperatorInput>;
        metadata: Maybe<SanityImageMetadataFilterInput>;
        source: Maybe<SanityAssetSourceDataFilterInput>;
        _rawMetadata: Maybe<JSONQueryOperatorInput>;
        _rawSource: Maybe<JSONQueryOperatorInput>;
        fixed: Maybe<SanityImageFixedFilterInput>;
        fluid: Maybe<SanityImageFluidFilterInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSanityImageAssetArgs = {
        filter: Maybe<SanityImageAssetFilterInput>;
        sort: Maybe<SanityImageAssetSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sanityToppingArgs = {
        _id: Maybe<StringQueryOperatorInput>;
        _type: Maybe<StringQueryOperatorInput>;
        _createdAt: Maybe<DateQueryOperatorInput>;
        _updatedAt: Maybe<DateQueryOperatorInput>;
        _rev: Maybe<StringQueryOperatorInput>;
        _key: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        vegetarian: Maybe<BooleanQueryOperatorInput>;
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
    };

    type Query_allSanityToppingArgs = {
        filter: Maybe<SanityToppingFilterInput>;
        sort: Maybe<SanityToppingSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_siteBuildMetadataArgs = {
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
        buildTime: Maybe<DateQueryOperatorInput>;
    };

    type Query_allSiteBuildMetadataArgs = {
        filter: Maybe<SiteBuildMetadataFilterInput>;
        sort: Maybe<SiteBuildMetadataSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type Query_sitePluginArgs = {
        id: Maybe<StringQueryOperatorInput>;
        parent: Maybe<NodeFilterInput>;
        children: Maybe<NodeFilterListInput>;
        internal: Maybe<InternalFilterInput>;
        resolve: Maybe<StringQueryOperatorInput>;
        name: Maybe<StringQueryOperatorInput>;
        version: Maybe<StringQueryOperatorInput>;
        pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
        nodeAPIs: Maybe<StringQueryOperatorInput>;
        browserAPIs: Maybe<StringQueryOperatorInput>;
        ssrAPIs: Maybe<StringQueryOperatorInput>;
        pluginFilepath: Maybe<StringQueryOperatorInput>;
        packageJson: Maybe<SitePluginPackageJsonFilterInput>;
    };

    type Query_allSitePluginArgs = {
        filter: Maybe<SitePluginFilterInput>;
        sort: Maybe<SitePluginSortInput>;
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
    };

    type SanityAssetSourceData = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly name: Maybe<Scalars['String']>;
        readonly id: Maybe<Scalars['String']>;
        readonly url: Maybe<Scalars['String']>;
    };

    type SanityAssetSourceDataFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly url: Maybe<StringQueryOperatorInput>;
    };

    type SanityBlock = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly children: Maybe<ReadonlyArray<Maybe<SanitySpan>>>;
        readonly style: Maybe<Scalars['String']>;
        readonly list: Maybe<Scalars['String']>;
        readonly _rawChildren: Maybe<Scalars['JSON']>;
    };

    type SanityBlock__rawChildrenArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    /** A Sanity document */
    type SanityDocument = {
        readonly _id: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly _createdAt: Maybe<Scalars['Date']>;
        readonly _updatedAt: Maybe<Scalars['Date']>;
        readonly _rev: Maybe<Scalars['String']>;
    };

    type SanityFile = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly asset: Maybe<SanityFileAsset>;
        readonly _rawAsset: Maybe<Scalars['JSON']>;
    };

    type SanityFile__rawAssetArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityFileAsset = SanityDocument &
        Node & {
            readonly _id: Maybe<Scalars['String']>;
            readonly _type: Maybe<Scalars['String']>;
            readonly _createdAt: Maybe<Scalars['Date']>;
            readonly _updatedAt: Maybe<Scalars['Date']>;
            readonly _rev: Maybe<Scalars['String']>;
            readonly _key: Maybe<Scalars['String']>;
            readonly originalFilename: Maybe<Scalars['String']>;
            readonly label: Maybe<Scalars['String']>;
            readonly title: Maybe<Scalars['String']>;
            readonly description: Maybe<Scalars['String']>;
            readonly sha1hash: Maybe<Scalars['String']>;
            readonly extension: Maybe<Scalars['String']>;
            readonly mimeType: Maybe<Scalars['String']>;
            readonly size: Maybe<Scalars['Float']>;
            readonly assetId: Maybe<Scalars['String']>;
            readonly path: Maybe<Scalars['String']>;
            readonly url: Maybe<Scalars['String']>;
            readonly source: Maybe<SanityAssetSourceData>;
            readonly _rawSource: Maybe<Scalars['JSON']>;
            readonly id: Scalars['ID'];
            readonly parent: Maybe<Node>;
            readonly children: ReadonlyArray<Node>;
            readonly internal: Internal;
        };

    type SanityFileAsset__createdAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityFileAsset__updatedAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityFileAsset__rawSourceArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityFileAssetConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityFileAssetEdge>;
        readonly nodes: ReadonlyArray<SanityFileAsset>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SanityFileAssetGroupConnection>;
    };

    type SanityFileAssetConnection_distinctArgs = {
        field: SanityFileAssetFieldsEnum;
    };

    type SanityFileAssetConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SanityFileAssetFieldsEnum;
    };

    type SanityFileAssetEdge = {
        readonly next: Maybe<SanityFileAsset>;
        readonly node: SanityFileAsset;
        readonly previous: Maybe<SanityFileAsset>;
    };

    type SanityFileAssetFieldsEnum =
        | '_id'
        | '_type'
        | '_createdAt'
        | '_updatedAt'
        | '_rev'
        | '_key'
        | 'originalFilename'
        | 'label'
        | 'title'
        | 'description'
        | 'sha1hash'
        | 'extension'
        | 'mimeType'
        | 'size'
        | 'assetId'
        | 'path'
        | 'url'
        | 'source._key'
        | 'source._type'
        | 'source.name'
        | 'source.id'
        | 'source.url'
        | '_rawSource'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SanityFileAssetFilterInput = {
        readonly _id: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly _createdAt: Maybe<DateQueryOperatorInput>;
        readonly _updatedAt: Maybe<DateQueryOperatorInput>;
        readonly _rev: Maybe<StringQueryOperatorInput>;
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly originalFilename: Maybe<StringQueryOperatorInput>;
        readonly label: Maybe<StringQueryOperatorInput>;
        readonly title: Maybe<StringQueryOperatorInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly sha1hash: Maybe<StringQueryOperatorInput>;
        readonly extension: Maybe<StringQueryOperatorInput>;
        readonly mimeType: Maybe<StringQueryOperatorInput>;
        readonly size: Maybe<FloatQueryOperatorInput>;
        readonly assetId: Maybe<StringQueryOperatorInput>;
        readonly path: Maybe<StringQueryOperatorInput>;
        readonly url: Maybe<StringQueryOperatorInput>;
        readonly source: Maybe<SanityAssetSourceDataFilterInput>;
        readonly _rawSource: Maybe<JSONQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SanityFileAssetGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityFileAssetEdge>;
        readonly nodes: ReadonlyArray<SanityFileAsset>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SanityFileAssetSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SanityFileAssetFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SanityGeopoint = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly lat: Maybe<Scalars['Float']>;
        readonly lng: Maybe<Scalars['Float']>;
        readonly alt: Maybe<Scalars['Float']>;
    };

    type SanityGeopointFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly lat: Maybe<FloatQueryOperatorInput>;
        readonly lng: Maybe<FloatQueryOperatorInput>;
        readonly alt: Maybe<FloatQueryOperatorInput>;
    };

    type SanityImage = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly asset: Maybe<SanityImageAsset>;
        readonly hotspot: Maybe<SanityImageHotspot>;
        readonly crop: Maybe<SanityImageCrop>;
        readonly _rawAsset: Maybe<Scalars['JSON']>;
        readonly _rawHotspot: Maybe<Scalars['JSON']>;
        readonly _rawCrop: Maybe<Scalars['JSON']>;
    };

    type SanityImage__rawAssetArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImage__rawHotspotArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImage__rawCropArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageAsset = SanityDocument &
        Node & {
            readonly _id: Maybe<Scalars['String']>;
            readonly _type: Maybe<Scalars['String']>;
            readonly _createdAt: Maybe<Scalars['Date']>;
            readonly _updatedAt: Maybe<Scalars['Date']>;
            readonly _rev: Maybe<Scalars['String']>;
            readonly _key: Maybe<Scalars['String']>;
            readonly originalFilename: Maybe<Scalars['String']>;
            readonly label: Maybe<Scalars['String']>;
            readonly title: Maybe<Scalars['String']>;
            readonly description: Maybe<Scalars['String']>;
            readonly sha1hash: Maybe<Scalars['String']>;
            readonly extension: Maybe<Scalars['String']>;
            readonly mimeType: Maybe<Scalars['String']>;
            readonly size: Maybe<Scalars['Float']>;
            readonly assetId: Maybe<Scalars['String']>;
            readonly path: Maybe<Scalars['String']>;
            readonly url: Maybe<Scalars['String']>;
            readonly metadata: Maybe<SanityImageMetadata>;
            readonly source: Maybe<SanityAssetSourceData>;
            readonly _rawMetadata: Maybe<Scalars['JSON']>;
            readonly _rawSource: Maybe<Scalars['JSON']>;
            readonly fixed: Maybe<SanityImageFixed>;
            readonly fluid: Maybe<SanityImageFluid>;
            readonly id: Scalars['ID'];
            readonly parent: Maybe<Node>;
            readonly children: ReadonlyArray<Node>;
            readonly internal: Internal;
        };

    type SanityImageAsset__createdAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityImageAsset__updatedAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityImageAsset__rawMetadataArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageAsset__rawSourceArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageAsset_fixedArgs = {
        width?: Maybe<Scalars['Int']>;
        height: Maybe<Scalars['Int']>;
        toFormat?: Maybe<SanityImageFormat>;
    };

    type SanityImageAsset_fluidArgs = {
        maxWidth?: Maybe<Scalars['Int']>;
        maxHeight: Maybe<Scalars['Int']>;
        sizes: Maybe<Scalars['String']>;
        toFormat?: Maybe<SanityImageFormat>;
    };

    type SanityImageAssetConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityImageAssetEdge>;
        readonly nodes: ReadonlyArray<SanityImageAsset>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SanityImageAssetGroupConnection>;
    };

    type SanityImageAssetConnection_distinctArgs = {
        field: SanityImageAssetFieldsEnum;
    };

    type SanityImageAssetConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SanityImageAssetFieldsEnum;
    };

    type SanityImageAssetEdge = {
        readonly next: Maybe<SanityImageAsset>;
        readonly node: SanityImageAsset;
        readonly previous: Maybe<SanityImageAsset>;
    };

    type SanityImageAssetFieldsEnum =
        | '_id'
        | '_type'
        | '_createdAt'
        | '_updatedAt'
        | '_rev'
        | '_key'
        | 'originalFilename'
        | 'label'
        | 'title'
        | 'description'
        | 'sha1hash'
        | 'extension'
        | 'mimeType'
        | 'size'
        | 'assetId'
        | 'path'
        | 'url'
        | 'metadata._key'
        | 'metadata._type'
        | 'metadata.location._key'
        | 'metadata.location._type'
        | 'metadata.location.lat'
        | 'metadata.location.lng'
        | 'metadata.location.alt'
        | 'metadata.dimensions._key'
        | 'metadata.dimensions._type'
        | 'metadata.dimensions.height'
        | 'metadata.dimensions.width'
        | 'metadata.dimensions.aspectRatio'
        | 'metadata.palette._key'
        | 'metadata.palette._type'
        | 'metadata.palette.darkMuted._key'
        | 'metadata.palette.darkMuted._type'
        | 'metadata.palette.darkMuted.background'
        | 'metadata.palette.darkMuted.foreground'
        | 'metadata.palette.darkMuted.population'
        | 'metadata.palette.darkMuted.title'
        | 'metadata.palette.lightVibrant._key'
        | 'metadata.palette.lightVibrant._type'
        | 'metadata.palette.lightVibrant.background'
        | 'metadata.palette.lightVibrant.foreground'
        | 'metadata.palette.lightVibrant.population'
        | 'metadata.palette.lightVibrant.title'
        | 'metadata.palette.darkVibrant._key'
        | 'metadata.palette.darkVibrant._type'
        | 'metadata.palette.darkVibrant.background'
        | 'metadata.palette.darkVibrant.foreground'
        | 'metadata.palette.darkVibrant.population'
        | 'metadata.palette.darkVibrant.title'
        | 'metadata.palette.vibrant._key'
        | 'metadata.palette.vibrant._type'
        | 'metadata.palette.vibrant.background'
        | 'metadata.palette.vibrant.foreground'
        | 'metadata.palette.vibrant.population'
        | 'metadata.palette.vibrant.title'
        | 'metadata.palette.dominant._key'
        | 'metadata.palette.dominant._type'
        | 'metadata.palette.dominant.background'
        | 'metadata.palette.dominant.foreground'
        | 'metadata.palette.dominant.population'
        | 'metadata.palette.dominant.title'
        | 'metadata.palette.lightMuted._key'
        | 'metadata.palette.lightMuted._type'
        | 'metadata.palette.lightMuted.background'
        | 'metadata.palette.lightMuted.foreground'
        | 'metadata.palette.lightMuted.population'
        | 'metadata.palette.lightMuted.title'
        | 'metadata.palette.muted._key'
        | 'metadata.palette.muted._type'
        | 'metadata.palette.muted.background'
        | 'metadata.palette.muted.foreground'
        | 'metadata.palette.muted.population'
        | 'metadata.palette.muted.title'
        | 'metadata.palette._rawDarkMuted'
        | 'metadata.palette._rawLightVibrant'
        | 'metadata.palette._rawDarkVibrant'
        | 'metadata.palette._rawVibrant'
        | 'metadata.palette._rawDominant'
        | 'metadata.palette._rawLightMuted'
        | 'metadata.palette._rawMuted'
        | 'metadata.lqip'
        | 'metadata.hasAlpha'
        | 'metadata.isOpaque'
        | 'metadata._rawLocation'
        | 'metadata._rawDimensions'
        | 'metadata._rawPalette'
        | 'source._key'
        | 'source._type'
        | 'source.name'
        | 'source.id'
        | 'source.url'
        | '_rawMetadata'
        | '_rawSource'
        | 'fixed.width'
        | 'fixed.height'
        | 'fixed.src'
        | 'fixed.srcSet'
        | 'fixed.base64'
        | 'fixed.srcWebp'
        | 'fixed.srcSetWebp'
        | 'fluid.aspectRatio'
        | 'fluid.src'
        | 'fluid.srcSet'
        | 'fluid.sizes'
        | 'fluid.base64'
        | 'fluid.srcWebp'
        | 'fluid.srcSetWebp'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SanityImageAssetFilterInput = {
        readonly _id: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly _createdAt: Maybe<DateQueryOperatorInput>;
        readonly _updatedAt: Maybe<DateQueryOperatorInput>;
        readonly _rev: Maybe<StringQueryOperatorInput>;
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly originalFilename: Maybe<StringQueryOperatorInput>;
        readonly label: Maybe<StringQueryOperatorInput>;
        readonly title: Maybe<StringQueryOperatorInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly sha1hash: Maybe<StringQueryOperatorInput>;
        readonly extension: Maybe<StringQueryOperatorInput>;
        readonly mimeType: Maybe<StringQueryOperatorInput>;
        readonly size: Maybe<FloatQueryOperatorInput>;
        readonly assetId: Maybe<StringQueryOperatorInput>;
        readonly path: Maybe<StringQueryOperatorInput>;
        readonly url: Maybe<StringQueryOperatorInput>;
        readonly metadata: Maybe<SanityImageMetadataFilterInput>;
        readonly source: Maybe<SanityAssetSourceDataFilterInput>;
        readonly _rawMetadata: Maybe<JSONQueryOperatorInput>;
        readonly _rawSource: Maybe<JSONQueryOperatorInput>;
        readonly fixed: Maybe<SanityImageFixedFilterInput>;
        readonly fluid: Maybe<SanityImageFluidFilterInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SanityImageAssetGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityImageAssetEdge>;
        readonly nodes: ReadonlyArray<SanityImageAsset>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SanityImageAssetSortInput = {
        readonly fields: Maybe<
            ReadonlyArray<Maybe<SanityImageAssetFieldsEnum>>
        >;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SanityImageCrop = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly top: Maybe<Scalars['Float']>;
        readonly bottom: Maybe<Scalars['Float']>;
        readonly left: Maybe<Scalars['Float']>;
        readonly right: Maybe<Scalars['Float']>;
    };

    type SanityImageCropFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly top: Maybe<FloatQueryOperatorInput>;
        readonly bottom: Maybe<FloatQueryOperatorInput>;
        readonly left: Maybe<FloatQueryOperatorInput>;
        readonly right: Maybe<FloatQueryOperatorInput>;
    };

    type SanityImageDimensions = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly height: Maybe<Scalars['Float']>;
        readonly width: Maybe<Scalars['Float']>;
        readonly aspectRatio: Maybe<Scalars['Float']>;
    };

    type SanityImageDimensionsFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly height: Maybe<FloatQueryOperatorInput>;
        readonly width: Maybe<FloatQueryOperatorInput>;
        readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    };

    type SanityImageFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly asset: Maybe<SanityImageAssetFilterInput>;
        readonly hotspot: Maybe<SanityImageHotspotFilterInput>;
        readonly crop: Maybe<SanityImageCropFilterInput>;
        readonly _rawAsset: Maybe<JSONQueryOperatorInput>;
        readonly _rawHotspot: Maybe<JSONQueryOperatorInput>;
        readonly _rawCrop: Maybe<JSONQueryOperatorInput>;
    };

    type SanityImageFixed = {
        readonly width: Scalars['Float'];
        readonly height: Scalars['Float'];
        readonly src: Scalars['String'];
        readonly srcSet: Scalars['String'];
        readonly base64: Maybe<Scalars['String']>;
        readonly srcWebp: Maybe<Scalars['String']>;
        readonly srcSetWebp: Maybe<Scalars['String']>;
    };

    type SanityImageFixedFilterInput = {
        readonly width: Maybe<FloatQueryOperatorInput>;
        readonly height: Maybe<FloatQueryOperatorInput>;
        readonly src: Maybe<StringQueryOperatorInput>;
        readonly srcSet: Maybe<StringQueryOperatorInput>;
        readonly base64: Maybe<StringQueryOperatorInput>;
        readonly srcWebp: Maybe<StringQueryOperatorInput>;
        readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    };

    type SanityImageFluid = {
        readonly aspectRatio: Scalars['Float'];
        readonly src: Scalars['String'];
        readonly srcSet: Scalars['String'];
        readonly sizes: Scalars['String'];
        readonly base64: Maybe<Scalars['String']>;
        readonly srcWebp: Maybe<Scalars['String']>;
        readonly srcSetWebp: Maybe<Scalars['String']>;
    };

    type SanityImageFluidFilterInput = {
        readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
        readonly src: Maybe<StringQueryOperatorInput>;
        readonly srcSet: Maybe<StringQueryOperatorInput>;
        readonly sizes: Maybe<StringQueryOperatorInput>;
        readonly base64: Maybe<StringQueryOperatorInput>;
        readonly srcWebp: Maybe<StringQueryOperatorInput>;
        readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    };

    type SanityImageFormat = 'NO_CHANGE' | 'jpg' | 'png' | 'webp';

    type SanityImageHotspot = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly x: Maybe<Scalars['Float']>;
        readonly y: Maybe<Scalars['Float']>;
        readonly height: Maybe<Scalars['Float']>;
        readonly width: Maybe<Scalars['Float']>;
    };

    type SanityImageHotspotFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly x: Maybe<FloatQueryOperatorInput>;
        readonly y: Maybe<FloatQueryOperatorInput>;
        readonly height: Maybe<FloatQueryOperatorInput>;
        readonly width: Maybe<FloatQueryOperatorInput>;
    };

    type SanityImageMetadata = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly location: Maybe<SanityGeopoint>;
        readonly dimensions: Maybe<SanityImageDimensions>;
        readonly palette: Maybe<SanityImagePalette>;
        readonly lqip: Maybe<Scalars['String']>;
        readonly hasAlpha: Maybe<Scalars['Boolean']>;
        readonly isOpaque: Maybe<Scalars['Boolean']>;
        readonly _rawLocation: Maybe<Scalars['JSON']>;
        readonly _rawDimensions: Maybe<Scalars['JSON']>;
        readonly _rawPalette: Maybe<Scalars['JSON']>;
    };

    type SanityImageMetadata__rawLocationArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageMetadata__rawDimensionsArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageMetadata__rawPaletteArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImageMetadataFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly location: Maybe<SanityGeopointFilterInput>;
        readonly dimensions: Maybe<SanityImageDimensionsFilterInput>;
        readonly palette: Maybe<SanityImagePaletteFilterInput>;
        readonly lqip: Maybe<StringQueryOperatorInput>;
        readonly hasAlpha: Maybe<BooleanQueryOperatorInput>;
        readonly isOpaque: Maybe<BooleanQueryOperatorInput>;
        readonly _rawLocation: Maybe<JSONQueryOperatorInput>;
        readonly _rawDimensions: Maybe<JSONQueryOperatorInput>;
        readonly _rawPalette: Maybe<JSONQueryOperatorInput>;
    };

    type SanityImagePalette = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly darkMuted: Maybe<SanityImagePaletteSwatch>;
        readonly lightVibrant: Maybe<SanityImagePaletteSwatch>;
        readonly darkVibrant: Maybe<SanityImagePaletteSwatch>;
        readonly vibrant: Maybe<SanityImagePaletteSwatch>;
        readonly dominant: Maybe<SanityImagePaletteSwatch>;
        readonly lightMuted: Maybe<SanityImagePaletteSwatch>;
        readonly muted: Maybe<SanityImagePaletteSwatch>;
        readonly _rawDarkMuted: Maybe<Scalars['JSON']>;
        readonly _rawLightVibrant: Maybe<Scalars['JSON']>;
        readonly _rawDarkVibrant: Maybe<Scalars['JSON']>;
        readonly _rawVibrant: Maybe<Scalars['JSON']>;
        readonly _rawDominant: Maybe<Scalars['JSON']>;
        readonly _rawLightMuted: Maybe<Scalars['JSON']>;
        readonly _rawMuted: Maybe<Scalars['JSON']>;
    };

    type SanityImagePalette__rawDarkMutedArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawLightVibrantArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawDarkVibrantArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawVibrantArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawDominantArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawLightMutedArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePalette__rawMutedArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityImagePaletteFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly darkMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly lightVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly darkVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly vibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly dominant: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly lightMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly muted: Maybe<SanityImagePaletteSwatchFilterInput>;
        readonly _rawDarkMuted: Maybe<JSONQueryOperatorInput>;
        readonly _rawLightVibrant: Maybe<JSONQueryOperatorInput>;
        readonly _rawDarkVibrant: Maybe<JSONQueryOperatorInput>;
        readonly _rawVibrant: Maybe<JSONQueryOperatorInput>;
        readonly _rawDominant: Maybe<JSONQueryOperatorInput>;
        readonly _rawLightMuted: Maybe<JSONQueryOperatorInput>;
        readonly _rawMuted: Maybe<JSONQueryOperatorInput>;
    };

    type SanityImagePaletteSwatch = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly background: Maybe<Scalars['String']>;
        readonly foreground: Maybe<Scalars['String']>;
        readonly population: Maybe<Scalars['Float']>;
        readonly title: Maybe<Scalars['String']>;
    };

    type SanityImagePaletteSwatchFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly background: Maybe<StringQueryOperatorInput>;
        readonly foreground: Maybe<StringQueryOperatorInput>;
        readonly population: Maybe<FloatQueryOperatorInput>;
        readonly title: Maybe<StringQueryOperatorInput>;
    };

    type SanityPerson = SanityDocument &
        Node & {
            readonly _id: Maybe<Scalars['String']>;
            readonly _type: Maybe<Scalars['String']>;
            readonly _createdAt: Maybe<Scalars['Date']>;
            readonly _updatedAt: Maybe<Scalars['Date']>;
            readonly _rev: Maybe<Scalars['String']>;
            readonly _key: Maybe<Scalars['String']>;
            readonly name: Maybe<Scalars['String']>;
            readonly slug: Maybe<SanitySlug>;
            readonly description: Maybe<Scalars['String']>;
            readonly image: Maybe<SanityImage>;
            readonly _rawSlug: Maybe<Scalars['JSON']>;
            readonly _rawImage: Maybe<Scalars['JSON']>;
            readonly id: Scalars['ID'];
            readonly parent: Maybe<Node>;
            readonly children: ReadonlyArray<Node>;
            readonly internal: Internal;
        };

    type SanityPerson__createdAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityPerson__updatedAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityPerson__rawSlugArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityPerson__rawImageArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityPersonConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityPersonEdge>;
        readonly nodes: ReadonlyArray<SanityPerson>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SanityPersonGroupConnection>;
    };

    type SanityPersonConnection_distinctArgs = {
        field: SanityPersonFieldsEnum;
    };

    type SanityPersonConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SanityPersonFieldsEnum;
    };

    type SanityPersonEdge = {
        readonly next: Maybe<SanityPerson>;
        readonly node: SanityPerson;
        readonly previous: Maybe<SanityPerson>;
    };

    type SanityPersonFieldsEnum =
        | '_id'
        | '_type'
        | '_createdAt'
        | '_updatedAt'
        | '_rev'
        | '_key'
        | 'name'
        | 'slug._key'
        | 'slug._type'
        | 'slug.current'
        | 'description'
        | 'image._key'
        | 'image._type'
        | 'image.asset._id'
        | 'image.asset._type'
        | 'image.asset._createdAt'
        | 'image.asset._updatedAt'
        | 'image.asset._rev'
        | 'image.asset._key'
        | 'image.asset.originalFilename'
        | 'image.asset.label'
        | 'image.asset.title'
        | 'image.asset.description'
        | 'image.asset.sha1hash'
        | 'image.asset.extension'
        | 'image.asset.mimeType'
        | 'image.asset.size'
        | 'image.asset.assetId'
        | 'image.asset.path'
        | 'image.asset.url'
        | 'image.asset.metadata._key'
        | 'image.asset.metadata._type'
        | 'image.asset.metadata.lqip'
        | 'image.asset.metadata.hasAlpha'
        | 'image.asset.metadata.isOpaque'
        | 'image.asset.metadata._rawLocation'
        | 'image.asset.metadata._rawDimensions'
        | 'image.asset.metadata._rawPalette'
        | 'image.asset.source._key'
        | 'image.asset.source._type'
        | 'image.asset.source.name'
        | 'image.asset.source.id'
        | 'image.asset.source.url'
        | 'image.asset._rawMetadata'
        | 'image.asset._rawSource'
        | 'image.asset.fixed.width'
        | 'image.asset.fixed.height'
        | 'image.asset.fixed.src'
        | 'image.asset.fixed.srcSet'
        | 'image.asset.fixed.base64'
        | 'image.asset.fixed.srcWebp'
        | 'image.asset.fixed.srcSetWebp'
        | 'image.asset.fluid.aspectRatio'
        | 'image.asset.fluid.src'
        | 'image.asset.fluid.srcSet'
        | 'image.asset.fluid.sizes'
        | 'image.asset.fluid.base64'
        | 'image.asset.fluid.srcWebp'
        | 'image.asset.fluid.srcSetWebp'
        | 'image.asset.id'
        | 'image.asset.parent.id'
        | 'image.asset.parent.children'
        | 'image.asset.children'
        | 'image.asset.children.id'
        | 'image.asset.children.children'
        | 'image.asset.internal.content'
        | 'image.asset.internal.contentDigest'
        | 'image.asset.internal.description'
        | 'image.asset.internal.fieldOwners'
        | 'image.asset.internal.ignoreType'
        | 'image.asset.internal.mediaType'
        | 'image.asset.internal.owner'
        | 'image.asset.internal.type'
        | 'image.hotspot._key'
        | 'image.hotspot._type'
        | 'image.hotspot.x'
        | 'image.hotspot.y'
        | 'image.hotspot.height'
        | 'image.hotspot.width'
        | 'image.crop._key'
        | 'image.crop._type'
        | 'image.crop.top'
        | 'image.crop.bottom'
        | 'image.crop.left'
        | 'image.crop.right'
        | 'image._rawAsset'
        | 'image._rawHotspot'
        | 'image._rawCrop'
        | '_rawSlug'
        | '_rawImage'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SanityPersonFilterInput = {
        readonly _id: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly _createdAt: Maybe<DateQueryOperatorInput>;
        readonly _updatedAt: Maybe<DateQueryOperatorInput>;
        readonly _rev: Maybe<StringQueryOperatorInput>;
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly slug: Maybe<SanitySlugFilterInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly image: Maybe<SanityImageFilterInput>;
        readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
        readonly _rawImage: Maybe<JSONQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SanityPersonGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityPersonEdge>;
        readonly nodes: ReadonlyArray<SanityPerson>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SanityPersonSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SanityPersonFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SanityPizza = SanityDocument &
        Node & {
            readonly _id: Maybe<Scalars['String']>;
            readonly _type: Maybe<Scalars['String']>;
            readonly _createdAt: Maybe<Scalars['Date']>;
            readonly _updatedAt: Maybe<Scalars['Date']>;
            readonly _rev: Maybe<Scalars['String']>;
            readonly _key: Maybe<Scalars['String']>;
            readonly name: Maybe<Scalars['String']>;
            readonly slug: Maybe<SanitySlug>;
            readonly image: Maybe<SanityImage>;
            readonly price: Maybe<Scalars['Float']>;
            readonly toppings: Maybe<ReadonlyArray<Maybe<SanityTopping>>>;
            readonly _rawSlug: Maybe<Scalars['JSON']>;
            readonly _rawImage: Maybe<Scalars['JSON']>;
            readonly _rawToppings: Maybe<Scalars['JSON']>;
            readonly id: Scalars['ID'];
            readonly parent: Maybe<Node>;
            readonly children: ReadonlyArray<Node>;
            readonly internal: Internal;
        };

    type SanityPizza__createdAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityPizza__updatedAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityPizza__rawSlugArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityPizza__rawImageArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityPizza__rawToppingsArgs = {
        resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
    };

    type SanityPizzaConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityPizzaEdge>;
        readonly nodes: ReadonlyArray<SanityPizza>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SanityPizzaGroupConnection>;
    };

    type SanityPizzaConnection_distinctArgs = {
        field: SanityPizzaFieldsEnum;
    };

    type SanityPizzaConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SanityPizzaFieldsEnum;
    };

    type SanityPizzaEdge = {
        readonly next: Maybe<SanityPizza>;
        readonly node: SanityPizza;
        readonly previous: Maybe<SanityPizza>;
    };

    type SanityPizzaFieldsEnum =
        | '_id'
        | '_type'
        | '_createdAt'
        | '_updatedAt'
        | '_rev'
        | '_key'
        | 'name'
        | 'slug._key'
        | 'slug._type'
        | 'slug.current'
        | 'image._key'
        | 'image._type'
        | 'image.asset._id'
        | 'image.asset._type'
        | 'image.asset._createdAt'
        | 'image.asset._updatedAt'
        | 'image.asset._rev'
        | 'image.asset._key'
        | 'image.asset.originalFilename'
        | 'image.asset.label'
        | 'image.asset.title'
        | 'image.asset.description'
        | 'image.asset.sha1hash'
        | 'image.asset.extension'
        | 'image.asset.mimeType'
        | 'image.asset.size'
        | 'image.asset.assetId'
        | 'image.asset.path'
        | 'image.asset.url'
        | 'image.asset.metadata._key'
        | 'image.asset.metadata._type'
        | 'image.asset.metadata.lqip'
        | 'image.asset.metadata.hasAlpha'
        | 'image.asset.metadata.isOpaque'
        | 'image.asset.metadata._rawLocation'
        | 'image.asset.metadata._rawDimensions'
        | 'image.asset.metadata._rawPalette'
        | 'image.asset.source._key'
        | 'image.asset.source._type'
        | 'image.asset.source.name'
        | 'image.asset.source.id'
        | 'image.asset.source.url'
        | 'image.asset._rawMetadata'
        | 'image.asset._rawSource'
        | 'image.asset.fixed.width'
        | 'image.asset.fixed.height'
        | 'image.asset.fixed.src'
        | 'image.asset.fixed.srcSet'
        | 'image.asset.fixed.base64'
        | 'image.asset.fixed.srcWebp'
        | 'image.asset.fixed.srcSetWebp'
        | 'image.asset.fluid.aspectRatio'
        | 'image.asset.fluid.src'
        | 'image.asset.fluid.srcSet'
        | 'image.asset.fluid.sizes'
        | 'image.asset.fluid.base64'
        | 'image.asset.fluid.srcWebp'
        | 'image.asset.fluid.srcSetWebp'
        | 'image.asset.id'
        | 'image.asset.parent.id'
        | 'image.asset.parent.children'
        | 'image.asset.children'
        | 'image.asset.children.id'
        | 'image.asset.children.children'
        | 'image.asset.internal.content'
        | 'image.asset.internal.contentDigest'
        | 'image.asset.internal.description'
        | 'image.asset.internal.fieldOwners'
        | 'image.asset.internal.ignoreType'
        | 'image.asset.internal.mediaType'
        | 'image.asset.internal.owner'
        | 'image.asset.internal.type'
        | 'image.hotspot._key'
        | 'image.hotspot._type'
        | 'image.hotspot.x'
        | 'image.hotspot.y'
        | 'image.hotspot.height'
        | 'image.hotspot.width'
        | 'image.crop._key'
        | 'image.crop._type'
        | 'image.crop.top'
        | 'image.crop.bottom'
        | 'image.crop.left'
        | 'image.crop.right'
        | 'image._rawAsset'
        | 'image._rawHotspot'
        | 'image._rawCrop'
        | 'price'
        | 'toppings'
        | 'toppings._id'
        | 'toppings._type'
        | 'toppings._createdAt'
        | 'toppings._updatedAt'
        | 'toppings._rev'
        | 'toppings._key'
        | 'toppings.name'
        | 'toppings.vegetarian'
        | 'toppings.id'
        | 'toppings.parent.id'
        | 'toppings.parent.parent.id'
        | 'toppings.parent.parent.children'
        | 'toppings.parent.children'
        | 'toppings.parent.children.id'
        | 'toppings.parent.children.children'
        | 'toppings.parent.internal.content'
        | 'toppings.parent.internal.contentDigest'
        | 'toppings.parent.internal.description'
        | 'toppings.parent.internal.fieldOwners'
        | 'toppings.parent.internal.ignoreType'
        | 'toppings.parent.internal.mediaType'
        | 'toppings.parent.internal.owner'
        | 'toppings.parent.internal.type'
        | 'toppings.children'
        | 'toppings.children.id'
        | 'toppings.children.parent.id'
        | 'toppings.children.parent.children'
        | 'toppings.children.children'
        | 'toppings.children.children.id'
        | 'toppings.children.children.children'
        | 'toppings.children.internal.content'
        | 'toppings.children.internal.contentDigest'
        | 'toppings.children.internal.description'
        | 'toppings.children.internal.fieldOwners'
        | 'toppings.children.internal.ignoreType'
        | 'toppings.children.internal.mediaType'
        | 'toppings.children.internal.owner'
        | 'toppings.children.internal.type'
        | 'toppings.internal.content'
        | 'toppings.internal.contentDigest'
        | 'toppings.internal.description'
        | 'toppings.internal.fieldOwners'
        | 'toppings.internal.ignoreType'
        | 'toppings.internal.mediaType'
        | 'toppings.internal.owner'
        | 'toppings.internal.type'
        | '_rawSlug'
        | '_rawImage'
        | '_rawToppings'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SanityPizzaFilterInput = {
        readonly _id: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly _createdAt: Maybe<DateQueryOperatorInput>;
        readonly _updatedAt: Maybe<DateQueryOperatorInput>;
        readonly _rev: Maybe<StringQueryOperatorInput>;
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly slug: Maybe<SanitySlugFilterInput>;
        readonly image: Maybe<SanityImageFilterInput>;
        readonly price: Maybe<FloatQueryOperatorInput>;
        readonly toppings: Maybe<SanityToppingFilterListInput>;
        readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
        readonly _rawImage: Maybe<JSONQueryOperatorInput>;
        readonly _rawToppings: Maybe<JSONQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SanityPizzaGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityPizzaEdge>;
        readonly nodes: ReadonlyArray<SanityPizza>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SanityPizzaSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SanityPizzaFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SanityResolveReferencesConfiguration = {
        /** Max depth to resolve references to */
        readonly maxDepth: Scalars['Int'];
    };

    type SanitySlug = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly current: Maybe<Scalars['String']>;
    };

    type SanitySlugFilterInput = {
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly current: Maybe<StringQueryOperatorInput>;
    };

    type SanitySpan = {
        readonly _key: Maybe<Scalars['String']>;
        readonly _type: Maybe<Scalars['String']>;
        readonly marks: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly text: Maybe<Scalars['String']>;
    };

    type SanityTopping = SanityDocument &
        Node & {
            readonly _id: Maybe<Scalars['String']>;
            readonly _type: Maybe<Scalars['String']>;
            readonly _createdAt: Maybe<Scalars['Date']>;
            readonly _updatedAt: Maybe<Scalars['Date']>;
            readonly _rev: Maybe<Scalars['String']>;
            readonly _key: Maybe<Scalars['String']>;
            readonly name: Maybe<Scalars['String']>;
            readonly vegetarian: Maybe<Scalars['Boolean']>;
            readonly id: Scalars['ID'];
            readonly parent: Maybe<Node>;
            readonly children: ReadonlyArray<Node>;
            readonly internal: Internal;
        };

    type SanityTopping__createdAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityTopping__updatedAtArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SanityToppingConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityToppingEdge>;
        readonly nodes: ReadonlyArray<SanityTopping>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SanityToppingGroupConnection>;
    };

    type SanityToppingConnection_distinctArgs = {
        field: SanityToppingFieldsEnum;
    };

    type SanityToppingConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SanityToppingFieldsEnum;
    };

    type SanityToppingEdge = {
        readonly next: Maybe<SanityTopping>;
        readonly node: SanityTopping;
        readonly previous: Maybe<SanityTopping>;
    };

    type SanityToppingFieldsEnum =
        | '_id'
        | '_type'
        | '_createdAt'
        | '_updatedAt'
        | '_rev'
        | '_key'
        | 'name'
        | 'vegetarian'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SanityToppingFilterInput = {
        readonly _id: Maybe<StringQueryOperatorInput>;
        readonly _type: Maybe<StringQueryOperatorInput>;
        readonly _createdAt: Maybe<DateQueryOperatorInput>;
        readonly _updatedAt: Maybe<DateQueryOperatorInput>;
        readonly _rev: Maybe<StringQueryOperatorInput>;
        readonly _key: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly vegetarian: Maybe<BooleanQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SanityToppingFilterListInput = {
        readonly elemMatch: Maybe<SanityToppingFilterInput>;
    };

    type SanityToppingGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SanityToppingEdge>;
        readonly nodes: ReadonlyArray<SanityTopping>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SanityToppingSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SanityToppingFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type Site = Node & {
        readonly buildTime: Maybe<Scalars['Date']>;
        readonly siteMetadata: Maybe<SiteSiteMetadata>;
        readonly port: Maybe<Scalars['Int']>;
        readonly host: Maybe<Scalars['String']>;
        readonly polyfill: Maybe<Scalars['Boolean']>;
        readonly pathPrefix: Maybe<Scalars['String']>;
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
    };

    type Site_buildTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SiteBuildMetadata = Node & {
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
        readonly buildTime: Maybe<Scalars['Date']>;
    };

    type SiteBuildMetadata_buildTimeArgs = {
        formatString: Maybe<Scalars['String']>;
        fromNow: Maybe<Scalars['Boolean']>;
        difference: Maybe<Scalars['String']>;
        locale: Maybe<Scalars['String']>;
    };

    type SiteBuildMetadataConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
        readonly nodes: ReadonlyArray<SiteBuildMetadata>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    };

    type SiteBuildMetadataConnection_distinctArgs = {
        field: SiteBuildMetadataFieldsEnum;
    };

    type SiteBuildMetadataConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SiteBuildMetadataFieldsEnum;
    };

    type SiteBuildMetadataEdge = {
        readonly next: Maybe<SiteBuildMetadata>;
        readonly node: SiteBuildMetadata;
        readonly previous: Maybe<SiteBuildMetadata>;
    };

    type SiteBuildMetadataFieldsEnum =
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type'
        | 'buildTime';

    type SiteBuildMetadataFilterInput = {
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
        readonly buildTime: Maybe<DateQueryOperatorInput>;
    };

    type SiteBuildMetadataGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
        readonly nodes: ReadonlyArray<SiteBuildMetadata>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SiteBuildMetadataSortInput = {
        readonly fields: Maybe<
            ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>
        >;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SiteConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SiteEdge>;
        readonly nodes: ReadonlyArray<Site>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SiteGroupConnection>;
    };

    type SiteConnection_distinctArgs = {
        field: SiteFieldsEnum;
    };

    type SiteConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SiteFieldsEnum;
    };

    type SiteEdge = {
        readonly next: Maybe<Site>;
        readonly node: Site;
        readonly previous: Maybe<Site>;
    };

    type SiteFieldsEnum =
        | 'buildTime'
        | 'siteMetadata.title'
        | 'siteMetadata.description'
        | 'siteMetadata.siteUrl'
        | 'port'
        | 'host'
        | 'polyfill'
        | 'pathPrefix'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type';

    type SiteFilterInput = {
        readonly buildTime: Maybe<DateQueryOperatorInput>;
        readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
        readonly port: Maybe<IntQueryOperatorInput>;
        readonly host: Maybe<StringQueryOperatorInput>;
        readonly polyfill: Maybe<BooleanQueryOperatorInput>;
        readonly pathPrefix: Maybe<StringQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
    };

    type SiteGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SiteEdge>;
        readonly nodes: ReadonlyArray<Site>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SitePage = Node & {
        readonly path: Scalars['String'];
        readonly component: Scalars['String'];
        readonly internalComponentName: Scalars['String'];
        readonly componentChunkName: Scalars['String'];
        readonly matchPath: Maybe<Scalars['String']>;
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
        readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
        readonly pluginCreator: Maybe<SitePlugin>;
        readonly pluginCreatorId: Maybe<Scalars['String']>;
        readonly componentPath: Maybe<Scalars['String']>;
    };

    type SitePageConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SitePageEdge>;
        readonly nodes: ReadonlyArray<SitePage>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SitePageGroupConnection>;
    };

    type SitePageConnection_distinctArgs = {
        field: SitePageFieldsEnum;
    };

    type SitePageConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SitePageFieldsEnum;
    };

    type SitePageEdge = {
        readonly next: Maybe<SitePage>;
        readonly node: SitePage;
        readonly previous: Maybe<SitePage>;
    };

    type SitePageFieldsEnum =
        | 'path'
        | 'component'
        | 'internalComponentName'
        | 'componentChunkName'
        | 'matchPath'
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type'
        | 'isCreatedByStatefulCreatePages'
        | 'pluginCreator.id'
        | 'pluginCreator.parent.id'
        | 'pluginCreator.parent.parent.id'
        | 'pluginCreator.parent.parent.children'
        | 'pluginCreator.parent.children'
        | 'pluginCreator.parent.children.id'
        | 'pluginCreator.parent.children.children'
        | 'pluginCreator.parent.internal.content'
        | 'pluginCreator.parent.internal.contentDigest'
        | 'pluginCreator.parent.internal.description'
        | 'pluginCreator.parent.internal.fieldOwners'
        | 'pluginCreator.parent.internal.ignoreType'
        | 'pluginCreator.parent.internal.mediaType'
        | 'pluginCreator.parent.internal.owner'
        | 'pluginCreator.parent.internal.type'
        | 'pluginCreator.children'
        | 'pluginCreator.children.id'
        | 'pluginCreator.children.parent.id'
        | 'pluginCreator.children.parent.children'
        | 'pluginCreator.children.children'
        | 'pluginCreator.children.children.id'
        | 'pluginCreator.children.children.children'
        | 'pluginCreator.children.internal.content'
        | 'pluginCreator.children.internal.contentDigest'
        | 'pluginCreator.children.internal.description'
        | 'pluginCreator.children.internal.fieldOwners'
        | 'pluginCreator.children.internal.ignoreType'
        | 'pluginCreator.children.internal.mediaType'
        | 'pluginCreator.children.internal.owner'
        | 'pluginCreator.children.internal.type'
        | 'pluginCreator.internal.content'
        | 'pluginCreator.internal.contentDigest'
        | 'pluginCreator.internal.description'
        | 'pluginCreator.internal.fieldOwners'
        | 'pluginCreator.internal.ignoreType'
        | 'pluginCreator.internal.mediaType'
        | 'pluginCreator.internal.owner'
        | 'pluginCreator.internal.type'
        | 'pluginCreator.resolve'
        | 'pluginCreator.name'
        | 'pluginCreator.version'
        | 'pluginCreator.pluginOptions.displayName'
        | 'pluginCreator.pluginOptions.fileName'
        | 'pluginCreator.pluginOptions.minify'
        | 'pluginCreator.pluginOptions.namespace'
        | 'pluginCreator.pluginOptions.transpileTemplateLiterals'
        | 'pluginCreator.pluginOptions.pure'
        | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
        | 'pluginCreator.pluginOptions.projectId'
        | 'pluginCreator.pluginOptions.dataset'
        | 'pluginCreator.pluginOptions.watchMode'
        | 'pluginCreator.pluginOptions._x'
        | 'pluginCreator.pluginOptions._xcomponents'
        | 'pluginCreator.pluginOptions.path'
        | 'pluginCreator.pluginOptions.pathCheck'
        | 'pluginCreator.pluginOptions.allExtensions'
        | 'pluginCreator.pluginOptions.isTSX'
        | 'pluginCreator.pluginOptions.jsxPragma'
        | 'pluginCreator.nodeAPIs'
        | 'pluginCreator.browserAPIs'
        | 'pluginCreator.ssrAPIs'
        | 'pluginCreator.pluginFilepath'
        | 'pluginCreator.packageJson.name'
        | 'pluginCreator.packageJson.description'
        | 'pluginCreator.packageJson.version'
        | 'pluginCreator.packageJson.main'
        | 'pluginCreator.packageJson.license'
        | 'pluginCreator.packageJson.dependencies'
        | 'pluginCreator.packageJson.dependencies.name'
        | 'pluginCreator.packageJson.dependencies.version'
        | 'pluginCreator.packageJson.devDependencies'
        | 'pluginCreator.packageJson.devDependencies.name'
        | 'pluginCreator.packageJson.devDependencies.version'
        | 'pluginCreator.packageJson.peerDependencies'
        | 'pluginCreator.packageJson.peerDependencies.name'
        | 'pluginCreator.packageJson.peerDependencies.version'
        | 'pluginCreator.packageJson.keywords'
        | 'pluginCreatorId'
        | 'componentPath';

    type SitePageFilterInput = {
        readonly path: Maybe<StringQueryOperatorInput>;
        readonly component: Maybe<StringQueryOperatorInput>;
        readonly internalComponentName: Maybe<StringQueryOperatorInput>;
        readonly componentChunkName: Maybe<StringQueryOperatorInput>;
        readonly matchPath: Maybe<StringQueryOperatorInput>;
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
        readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
        readonly pluginCreator: Maybe<SitePluginFilterInput>;
        readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
        readonly componentPath: Maybe<StringQueryOperatorInput>;
    };

    type SitePageGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SitePageEdge>;
        readonly nodes: ReadonlyArray<SitePage>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SitePageSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SitePlugin = Node & {
        readonly id: Scalars['ID'];
        readonly parent: Maybe<Node>;
        readonly children: ReadonlyArray<Node>;
        readonly internal: Internal;
        readonly resolve: Maybe<Scalars['String']>;
        readonly name: Maybe<Scalars['String']>;
        readonly version: Maybe<Scalars['String']>;
        readonly pluginOptions: Maybe<SitePluginPluginOptions>;
        readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly pluginFilepath: Maybe<Scalars['String']>;
        readonly packageJson: Maybe<SitePluginPackageJson>;
    };

    type SitePluginConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SitePluginEdge>;
        readonly nodes: ReadonlyArray<SitePlugin>;
        readonly pageInfo: PageInfo;
        readonly distinct: ReadonlyArray<Scalars['String']>;
        readonly group: ReadonlyArray<SitePluginGroupConnection>;
    };

    type SitePluginConnection_distinctArgs = {
        field: SitePluginFieldsEnum;
    };

    type SitePluginConnection_groupArgs = {
        skip: Maybe<Scalars['Int']>;
        limit: Maybe<Scalars['Int']>;
        field: SitePluginFieldsEnum;
    };

    type SitePluginEdge = {
        readonly next: Maybe<SitePlugin>;
        readonly node: SitePlugin;
        readonly previous: Maybe<SitePlugin>;
    };

    type SitePluginFieldsEnum =
        | 'id'
        | 'parent.id'
        | 'parent.parent.id'
        | 'parent.parent.parent.id'
        | 'parent.parent.parent.children'
        | 'parent.parent.children'
        | 'parent.parent.children.id'
        | 'parent.parent.children.children'
        | 'parent.parent.internal.content'
        | 'parent.parent.internal.contentDigest'
        | 'parent.parent.internal.description'
        | 'parent.parent.internal.fieldOwners'
        | 'parent.parent.internal.ignoreType'
        | 'parent.parent.internal.mediaType'
        | 'parent.parent.internal.owner'
        | 'parent.parent.internal.type'
        | 'parent.children'
        | 'parent.children.id'
        | 'parent.children.parent.id'
        | 'parent.children.parent.children'
        | 'parent.children.children'
        | 'parent.children.children.id'
        | 'parent.children.children.children'
        | 'parent.children.internal.content'
        | 'parent.children.internal.contentDigest'
        | 'parent.children.internal.description'
        | 'parent.children.internal.fieldOwners'
        | 'parent.children.internal.ignoreType'
        | 'parent.children.internal.mediaType'
        | 'parent.children.internal.owner'
        | 'parent.children.internal.type'
        | 'parent.internal.content'
        | 'parent.internal.contentDigest'
        | 'parent.internal.description'
        | 'parent.internal.fieldOwners'
        | 'parent.internal.ignoreType'
        | 'parent.internal.mediaType'
        | 'parent.internal.owner'
        | 'parent.internal.type'
        | 'children'
        | 'children.id'
        | 'children.parent.id'
        | 'children.parent.parent.id'
        | 'children.parent.parent.children'
        | 'children.parent.children'
        | 'children.parent.children.id'
        | 'children.parent.children.children'
        | 'children.parent.internal.content'
        | 'children.parent.internal.contentDigest'
        | 'children.parent.internal.description'
        | 'children.parent.internal.fieldOwners'
        | 'children.parent.internal.ignoreType'
        | 'children.parent.internal.mediaType'
        | 'children.parent.internal.owner'
        | 'children.parent.internal.type'
        | 'children.children'
        | 'children.children.id'
        | 'children.children.parent.id'
        | 'children.children.parent.children'
        | 'children.children.children'
        | 'children.children.children.id'
        | 'children.children.children.children'
        | 'children.children.internal.content'
        | 'children.children.internal.contentDigest'
        | 'children.children.internal.description'
        | 'children.children.internal.fieldOwners'
        | 'children.children.internal.ignoreType'
        | 'children.children.internal.mediaType'
        | 'children.children.internal.owner'
        | 'children.children.internal.type'
        | 'children.internal.content'
        | 'children.internal.contentDigest'
        | 'children.internal.description'
        | 'children.internal.fieldOwners'
        | 'children.internal.ignoreType'
        | 'children.internal.mediaType'
        | 'children.internal.owner'
        | 'children.internal.type'
        | 'internal.content'
        | 'internal.contentDigest'
        | 'internal.description'
        | 'internal.fieldOwners'
        | 'internal.ignoreType'
        | 'internal.mediaType'
        | 'internal.owner'
        | 'internal.type'
        | 'resolve'
        | 'name'
        | 'version'
        | 'pluginOptions.displayName'
        | 'pluginOptions.fileName'
        | 'pluginOptions.minify'
        | 'pluginOptions.namespace'
        | 'pluginOptions.transpileTemplateLiterals'
        | 'pluginOptions.pure'
        | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
        | 'pluginOptions.projectId'
        | 'pluginOptions.dataset'
        | 'pluginOptions.watchMode'
        | 'pluginOptions._x'
        | 'pluginOptions._xcomponents'
        | 'pluginOptions.path'
        | 'pluginOptions.pathCheck'
        | 'pluginOptions.allExtensions'
        | 'pluginOptions.isTSX'
        | 'pluginOptions.jsxPragma'
        | 'nodeAPIs'
        | 'browserAPIs'
        | 'ssrAPIs'
        | 'pluginFilepath'
        | 'packageJson.name'
        | 'packageJson.description'
        | 'packageJson.version'
        | 'packageJson.main'
        | 'packageJson.license'
        | 'packageJson.dependencies'
        | 'packageJson.dependencies.name'
        | 'packageJson.dependencies.version'
        | 'packageJson.devDependencies'
        | 'packageJson.devDependencies.name'
        | 'packageJson.devDependencies.version'
        | 'packageJson.peerDependencies'
        | 'packageJson.peerDependencies.name'
        | 'packageJson.peerDependencies.version'
        | 'packageJson.keywords';

    type SitePluginFilterInput = {
        readonly id: Maybe<StringQueryOperatorInput>;
        readonly parent: Maybe<NodeFilterInput>;
        readonly children: Maybe<NodeFilterListInput>;
        readonly internal: Maybe<InternalFilterInput>;
        readonly resolve: Maybe<StringQueryOperatorInput>;
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly version: Maybe<StringQueryOperatorInput>;
        readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
        readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
        readonly browserAPIs: Maybe<StringQueryOperatorInput>;
        readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
        readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
        readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
    };

    type SitePluginGroupConnection = {
        readonly totalCount: Scalars['Int'];
        readonly edges: ReadonlyArray<SitePluginEdge>;
        readonly nodes: ReadonlyArray<SitePlugin>;
        readonly pageInfo: PageInfo;
        readonly field: Scalars['String'];
        readonly fieldValue: Maybe<Scalars['String']>;
    };

    type SitePluginPackageJson = {
        readonly name: Maybe<Scalars['String']>;
        readonly description: Maybe<Scalars['String']>;
        readonly version: Maybe<Scalars['String']>;
        readonly main: Maybe<Scalars['String']>;
        readonly license: Maybe<Scalars['String']>;
        readonly dependencies: Maybe<
            ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
        >;
        readonly devDependencies: Maybe<
            ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
        >;
        readonly peerDependencies: Maybe<
            ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
        >;
        readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    };

    type SitePluginPackageJsonDependencies = {
        readonly name: Maybe<Scalars['String']>;
        readonly version: Maybe<Scalars['String']>;
    };

    type SitePluginPackageJsonDependenciesFilterInput = {
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly version: Maybe<StringQueryOperatorInput>;
    };

    type SitePluginPackageJsonDependenciesFilterListInput = {
        readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
    };

    type SitePluginPackageJsonDevDependencies = {
        readonly name: Maybe<Scalars['String']>;
        readonly version: Maybe<Scalars['String']>;
    };

    type SitePluginPackageJsonDevDependenciesFilterInput = {
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly version: Maybe<StringQueryOperatorInput>;
    };

    type SitePluginPackageJsonDevDependenciesFilterListInput = {
        readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
    };

    type SitePluginPackageJsonFilterInput = {
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly version: Maybe<StringQueryOperatorInput>;
        readonly main: Maybe<StringQueryOperatorInput>;
        readonly license: Maybe<StringQueryOperatorInput>;
        readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
        readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
        readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
        readonly keywords: Maybe<StringQueryOperatorInput>;
    };

    type SitePluginPackageJsonPeerDependencies = {
        readonly name: Maybe<Scalars['String']>;
        readonly version: Maybe<Scalars['String']>;
    };

    type SitePluginPackageJsonPeerDependenciesFilterInput = {
        readonly name: Maybe<StringQueryOperatorInput>;
        readonly version: Maybe<StringQueryOperatorInput>;
    };

    type SitePluginPackageJsonPeerDependenciesFilterListInput = {
        readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
    };

    type SitePluginPluginOptions = {
        readonly displayName: Maybe<Scalars['Boolean']>;
        readonly fileName: Maybe<Scalars['Boolean']>;
        readonly minify: Maybe<Scalars['Boolean']>;
        readonly namespace: Maybe<Scalars['String']>;
        readonly transpileTemplateLiterals: Maybe<Scalars['Boolean']>;
        readonly pure: Maybe<Scalars['Boolean']>;
        readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
        readonly projectId: Maybe<Scalars['String']>;
        readonly dataset: Maybe<Scalars['String']>;
        readonly watchMode: Maybe<Scalars['Boolean']>;
        readonly _x: Maybe<Scalars['String']>;
        readonly _xcomponents: Maybe<Scalars['String']>;
        readonly path: Maybe<Scalars['String']>;
        readonly pathCheck: Maybe<Scalars['Boolean']>;
        readonly allExtensions: Maybe<Scalars['Boolean']>;
        readonly isTSX: Maybe<Scalars['Boolean']>;
        readonly jsxPragma: Maybe<Scalars['String']>;
    };

    type SitePluginPluginOptionsEmitSchema = {
        readonly src___generated___gatsby_schema_graphql: Maybe<
            Scalars['Boolean']
        >;
    };

    type SitePluginPluginOptionsEmitSchemaFilterInput = {
        readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
    };

    type SitePluginPluginOptionsFilterInput = {
        readonly displayName: Maybe<BooleanQueryOperatorInput>;
        readonly fileName: Maybe<BooleanQueryOperatorInput>;
        readonly minify: Maybe<BooleanQueryOperatorInput>;
        readonly namespace: Maybe<StringQueryOperatorInput>;
        readonly transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
        readonly pure: Maybe<BooleanQueryOperatorInput>;
        readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
        readonly projectId: Maybe<StringQueryOperatorInput>;
        readonly dataset: Maybe<StringQueryOperatorInput>;
        readonly watchMode: Maybe<BooleanQueryOperatorInput>;
        readonly _x: Maybe<StringQueryOperatorInput>;
        readonly _xcomponents: Maybe<StringQueryOperatorInput>;
        readonly path: Maybe<StringQueryOperatorInput>;
        readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
        readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
        readonly isTSX: Maybe<BooleanQueryOperatorInput>;
        readonly jsxPragma: Maybe<StringQueryOperatorInput>;
    };

    type SitePluginSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SiteSiteMetadata = {
        readonly title: Maybe<Scalars['String']>;
        readonly description: Maybe<Scalars['String']>;
        readonly siteUrl: Maybe<Scalars['String']>;
    };

    type SiteSiteMetadataFilterInput = {
        readonly title: Maybe<StringQueryOperatorInput>;
        readonly description: Maybe<StringQueryOperatorInput>;
        readonly siteUrl: Maybe<StringQueryOperatorInput>;
    };

    type SiteSortInput = {
        readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
        readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
    };

    type SortOrderEnum = 'ASC' | 'DESC';

    type StringQueryOperatorInput = {
        readonly eq: Maybe<Scalars['String']>;
        readonly ne: Maybe<Scalars['String']>;
        readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
        readonly regex: Maybe<Scalars['String']>;
        readonly glob: Maybe<Scalars['String']>;
    };

    type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

    type PagesQueryQuery = {
        readonly allSitePage: {
            readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>>;
        };
    };

    type testFragmentFragment = Pick<SanityPizza, 'id' | 'name'> & {
        readonly slug: Maybe<Pick<SanitySlug, 'current'>>;
        readonly toppings: Maybe<
            ReadonlyArray<Maybe<Pick<SanityTopping, 'id' | 'name'>>>
        >;
        readonly image: Maybe<{
            readonly asset: Maybe<{
                readonly fixed: Maybe<GatsbySanityImageFixedFragment>;
                readonly fluid: Maybe<GatsbySanityImageFluidFragment>;
            }>;
        }>;
    };

    type GatsbySanityImageFixedFragment = Pick<
        SanityImageFixed,
        | 'base64'
        | 'width'
        | 'height'
        | 'src'
        | 'srcSet'
        | 'srcWebp'
        | 'srcSetWebp'
    >;

    type GatsbySanityImageFluidFragment = Pick<
        SanityImageFluid,
        | 'base64'
        | 'aspectRatio'
        | 'src'
        | 'srcSet'
        | 'srcWebp'
        | 'srcSetWebp'
        | 'sizes'
    >;

    type allSanityPizzaQueryVariables = Exact<{ [key: string]: never }>;

    type allSanityPizzaQuery = {
        readonly allSanityPizza: {
            readonly nodes: ReadonlyArray<testFragmentFragment>;
        };
    };

    type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

    type Unnamed_1_Query = {
        readonly toppings: {
            readonly nodes: ReadonlyArray<
                Pick<SanityTopping, 'id' | 'name' | 'vegetarian'>
            >;
        };
        readonly pizzas: {
            readonly nodes: ReadonlyArray<
                Pick<SanityPizza, 'id' | 'name'> & {
                    readonly toppings: Maybe<
                        ReadonlyArray<Maybe<Pick<SanityTopping, 'id' | 'name'>>>
                    >;
                }
            >;
        };
    };

    type GatsbySanityImageFixed_noBase64Fragment = Pick<
        SanityImageFixed,
        'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbySanityImageFixed_withWebpFragment = Pick<
        SanityImageFixed,
        | 'base64'
        | 'width'
        | 'height'
        | 'src'
        | 'srcSet'
        | 'srcWebp'
        | 'srcSetWebp'
    >;

    type GatsbySanityImageFixed_withWebp_noBase64Fragment = Pick<
        SanityImageFixed,
        'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbySanityImageFluid_noBase64Fragment = Pick<
        SanityImageFluid,
        'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbySanityImageFluid_withWebpFragment = Pick<
        SanityImageFluid,
        | 'base64'
        | 'aspectRatio'
        | 'src'
        | 'srcSet'
        | 'srcWebp'
        | 'srcSetWebp'
        | 'sizes'
    >;

    type GatsbySanityImageFluid_withWebp_noBase64Fragment = Pick<
        SanityImageFluid,
        'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;
}
