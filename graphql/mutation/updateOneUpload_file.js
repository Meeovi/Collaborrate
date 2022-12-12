import gql from 'graphql-tag'
export const updateOneUpload_file = gql`
mutation (
    data: {
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
updateOneUpload_file (
    data: {
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
