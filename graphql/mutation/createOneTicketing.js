import gql from 'graphql-tag'
export const createOneTicketing = gql`
mutation (
    data: {
    $account_name: String!,
    $assigned_to: String!,
    $comment: String!,
    $content: String!,
    $created_at: DateTime!,
    $date: String!,
    $date_modified: DateTime!,
    $department: String!,
    $id: BigInt!,
    $level: String!,
    $location: String!,
    $media: String!,
    $name: String!,
    $priority: String!,
    $products: String!,
    $projects: String!,
    $projects_projectsToticketing: String!,
    $requester: String!,
    $requester_email: String!,
    $resolution: String!,
    $severity: String!,
    $status: String!,
    $team: String!,
    $ticket_type: String!,
    }
  ) {
createOneTicketing (
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
