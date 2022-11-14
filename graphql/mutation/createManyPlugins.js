import gql from 'graphql-tag'
export const createManyPlugins = gql`
mutation (
    data: {
    $agree_terms: Boolean!,
    $created_at: DateTime!,
    $description: String!,
    $github_link: String!,
    $id: BigInt!,
    $last_updated: DateTime!,
    $logo: String!,
    $name: String!,
    $publisher_email: String!,
    $publisher_name: String!,
    $screenshots: String!,
    $url: String!,
    }
    $skipDuplicates: Boolean!,
  ) {
createManyPlugins (
    data: {
    agree_terms: $agree_terms,
    created_at: $created_at,
    description: $description,
    github_link: $github_link,
    id: $id,
    last_updated: $last_updated,
    logo: $logo,
    name: $name,
    publisher_email: $publisher_email,
    publisher_name: $publisher_name,
    screenshots: $screenshots,
    url: $url,
    }
    skipDuplicates: $skipDuplicates,
  ) } {
    count
  }`
