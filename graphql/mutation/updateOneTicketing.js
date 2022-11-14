import gql from 'graphql-tag'
export const updateOneTicketing = gql`
mutation (
    data: {
    $account_name: NullableStringFieldUpdateOperationsInput!,
    $assigned_to: NullableStringFieldUpdateOperationsInput!,
    $comment: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $date: NullableStringFieldUpdateOperationsInput!,
    $date_modified: NullableDateTimeFieldUpdateOperationsInput!,
    $department: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $level: NullableStringFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $priority: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableStringFieldUpdateOperationsInput!,
    $projects_projectsToticketing: NullableStringFieldUpdateOperationsInput!,
    $requester: NullableStringFieldUpdateOperationsInput!,
    $requester_email: NullableStringFieldUpdateOperationsInput!,
    $resolution: NullableStringFieldUpdateOperationsInput!,
    $severity: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $team: NullableStringFieldUpdateOperationsInput!,
    $ticket_type: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneTicketing (
    data: {
    account_name: $account_name,
    assigned_to: $assigned_to,
    comment: $comment,
    content: $content,
    created_at: $created_at,
    date: $date,
    date_modified: $date_modified,
    department: $department,
    id: $id,
    level: $level,
    location: $location,
    media: $media,
    name: $name,
    priority: $priority,
    products: $products,
    projects: $projects,
    projects_projectsToticketing: $projects_projectsToticketing,
    requester: $requester,
    requester_email: $requester_email,
    resolution: $resolution,
    severity: $severity,
    status: $status,
    team: $team,
    ticket_type: $ticket_type,
    }
    where: {
    id: $id,
    }
  ) } {
    account_name
    assigned_to
    comment
    content
    created_at
    date
    date_modified
    department
    id
    level
    location
    media
    name
    priority
    products
    projects
    projects_projectsToticketing
    requester
    requester_email
    resolution
    severity
    status
    team
    ticket_type
  }`
