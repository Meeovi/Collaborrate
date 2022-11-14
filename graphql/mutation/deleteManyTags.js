import gql from 'graphql-tag'
export const deleteManyTags = gql`
mutation (
    where: {
    $AND: [TagsWhereInput!]!,
    $NOT: [TagsWhereInput!]!,
    $OR: [TagsWhereInput!]!,
    $articles: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $customers: StringNullableFilter!,
    $excerpt: StringNullableFilter!,
    $id: IntFilter!,
    $name: StringFilter!,
    $products: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
deleteManyTags (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    id: $id,
    name: $name,
    products: $products,
    users: $users,
    }
  ) } {
    count
  }`
