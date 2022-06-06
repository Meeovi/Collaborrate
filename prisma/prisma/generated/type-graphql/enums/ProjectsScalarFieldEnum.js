"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProjectsScalarFieldEnum;
(function (ProjectsScalarFieldEnum) {
    ProjectsScalarFieldEnum["id"] = "id";
    ProjectsScalarFieldEnum["name"] = "name";
    ProjectsScalarFieldEnum["project_manager"] = "project_manager";
    ProjectsScalarFieldEnum["start_date"] = "start_date";
    ProjectsScalarFieldEnum["end_date"] = "end_date";
    ProjectsScalarFieldEnum["resource"] = "resource";
    ProjectsScalarFieldEnum["considerworkingdays"] = "considerworkingdays";
    ProjectsScalarFieldEnum["project_template"] = "project_template";
    ProjectsScalarFieldEnum["status"] = "status";
    ProjectsScalarFieldEnum["created_at"] = "created_at";
})(ProjectsScalarFieldEnum = exports.ProjectsScalarFieldEnum || (exports.ProjectsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProjectsScalarFieldEnum, {
    name: "ProjectsScalarFieldEnum",
    description: undefined,
});
