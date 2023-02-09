"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardjson = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonAvgAggregate_1 = require("../outputs/DashboardjsonAvgAggregate");
const DashboardjsonCountAggregate_1 = require("../outputs/DashboardjsonCountAggregate");
const DashboardjsonMaxAggregate_1 = require("../outputs/DashboardjsonMaxAggregate");
const DashboardjsonMinAggregate_1 = require("../outputs/DashboardjsonMinAggregate");
const DashboardjsonSumAggregate_1 = require("../outputs/DashboardjsonSumAggregate");
let AggregateDashboardjson = class AggregateDashboardjson {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonCountAggregate_1.DashboardjsonCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonCountAggregate_1.DashboardjsonCountAggregate)
], AggregateDashboardjson.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonAvgAggregate_1.DashboardjsonAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonAvgAggregate_1.DashboardjsonAvgAggregate)
], AggregateDashboardjson.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonSumAggregate_1.DashboardjsonSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonSumAggregate_1.DashboardjsonSumAggregate)
], AggregateDashboardjson.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMinAggregate_1.DashboardjsonMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMinAggregate_1.DashboardjsonMinAggregate)
], AggregateDashboardjson.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMaxAggregate_1.DashboardjsonMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMaxAggregate_1.DashboardjsonMaxAggregate)
], AggregateDashboardjson.prototype, "_max", void 0);
AggregateDashboardjson = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDashboardjson", {
        isAbstract: true
    })
], AggregateDashboardjson);
exports.AggregateDashboardjson = AggregateDashboardjson;
