import gql from 'graphql-tag'
export const deleteOneScheduler = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneScheduler (
    where: {
    id: $id,
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
