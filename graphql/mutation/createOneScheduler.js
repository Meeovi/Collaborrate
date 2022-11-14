import gql from 'graphql-tag'
export const createOneScheduler = gql`
mutation (
    data: {
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $label: String!,
    $level: String!,
    $login: String!,
    $name: String!,
    $notes: String!,
    $permission: String!,
    $public: String!,
    $start_date: String!,
    $whid: String!,
    }
  ) {
createOneScheduler (
    data: {
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    label: $label,
    level: $level,
    login: $login,
    name: $name,
    notes: $notes,
    permission: $permission,
    public: $public,
    start_date: $start_date,
    whid: $whid,
    }
  ) } {
    created_at
    end_date
    id
    label
    level
    login
    name
    notes
    permission
    public
    start_date
    whid
  }`
