import gql from 'graphql-tag'
export const deleteManyVisits = gql`
mutation (
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
deleteManyVisits (
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
