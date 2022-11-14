import gql from 'graphql-tag'
export const deleteOneUpload_file = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneUpload_file (
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
