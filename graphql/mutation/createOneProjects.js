import gql from 'graphql-tag'
export const createOneProjects = gql`
mutation (
    data: {
    $assignee: String!,
    $categories: String!,
    $company: String!,
    $considerworkingdays: String!,
    $created_at: DateTime!,
    $cust_id: Int!,
    $customers: String!,
    $doing: String!,
    $done: String!,
    $end_date: String!,
    $file: String!,
    $goal_collaborators: String!,
    $goal_measurement: String!,
    $goal_name: String!,
    $goal_privacy: String!,
    $goal_progress_source: String!,
    $goal_timeperiod: String!,
    $goal_updatemethod: String!,
    $id: BigInt!,
    $method: String!,
    $name: String!,
    $priority: String!,
    $product: String!,
    $project_manager: String!,
    $project_template: String!,
    $resource: String!,
    $section_rule: String!,
    $staff_id: Int!,
    $start_date: String!,
    $status: String!,
    $tags: String!,
    $task_id: BigInt!,
    $tasks: String!,
    $team: String!,
    $ticket_id: BigInt!,
    $ticketing: String!,
    $type: String!,
    $users: String!,
    $websites: String!,
    $workspaces: String!,
    $zone: String!,
    }
  ) {
createOneProjects (
    data: {
    assignee: $assignee,
    categories: $categories,
    company: $company,
    considerworkingdays: $considerworkingdays,
    created_at: $created_at,
    cust_id: $cust_id,
    customers: $customers,
    doing: $doing,
    done: $done,
    end_date: $end_date,
    file: $file,
    goal_collaborators: $goal_collaborators,
    goal_measurement: $goal_measurement,
    goal_name: $goal_name,
    goal_privacy: $goal_privacy,
    goal_progress_source: $goal_progress_source,
    goal_timeperiod: $goal_timeperiod,
    goal_updatemethod: $goal_updatemethod,
    id: $id,
    method: $method,
    name: $name,
    priority: $priority,
    product: $product,
    project_manager: $project_manager,
    project_template: $project_template,
    resource: $resource,
    section_rule: $section_rule,
    staff_id: $staff_id,
    start_date: $start_date,
    status: $status,
    tags: $tags,
    task_id: $task_id,
    tasks: $tasks,
    team: $team,
    ticket_id: $ticket_id,
    ticketing: $ticketing,
    type: $type,
    users: $users,
    websites: $websites,
    workspaces: $workspaces,
    zone: $zone,
    }
  ) } {
    assignee
    categories
    company
    considerworkingdays
    created_at
    cust_id
    customers
    doing
    done
    end_date
    file
    goal_collaborators
    goal_measurement
    goal_name
    goal_privacy
    goal_progress_source
    goal_timeperiod
    goal_updatemethod
    id
    method
    name
    priority
    product
    project_manager
    project_template
    resource
    section_rule
    staff_id
    start_date
    status
    tags
    task_id
    tasks
    team
    ticket_id
    ticketing
    type
    users
    websites
    workspaces
    zone
  }`
