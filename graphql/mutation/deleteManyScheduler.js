import gql from 'graphql-tag'
export const deleteManyScheduler = gql`
mutation (
    where: {
    $AND: [SchedulerWhereInput!]!,
    $NOT: [SchedulerWhereInput!]!,
    $OR: [SchedulerWhereInput!]!,
    $created_at: DateTimeNullableFilter!,
    $end_date: StringNullableFilter!,
    $id: BigIntFilter!,
    $label: StringNullableFilter!,
    $level: StringNullableFilter!,
    $login: StringNullableFilter!,
    $name: StringNullableFilter!,
    $notes: StringNullableFilter!,
    $permission: StringNullableFilter!,
    $public: StringNullableFilter!,
    $start_date: StringNullableFilter!,
    $whid: StringNullableFilter!,
    }
  ) {
deleteManyScheduler (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    created_at: $created_at,
    end_date: $end_date,
    id: $id,
    label: $label,
    level: $level,
    login: $login,
    name: $name,
    notes: $notes,
    permission: $permission,
    public: $public,
    start_date: $start_date,
    whid: $whid,
    }
  ) } {
    count
  }`
