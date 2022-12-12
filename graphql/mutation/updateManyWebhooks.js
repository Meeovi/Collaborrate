import gql from 'graphql-tag'
export const updateManyWebhooks = gql`
mutation (
    data: {
    $create: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $delete: NullableStringFieldUpdateOperationsInput!,
    $headers: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $publish: NullableStringFieldUpdateOperationsInput!,
    $retrieve: NullableStringFieldUpdateOperationsInput!,
    $unpublish: NullableStringFieldUpdateOperationsInput!,
    $update: NullableStringFieldUpdateOperationsInput!,
    $url: StringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [WebhooksWhereInput!]!,
    $NOT: [WebhooksWhereInput!]!,
    $OR: [WebhooksWhereInput!]!,
    $create: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $delete: StringNullableFilter!,
    $headers: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $publish: StringNullableFilter!,
    $retrieve: StringNullableFilter!,
    $unpublish: StringNullableFilter!,
    $update: StringNullableFilter!,
    $url: StringFilter!,
    }
  ) {
updateManyWebhooks (
    data: {
    create: $create,
    created_at: $created_at,
    delete: $delete,
    headers: $headers,
    id: $id,
    name: $name,
    publish: $publish,
    retrieve: $retrieve,
    unpublish: $unpublish,
    update: $update,
    url: $url,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    create: $create,
    created_at: $created_at,
    delete: $delete,
    headers: $headers,
    id: $id,
    name: $name,
    publish: $publish,
    retrieve: $retrieve,
    unpublish: $unpublish,
    update: $update,
    url: $url,
    }
  ) } {
    count
  }`
