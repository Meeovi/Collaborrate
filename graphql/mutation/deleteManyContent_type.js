import gql from 'graphql-tag'
export const deleteManyContent_type = gql`
mutation (
    where: {
    $AND: [Content_typeWhereInput!]!,
    $NOT: [Content_typeWhereInput!]!,
    $OR: [Content_typeWhereInput!]!,
    $boolean: BoolNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $database_name: StringNullableFilter!,
    $date: DateTimeNullableFilter!,
    $email: StringNullableFilter!,
    $id: BigIntFilter!,
    $json: JsonNullableFilter!,
    $link: StringNullableFilter!,
    $media: StringNullableFilter!,
    $number: DecimalNullableFilter!,
    $password: StringNullableFilter!,
    $rich_text: StringNullableFilter!,
    $text: StringNullableFilter!,
    $time: DateTimeNullableFilter!,
    $timestamp: DateTimeNullableFilter!,
    $uid: StringNullableFilter!,
    }
  ) {
deleteManyContent_type (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
