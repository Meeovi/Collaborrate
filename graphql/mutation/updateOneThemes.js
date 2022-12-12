import gql from 'graphql-tag'
export const updateOneThemes = gql`
mutation (
    data: {
    $action: NullableStringFieldUpdateOperationsInput!,
    $parent_theme: NullableStringFieldUpdateOperationsInput!,
    $theme_path: NullableStringFieldUpdateOperationsInput!,
    $title: NullableStringFieldUpdateOperationsInput!,
    $website_id: BigIntFieldUpdateOperationsInput!,
    $websites: StringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneThemes (
    data: {
    action: $action,
    parent_theme: $parent_theme,
    theme_path: $theme_path,
    title: $title,
    website_id: $website_id,
    websites: $websites,
    }
    where: {
    id: $id,
    }
  ) } {
    action
    id
    parent_theme
    theme_path
    title
    website_id
    websites
  }`
