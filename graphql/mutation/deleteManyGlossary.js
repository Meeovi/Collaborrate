import gql from 'graphql-tag'
export const deleteManyGlossary = gql`
mutation (
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
deleteManyGlossary (
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
