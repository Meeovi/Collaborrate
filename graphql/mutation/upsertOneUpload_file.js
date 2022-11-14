import gql from 'graphql-tag'
export const upsertOneUpload_file = gql`
mutation (
    create: {
    $alternativeText: String!,
    $caption: String!,
    $created_at: DateTime!,
    $created_by: Int!,
    $ext: String!,
    $formats: JSON!,
    $hash: String!!,
    $height: Int!,
    $mime: String!!,
    $name: String!!,
    $previewUrl: String!,
    $provider: String!!,
    $provider_metadata: JSON!,
    $size: Decimal!!,
    $updated_at: DateTime!,
    $updated_by: Int!,
    $url: String!!,
    $width: Int!,
    }
    update: {
    $alternativeText: NullableStringFieldUpdateOperationsInput!,
    $caption: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $created_by: NullableIntFieldUpdateOperationsInput!,
    $ext: NullableStringFieldUpdateOperationsInput!,
    $formats: JSON!,
    $hash: StringFieldUpdateOperationsInput!,
    $height: NullableIntFieldUpdateOperationsInput!,
    $mime: StringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $previewUrl: NullableStringFieldUpdateOperationsInput!,
    $provider: StringFieldUpdateOperationsInput!,
    $provider_metadata: JSON!,
    $size: DecimalFieldUpdateOperationsInput!,
    $updated_at: NullableDateTimeFieldUpdateOperationsInput!,
    $updated_by: NullableIntFieldUpdateOperationsInput!,
    $url: StringFieldUpdateOperationsInput!,
    $width: NullableIntFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneUpload_file (
    create: {
    alternativeText: $alternativeText,
    caption: $caption,
    created_at: $created_at,
    created_by: $created_by,
    ext: $ext,
    formats: $formats,
    hash: $hash,
    height: $height,
    mime: $mime,
    name: $name,
    previewUrl: $previewUrl,
    provider: $provider,
    provider_metadata: $provider_metadata,
    size: $size,
    updated_at: $updated_at,
    updated_by: $updated_by,
    url: $url,
    width: $width,
    }
    update: {
    alternativeText: $alternativeText,
    caption: $caption,
    created_at: $created_at,
    created_by: $created_by,
    ext: $ext,
    formats: $formats,
    hash: $hash,
    height: $height,
    mime: $mime,
    name: $name,
    previewUrl: $previewUrl,
    provider: $provider,
    provider_metadata: $provider_metadata,
    size: $size,
    updated_at: $updated_at,
    updated_by: $updated_by,
    url: $url,
    width: $width,
    }
    where: {
    id: $id,
    }
  ) } {
    alternativeText
    caption
    created_at
    created_by
    ext
    formats
    hash
    height
    id
    mime
    name
    previewUrl
    provider
    provider_metadata
    size
    updated_at
    updated_by
    url
    width
  }`
