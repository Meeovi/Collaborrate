import gql from 'graphql-tag'
export const updateManyStates = gql`
mutation (
    data: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [StatesWhereInput!]!,
    $NOT: [StatesWhereInput!]!,
    $OR: [StatesWhereInput!]!,
    $country: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $trainings: StringNullableFilter!,
    }
  ) {
updateManyStates (
    data: {
    country: $country,
    description: $description,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    country: $country,
    description: $description,
    id: $id,
    image: $image,
    name: $name,
    trainings: $trainings,
    }
  ) } {
    count
  }`
