"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TasksScalarFieldEnum;
(function (TasksScalarFieldEnum) {
    TasksScalarFieldEnum["id"] = "id";
    TasksScalarFieldEnum["created_at"] = "created_at";
    TasksScalarFieldEnum["subject"] = "subject";
    TasksScalarFieldEnum["start_date"] = "start_date";
    TasksScalarFieldEnum["due_date"] = "due_date";
    TasksScalarFieldEnum["priority"] = "priority";
    TasksScalarFieldEnum["description"] = "description";
    TasksScalarFieldEnum["status"] = "status";
    TasksScalarFieldEnum["related_to"] = "related_to";
    TasksScalarFieldEnum["contact"] = "contact";
    TasksScalarFieldEnum["assigned_to"] = "assigned_to";
    TasksScalarFieldEnum["date_modified"] = "date_modified";
})(TasksScalarFieldEnum = exports.TasksScalarFieldEnum || (exports.TasksScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TasksScalarFieldEnum, {
    name: "TasksScalarFieldEnum",
    description: undefined,
});
