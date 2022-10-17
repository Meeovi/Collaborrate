"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesAvgOrderByAggregateInput_1 = require("../inputs/WorkspacesAvgOrderByAggregateInput");
const WorkspacesCountOrderByAggregateInput_1 = require("../inputs/WorkspacesCountOrderByAggregateInput");
const WorkspacesMaxOrderByAggregateInput_1 = require("../inputs/WorkspacesMaxOrderByAggregateInput");
const WorkspacesMinOrderByAggregateInput_1 = require("../inputs/WorkspacesMinOrderByAggregateInput");
const WorkspacesSumOrderByAggregateInput_1 = require("../inputs/WorkspacesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WorkspacesOrderByWithAggregationInput = class WorkspacesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "brands", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "shops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "brands_brandsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "customers_customersToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "products_productsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "projects_projectsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "shops_shopsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "tasks_tasksToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesOrderByWithAggregationInput.prototype, "users_usersToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesCountOrderByAggregateInput_1.WorkspacesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesCountOrderByAggregateInput_1.WorkspacesCountOrderByAggregateInput)
], WorkspacesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesAvgOrderByAggregateInput_1.WorkspacesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesAvgOrderByAggregateInput_1.WorkspacesAvgOrderByAggregateInput)
], WorkspacesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMaxOrderByAggregateInput_1.WorkspacesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMaxOrderByAggregateInput_1.WorkspacesMaxOrderByAggregateInput)
], WorkspacesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMinOrderByAggregateInput_1.WorkspacesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMinOrderByAggregateInput_1.WorkspacesMinOrderByAggregateInput)
], WorkspacesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesSumOrderByAggregateInput_1.WorkspacesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesSumOrderByAggregateInput_1.WorkspacesSumOrderByAggregateInput)
], WorkspacesOrderByWithAggregationInput.prototype, "_sum", void 0);
WorkspacesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspacesOrderByWithAggregationInput", {
        isAbstract: true
    })
], WorkspacesOrderByWithAggregationInput);
exports.WorkspacesOrderByWithAggregationInput = WorkspacesOrderByWithAggregationInput;
