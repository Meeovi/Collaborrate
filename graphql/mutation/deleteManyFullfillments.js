import gql from 'graphql-tag'
export const deleteManyFullfillments = gql`
mutation (
    where: {
    $AND: [FullfillmentsWhereInput!]!,
    $NOT: [FullfillmentsWhereInput!]!,
    $OR: [FullfillmentsWhereInput!]!,
    $address: StringNullableFilter!,
    $address_two: StringNullableFilter!,
    $city: StringNullableFilter!,
    $company: StringNullableFilter!,
    $country: StringNullableFilter!,
    $country_area: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $name: StringNullableFilter!,
    $phone: StringNullableFilter!,
    $pickup: StringNullableFilter!,
    $shipping_zones: StringNullableFilter!,
    $state: StringNullableFilter!,
    $stock: StringNullableFilter!,
    $zipcode: StringNullableFilter!,
    }
  ) {
deleteManyFullfillments (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    address: $address,
    address_two: $address_two,
    city: $city,
    company: $company,
    country: $country,
    country_area: $country_area,
    created_at: $created_at,
    id: $id,
    name: $name,
    phone: $phone,
    pickup: $pickup,
    shipping_zones: $shipping_zones,
    state: $state,
    stock: $stock,
    zipcode: $zipcode,
    }
  ) } {
    count
  }`
