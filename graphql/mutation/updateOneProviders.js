import gql from 'graphql-tag'
export const updateOneProviders = gql`
mutation (
    data: {
    $active: NullableStringFieldUpdateOperationsInput!,
    $client_id: NullableStringFieldUpdateOperationsInput!,
    $client_secret: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $host_uri: NullableStringFieldUpdateOperationsInput!,
    $icon: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $redirect_url: NullableStringFieldUpdateOperationsInput!,
    $redirect_url_app: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    $name: String!,
    }
  ) {
updateOneProviders (
    data: {
    active: $active,
    client_id: $client_id,
    client_secret: $client_secret,
    created_at: $created_at,
    host_uri: $host_uri,
    icon: $icon,
    id: $id,
    name: $name,
    redirect_url: $redirect_url,
    redirect_url_app: $redirect_url_app,
    }
    where: {
    id: $id,
    name: $name,
    }
  ) } {
    active
    client_id
    client_secret
    created_at
    host_uri
    icon
    id
    name
    redirect_url
    redirect_url_app
  }`
