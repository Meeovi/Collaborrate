"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TasksAvgAggregate_1 = require("../outputs/TasksAvgAggregate");
const TasksCountAggregate_1 = require("../outputs/TasksCountAggregate");
const TasksMaxAggregate_1 = require("../outputs/TasksMaxAggregate");
const TasksMinAggregate_1 = require("../outputs/TasksMinAggregate");
const TasksSumAggregate_1 = require("../outputs/TasksSumAggregate");
let TasksGroupBy = class TasksGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TasksGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TasksGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "due_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "related_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TasksGroupBy.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCountAggregate_1.TasksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksCountAggregate_1.TasksCountAggregate)
], TasksGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksAvgAggregate_1.TasksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksAvgAggregate_1.TasksAvgAggregate)
], TasksGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksSumAggregate_1.TasksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksSumAggregate_1.TasksSumAggregate)
], TasksGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMinAggregate_1.TasksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMinAggregate_1.TasksMinAggregate)
], TasksGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMaxAggregate_1.TasksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMaxAggregate_1.TasksMaxAggregate)
], TasksGroupBy.prototype, "_max", void 0);
TasksGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TasksGroupBy", {
        isAbstract: true
    })
], TasksGroupBy);
exports.TasksGroupBy = TasksGroupBy;
