import gql from 'graphql-tag'
export const deleteOneVendors = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneVendors (
    where: {
    id: $id,
    }
  ) } {
    articles
    categories
    comments
    country
    coupons
    customers
    description
    gift_certificates
    id
    image
    invoices
    name
    physical_store
    polls
    products
    quotes
    rating
    reports
    reviews
    reward_points
    special_discounts
    statistics
    stocks
    tags
    type
    users
    website
    workspaces
  }`
