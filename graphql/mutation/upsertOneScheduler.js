import gql from 'graphql-tag'
export const upsertOneScheduler = gql`
mutation (
    create: {
    $created_at: DateTime!,
    $end_date: String!,
    $id: BigInt!,
    $label: String!,
    $level: String!,
    $login: String!,
    $name: String!,
    $notes: String!,
    $permission: String!,
    $public: String!,
    $start_date: String!,
    $whid: String!,
    }
    update: {
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
upsertOneScheduler (
    create: {
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
    update: {
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
