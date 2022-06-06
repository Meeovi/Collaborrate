"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let TasksWhereUniqueInput = class TasksWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TasksWhereUniqueInput.prototype, "id", void 0);
TasksWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TasksWhereUniqueInput", {
        isAbstract: true
    })
], TasksWhereUniqueInput);
exports.TasksWhereUniqueInput = TasksWhereUniqueInput;
