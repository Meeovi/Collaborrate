import gql from 'graphql-tag'
export const deleteManyReviews = gql`
mutation (
    where: {
    $AND: [ReviewsWhereInput!]!,
    $NOT: [ReviewsWhereInput!]!,
    $OR: [ReviewsWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $first_name: StringNullableFilter!,
    $id: IntFilter!,
    $last_name: StringNullableFilter!,
    $websites: StringNullableFilter!,
    }
  ) {
deleteManyReviews (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    first_name: $first_name,
    id: $id,
    last_name: $last_name,
    websites: $websites,
    }
  ) } {
    count
  }`
