import gql from 'graphql-tag'
export const deleteManyPlugins = gql`
mutation (
    where: {
    $AND: [PluginsWhereInput!]!,
    $NOT: [PluginsWhereInput!]!,
    $OR: [PluginsWhereInput!]!,
    $agree_terms: BoolNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $github_link: StringNullableFilter!,
    $id: BigIntFilter!,
    $last_updated: DateTimeNullableFilter!,
    $logo: StringNullableFilter!,
    $name: StringNullableFilter!,
    $publisher_email: StringNullableFilter!,
    $publisher_name: StringNullableFilter!,
    $screenshots: StringNullableFilter!,
    $url: StringNullableFilter!,
    }
  ) {
deleteManyPlugins (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
  ) } {
    count
  }`
