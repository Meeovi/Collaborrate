"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksCreateInput_1 = require("../../../inputs/TasksCreateInput");
const TasksUpdateInput_1 = require("../../../inputs/TasksUpdateInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let UpsertTasksArgs = class UpsertTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], UpsertTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCreateInput_1.TasksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksCreateInput_1.TasksCreateInput)
], UpsertTasksArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksUpdateInput_1.TasksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksUpdateInput_1.TasksUpdateInput)
], UpsertTasksArgs.prototype, "update", void 0);
UpsertTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTasksArgs);
exports.UpsertTasksArgs = UpsertTasksArgs;
