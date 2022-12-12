import gql from 'graphql-tag'
export const deleteManyEndofshift = gql`
mutation (
    where: {
    $AND: [EndofshiftWhereInput!]!,
    $NOT: [EndofshiftWhereInput!]!,
    $OR: [EndofshiftWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $login: StringNullableFilter!,
    $mcms: StringNullableFilter!,
    $next_shift: StringNullableFilter!,
    $projects: StringNullableFilter!,
    $tickets: StringNullableFilter!,
    $whid: StringNullableFilter!,
    }
  ) {
deleteManyEndofshift (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    id: $id,
    login: $login,
    mcms: $mcms,
    next_shift: $next_shift,
    projects: $projects,
    tickets: $tickets,
    whid: $whid,
    }
  ) } {
    count
  }`
