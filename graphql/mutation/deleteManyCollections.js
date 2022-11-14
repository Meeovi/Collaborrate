import gql from 'graphql-tag'
export const deleteManyCollections = gql`
mutation (
    where: {
    $AND: [CollectionsWhereInput!]!,
    $NOT: [CollectionsWhereInput!]!,
    $OR: [CollectionsWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_keywords: StringNullableFilter!,
    $meta_title: StringNullableFilter!,
    $name: StringNullableFilter!,
    $product: StringNullableFilter!,
    }
  ) {
deleteManyCollections (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    name: $name,
    product: $product,
    }
  ) } {
    count
  }`
