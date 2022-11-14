import gql from 'graphql-tag'
export const deleteManyReviews = gql`
mutation (
    where: {
    $AND: [ReviewsWhereInput!]!,
    $NOT: [ReviewsWhereInput!]!,
    $OR: [ReviewsWhereInput!]!,
    $comment_id: IntFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $first_name: StringNullableFilter!,
    $id: IntFilter!,
    $last_name: StringNullableFilter!,
    $shop_id: IntFilter!,
    $websites: StringNullableFilter!,
    }
  ) {
deleteManyReviews (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    comment_id: $comment_id,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    shop_id: $shop_id,
    websites: $websites,
    }
  ) } {
    count
  }`