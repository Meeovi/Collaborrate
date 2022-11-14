import gql from 'graphql-tag'
export const updateManySegments = gql`
mutation (
    data: {
    $apply_to: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [SegmentsWhereInput!]!,
    $NOT: [SegmentsWhereInput!]!,
    $OR: [SegmentsWhereInput!]!,
    $apply_to: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $status: StringNullableFilter!,
    $website: StringNullableFilter!,
    }
  ) {
updateManySegments (
    data: {
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
  ) } {
    count
  }`
