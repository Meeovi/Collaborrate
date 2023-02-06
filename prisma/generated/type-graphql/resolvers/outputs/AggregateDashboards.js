"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboards = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsAvgAggregate_1 = require("../outputs/DashboardsAvgAggregate");
const DashboardsCountAggregate_1 = require("../outputs/DashboardsCountAggregate");
const DashboardsMaxAggregate_1 = require("../outputs/DashboardsMaxAggregate");
const DashboardsMinAggregate_1 = require("../outputs/DashboardsMinAggregate");
const DashboardsSumAggregate_1 = require("../outputs/DashboardsSumAggregate");
let AggregateDashboards = class AggregateDashboards {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsCountAggregate_1.DashboardsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsCountAggregate_1.DashboardsCountAggregate)
], AggregateDashboards.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsAvgAggregate_1.DashboardsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsAvgAggregate_1.DashboardsAvgAggregate)
], AggregateDashboards.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsSumAggregate_1.DashboardsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsSumAggregate_1.DashboardsSumAggregate)
], AggregateDashboards.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMinAggregate_1.DashboardsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMinAggregate_1.DashboardsMinAggregate)
], AggregateDashboards.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMaxAggregate_1.DashboardsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMaxAggregate_1.DashboardsMaxAggregate)
], AggregateDashboards.prototype, "_max", void 0);
AggregateDashboards = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboards", {
        isAbstract: true
    })
], AggregateDashboards);
exports.AggregateDashboards = AggregateDashboards;
