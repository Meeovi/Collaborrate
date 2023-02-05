"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslist = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistAvgAggregate_1 = require("../outputs/DashboardslistAvgAggregate");
const DashboardslistCountAggregate_1 = require("../outputs/DashboardslistCountAggregate");
const DashboardslistMaxAggregate_1 = require("../outputs/DashboardslistMaxAggregate");
const DashboardslistMinAggregate_1 = require("../outputs/DashboardslistMinAggregate");
const DashboardslistSumAggregate_1 = require("../outputs/DashboardslistSumAggregate");
let AggregateDashboardslist = class AggregateDashboardslist {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistCountAggregate_1.DashboardslistCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistCountAggregate_1.DashboardslistCountAggregate)
], AggregateDashboardslist.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistAvgAggregate_1.DashboardslistAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistAvgAggregate_1.DashboardslistAvgAggregate)
], AggregateDashboardslist.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistSumAggregate_1.DashboardslistSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistSumAggregate_1.DashboardslistSumAggregate)
], AggregateDashboardslist.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMinAggregate_1.DashboardslistMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMinAggregate_1.DashboardslistMinAggregate)
], AggregateDashboardslist.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMaxAggregate_1.DashboardslistMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMaxAggregate_1.DashboardslistMaxAggregate)
], AggregateDashboardslist.prototype, "_max", void 0);
AggregateDashboardslist = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboardslist", {
        isAbstract: true
    })
], AggregateDashboardslist);
exports.AggregateDashboardslist = AggregateDashboardslist;
