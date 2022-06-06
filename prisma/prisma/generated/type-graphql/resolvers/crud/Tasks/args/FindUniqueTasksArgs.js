"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksWhereUniqueInput_1 = require("../../../inputs/TasksWhereUniqueInput");
let FindUniqueTasksArgs = class FindUniqueTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereUniqueInput_1.TasksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksWhereUniqueInput_1.TasksWhereUniqueInput)
], FindUniqueTasksArgs.prototype, "where", void 0);
FindUniqueTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTasksArgs);
exports.FindUniqueTasksArgs = FindUniqueTasksArgs;
