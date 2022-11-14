import gql from 'graphql-tag'
export const deleteManyInternalization = gql`
mutation (
    where: {
    $AND: [InternalizationWhereInput!]!,
    $NOT: [InternalizationWhereInput!]!,
    $OR: [InternalizationWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $default: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $region: StringNullableFilter!,
    $website: StringNullableFilter!,
    }
  ) {
deleteManyInternalization (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    default: $default,
    description: $description,
    id: $id,
    name: $name,
    region: $region,
    website: $website,
    }
  ) } {
    count
  }`
