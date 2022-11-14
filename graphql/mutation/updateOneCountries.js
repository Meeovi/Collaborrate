import gql from 'graphql-tag'
export const updateOneCountries = gql`
mutation (
    data: {
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
updateOneCountries (
    data: {
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
