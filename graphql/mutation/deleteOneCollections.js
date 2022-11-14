import gql from 'graphql-tag'
export const deleteOneCollections = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneCollections (
    where: {
    id: $id,
    }
  ) } {
    created_at
    description
    id
    image
    meta_description
    meta_keywords
    meta_title
    name
    product
  }`
