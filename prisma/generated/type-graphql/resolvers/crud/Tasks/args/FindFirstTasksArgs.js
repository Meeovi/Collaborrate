"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksOrderByWithRelationInput_1 = require("../../../inputs/TasksOrderByWithRelationInput");
const TasksWhereInput_1 = require("../../../inputs/TasksWhereInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
const TasksScalarFieldEnum_1 = require("../../../../enums/TasksScalarFieldEnum");
let FindFirstTasksArgs = class FindFirstTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereInput_1.TasksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereInput_1.TasksWhereInput)
], FindFirstTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksOrderByWithRelationInput_1.TasksOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTasksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], FindFirstTasksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTasksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTasksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksScalarFieldEnum_1.TasksScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTasksArgs.prototype, "distinct", void 0);
FindFirstTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTasksArgs);
exports.FindFirstTasksArgs = FindFirstTasksArgs;
