import gql from 'graphql-tag'
export const deleteOneAgreements = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneAgreements (
    where: {
    id: $id,
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
