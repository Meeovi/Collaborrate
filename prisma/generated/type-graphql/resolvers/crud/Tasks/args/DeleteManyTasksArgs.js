"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksWhereInput_1 = require("../../../inputs/TasksWhereInput");
let DeleteManyTasksArgs = class DeleteManyTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereInput_1.TasksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereInput_1.TasksWhereInput)
], DeleteManyTasksArgs.prototype, "where", void 0);
DeleteManyTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTasksArgs);
exports.DeleteManyTasksArgs = DeleteManyTasksArgs;
