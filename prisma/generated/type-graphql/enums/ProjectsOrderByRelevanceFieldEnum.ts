import * as TypeGraphQL from "type-graphql";

export enum ProjectsOrderByRelevanceFieldEnum {
  name = "name",
  project_manager = "project_manager",
  start_date = "start_date",
  end_date = "end_date",
  resource = "resource",
  considerworkingdays = "considerworkingdays",
  project_template = "project_template",
  status = "status",
  priority = "priority",
  assignee = "assignee",
  doing = "doing",
  done = "done",
  section_rule = "section_rule",
  goal_name = "goal_name",
  goal_timeperiod = "goal_timeperiod",
  goal_privacy = "goal_privacy",
  goal_collaborators = "goal_collaborators",
  goal_updatemethod = "goal_updatemethod",
  goal_progress_source = "goal_progress_source",
  goal_measurement = "goal_measurement"
}
TypeGraphQL.registerEnumType(ProjectsOrderByRelevanceFieldEnum, {
  name: "ProjectsOrderByRelevanceFieldEnum",
  description: undefined,
});
