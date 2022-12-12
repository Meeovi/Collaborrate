"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WorkspacesScalarFieldEnum;
(function (WorkspacesScalarFieldEnum) {
    WorkspacesScalarFieldEnum["id"] = "id";
    WorkspacesScalarFieldEnum["created_at"] = "created_at";
    WorkspacesScalarFieldEnum["code"] = "code";
    WorkspacesScalarFieldEnum["name"] = "name";
    WorkspacesScalarFieldEnum["description"] = "description";
    WorkspacesScalarFieldEnum["customers"] = "customers";
    WorkspacesScalarFieldEnum["users"] = "users";
    WorkspacesScalarFieldEnum["products"] = "products";
    WorkspacesScalarFieldEnum["tasks"] = "tasks";
    WorkspacesScalarFieldEnum["brands"] = "brands";
    WorkspacesScalarFieldEnum["shops"] = "shops";
    WorkspacesScalarFieldEnum["category"] = "category";
    WorkspacesScalarFieldEnum["isPublic"] = "isPublic";
    WorkspacesScalarFieldEnum["projects"] = "projects";
    WorkspacesScalarFieldEnum["author"] = "author";
    WorkspacesScalarFieldEnum["media"] = "media";
    WorkspacesScalarFieldEnum["brands_brandsToworkspaces"] = "brands_brandsToworkspaces";
    WorkspacesScalarFieldEnum["categories"] = "categories";
    WorkspacesScalarFieldEnum["customers_customersToworkspaces"] = "customers_customersToworkspaces";
    WorkspacesScalarFieldEnum["products_productsToworkspaces"] = "products_productsToworkspaces";
    WorkspacesScalarFieldEnum["projects_projectsToworkspaces"] = "projects_projectsToworkspaces";
    WorkspacesScalarFieldEnum["shops_shopsToworkspaces"] = "shops_shopsToworkspaces";
    WorkspacesScalarFieldEnum["tasks_tasksToworkspaces"] = "tasks_tasksToworkspaces";
    WorkspacesScalarFieldEnum["users_usersToworkspaces"] = "users_usersToworkspaces";
})(WorkspacesScalarFieldEnum = exports.WorkspacesScalarFieldEnum || (exports.WorkspacesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WorkspacesScalarFieldEnum, {
    name: "WorkspacesScalarFieldEnum",
    description: undefined,
});
