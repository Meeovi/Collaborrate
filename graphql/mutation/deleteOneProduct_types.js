import gql from 'graphql-tag'
export const deleteOneProduct_types = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneProduct_types (
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
