import gql from 'graphql-tag'
export const upsertOneCountries = gql`
mutation (
    create: {
    $description: String!,
    $image: String!,
    $name: String!!,
    $region: String!,
    $trainings: String!,
    }
    update: {
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneCountries (
    create: {
    description: $description,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
    update: {
    description: $description,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
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
