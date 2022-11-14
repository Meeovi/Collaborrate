import gql from 'graphql-tag'
export const updateOneEndofshift = gql`
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
    $id: BigInt!,
    }
  ) {
updateOneEndofshift (
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
    id: $id,
    }
  ) } {
    content
    created_at
    id
    login
    mcms
    next_shift
    projects
    tickets
    whid
  }`
