"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardgraphql = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlAvgAggregate_1 = require("../outputs/DashboardgraphqlAvgAggregate");
const DashboardgraphqlCountAggregate_1 = require("../outputs/DashboardgraphqlCountAggregate");
const DashboardgraphqlMaxAggregate_1 = require("../outputs/DashboardgraphqlMaxAggregate");
const DashboardgraphqlMinAggregate_1 = require("../outputs/DashboardgraphqlMinAggregate");
const DashboardgraphqlSumAggregate_1 = require("../outputs/DashboardgraphqlSumAggregate");
let AggregateDashboardgraphql = class AggregateDashboardgraphql {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlCountAggregate_1.DashboardgraphqlCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlCountAggregate_1.DashboardgraphqlCountAggregate)
], AggregateDashboardgraphql.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlAvgAggregate_1.DashboardgraphqlAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlAvgAggregate_1.DashboardgraphqlAvgAggregate)
], AggregateDashboardgraphql.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlSumAggregate_1.DashboardgraphqlSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlSumAggregate_1.DashboardgraphqlSumAggregate)
], AggregateDashboardgraphql.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMinAggregate_1.DashboardgraphqlMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMinAggregate_1.DashboardgraphqlMinAggregate)
], AggregateDashboardgraphql.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMaxAggregate_1.DashboardgraphqlMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMaxAggregate_1.DashboardgraphqlMaxAggregate)
], AggregateDashboardgraphql.prototype, "_max", void 0);
AggregateDashboardgraphql = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboardgraphql", {
        isAbstract: true
    })
], AggregateDashboardgraphql);
exports.AggregateDashboardgraphql = AggregateDashboardgraphql;
