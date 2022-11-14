import gql from 'graphql-tag'
export const deleteOneCountries = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneCountries (
    where: {
    id: $id,
    }
  ) } {
    description
    id
    image
    name
    region
    trainings
  }`
