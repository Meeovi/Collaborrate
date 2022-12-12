import gql from 'graphql-tag'
export const deleteManyPartners = gql`
mutation (
    where: {
    $AND: [PartnersWhereInput!]!,
    $NOT: [PartnersWhereInput!]!,
    $OR: [PartnersWhereInput!]!,
    $address: StringNullableFilter!,
    $business_type: StringNullableFilter!,
    $city: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $isPublic: StringNullableFilter!,
    $name: StringNullableFilter!,
    $state: StringNullableFilter!,
    }
  ) {
deleteManyPartners (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    address: $address,
    business_type: $business_type,
    city: $city,
    country: $country,
    created_at: $created_at,
    id: $id,
    isPublic: $isPublic,
    name: $name,
    state: $state,
    }
  ) } {
    count
  }`
