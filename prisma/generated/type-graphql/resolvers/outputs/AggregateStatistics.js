"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatistics = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsAvgAggregate_1 = require("../outputs/StatisticsAvgAggregate");
const StatisticsCountAggregate_1 = require("../outputs/StatisticsCountAggregate");
const StatisticsMaxAggregate_1 = require("../outputs/StatisticsMaxAggregate");
const StatisticsMinAggregate_1 = require("../outputs/StatisticsMinAggregate");
const StatisticsSumAggregate_1 = require("../outputs/StatisticsSumAggregate");
let AggregateStatistics = class AggregateStatistics {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCountAggregate_1.StatisticsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsCountAggregate_1.StatisticsCountAggregate)
], AggregateStatistics.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsAvgAggregate_1.StatisticsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsAvgAggregate_1.StatisticsAvgAggregate)
], AggregateStatistics.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsSumAggregate_1.StatisticsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsSumAggregate_1.StatisticsSumAggregate)
], AggregateStatistics.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMinAggregate_1.StatisticsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMinAggregate_1.StatisticsMinAggregate)
], AggregateStatistics.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMaxAggregate_1.StatisticsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMaxAggregate_1.StatisticsMaxAggregate)
], AggregateStatistics.prototype, "_max", void 0);
AggregateStatistics = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStatistics", {
        isAbstract: true
    })
], AggregateStatistics);
exports.AggregateStatistics = AggregateStatistics;
