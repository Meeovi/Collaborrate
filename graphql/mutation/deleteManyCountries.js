import gql from 'graphql-tag'
export const deleteManyCountries = gql`
mutation (
    where: {
    $AND: [CountriesWhereInput!]!,
    $NOT: [CountriesWhereInput!]!,
    $OR: [CountriesWhereInput!]!,
    $description: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $region: StringNullableFilter!,
    $trainings: StringNullableFilter!,
    }
  ) {
deleteManyCountries (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
  ) } {
    count
  }`
