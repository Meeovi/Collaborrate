import gql from 'graphql-tag'
export const updateManyAgreements = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created: NullableDateTimeFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $mediamanager: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $reference_id: NullableStringFieldUpdateOperationsInput!,
    $shop_id: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $updated: NullableDateTimeFieldUpdateOperationsInput!,
    $user_id: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [AgreementsWhereInput!]!,
    $NOT: [AgreementsWhereInput!]!,
    $OR: [AgreementsWhereInput!]!,
    $content: StringNullableFilter!,
    $created: DateTimeNullableFilter!,
    $excerpt: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $mediamanager: StringNullableFilter!,
    $name: StringNullableFilter!,
    $reference_id: StringNullableFilter!,
    $shop_id: StringNullableFilter!,
    $type: StringNullableFilter!,
    $updated: DateTimeNullableFilter!,
    $user_id: StringNullableFilter!,
    }
  ) {
updateManyAgreements (
    data: {
    content: $content,
    created: $created,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    mediamanager: $mediamanager,
    name: $name,
    reference_id: $reference_id,
    shop_id: $shop_id,
    type: $type,
    updated: $updated,
    user_id: $user_id,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created: $created,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    mediamanager: $mediamanager,
    name: $name,
    reference_id: $reference_id,
    shop_id: $shop_id,
    type: $type,
    updated: $updated,
    user_id: $user_id,
    }
  ) } {
    count
  }`
