import gql from 'graphql-tag'
export const upsertOneCities = gql`
mutation (
    create: {
    $country: String!,
    $description: String!,
    $image: String!,
    $name: String!!,
    $postalCode: String!,
    $state: String!,
    }
    update: {
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
upsertOneCities (
    create: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
    }
    update: {
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
