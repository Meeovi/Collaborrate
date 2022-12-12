import gql from 'graphql-tag'
export const updateOneScheduler = gql`
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
    $id: BigInt!,
    }
  ) {
updateOneScheduler (
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
    id: $id,
    }
  ) } {
    created_at
    end_date
    id
    label
    level
    login
    name
    notes
    permission
    public
    start_date
    whid
  }`
