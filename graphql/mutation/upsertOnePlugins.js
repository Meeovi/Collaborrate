import gql from 'graphql-tag'
export const upsertOnePlugins = gql`
mutation (
    create: {
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
    update: {
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
    $id: BigInt!,
    }
  ) {
upsertOnePlugins (
    create: {
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
    update: {
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
    id: $id,
    }
  ) } {
    agree_terms
    created_at
    description
    github_link
    id
    last_updated
    logo
    name
    publisher_email
    publisher_name
    screenshots
    url
  }`
