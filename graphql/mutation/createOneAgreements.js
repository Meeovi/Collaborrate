import gql from 'graphql-tag'
export const createOneAgreements = gql`
mutation (
    data: {
    $content: String!,
    $created: DateTime!,
    $excerpt: String!,
    $id: BigInt!,
    $image: String!,
    $mediamanager: String!,
    $name: String!,
    $reference_id: String!,
    $shop_id: String!,
    $type: String!,
    $updated: DateTime!,
    $user_id: String!,
    }
  ) {
createOneAgreements (
    data: {
    content: $content,
    created: $created,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    mediamanager: $mediamanager,
    name: $name,
    reference_id: $reference_id,
    shop_id: $shop_id,
    type: $type,
    updated: $updated,
    user_id: $user_id,
    }
  ) } {
    content
    created
    excerpt
    id
    image
    mediamanager
    name
    reference_id
    shop_id
    type
    updated
    user_id
  }`
