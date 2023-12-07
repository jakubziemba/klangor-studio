import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  featured: EntryFieldTypes.Boolean;
  featuredImage: EntryFieldTypes.AssetLink;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  description?: EntryFieldTypes.RichText;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;
export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
