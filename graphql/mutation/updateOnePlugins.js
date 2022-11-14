import gql from 'graphql-tag'
export const updateOnePlugins = gql`
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
    $id: BigInt!,
    }
  ) {
updateOnePlugins (
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
