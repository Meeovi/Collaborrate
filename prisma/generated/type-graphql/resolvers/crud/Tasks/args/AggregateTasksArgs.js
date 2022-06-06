"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksOrderByWithRelationInput_1 = require("../../../inputs/TasksOrderByWithRelationInput");
const TasksWhereInput_1 = require("../../../inputs/TasksWhereInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let AggregateTasksArgs = class AggregateTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereInput_1.TasksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereInput_1.TasksWhereInput)
], AggregateTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksOrderByWithRelationInput_1.TasksOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTasksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], AggregateTasksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTasksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTasksArgs.prototype, "skip", void 0);
AggregateTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTasksArgs);
exports.AggregateTasksArgs = AggregateTasksArgs;
