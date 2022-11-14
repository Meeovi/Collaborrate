import gql from 'graphql-tag'
export const updateManyGlossary = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $published: NullableDateTimeFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [GlossaryWhereInput!]!,
    $NOT: [GlossaryWhereInput!]!,
    $OR: [GlossaryWhereInput!]!,
    $content: StringNullableFilter!,
    $id: IntFilter!,
    $image: StringNullableFilter!,
    $name: StringFilter!,
    $published: DateTimeNullableFilter!,
    }
  ) {
updateManyGlossary (
    data: {
    content: $content,
    image: $image,
    name: $name,
    published: $published,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    id: $id,
    image: $image,
    name: $name,
    published: $published,
    }
  ) } {
    count
  }`
