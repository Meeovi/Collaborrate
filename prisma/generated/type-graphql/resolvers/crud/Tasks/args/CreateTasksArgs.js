"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksCreateInput_1 = require("../../../inputs/TasksCreateInput");
let CreateTasksArgs = class CreateTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCreateInput_1.TasksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksCreateInput_1.TasksCreateInput)
], CreateTasksArgs.prototype, "data", void 0);
CreateTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTasksArgs);
exports.CreateTasksArgs = CreateTasksArgs;
