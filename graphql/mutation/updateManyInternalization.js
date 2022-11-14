import gql from 'graphql-tag'
export const updateManyInternalization = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $default: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [InternalizationWhereInput!]!,
    $NOT: [InternalizationWhereInput!]!,
    $OR: [InternalizationWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $default: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $region: StringNullableFilter!,
    $website: StringNullableFilter!,
    }
  ) {
updateManyInternalization (
    data: {
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
  ) } {
    count
  }`
