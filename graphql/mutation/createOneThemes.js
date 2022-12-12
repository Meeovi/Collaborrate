import gql from 'graphql-tag'
export const createOneThemes = gql`
mutation (
    data: {
    $action: String!,
    $parent_theme: String!,
    $theme_path: String!,
    $title: String!,
    $website_id: BigInt!!,
    $websites: String!!,
    }
  ) {
createOneThemes (
    data: {
    action: $action,
    parent_theme: $parent_theme,
    theme_path: $theme_path,
    title: $title,
    website_id: $website_id,
    websites: $websites,
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
