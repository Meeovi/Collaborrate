import gql from 'graphql-tag'
export const updateManyScheduler = gql`
mutation (
    data: {
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $label: NullableStringFieldUpdateOperationsInput!,
    $level: NullableStringFieldUpdateOperationsInput!,
    $login: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $notes: NullableStringFieldUpdateOperationsInput!,
    $permission: NullableStringFieldUpdateOperationsInput!,
    $public: NullableStringFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $whid: NullableStringFieldUpdateOperationsInput!,
    }
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
updateManyScheduler (
    data: {
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
