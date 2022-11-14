import gql from 'graphql-tag'
export const upsertOnePayments = gql`
mutation (
    create: {
    $active: String!,
    $client_id: String!,
    $client_secret: String!,
    $country: String!,
    $created_at: DateTime!,
    $host_uri: String!,
    $icon: String!,
    $id: BigInt!,
    $name: String!!,
    $redirect_url: String!,
    $redirect_url_app: String!,
    }
    update: {
    $active: NullableStringFieldUpdateOperationsInput!,
    $client_id: NullableStringFieldUpdateOperationsInput!,
    $client_secret: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
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
upsertOnePayments (
    create: {
    active: $active,
    client_id: $client_id,
    client_secret: $client_secret,
    country: $country,
    created_at: $created_at,
    host_uri: $host_uri,
    icon: $icon,
    id: $id,
    name: $name,
    redirect_url: $redirect_url,
    redirect_url_app: $redirect_url_app,
    }
    update: {
    active: $active,
    client_id: $client_id,
    client_secret: $client_secret,
    country: $country,
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
    country
    created_at
    host_uri
    icon
    id
    name
    redirect_url
    redirect_url_app
  }`
