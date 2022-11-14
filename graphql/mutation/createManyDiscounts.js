import gql from 'graphql-tag'
export const createManyDiscounts = gql`
mutation (
    data: {
    $articles: String!,
    $billToName: String!,
    $categories: String!,
    $coupons: String!,
    $creditMemo: String!,
    $customers: String!,
    $discount: String!,
    $excerpt: String!,
    $expiration: String!,
    $id: BigInt!,
    $image: String!,
    $name: String!!,
    $orderNumber: String!,
    $products: String!,
    $published: DateTime!,
    $refunded: String!,
    $rewards: String!,
    $special_offers: String!,
    $status: String!,
    $type: String!,
    $users: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyDiscounts (
    data: {
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
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
