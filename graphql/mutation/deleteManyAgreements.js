import gql from 'graphql-tag'
export const deleteManyAgreements = gql`
mutation (
    where: {
    $AND: [AgreementsWhereInput!]!,
    $NOT: [AgreementsWhereInput!]!,
    $OR: [AgreementsWhereInput!]!,
    $content: StringNullableFilter!,
    $created: DateTimeNullableFilter!,
    $excerpt: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $mediamanager: StringNullableFilter!,
    $name: StringNullableFilter!,
    $reference_id: StringNullableFilter!,
    $shop_id: StringNullableFilter!,
    $type: StringNullableFilter!,
    $updated: DateTimeNullableFilter!,
    $user_id: StringNullableFilter!,
    }
  ) {
deleteManyAgreements (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created: $created,
    excerpt: $excerpt,
    id: $id,
    image: $image,
    mediamanager: $mediamanager,
    name: $name,
    reference_id: $reference_id,
    shop_id: $shop_id,
    type: $type,
    updated: $updated,
    user_id: $user_id,
    }
  ) } {
    count
  }`
