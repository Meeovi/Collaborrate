import gql from 'graphql-tag'
export const updateManyRewards = gql`
mutation (
    data: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $coupons: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $expiration: NullableStringFieldUpdateOperationsInput!,
    $level: NullableStringFieldUpdateOperationsInput!,
    $name: StringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $slug: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [RewardsWhereInput!]!,
    $NOT: [RewardsWhereInput!]!,
    $OR: [RewardsWhereInput!]!,
    $articles: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $coupons: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $expiration: StringNullableFilter!,
    $id: IntFilter!,
    $level: StringNullableFilter!,
    $name: StringFilter!,
    $products: StringNullableFilter!,
    $slug: StringNullableFilter!,
    $users: StringNullableFilter!,
    }
  ) {
updateManyRewards (
    data: {
    articles: $articles,
    categories: $categories,
    coupons: $coupons,
    created_at: $created_at,
    customers: $customers,
    expiration: $expiration,
    level: $level,
    name: $name,
    products: $products,
    slug: $slug,
    users: $users,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    articles: $articles,
    categories: $categories,
    coupons: $coupons,
    created_at: $created_at,
    customers: $customers,
    expiration: $expiration,
    id: $id,
    level: $level,
    name: $name,
    products: $products,
    slug: $slug,
    users: $users,
    }
  ) } {
    count
  }`
