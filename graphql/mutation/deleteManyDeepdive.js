import gql from 'graphql-tag'
export const deleteManyDeepdive = gql`
mutation (
    where: {
    $AND: [DeepdiveWhereInput!]!,
    $NOT: [DeepdiveWhereInput!]!,
    $OR: [DeepdiveWhereInput!]!,
    $attendees: StringNullableFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $end_date: StringNullableFilter!,
    $id: BigIntFilter!,
    $login: StringNullableFilter!,
    $start_date: StringNullableFilter!,
    $whid: StringNullableFilter!,
    }
  ) {
deleteManyDeepdive (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    attendees: $attendees,
    content: $content,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    login: $login,
    start_date: $start_date,
    whid: $whid,
    }
  ) } {
    count
  }`
