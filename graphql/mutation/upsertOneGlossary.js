import gql from 'graphql-tag'
export const upsertOneGlossary = gql`
mutation (
    create: {
    $content: String!,
    $image: String!,
    $name: String!!,
    $published: DateTime!,
    }
    update: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $published: NullableDateTimeFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
upsertOneGlossary (
    create: {
    content: $content,
    image: $image,
    name: $name,
    published: $published,
    }
    update: {
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
