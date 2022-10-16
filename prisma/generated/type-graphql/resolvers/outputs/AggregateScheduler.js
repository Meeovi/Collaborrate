"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateScheduler = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerAvgAggregate_1 = require("../outputs/SchedulerAvgAggregate");
const SchedulerCountAggregate_1 = require("../outputs/SchedulerCountAggregate");
const SchedulerMaxAggregate_1 = require("../outputs/SchedulerMaxAggregate");
const SchedulerMinAggregate_1 = require("../outputs/SchedulerMinAggregate");
const SchedulerSumAggregate_1 = require("../outputs/SchedulerSumAggregate");
let AggregateScheduler = class AggregateScheduler {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerCountAggregate_1.SchedulerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerCountAggregate_1.SchedulerCountAggregate)
], AggregateScheduler.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerAvgAggregate_1.SchedulerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerAvgAggregate_1.SchedulerAvgAggregate)
], AggregateScheduler.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerSumAggregate_1.SchedulerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerSumAggregate_1.SchedulerSumAggregate)
], AggregateScheduler.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMinAggregate_1.SchedulerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMinAggregate_1.SchedulerMinAggregate)
], AggregateScheduler.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerMaxAggregate_1.SchedulerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerMaxAggregate_1.SchedulerMaxAggregate)
], AggregateScheduler.prototype, "_max", void 0);
AggregateScheduler = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateScheduler", {
        isAbstract: true
    })
], AggregateScheduler);
exports.AggregateScheduler = AggregateScheduler;
