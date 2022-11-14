import gql from 'graphql-tag'
export const deleteManyIntegrations = gql`
mutation (
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
deleteManyIntegrations (
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
