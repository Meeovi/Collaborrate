import gql from 'graphql-tag'
export const updateOneGlossary = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $published: NullableDateTimeFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneGlossary (
    data: {
    content: $content,
    image: $image,
    name: $name,
    published: $published,
    }
    where: {
    id: $id,
    }
  ) } {
    content
    id
    image
    name
    published
  }`
