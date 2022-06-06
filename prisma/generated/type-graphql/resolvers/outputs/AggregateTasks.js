"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTasks = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TasksAvgAggregate_1 = require("../outputs/TasksAvgAggregate");
const TasksCountAggregate_1 = require("../outputs/TasksCountAggregate");
const TasksMaxAggregate_1 = require("../outputs/TasksMaxAggregate");
const TasksMinAggregate_1 = require("../outputs/TasksMinAggregate");
const TasksSumAggregate_1 = require("../outputs/TasksSumAggregate");
let AggregateTasks = class AggregateTasks {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksCountAggregate_1.TasksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksCountAggregate_1.TasksCountAggregate)
], AggregateTasks.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksAvgAggregate_1.TasksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksAvgAggregate_1.TasksAvgAggregate)
], AggregateTasks.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksSumAggregate_1.TasksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksSumAggregate_1.TasksSumAggregate)
], AggregateTasks.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMinAggregate_1.TasksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMinAggregate_1.TasksMinAggregate)
], AggregateTasks.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TasksMaxAggregate_1.TasksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TasksMaxAggregate_1.TasksMaxAggregate)
], AggregateTasks.prototype, "_max", void 0);
AggregateTasks = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTasks", {
        isAbstract: true
    })
], AggregateTasks);
exports.AggregateTasks = AggregateTasks;
