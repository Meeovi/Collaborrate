import gql from 'graphql-tag'
export const updateManyCountries = gql`
mutation (
    data: {
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyCountries (
    data: {
    description: $description,
    image: $image,
    name: $name,
    region: $region,
    trainings: $trainings,
    }
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
