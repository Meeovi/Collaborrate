import gql from 'graphql-tag'
export const updateOneCities = gql`
mutation (
    data: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $postalCode: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneCities (
    data: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
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
    postalCode
    state
  }`
