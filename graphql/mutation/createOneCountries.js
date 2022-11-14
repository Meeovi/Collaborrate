import gql from 'graphql-tag'
export const createOneCountries = gql`
mutation (
    data: {
    $description: String!,
    $image: String!,
    $name: String!!,
    $region: String!,
    $trainings: String!,
    }
  ) {
createOneCountries (
    data: {
    description: $description,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
  ) } {
    description
    id
    image
    name
    region
    trainings
  }`
