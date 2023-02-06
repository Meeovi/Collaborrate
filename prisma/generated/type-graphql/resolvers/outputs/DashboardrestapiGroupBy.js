"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiAvgAggregate_1 = require("../outputs/DashboardrestapiAvgAggregate");
const DashboardrestapiCountAggregate_1 = require("../outputs/DashboardrestapiCountAggregate");
const DashboardrestapiMaxAggregate_1 = require("../outputs/DashboardrestapiMaxAggregate");
const DashboardrestapiMinAggregate_1 = require("../outputs/DashboardrestapiMinAggregate");
const DashboardrestapiSumAggregate_1 = require("../outputs/DashboardrestapiSumAggregate");
let DashboardrestapiGroupBy = class DashboardrestapiGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardrestapiGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiCountAggregate_1.DashboardrestapiCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiCountAggregate_1.DashboardrestapiCountAggregate)
], DashboardrestapiGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiAvgAggregate_1.DashboardrestapiAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiAvgAggregate_1.DashboardrestapiAvgAggregate)
], DashboardrestapiGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiSumAggregate_1.DashboardrestapiSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiSumAggregate_1.DashboardrestapiSumAggregate)
], DashboardrestapiGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMinAggregate_1.DashboardrestapiMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMinAggregate_1.DashboardrestapiMinAggregate)
], DashboardrestapiGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiMaxAggregate_1.DashboardrestapiMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiMaxAggregate_1.DashboardrestapiMaxAggregate)
], DashboardrestapiGroupBy.prototype, "_max", void 0);
DashboardrestapiGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardrestapiGroupBy", {
        isAbstract: true
    })
], DashboardrestapiGroupBy);
exports.DashboardrestapiGroupBy = DashboardrestapiGroupBy;
