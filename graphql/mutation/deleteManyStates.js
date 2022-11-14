import gql from 'graphql-tag'
export const deleteManyStates = gql`
mutation (
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
deleteManyStates (
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
