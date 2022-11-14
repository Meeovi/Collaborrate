import gql from 'graphql-tag'
export const createManyThemes = gql`
mutation (
    data: {
    $action: String!,
    $id: Int!,
    $parent_theme: String!,
    $theme_path: String!,
    $title: String!,
    $website_id: BigInt!!,
    $websites: String!!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyThemes (
    data: {
    action: $action,
    id: $id,
    parent_theme: $parent_theme,
    theme_path: $theme_path,
    title: $title,
    website_id: $website_id,
    websites: $websites,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
