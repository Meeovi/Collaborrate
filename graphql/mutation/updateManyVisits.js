import gql from 'graphql-tag'
export const updateManyVisits = gql`
mutation (
    data: {
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $emergency: NullableStringFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $meeting: NullableStringFieldUpdateOperationsInput!,
    $reason: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $task: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [VisitsWhereInput!]!,
    $NOT: [VisitsWhereInput!]!,
    $OR: [VisitsWhereInput!]!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $emergency: StringNullableFilter!,
    $end_date: StringNullableFilter!,
    $id: BigIntFilter!,
    $location: StringNullableFilter!,
    $meeting: StringNullableFilter!,
    $reason: StringNullableFilter!,
    $start_date: StringNullableFilter!,
    $task: StringNullableFilter!,
    $username: StringNullableFilter!,
    }
  ) {
updateManyVisits (
    data: {
    content: $content,
    created_at: $created_at,
    emergency: $emergency,
    end_date: $end_date,
    id: $id,
    location: $location,
    meeting: $meeting,
    reason: $reason,
    start_date: $start_date,
    task: $task,
    username: $username,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    content: $content,
    created_at: $created_at,
    emergency: $emergency,
    end_date: $end_date,
    id: $id,
    location: $location,
    meeting: $meeting,
    reason: $reason,
    start_date: $start_date,
    task: $task,
    username: $username,
    }
  ) } {
    count
  }`
