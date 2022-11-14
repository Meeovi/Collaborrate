import gql from 'graphql-tag'
export const updateManyDeepdive = gql`
mutation (
    data: {
    $attendees: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $login: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $whid: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [DeepdiveWhereInput!]!,
    $NOT: [DeepdiveWhereInput!]!,
    $OR: [DeepdiveWhereInput!]!,
    $attendees: StringNullableFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $end_date: StringNullableFilter!,
    $id: BigIntFilter!,
    $login: StringNullableFilter!,
    $start_date: StringNullableFilter!,
    $whid: StringNullableFilter!,
    }
  ) {
updateManyDeepdive (
    data: {
    attendees: $attendees,
    content: $content,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    login: $login,
    start_date: $start_date,
    whid: $whid,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    attendees: $attendees,
    content: $content,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    login: $login,
    start_date: $start_date,
    whid: $whid,
    }
  ) } {
    count
  }`
