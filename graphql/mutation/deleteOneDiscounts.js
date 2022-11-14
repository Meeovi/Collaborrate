import gql from 'graphql-tag'
export const deleteOneDiscounts = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneDiscounts (
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
