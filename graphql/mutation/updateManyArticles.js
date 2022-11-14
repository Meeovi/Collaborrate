import gql from 'graphql-tag'
export const updateManyArticles = gql`
mutation (
    data: {
    $categories: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $cust_id: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_name: NullableStringFieldUpdateOperationsInput!,
    $meta_url: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $published: NullableStringFieldUpdateOperationsInput!,
    $tags: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyArticles (
    data: {
    categories: $categories,
    content: $content,
    cust_id: $cust_id,
    customers: $customers,
    excerpt: $excerpt,
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
