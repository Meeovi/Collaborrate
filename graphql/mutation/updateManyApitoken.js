import gql from 'graphql-tag'
export const updateManyApitoken = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $token: BigIntFieldUpdateOperationsInput!,
    $token_type: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [ApitokenWhereInput!]!,
    $NOT: [ApitokenWhereInput!]!,
    $OR: [ApitokenWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $token: BigIntFilter!,
    $token_type: StringNullableFilter!,
    }
  ) {
updateManyApitoken (
    data: {
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    description: $description,
    id: $id,
    name: $name,
    token: $token,
    token_type: $token_type,
    }
  ) } {
    count
  }`
