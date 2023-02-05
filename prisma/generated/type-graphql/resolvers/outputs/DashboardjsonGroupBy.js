"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonAvgAggregate_1 = require("../outputs/DashboardjsonAvgAggregate");
const DashboardjsonCountAggregate_1 = require("../outputs/DashboardjsonCountAggregate");
const DashboardjsonMaxAggregate_1 = require("../outputs/DashboardjsonMaxAggregate");
const DashboardjsonMinAggregate_1 = require("../outputs/DashboardjsonMinAggregate");
const DashboardjsonSumAggregate_1 = require("../outputs/DashboardjsonSumAggregate");
let DashboardjsonGroupBy = class DashboardjsonGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardjsonGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonGroupBy.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonGroupBy.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonCountAggregate_1.DashboardjsonCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonCountAggregate_1.DashboardjsonCountAggregate)
], DashboardjsonGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonAvgAggregate_1.DashboardjsonAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonAvgAggregate_1.DashboardjsonAvgAggregate)
], DashboardjsonGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonSumAggregate_1.DashboardjsonSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonSumAggregate_1.DashboardjsonSumAggregate)
], DashboardjsonGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMinAggregate_1.DashboardjsonMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMinAggregate_1.DashboardjsonMinAggregate)
], DashboardjsonGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonMaxAggregate_1.DashboardjsonMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonMaxAggregate_1.DashboardjsonMaxAggregate)
], DashboardjsonGroupBy.prototype, "_max", void 0);
DashboardjsonGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardjsonGroupBy", {
        isAbstract: true
    })
], DashboardjsonGroupBy);
exports.DashboardjsonGroupBy = DashboardjsonGroupBy;
