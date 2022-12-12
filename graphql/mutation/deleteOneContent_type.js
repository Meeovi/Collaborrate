import gql from 'graphql-tag'
export const deleteOneContent_type = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneContent_type (
    where: {
    id: $id,
    }
  ) } {
    boolean
    created_at
    database_name
    date
    email
    id
    json
    link
    media
    number
    password
    rich_text
    text
    time
    timestamp
    uid
  }`
