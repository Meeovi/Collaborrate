import gql from 'graphql-tag'
export const upsertOneArticles = gql`
mutation (
    create: {
    $categories: String!,
    $content: String!,
    $cust_id: String!,
    $customers: String!,
    $excerpt: String!,
    $image: String!,
    $isPublic: String!,
    $meta_description: String!,
    $meta_name: String!,
    $meta_url: String!,
    $name: String!,
    $published: String!,
    $tags: String!,
    $type: String!,
    $users: String!,
    }
    update: {
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
    $id: Int!,
    }
  ) {
upsertOneArticles (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    categories
    content
    cust_id
    customers
    excerpt
    id
    image
    isPublic
    meta_description
    meta_name
    meta_url
    name
    published
    tags
    type
    users
  }`
