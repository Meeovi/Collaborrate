"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const WorkspacesAvgAggregate_1 = require("../outputs/WorkspacesAvgAggregate");
const WorkspacesCountAggregate_1 = require("../outputs/WorkspacesCountAggregate");
const WorkspacesMaxAggregate_1 = require("../outputs/WorkspacesMaxAggregate");
const WorkspacesMinAggregate_1 = require("../outputs/WorkspacesMinAggregate");
const WorkspacesSumAggregate_1 = require("../outputs/WorkspacesSumAggregate");
let WorkspacesGroupBy = class WorkspacesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WorkspacesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspacesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkspacesGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkspacesGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WorkspacesGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WorkspacesGroupBy.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WorkspacesGroupBy.prototype, "brands", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkspacesGroupBy.prototype, "shops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WorkspacesGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WorkspacesGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WorkspacesGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "brands_brandsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "customers_customersToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "products_productsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "projects_projectsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "shops_shopsToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "tasks_tasksToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspacesGroupBy.prototype, "users_usersToworkspaces", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesCountAggregate_1.WorkspacesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesCountAggregate_1.WorkspacesCountAggregate)
], WorkspacesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesAvgAggregate_1.WorkspacesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesAvgAggregate_1.WorkspacesAvgAggregate)
], WorkspacesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesSumAggregate_1.WorkspacesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesSumAggregate_1.WorkspacesSumAggregate)
], WorkspacesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMinAggregate_1.WorkspacesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMinAggregate_1.WorkspacesMinAggregate)
], WorkspacesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesMaxAggregate_1.WorkspacesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesMaxAggregate_1.WorkspacesMaxAggregate)
], WorkspacesGroupBy.prototype, "_max", void 0);
WorkspacesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkspacesGroupBy", {
        isAbstract: true
    })
], WorkspacesGroupBy);
exports.WorkspacesGroupBy = WorkspacesGroupBy;
