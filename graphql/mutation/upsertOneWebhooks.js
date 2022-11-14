import gql from 'graphql-tag'
export const upsertOneWebhooks = gql`
mutation (
    create: {
    $create: String!,
    $created_at: DateTime!,
    $delete: String!,
    $headers: String!,
    $id: BigInt!,
    $name: String!!,
    $publish: String!,
    $retrieve: String!,
    $unpublish: String!,
    $update: String!,
    $url: String!!,
    }
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOneWebhooks (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    create
    created_at
    delete
    headers
    id
    name
    publish
    retrieve
    unpublish
    update
    url
  }`
