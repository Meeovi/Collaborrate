"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsAvgAggregate_1 = require("../outputs/StatisticsAvgAggregate");
const StatisticsCountAggregate_1 = require("../outputs/StatisticsCountAggregate");
const StatisticsMaxAggregate_1 = require("../outputs/StatisticsMaxAggregate");
const StatisticsMinAggregate_1 = require("../outputs/StatisticsMinAggregate");
const StatisticsSumAggregate_1 = require("../outputs/StatisticsSumAggregate");
let StatisticsGroupBy = class StatisticsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StatisticsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StatisticsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], StatisticsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatisticsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCountAggregate_1.StatisticsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsCountAggregate_1.StatisticsCountAggregate)
], StatisticsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsAvgAggregate_1.StatisticsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsAvgAggregate_1.StatisticsAvgAggregate)
], StatisticsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsSumAggregate_1.StatisticsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsSumAggregate_1.StatisticsSumAggregate)
], StatisticsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMinAggregate_1.StatisticsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMinAggregate_1.StatisticsMinAggregate)
], StatisticsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsMaxAggregate_1.StatisticsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsMaxAggregate_1.StatisticsMaxAggregate)
], StatisticsGroupBy.prototype, "_max", void 0);
StatisticsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatisticsGroupBy", {
        isAbstract: true
    })
], StatisticsGroupBy);
exports.StatisticsGroupBy = StatisticsGroupBy;
