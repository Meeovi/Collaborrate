import gql from 'graphql-tag'
export const updateManyEndofshift = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $login: NullableStringFieldUpdateOperationsInput!,
    $mcms: NullableStringFieldUpdateOperationsInput!,
    $next_shift: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableStringFieldUpdateOperationsInput!,
    $tickets: NullableStringFieldUpdateOperationsInput!,
    $whid: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [EndofshiftWhereInput!]!,
    $NOT: [EndofshiftWhereInput!]!,
    $OR: [EndofshiftWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $id: BigIntFilter!,
    $login: StringNullableFilter!,
    $mcms: StringNullableFilter!,
    $next_shift: StringNullableFilter!,
    $projects: StringNullableFilter!,
    $tickets: StringNullableFilter!,
    $whid: StringNullableFilter!,
    }
  ) {
updateManyEndofshift (
    data: {
    content: $content,
    created_at: $created_at,
    id: $id,
    login: $login,
    mcms: $mcms,
    next_shift: $next_shift,
    projects: $projects,
    tickets: $tickets,
    whid: $whid,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    id: $id,
    login: $login,
    mcms: $mcms,
    next_shift: $next_shift,
    projects: $projects,
    tickets: $tickets,
    whid: $whid,
    }
  ) } {
    count
  }`
