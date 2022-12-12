import gql from 'graphql-tag'
export const createManyStates = gql`
mutation (
    data: {
    $country: String!,
    $description: String!,
    $id: Int!,
    $image: String!,
    $name: String!!,
    $trainings: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyStates (
    data: {
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
