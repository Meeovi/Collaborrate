"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Project_templatesScalarFieldEnum;
(function (Project_templatesScalarFieldEnum) {
    Project_templatesScalarFieldEnum["id"] = "id";
    Project_templatesScalarFieldEnum["name"] = "name";
    Project_templatesScalarFieldEnum["status"] = "status";
    Project_templatesScalarFieldEnum["consider_working_days"] = "consider_working_days";
    Project_templatesScalarFieldEnum["priority"] = "priority";
    Project_templatesScalarFieldEnum["project_manager"] = "project_manager";
    Project_templatesScalarFieldEnum["resource"] = "resource";
    Project_templatesScalarFieldEnum["content"] = "content";
})(Project_templatesScalarFieldEnum = exports.Project_templatesScalarFieldEnum || (exports.Project_templatesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Project_templatesScalarFieldEnum, {
    name: "Project_templatesScalarFieldEnum",
    description: undefined,
});
