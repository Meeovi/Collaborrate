import gql from 'graphql-tag'
export const deleteManyWebsites = gql`
mutation (
    where: {
    $AND: [WebsitesWhereInput!]!,
    $NOT: [WebsitesWhereInput!]!,
    $OR: [WebsitesWhereInput!]!,
    $category: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $name: StringNullableFilter!,
    $shop: StringNullableFilter!,
    $store: StringNullableFilter!,
    $themes: StringNullableFilter!,
    $url: StringNullableFilter!,
    }
  ) {
deleteManyWebsites (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    category: $category,
    created_at: $created_at,
    id: $id,
    image: $image,
    name: $name,
    shop: $shop,
    store: $store,
    themes: $themes,
    url: $url,
    }
  ) } {
    count
  }`
