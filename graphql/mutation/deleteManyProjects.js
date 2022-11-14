import gql from 'graphql-tag'
export const deleteManyProjects = gql`
mutation (
    where: {
    $AND: [ProjectsWhereInput!]!,
    $NOT: [ProjectsWhereInput!]!,
    $OR: [ProjectsWhereInput!]!,
    $assignee: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $company: StringNullableFilter!,
    $considerworkingdays: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $cust_id: IntNullableFilter!,
    $customers: StringNullableFilter!,
    $doing: StringNullableFilter!,
    $done: StringNullableFilter!,
    $end_date: StringNullableFilter!,
    $file: StringNullableFilter!,
    $goal_collaborators: StringNullableFilter!,
    $goal_measurement: StringNullableFilter!,
    $goal_name: StringNullableFilter!,
    $goal_privacy: StringNullableFilter!,
    $goal_progress_source: StringNullableFilter!,
    $goal_timeperiod: StringNullableFilter!,
    $goal_updatemethod: StringNullableFilter!,
    $id: BigIntFilter!,
    $method: StringNullableFilter!,
    $name: StringNullableFilter!,
    $priority: StringNullableFilter!,
    $product: StringNullableFilter!,
    $project_manager: StringNullableFilter!,
    $project_template: StringNullableFilter!,
    $resource: StringNullableFilter!,
    $section_rule: StringNullableFilter!,
    $staff_id: IntNullableFilter!,
    $start_date: StringNullableFilter!,
    $status: StringNullableFilter!,
    $tags: StringNullableFilter!,
    $task_id: BigIntNullableFilter!,
    $tasks: StringNullableFilter!,
    $team: StringNullableFilter!,
    $ticket_id: BigIntNullableFilter!,
    $ticketing: StringNullableFilter!,
    $type: StringNullableFilter!,
    $users: StringNullableFilter!,
    $websites: StringNullableFilter!,
    $workspaces: StringNullableFilter!,
    $zone: StringNullableFilter!,
    }
  ) {
deleteManyProjects (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
    count
  }`
