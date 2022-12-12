import gql from 'graphql-tag'
export const createManyArticles = gql`
mutation (
    data: {
    $categories: String!,
    $content: String!,
    $cust_id: String!,
    $customers: String!,
    $excerpt: String!,
    $id: Int!,
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
    $skipDuplicates: Boolean!,
  ) {
createManyArticles (
    data: {
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
