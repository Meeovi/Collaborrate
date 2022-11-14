import gql from 'graphql-tag'
export const createOneProduct_types = gql`
mutation (
    data: {
    $filter_options: String!,
    $isShippable: String!,
    $meta_description: String!,
    $meta_url: String!,
    $prod_id: BigInt!!,
    $product_type: String!,
    $products: String!,
    $taxes: String!,
    $type_name: String!,
    }
  ) {
createOneProduct_types (
    data: {
    filter_options: $filter_options,
    isShippable: $isShippable,
    meta_description: $meta_description,
    meta_url: $meta_url,
    prod_id: $prod_id,
    product_type: $product_type,
    products: $products,
    taxes: $taxes,
    type_name: $type_name,
    }
  ) } {
    filter_options
    id
    isShippable
    meta_description
    meta_url
    prod_id
    product_type
    products
    taxes
    type_name
  }`
