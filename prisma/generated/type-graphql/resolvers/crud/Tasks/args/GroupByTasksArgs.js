"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksOrderByWithAggregationInput_1 = require("../../../inputs/TasksOrderByWithAggregationInput");
const TasksScalarWhereWithAggregatesInput_1 = require("../../../inputs/TasksScalarWhereWithAggregatesInput");
const TasksWhereInput_1 = require("../../../inputs/TasksWhereInput");
const TasksScalarFieldEnum_1 = require("../../../../enums/TasksScalarFieldEnum");
let GroupByTasksArgs = class GroupByTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereInput_1.TasksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereInput_1.TasksWhereInput)
], GroupByTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksOrderByWithAggregationInput_1.TasksOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTasksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksScalarFieldEnum_1.TasksScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTasksArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksScalarWhereWithAggregatesInput_1.TasksScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksScalarWhereWithAggregatesInput_1.TasksScalarWhereWithAggregatesInput)
], GroupByTasksArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTasksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTasksArgs.prototype, "skip", void 0);
GroupByTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTasksArgs);
exports.GroupByTasksArgs = GroupByTasksArgs;
