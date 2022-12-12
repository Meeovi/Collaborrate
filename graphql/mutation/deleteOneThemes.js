import gql from 'graphql-tag'
export const deleteOneThemes = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneThemes (
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
