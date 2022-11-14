import gql from 'graphql-tag'
export const deleteManyCategories = gql`
mutation (
    where: {
    $AND: [CategoriesWhereInput!]!,
    $NOT: [CategoriesWhereInput!]!,
    $OR: [CategoriesWhereInput!]!,
    $content: StringNullableFilter!,
    $country: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_keywords: StringNullableFilter!,
    $meta_title: StringNullableFilter!,
    $meta_url: StringNullableFilter!,
    $name: StringFilter!,
    $product: StringNullableFilter!,
    $status: BoolNullableFilter!,
    $thumbnail: StringNullableFilter!,
    $visibility: StringNullableFilter!,
    $websites: StringNullableFilter!,
    $workspaces: StringNullableFilter!,
    }
  ) {
deleteManyCategories (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    meta_url: $meta_url,
    name: $name,
    product: $product,
    status: $status,
    thumbnail: $thumbnail,
    visibility: $visibility,
    websites: $websites,
    workspaces: $workspaces,
    }
  ) } {
    count
  }`
