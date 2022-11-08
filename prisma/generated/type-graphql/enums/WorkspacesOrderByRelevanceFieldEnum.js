"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WorkspacesOrderByRelevanceFieldEnum;
(function (WorkspacesOrderByRelevanceFieldEnum) {
    WorkspacesOrderByRelevanceFieldEnum["code"] = "code";
    WorkspacesOrderByRelevanceFieldEnum["name"] = "name";
    WorkspacesOrderByRelevanceFieldEnum["description"] = "description";
    WorkspacesOrderByRelevanceFieldEnum["author"] = "author";
    WorkspacesOrderByRelevanceFieldEnum["media"] = "media";
    WorkspacesOrderByRelevanceFieldEnum["brands_brandsToworkspaces"] = "brands_brandsToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["categories"] = "categories";
    WorkspacesOrderByRelevanceFieldEnum["customers_customersToworkspaces"] = "customers_customersToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["products_productsToworkspaces"] = "products_productsToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["projects_projectsToworkspaces"] = "projects_projectsToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["shops_shopsToworkspaces"] = "shops_shopsToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["tasks_tasksToworkspaces"] = "tasks_tasksToworkspaces";
    WorkspacesOrderByRelevanceFieldEnum["users_usersToworkspaces"] = "users_usersToworkspaces";
})(WorkspacesOrderByRelevanceFieldEnum = exports.WorkspacesOrderByRelevanceFieldEnum || (exports.WorkspacesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(WorkspacesOrderByRelevanceFieldEnum, {
    name: "WorkspacesOrderByRelevanceFieldEnum",
    description: undefined,
});
