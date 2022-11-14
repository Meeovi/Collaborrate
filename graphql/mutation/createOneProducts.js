import gql from 'graphql-tag'
export const createOneProducts = gql`
mutation (
    data: {
    $attributes: String!,
    $brand: String!,
    $brands: String!,
    $categories: String!,
    $content: String!,
    $contract: String!,
    $cost_string: String!,
    $country: String!,
    $coupons: String!,
    $created_at: DateTime!,
    $credit_memos: String!,
    $customer_type: String!,
    $family: String!,
    $file: String!,
    $format: String!,
    $height: String!,
    $id: BigInt!,
    $image: String!,
    $manufacture: String!,
    $manufacturer: String!,
    $manufacturer_part_number: String!,
    $mediamanager: String!,
    $meta_description: String!,
    $meta_keywords: String!,
    $meta_title: String!,
    $meta_url: String!,
    $name: String!!,
    $occassions: String!,
    $occassions_occassionsToproducts: String!,
    $orders: String!,
    $other_products: String!,
    $part_number: String!,
    $price: String!,
    $product: String!,
    $product_attribute: String!,
    $product_types: String!,
    $products: String!,
    $quantity_per_source: String!,
    $quotes: String!,
    $rating: String!,
    $related_product: BigInt!,
    $returns: String!,
    $salable_quantity: String!,
    $short_description: String!,
    $size: String!,
    $sku: BigInt!!,
    $status: Boolean!,
    $stock_status: String!,
    $tags: String!,
    $tax_class: String!,
    $tax_rate: String!,
    $tax_rule: String!,
    $thumbnail: String!,
    $trainings: String!,
    $types: String!,
    $variants: String!,
    $visibility: String!,
    $websites: String!,
    $weight: String!,
    $workspaces: String!,
    $zone: String!,
    }
  ) {
createOneProducts (
    data: {
    attributes: $attributes,
    brand: $brand,
    brands: $brands,
    categories: $categories,
    content: $content,
    contract: $contract,
    cost_string: $cost_string,
    country: $country,
    coupons: $coupons,
    created_at: $created_at,
    credit_memos: $credit_memos,
    customer_type: $customer_type,
    family: $family,
    file: $file,
    format: $format,
    height: $height,
    id: $id,
    image: $image,
    manufacture: $manufacture,
    manufacturer: $manufacturer,
    manufacturer_part_number: $manufacturer_part_number,
    mediamanager: $mediamanager,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    meta_url: $meta_url,
    name: $name,
    occassions: $occassions,
    occassions_occassionsToproducts: $occassions_occassionsToproducts,
    orders: $orders,
    other_products: $other_products,
    part_number: $part_number,
    price: $price,
    product: $product,
    product_attribute: $product_attribute,
    product_types: $product_types,
    products: $products,
    quantity_per_source: $quantity_per_source,
    quotes: $quotes,
    rating: $rating,
    related_product: $related_product,
    returns: $returns,
    salable_quantity: $salable_quantity,
    short_description: $short_description,
    size: $size,
    sku: $sku,
    status: $status,
    stock_status: $stock_status,
    tags: $tags,
    tax_class: $tax_class,
    tax_rate: $tax_rate,
    tax_rule: $tax_rule,
    thumbnail: $thumbnail,
    trainings: $trainings,
    types: $types,
    variants: $variants,
    visibility: $visibility,
    websites: $websites,
    weight: $weight,
    workspaces: $workspaces,
    zone: $zone,
    }
  ) } {
    attributes
    brand
    brands
    categories
    content
    contract
    cost_string
    country
    coupons
    created_at
    credit_memos
    customer_type
    family
    file
    format
    height
    id
    image
    manufacture
    manufacturer
    manufacturer_part_number
    mediamanager
    meta_description
    meta_keywords
    meta_title
    meta_url
    name
    occassions
    occassions_occassionsToproducts
    orders
    other_products
    part_number
    price
    product
    product_attribute
    product_types
    products
    quantity_per_source
    quotes
    rating
    related_product
    returns
    salable_quantity
    short_description
    size
    sku
    status
    stock_status
    tags
    tax_class
    tax_rate
    tax_rule
    thumbnail
    trainings
    types
    variants
    visibility
    websites
    weight
    workspaces
    zone
  }`
