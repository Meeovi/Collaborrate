"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProjectsOrderByRelevanceFieldEnum;
(function (ProjectsOrderByRelevanceFieldEnum) {
    ProjectsOrderByRelevanceFieldEnum["name"] = "name";
    ProjectsOrderByRelevanceFieldEnum["project_manager"] = "project_manager";
    ProjectsOrderByRelevanceFieldEnum["start_date"] = "start_date";
    ProjectsOrderByRelevanceFieldEnum["end_date"] = "end_date";
    ProjectsOrderByRelevanceFieldEnum["resource"] = "resource";
    ProjectsOrderByRelevanceFieldEnum["considerworkingdays"] = "considerworkingdays";
    ProjectsOrderByRelevanceFieldEnum["project_template"] = "project_template";
    ProjectsOrderByRelevanceFieldEnum["status"] = "status";
    ProjectsOrderByRelevanceFieldEnum["assignee"] = "assignee";
    ProjectsOrderByRelevanceFieldEnum["doing"] = "doing";
    ProjectsOrderByRelevanceFieldEnum["done"] = "done";
    ProjectsOrderByRelevanceFieldEnum["goal_collaborators"] = "goal_collaborators";
    ProjectsOrderByRelevanceFieldEnum["goal_measurement"] = "goal_measurement";
    ProjectsOrderByRelevanceFieldEnum["goal_name"] = "goal_name";
    ProjectsOrderByRelevanceFieldEnum["goal_privacy"] = "goal_privacy";
    ProjectsOrderByRelevanceFieldEnum["goal_progress_source"] = "goal_progress_source";
    ProjectsOrderByRelevanceFieldEnum["goal_timeperiod"] = "goal_timeperiod";
    ProjectsOrderByRelevanceFieldEnum["goal_updatemethod"] = "goal_updatemethod";
    ProjectsOrderByRelevanceFieldEnum["priority"] = "priority";
    ProjectsOrderByRelevanceFieldEnum["section_rule"] = "section_rule";
    ProjectsOrderByRelevanceFieldEnum["customers"] = "customers";
    ProjectsOrderByRelevanceFieldEnum["tasks"] = "tasks";
    ProjectsOrderByRelevanceFieldEnum["ticketing"] = "ticketing";
    ProjectsOrderByRelevanceFieldEnum["users"] = "users";
    ProjectsOrderByRelevanceFieldEnum["workspaces"] = "workspaces";
    ProjectsOrderByRelevanceFieldEnum["tags"] = "tags";
    ProjectsOrderByRelevanceFieldEnum["product"] = "product";
    ProjectsOrderByRelevanceFieldEnum["websites"] = "websites";
    ProjectsOrderByRelevanceFieldEnum["method"] = "method";
    ProjectsOrderByRelevanceFieldEnum["zone"] = "zone";
    ProjectsOrderByRelevanceFieldEnum["type"] = "type";
    ProjectsOrderByRelevanceFieldEnum["team"] = "team";
    ProjectsOrderByRelevanceFieldEnum["categories"] = "categories";
    ProjectsOrderByRelevanceFieldEnum["company"] = "company";
    ProjectsOrderByRelevanceFieldEnum["file"] = "file";
})(ProjectsOrderByRelevanceFieldEnum = exports.ProjectsOrderByRelevanceFieldEnum || (exports.ProjectsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ProjectsOrderByRelevanceFieldEnum, {
    name: "ProjectsOrderByRelevanceFieldEnum",
    description: undefined,
});
