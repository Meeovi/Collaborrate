import gql from 'graphql-tag'
export const createManyContent_type = gql`
mutation (
    data: {
    $boolean: Boolean!,
    $created_at: DateTime!,
    $database_name: String!,
    $date: DateTime!,
    $email: String!,
    $id: BigInt!,
    $json: JSON!,
    $link: String!,
    $media: String!,
    $number: Decimal!,
    $password: String!,
    $rich_text: String!,
    $text: String!,
    $time: DateTime!,
    $timestamp: DateTime!,
    $uid: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyContent_type (
    data: {
    boolean: $boolean,
    created_at: $created_at,
    database_name: $database_name,
    date: $date,
    email: $email,
    id: $id,
    json: $json,
    link: $link,
    media: $media,
    number: $number,
    password: $password,
    rich_text: $rich_text,
    text: $text,
    time: $time,
    timestamp: $timestamp,
    uid: $uid,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
