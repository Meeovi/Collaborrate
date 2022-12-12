import gql from 'graphql-tag'
export const updateManyPartners = gql`
mutation (
    data: {
    $address: NullableStringFieldUpdateOperationsInput!,
    $business_type: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [PartnersWhereInput!]!,
    $NOT: [PartnersWhereInput!]!,
    $OR: [PartnersWhereInput!]!,
    $address: StringNullableFilter!,
    $business_type: StringNullableFilter!,
    $city: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $isPublic: StringNullableFilter!,
    $name: StringNullableFilter!,
    $state: StringNullableFilter!,
    }
  ) {
updateManyPartners (
    data: {
    address: $address,
    business_type: $business_type,
    city: $city,
    country: $country,
    created_at: $created_at,
    id: $id,
    isPublic: $isPublic,
    name: $name,
    state: $state,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    address: $address,
    business_type: $business_type,
    city: $city,
    country: $country,
    created_at: $created_at,
    id: $id,
    isPublic: $isPublic,
    name: $name,
    state: $state,
    }
  ) } {
    count
  }`
