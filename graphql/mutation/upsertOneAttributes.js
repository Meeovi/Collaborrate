import gql from 'graphql-tag'
export const upsertOneAttributes = gql`
mutation (
    create: {
    $allow_html_tags_storefront: Boolean!,
    $attribute_class: String!,
    $attribute_code: String!,
    $attribute_value: String!,
    $column_options: String!,
    $default_label: String!,
    $faceted_navigation: Boolean!,
    $filter_options: String!,
    $isPublic: String!,
    $layered_navigation: Boolean!,
    $meta_description: String!,
    $meta_name: Boolean!,
    $meta_url: String!,
    $position: String!,
    $prod_id: BigInt!!,
    $product_attribute_set: String!,
    $products: String!,
    $promo_rule_conditions: Boolean!,
    $search_results_layered_navigation: Boolean!,
    $use_search: String!,
    $used_product_listing: Boolean!,
    $used_sorting_product_listing: Boolean!,
    $visible_catalog_pages_storefront: Boolean!,
    }
    update: {
    $allow_html_tags_storefront: NullableBoolFieldUpdateOperationsInput!,
    $attribute_class: NullableStringFieldUpdateOperationsInput!,
    $attribute_code: NullableStringFieldUpdateOperationsInput!,
    $attribute_value: NullableStringFieldUpdateOperationsInput!,
    $column_options: NullableStringFieldUpdateOperationsInput!,
    $default_label: NullableStringFieldUpdateOperationsInput!,
    $faceted_navigation: NullableBoolFieldUpdateOperationsInput!,
    $filter_options: NullableStringFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $layered_navigation: NullableBoolFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_name: NullableBoolFieldUpdateOperationsInput!,
    $meta_url: NullableStringFieldUpdateOperationsInput!,
    $position: NullableStringFieldUpdateOperationsInput!,
    $prod_id: BigIntFieldUpdateOperationsInput!,
    $product_attribute_set: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $promo_rule_conditions: NullableBoolFieldUpdateOperationsInput!,
    $search_results_layered_navigation: NullableBoolFieldUpdateOperationsInput!,
    $use_search: NullableStringFieldUpdateOperationsInput!,
    $used_product_listing: NullableBoolFieldUpdateOperationsInput!,
    $used_sorting_product_listing: NullableBoolFieldUpdateOperationsInput!,
    $visible_catalog_pages_storefront: NullableBoolFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneAttributes (
    create: {
    allow_html_tags_storefront: $allow_html_tags_storefront,
    attribute_class: $attribute_class,
    attribute_code: $attribute_code,
    attribute_value: $attribute_value,
    column_options: $column_options,
    default_label: $default_label,
    faceted_navigation: $faceted_navigation,
    filter_options: $filter_options,
    isPublic: $isPublic,
    layered_navigation: $layered_navigation,
    meta_description: $meta_description,
    meta_name: $meta_name,
    meta_url: $meta_url,
    position: $position,
    prod_id: $prod_id,
    product_attribute_set: $product_attribute_set,
    products: $products,
    promo_rule_conditions: $promo_rule_conditions,
    search_results_layered_navigation: $search_results_layered_navigation,
    use_search: $use_search,
    used_product_listing: $used_product_listing,
    used_sorting_product_listing: $used_sorting_product_listing,
    visible_catalog_pages_storefront: $visible_catalog_pages_storefront,
    }
    update: {
    allow_html_tags_storefront: $allow_html_tags_storefront,
    attribute_class: $attribute_class,
    attribute_code: $attribute_code,
    attribute_value: $attribute_value,
    column_options: $column_options,
    default_label: $default_label,
    faceted_navigation: $faceted_navigation,
    filter_options: $filter_options,
    isPublic: $isPublic,
    layered_navigation: $layered_navigation,
    meta_description: $meta_description,
    meta_name: $meta_name,
    meta_url: $meta_url,
    position: $position,
    prod_id: $prod_id,
    product_attribute_set: $product_attribute_set,
    products: $products,
    promo_rule_conditions: $promo_rule_conditions,
    search_results_layered_navigation: $search_results_layered_navigation,
    use_search: $use_search,
    used_product_listing: $used_product_listing,
    used_sorting_product_listing: $used_sorting_product_listing,
    visible_catalog_pages_storefront: $visible_catalog_pages_storefront,
    }
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
