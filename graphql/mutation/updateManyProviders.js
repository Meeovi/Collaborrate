import gql from 'graphql-tag'
export const updateManyProviders = gql`
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
    $AND: [ProvidersWhereInput!]!,
    $NOT: [ProvidersWhereInput!]!,
    $OR: [ProvidersWhereInput!]!,
    $active: StringNullableFilter!,
    $client_id: StringNullableFilter!,
    $client_secret: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $host_uri: StringNullableFilter!,
    $icon: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $redirect_url: StringNullableFilter!,
    $redirect_url_app: StringNullableFilter!,
    }
  ) {
updateManyProviders (
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
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
