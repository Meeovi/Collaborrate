import gql from 'graphql-tag'
export const deleteOneStates = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneStates (
    where: {
    id: $id,
    }
  ) } {
    country
    description
    id
    image
    name
    trainings
  }`
