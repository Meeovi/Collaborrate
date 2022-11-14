import gql from 'graphql-tag'
export const updateManyPlugins = gql`
mutation (
    data: {
    $agree_terms: NullableBoolFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $github_link: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $last_updated: NullableDateTimeFieldUpdateOperationsInput!,
    $logo: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $publisher_email: NullableStringFieldUpdateOperationsInput!,
    $publisher_name: NullableStringFieldUpdateOperationsInput!,
    $screenshots: NullableStringFieldUpdateOperationsInput!,
    $url: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyPlugins (
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
