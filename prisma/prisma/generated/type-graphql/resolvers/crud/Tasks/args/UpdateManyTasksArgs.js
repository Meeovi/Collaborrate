"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksUpdateManyMutationInput_1 = require("../../../inputs/TasksUpdateManyMutationInput");
const TasksWhereInput_1 = require("../../../inputs/TasksWhereInput");
let UpdateManyTasksArgs = class UpdateManyTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksUpdateManyMutationInput_1.TasksUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TasksUpdateManyMutationInput_1.TasksUpdateManyMutationInput)
], UpdateManyTasksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksWhereInput_1.TasksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksWhereInput_1.TasksWhereInput)
], UpdateManyTasksArgs.prototype, "where", void 0);
UpdateManyTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTasksArgs);
exports.UpdateManyTasksArgs = UpdateManyTasksArgs;
