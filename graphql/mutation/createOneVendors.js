import gql from 'graphql-tag'
export const createOneVendors = gql`
mutation (
    data: {
    $articles: String!,
    $categories: String!,
    $comments: String!,
    $country: String!,
    $coupons: String!,
    $customers: String!,
    $description: String!,
    $gift_certificates: String!,
    $image: String!,
    $invoices: String!,
    $name: String!!,
    $physical_store: String!,
    $polls: String!,
    $products: String!,
    $quotes: String!,
    $rating: String!,
    $reports: String!,
    $reviews: String!,
    $reward_points: String!,
    $special_discounts: String!,
    $statistics: String!,
    $stocks: String!,
    $tags: String!,
    $type: String!,
    $users: String!,
    $website: String!,
    $workspaces: String!,
    }
  ) {
createOneVendors (
    data: {
    articles: $articles,
    categories: $categories,
    comments: $comments,
    country: $country,
    coupons: $coupons,
    customers: $customers,
    description: $description,
    gift_certificates: $gift_certificates,
    image: $image,
    invoices: $invoices,
    name: $name,
    physical_store: $physical_store,
    polls: $polls,
    products: $products,
    quotes: $quotes,
    rating: $rating,
    reports: $reports,
    reviews: $reviews,
    reward_points: $reward_points,
    special_discounts: $special_discounts,
    statistics: $statistics,
    stocks: $stocks,
    tags: $tags,
    type: $type,
    users: $users,
    website: $website,
    workspaces: $workspaces,
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
