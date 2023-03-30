"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardrestapi = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiAvgAggregate_1 = require("../outputs/DashboardrestapiAvgAggregate");
const DashboardrestapiCountAggregate_1 = require("../outputs/DashboardrestapiCountAggregate");
const DashboardrestapiMaxAggregate_1 = require("../outputs/DashboardrestapiMaxAggregate");
const DashboardrestapiMinAggregate_1 = require("../outputs/DashboardrestapiMinAggregate");
const DashboardrestapiSumAggregate_1 = require("../outputs/DashboardrestapiSumAggregate");
let AggregateDashboardrestapi = class AggregateDashboardrestapi {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiCountAggregate_1.DashboardrestapiCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiCountAggregate_1.DashboardrestapiCountAggregate)
], AggregateDashboardrestapi.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiAvgAggregate_1.DashboardrestapiAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiAvgAggregate_1.DashboardrestapiAvgAggregate)
], AggregateDashboardrestapi.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiSumAggregate_1.DashboardrestapiSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiSumAggregate_1.DashboardrestapiSumAggregate)
], AggregateDashboardrestapi.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMinAggregate_1.DashboardrestapiMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMinAggregate_1.DashboardrestapiMinAggregate)
], AggregateDashboardrestapi.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMaxAggregate_1.DashboardrestapiMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMaxAggregate_1.DashboardrestapiMaxAggregate)
], AggregateDashboardrestapi.prototype, "_max", void 0);
AggregateDashboardrestapi = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboardrestapi", {
        isAbstract: true
    })
], AggregateDashboardrestapi);
exports.AggregateDashboardrestapi = AggregateDashboardrestapi;
