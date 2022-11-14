import gql from 'graphql-tag'
export const upsertOneStates = gql`
mutation (
    create: {
    $country: String!,
    $description: String!,
    $image: String!,
    $name: String!!,
    $trainings: String!,
    }
    update: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneStates (
    create: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
    update: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
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
