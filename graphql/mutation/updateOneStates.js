import gql from 'graphql-tag'
export const updateOneStates = gql`
mutation (
    data: {
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
updateOneStates (
    data: {
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
