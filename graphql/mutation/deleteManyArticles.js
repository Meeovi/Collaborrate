import gql from 'graphql-tag'
export const deleteManyArticles = gql`
mutation (
    where: {
    $AND: [ArticlesWhereInput!]!,
    $NOT: [ArticlesWhereInput!]!,
    $OR: [ArticlesWhereInput!]!,
    $categories: StringNullableFilter!,
    $content: StringNullableFilter!,
    $cust_id: StringNullableFilter!,
    $customers: StringNullableFilter!,
    $excerpt: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $isPublic: StringNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_name: StringNullableFilter!,
    $meta_url: StringNullableFilter!,
    $name: StringNullableFilter!,
    $published: StringNullableFilter!,
    $tags: StringNullableFilter!,
    $type: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
deleteManyArticles (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    categories: $categories,
    content: $content,
    cust_id: $cust_id,
    customers: $customers,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    isPublic: $isPublic,
    meta_description: $meta_description,
    meta_name: $meta_name,
    meta_url: $meta_url,
    name: $name,
    published: $published,
    tags: $tags,
    type: $type,
    users: $users,
    }
  ) } {
    count
  }`
