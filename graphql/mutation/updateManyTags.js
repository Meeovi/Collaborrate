import gql from 'graphql-tag'
export const updateManyTags = gql`
mutation (
    data: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyTags (
    data: {
    articles: $articles,
    categories: $categories,
    customers: $customers,
    excerpt: $excerpt,
    name: $name,
    products: $products,
    users: $users,
    }
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
