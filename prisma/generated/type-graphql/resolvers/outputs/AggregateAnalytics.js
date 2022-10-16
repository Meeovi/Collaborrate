"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAnalytics = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsAvgAggregate_1 = require("../outputs/AnalyticsAvgAggregate");
const AnalyticsCountAggregate_1 = require("../outputs/AnalyticsCountAggregate");
const AnalyticsMaxAggregate_1 = require("../outputs/AnalyticsMaxAggregate");
const AnalyticsMinAggregate_1 = require("../outputs/AnalyticsMinAggregate");
const AnalyticsSumAggregate_1 = require("../outputs/AnalyticsSumAggregate");
let AggregateAnalytics = class AggregateAnalytics {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsCountAggregate_1.AnalyticsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsCountAggregate_1.AnalyticsCountAggregate)
], AggregateAnalytics.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsAvgAggregate_1.AnalyticsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsAvgAggregate_1.AnalyticsAvgAggregate)
], AggregateAnalytics.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsSumAggregate_1.AnalyticsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsSumAggregate_1.AnalyticsSumAggregate)
], AggregateAnalytics.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMinAggregate_1.AnalyticsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMinAggregate_1.AnalyticsMinAggregate)
], AggregateAnalytics.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMaxAggregate_1.AnalyticsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMaxAggregate_1.AnalyticsMaxAggregate)
], AggregateAnalytics.prototype, "_max", void 0);
AggregateAnalytics = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAnalytics", {
        isAbstract: true
    })
], AggregateAnalytics);
exports.AggregateAnalytics = AggregateAnalytics;
