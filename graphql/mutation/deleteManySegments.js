import gql from 'graphql-tag'
export const deleteManySegments = gql`
mutation (
    where: {
    $AND: [SegmentsWhereInput!]!,
    $NOT: [SegmentsWhereInput!]!,
    $OR: [SegmentsWhereInput!]!,
    $apply_to: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $status: StringNullableFilter!,
    $website: StringNullableFilter!,
    }
  ) {
deleteManySegments (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    apply_to: $apply_to,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    id: $id,
    name: $name,
    status: $status,
    website: $website,
    }
  ) } {
    count
  }`
