import gql from 'graphql-tag'
export const updateManyThemes = gql`
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
    $AND: [ThemesWhereInput!]!,
    $NOT: [ThemesWhereInput!]!,
    $OR: [ThemesWhereInput!]!,
    $action: StringNullableFilter!,
    $id: IntFilter!,
    $parent_theme: StringNullableFilter!,
    $theme_path: StringNullableFilter!,
    $title: StringNullableFilter!,
    $website_id: BigIntFilter!,
    $websites: StringFilter!,
    }
  ) {
updateManyThemes (
    data: {
    action: $action,
    parent_theme: $parent_theme,
    theme_path: $theme_path,
    title: $title,
    website_id: $website_id,
    websites: $websites,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    action: $action,
    id: $id,
    parent_theme: $parent_theme,
    theme_path: $theme_path,
    title: $title,
    website_id: $website_id,
    websites: $websites,
    }
  ) } {
    count
  }`
