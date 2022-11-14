import gql from 'graphql-tag'
export const deleteManyRewards = gql`
mutation (
    where: {
    $AND: [RewardsWhereInput!]!,
    $NOT: [RewardsWhereInput!]!,
    $OR: [RewardsWhereInput!]!,
    $articles: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $coupons: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $expiration: StringNullableFilter!,
    $id: IntFilter!,
    $level: StringNullableFilter!,
    $name: StringFilter!,
    $products: StringNullableFilter!,
    $slug: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
deleteManyRewards (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    articles: $articles,
    categories: $categories,
    coupons: $coupons,
    created_at: $created_at,
    customers: $customers,
    expiration: $expiration,
    id: $id,
    level: $level,
    name: $name,
    products: $products,
    slug: $slug,
    users: $users,
    }
  ) } {
    count
  }`
