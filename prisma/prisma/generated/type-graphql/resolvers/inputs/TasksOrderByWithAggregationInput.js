"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksAvgOrderByAggregateInput_1 = require("../inputs/TasksAvgOrderByAggregateInput");
const TasksCountOrderByAggregateInput_1 = require("../inputs/TasksCountOrderByAggregateInput");
const TasksMaxOrderByAggregateInput_1 = require("../inputs/TasksMaxOrderByAggregateInput");
const TasksMinOrderByAggregateInput_1 = require("../inputs/TasksMinOrderByAggregateInput");
const TasksSumOrderByAggregateInput_1 = require("../inputs/TasksSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TasksOrderByWithAggregationInput = class TasksOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "due_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "related_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "contact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TasksOrderByWithAggregationInput.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCountOrderByAggregateInput_1.TasksCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksCountOrderByAggregateInput_1.TasksCountOrderByAggregateInput)
], TasksOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksAvgOrderByAggregateInput_1.TasksAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksAvgOrderByAggregateInput_1.TasksAvgOrderByAggregateInput)
], TasksOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMaxOrderByAggregateInput_1.TasksMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMaxOrderByAggregateInput_1.TasksMaxOrderByAggregateInput)
], TasksOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMinOrderByAggregateInput_1.TasksMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMinOrderByAggregateInput_1.TasksMinOrderByAggregateInput)
], TasksOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksSumOrderByAggregateInput_1.TasksSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksSumOrderByAggregateInput_1.TasksSumOrderByAggregateInput)
], TasksOrderByWithAggregationInput.prototype, "_sum", void 0);
TasksOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TasksOrderByWithAggregationInput", {
        isAbstract: true
    })
], TasksOrderByWithAggregationInput);
exports.TasksOrderByWithAggregationInput = TasksOrderByWithAggregationInput;
