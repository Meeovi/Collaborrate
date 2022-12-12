import gql from 'graphql-tag'
export const deleteManyThemes = gql`
mutation (
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
deleteManyThemes (
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
