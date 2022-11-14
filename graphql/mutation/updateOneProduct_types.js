import gql from 'graphql-tag'
export const updateOneProduct_types = gql`
mutation (
    data: {
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
updateOneProduct_types (
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
