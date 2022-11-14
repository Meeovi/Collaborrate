import gql from 'graphql-tag'
export const createManyEndofshift = gql`
mutation (
    data: {
    $content: String!,
    $created_at: DateTime!,
    $id: BigInt!,
    $login: String!,
    $mcms: String!,
    $next_shift: String!,
    $projects: String!,
    $tickets: String!,
    $whid: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyEndofshift (
    data: {
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
