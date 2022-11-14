import gql from 'graphql-tag'
export const deleteOnePartners = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOnePartners (
    where: {
    id: $id,
    }
  ) } {
    address
    business_type
    city
    country
    created_at
    id
    isPublic
    name
    state
  }`
