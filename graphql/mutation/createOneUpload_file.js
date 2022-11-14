import gql from 'graphql-tag'
export const createOneUpload_file = gql`
mutation (
    data: {
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
  ) {
createOneUpload_file (
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
