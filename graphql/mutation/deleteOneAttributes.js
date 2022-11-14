import gql from 'graphql-tag'
export const deleteOneAttributes = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneAttributes (
    where: {
    id: $id,
    }
  ) } {
    allow_html_tags_storefront
    attribute_class
    attribute_code
    attribute_value
    column_options
    default_label
    faceted_navigation
    filter_options
    id
    isPublic
    layered_navigation
    meta_description
    meta_name
    meta_url
    position
    prod_id
    product_attribute_set
    products
    promo_rule_conditions
    search_results_layered_navigation
    use_search
    used_product_listing
    used_sorting_product_listing
    visible_catalog_pages_storefront
  }`