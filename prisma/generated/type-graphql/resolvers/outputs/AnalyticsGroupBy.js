"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const AnalyticsAvgAggregate_1 = require("../outputs/AnalyticsAvgAggregate");
const AnalyticsCountAggregate_1 = require("../outputs/AnalyticsCountAggregate");
const AnalyticsMaxAggregate_1 = require("../outputs/AnalyticsMaxAggregate");
const AnalyticsMinAggregate_1 = require("../outputs/AnalyticsMinAggregate");
const AnalyticsSumAggregate_1 = require("../outputs/AnalyticsSumAggregate");
let AnalyticsGroupBy = class AnalyticsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AnalyticsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AnalyticsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "share_data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "website_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "tracking_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "property_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "default_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "property_hit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "tracking_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AnalyticsGroupBy.prototype, "data_collection", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AnalyticsGroupBy.prototype, "data_retention", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AnalyticsGroupBy.prototype, "search_analytics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsCountAggregate_1.AnalyticsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsCountAggregate_1.AnalyticsCountAggregate)
], AnalyticsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsAvgAggregate_1.AnalyticsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsAvgAggregate_1.AnalyticsAvgAggregate)
], AnalyticsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsSumAggregate_1.AnalyticsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsSumAggregate_1.AnalyticsSumAggregate)
], AnalyticsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMinAggregate_1.AnalyticsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMinAggregate_1.AnalyticsMinAggregate)
], AnalyticsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsMaxAggregate_1.AnalyticsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsMaxAggregate_1.AnalyticsMaxAggregate)
], AnalyticsGroupBy.prototype, "_max", void 0);
AnalyticsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AnalyticsGroupBy", {
        isAbstract: true
    })
], AnalyticsGroupBy);
exports.AnalyticsGroupBy = AnalyticsGroupBy;
