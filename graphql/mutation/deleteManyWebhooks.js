import gql from 'graphql-tag'
export const deleteManyWebhooks = gql`
mutation (
    where: {
    $AND: [WebhooksWhereInput!]!,
    $NOT: [WebhooksWhereInput!]!,
    $OR: [WebhooksWhereInput!]!,
    $create: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $delete: StringNullableFilter!,
    $headers: StringNullableFilter!,
    $id: BigIntFilter!,
    $name: StringFilter!,
    $publish: StringNullableFilter!,
    $retrieve: StringNullableFilter!,
    $unpublish: StringNullableFilter!,
    $update: StringNullableFilter!,
    $url: StringFilter!,
    }
  ) {
deleteManyWebhooks (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    create: $create,
    created_at: $created_at,
    delete: $delete,
    headers: $headers,
    id: $id,
    name: $name,
    publish: $publish,
    retrieve: $retrieve,
    unpublish: $unpublish,
    update: $update,
    url: $url,
    }
  ) } {
    count
  }`
