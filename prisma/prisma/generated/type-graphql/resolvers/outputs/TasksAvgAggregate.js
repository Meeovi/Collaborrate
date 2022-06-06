"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TasksAvgAggregate = class TasksAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TasksAvgAggregate.prototype, "id", void 0);
TasksAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TasksAvgAggregate", {
        isAbstract: true
    })
], TasksAvgAggregate);
exports.TasksAvgAggregate = TasksAvgAggregate;
