import gql from 'graphql-tag'
export const updateOneProjects = gql`
mutation (
    data: {
    $assignee: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $company: NullableStringFieldUpdateOperationsInput!,
    $considerworkingdays: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $cust_id: NullableIntFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $doing: NullableStringFieldUpdateOperationsInput!,
    $done: NullableStringFieldUpdateOperationsInput!,
    $end_date: NullableStringFieldUpdateOperationsInput!,
    $file: NullableStringFieldUpdateOperationsInput!,
    $goal_collaborators: NullableStringFieldUpdateOperationsInput!,
    $goal_measurement: NullableStringFieldUpdateOperationsInput!,
    $goal_name: NullableStringFieldUpdateOperationsInput!,
    $goal_privacy: NullableStringFieldUpdateOperationsInput!,
    $goal_progress_source: NullableStringFieldUpdateOperationsInput!,
    $goal_timeperiod: NullableStringFieldUpdateOperationsInput!,
    $goal_updatemethod: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $method: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $priority: NullableStringFieldUpdateOperationsInput!,
    $product: NullableStringFieldUpdateOperationsInput!,
    $project_manager: NullableStringFieldUpdateOperationsInput!,
    $project_template: NullableStringFieldUpdateOperationsInput!,
    $resource: NullableStringFieldUpdateOperationsInput!,
    $section_rule: NullableStringFieldUpdateOperationsInput!,
    $staff_id: NullableIntFieldUpdateOperationsInput!,
    $start_date: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $tags: NullableStringFieldUpdateOperationsInput!,
    $task_id: NullableBigIntFieldUpdateOperationsInput!,
    $tasks: NullableStringFieldUpdateOperationsInput!,
    $team: NullableStringFieldUpdateOperationsInput!,
    $ticket_id: NullableBigIntFieldUpdateOperationsInput!,
    $ticketing: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    $websites: NullableStringFieldUpdateOperationsInput!,
    $workspaces: NullableStringFieldUpdateOperationsInput!,
    $zone: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneProjects (
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
    where: {
    id: $id,
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
