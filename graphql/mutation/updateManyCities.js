import gql from 'graphql-tag'
export const updateManyCities = gql`
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
    $AND: [CitiesWhereInput!]!,
    $NOT: [CitiesWhereInput!]!,
    $OR: [CitiesWhereInput!]!,
    $country: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $postalCode: StringNullableFilter!,
    $state: StringNullableFilter!,
    }
  ) {
updateManyCities (
    data: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
    }
  ) } {
    count
  }`
