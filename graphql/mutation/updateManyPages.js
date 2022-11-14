import gql from 'graphql-tag'
export const updateManyPages = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $content_title: NullableStringFieldUpdateOperationsInput!,
    $enable_page: NullableBoolFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_keywords: NullableStringFieldUpdateOperationsInput!,
    $meta_title: NullableStringFieldUpdateOperationsInput!,
    $title: StringFieldUpdateOperationsInput!,
    $url_key: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [PagesWhereInput!]!,
    $NOT: [PagesWhereInput!]!,
    $OR: [PagesWhereInput!]!,
    $content: StringNullableFilter!,
    $content_title: StringNullableFilter!,
    $enable_page: BoolNullableFilter!,
    $id: IntFilter!,
    $meta_description: StringNullableFilter!,
    $meta_keywords: StringNullableFilter!,
    $meta_title: StringNullableFilter!,
    $title: StringFilter!,
    $url_key: StringNullableFilter!,
    }
  ) {
updateManyPages (
    data: {
    content: $content,
    content_title: $content_title,
    enable_page: $enable_page,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    title: $title,
    url_key: $url_key,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    content_title: $content_title,
    enable_page: $enable_page,
    id: $id,
    meta_description: $meta_description,
    meta_keywords: $meta_keywords,
    meta_title: $meta_title,
    title: $title,
    url_key: $url_key,
    }
  ) } {
    count
  }`
