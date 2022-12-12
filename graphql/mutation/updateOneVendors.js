import gql from 'graphql-tag'
export const updateOneVendors = gql`
mutation (
    data: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $comments: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $coupons: NullableStringFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $gift_certificates: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $invoices: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $physical_store: NullableStringFieldUpdateOperationsInput!,
    $polls: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $quotes: NullableStringFieldUpdateOperationsInput!,
    $rating: NullableStringFieldUpdateOperationsInput!,
    $reports: NullableStringFieldUpdateOperationsInput!,
    $reviews: NullableStringFieldUpdateOperationsInput!,
    $reward_points: NullableStringFieldUpdateOperationsInput!,
    $special_discounts: NullableStringFieldUpdateOperationsInput!,
    $statistics: NullableStringFieldUpdateOperationsInput!,
    $stocks: NullableStringFieldUpdateOperationsInput!,
    $tags: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    $website: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneVendors (
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
