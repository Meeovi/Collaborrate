import gql from 'graphql-tag'
export const createManyProduct_types = gql`
mutation (
    data: {
    $filter_options: String!,
    $id: Int!,
    $isShippable: String!,
    $meta_description: String!,
    $meta_url: String!,
    $prod_id: BigInt!!,
    $product_type: String!,
    $products: String!,
    $taxes: String!,
    $type_name: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyProduct_types (
    data: {
    filter_options: $filter_options,
    id: $id,
    isShippable: $isShippable,
    meta_description: $meta_description,
    meta_url: $meta_url,
    prod_id: $prod_id,
    product_type: $product_type,
    products: $products,
    taxes: $taxes,
    type_name: $type_name,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
