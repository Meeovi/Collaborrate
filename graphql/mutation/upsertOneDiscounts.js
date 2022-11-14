import gql from 'graphql-tag'
export const upsertOneDiscounts = gql`
mutation (
    create: {
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
    update: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $billToName: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $coupons: NullableStringFieldUpdateOperationsInput!,
    $creditMemo: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $discount: NullableStringFieldUpdateOperationsInput!,
    $excerpt: NullableStringFieldUpdateOperationsInput!,
    $expiration: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $orderNumber: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $published: NullableDateTimeFieldUpdateOperationsInput!,
    $refunded: NullableStringFieldUpdateOperationsInput!,
    $rewards: NullableStringFieldUpdateOperationsInput!,
    $special_offers: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
upsertOneDiscounts (
    create: {
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
    update: {
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
    where: {
    id: $id,
    }
  ) } {
    articles
    billToName
    categories
    coupons
    creditMemo
    customers
    discount
    excerpt
    expiration
    id
    image
    name
    orderNumber
    products
    published
    refunded
    rewards
    special_offers
    status
    type
    users
  }`
