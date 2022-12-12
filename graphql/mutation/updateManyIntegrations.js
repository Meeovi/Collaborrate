import gql from 'graphql-tag'
export const updateManyIntegrations = gql`
mutation (
    data: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [IntegrationsWhereInput!]!,
    $NOT: [IntegrationsWhereInput!]!,
    $OR: [IntegrationsWhereInput!]!,
    $category: StringNullableFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $location: StringNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    }
  ) {
updateManyIntegrations (
    data: {
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    category: $category,
    content: $content,
    created_at: $created_at,
    id: $id,
    location: $location,
    media: $media,
    name: $name,
    }
  ) } {
    count
  }`
