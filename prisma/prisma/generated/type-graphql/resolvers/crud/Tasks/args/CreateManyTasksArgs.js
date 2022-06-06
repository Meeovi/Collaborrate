"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksCreateManyInput_1 = require("../../../inputs/TasksCreateManyInput");
let CreateManyTasksArgs = class CreateManyTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TasksCreateManyInput_1.TasksCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTasksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTasksArgs.prototype, "skipDuplicates", void 0);
CreateManyTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTasksArgs);
exports.CreateManyTasksArgs = CreateManyTasksArgs;
