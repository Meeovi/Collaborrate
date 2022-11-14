import gql from 'graphql-tag'
export const createOneStates = gql`
mutation (
    data: {
    $country: String!,
    $description: String!,
    $image: String!,
    $name: String!!,
    $trainings: String!,
    }
  ) {
createOneStates (
    data: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
  ) } {
    country
    description
    id
    image
    name
    trainings
  }`
