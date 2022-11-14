import gql from 'graphql-tag'
export const deleteManyCities = gql`
mutation (
    where: {
    $AND: [CitiesWhereInput!]!,
    $NOT: [CitiesWhereInput!]!,
    $OR: [CitiesWhereInput!]!,
    $country: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $postalCode: StringNullableFilter!,
    $state: StringNullableFilter!,
    }
  ) {
deleteManyCities (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    postalCode: $postalCode,
    state: $state,
    }
  ) } {
    count
  }`
