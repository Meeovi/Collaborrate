import gql from 'graphql-tag'
export const createManyCountries = gql`
mutation (
    data: {
    $description: String!,
    $id: Int!,
    $image: String!,
    $name: String!!,
    $region: String!,
    $trainings: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyCountries (
    data: {
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
