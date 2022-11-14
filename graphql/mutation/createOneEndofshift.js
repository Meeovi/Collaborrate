import gql from 'graphql-tag'
export const createOneEndofshift = gql`
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
  ) {
createOneEndofshift (
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
  ) } {
    content
    created_at
    id
    login
    mcms
    next_shift
    projects
    tickets
    whid
  }`
