import gql from 'graphql-tag'
export const upsertOneProduct_types = gql`
mutation (
    create: {
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
    update: {
    $filter_options: NullableStringFieldUpdateOperationsInput!,
    $isShippable: NullableStringFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_url: NullableStringFieldUpdateOperationsInput!,
    $prod_id: BigIntFieldUpdateOperationsInput!,
    $product_type: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $taxes: NullableStringFieldUpdateOperationsInput!,
    $type_name: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneProduct_types (
    create: {
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
    update: {
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
    where: {
    id: $id,
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
