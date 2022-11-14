import gql from 'graphql-tag'
export const deleteManyDiscounts = gql`
mutation (
    where: {
    $AND: [DiscountsWhereInput!]!,
    $NOT: [DiscountsWhereInput!]!,
    $OR: [DiscountsWhereInput!]!,
    $articles: StringNullableFilter!,
    $billToName: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $coupons: StringNullableFilter!,
    $creditMemo: StringNullableFilter!,
    $customers: StringNullableFilter!,
    $discount: StringNullableFilter!,
    $excerpt: StringNullableFilter!,
    $expiration: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $orderNumber: StringNullableFilter!,
    $products: StringNullableFilter!,
    $published: DateTimeNullableFilter!,
    $refunded: StringNullableFilter!,
    $rewards: StringNullableFilter!,
    $special_offers: StringNullableFilter!,
    $status: StringNullableFilter!,
    $type: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
deleteManyDiscounts (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    articles: $articles,
    billToName: $billToName,
    categories: $categories,
    coupons: $coupons,
    creditMemo: $creditMemo,
    customers: $customers,
    discount: $discount,
    excerpt: $excerpt,
    expiration: $expiration,
    id: $id,
    image: $image,
    name: $name,
    orderNumber: $orderNumber,
    products: $products,
    published: $published,
    refunded: $refunded,
    rewards: $rewards,
    special_offers: $special_offers,
    status: $status,
    type: $type,
    users: $users,
    }
  ) } {
    count
  }`
