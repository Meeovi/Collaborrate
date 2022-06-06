"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksUpdateInput_1 = require("../../../inputs/TasksUpdateInput");
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let UpdateTasksArgs = class UpdateTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksUpdateInput_1.TasksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksUpdateInput_1.TasksUpdateInput)
], UpdateTasksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], UpdateTasksArgs.prototype, "where", void 0);
UpdateTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTasksArgs);
exports.UpdateTasksArgs = UpdateTasksArgs;
