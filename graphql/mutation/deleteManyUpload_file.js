import gql from 'graphql-tag'
export const deleteManyUpload_file = gql`
mutation (
    where: {
    $AND: [Upload_fileWhereInput!]!,
    $NOT: [Upload_fileWhereInput!]!,
    $OR: [Upload_fileWhereInput!]!,
    $alternativeText: StringNullableFilter!,
    $caption: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $created_by: IntNullableFilter!,
    $ext: StringNullableFilter!,
    $formats: JsonNullableFilter!,
    $hash: StringFilter!,
    $height: IntNullableFilter!,
    $id: IntFilter!,
    $mime: StringFilter!,
    $name: StringFilter!,
    $previewUrl: StringNullableFilter!,
    $provider: StringFilter!,
    $provider_metadata: JsonNullableFilter!,
    $size: DecimalFilter!,
    $updated_at: DateTimeNullableFilter!,
    $updated_by: IntNullableFilter!,
    $url: StringFilter!,
    $width: IntNullableFilter!,
    }
  ) {
deleteManyUpload_file (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    alternativeText: $alternativeText,
    caption: $caption,
    created_at: $created_at,
    created_by: $created_by,
    ext: $ext,
    formats: $formats,
    hash: $hash,
    height: $height,
    id: $id,
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
    count
  }`
