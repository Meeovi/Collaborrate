import gql from 'graphql-tag'
export const deleteManyOoto = gql`
mutation (
    where: {
    $AND: [OotoWhereInput!]!,
    $NOT: [OotoWhereInput!]!,
    $OR: [OotoWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $end_date: StringNullableFilter!,
    $id: BigIntFilter!,
    $location: StringNullableFilter!,
    $login: StringNullableFilter!,
    $note: StringNullableFilter!,
    $start_date: StringNullableFilter!,
    $using_time: StringNullableFilter!,
    }
  ) {
deleteManyOoto (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    location: $location,
    login: $login,
    note: $note,
    start_date: $start_date,
    using_time: $using_time,
    }
  ) } {
    count
  }`
