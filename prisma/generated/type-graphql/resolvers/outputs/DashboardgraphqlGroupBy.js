"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlAvgAggregate_1 = require("../outputs/DashboardgraphqlAvgAggregate");
const DashboardgraphqlCountAggregate_1 = require("../outputs/DashboardgraphqlCountAggregate");
const DashboardgraphqlMaxAggregate_1 = require("../outputs/DashboardgraphqlMaxAggregate");
const DashboardgraphqlMinAggregate_1 = require("../outputs/DashboardgraphqlMinAggregate");
const DashboardgraphqlSumAggregate_1 = require("../outputs/DashboardgraphqlSumAggregate");
let DashboardgraphqlGroupBy = class DashboardgraphqlGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardgraphqlGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlCountAggregate_1.DashboardgraphqlCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlCountAggregate_1.DashboardgraphqlCountAggregate)
], DashboardgraphqlGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlAvgAggregate_1.DashboardgraphqlAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlAvgAggregate_1.DashboardgraphqlAvgAggregate)
], DashboardgraphqlGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlSumAggregate_1.DashboardgraphqlSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlSumAggregate_1.DashboardgraphqlSumAggregate)
], DashboardgraphqlGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMinAggregate_1.DashboardgraphqlMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMinAggregate_1.DashboardgraphqlMinAggregate)
], DashboardgraphqlGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlMaxAggregate_1.DashboardgraphqlMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlMaxAggregate_1.DashboardgraphqlMaxAggregate)
], DashboardgraphqlGroupBy.prototype, "_max", void 0);
DashboardgraphqlGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardgraphqlGroupBy", {
        isAbstract: true
    })
], DashboardgraphqlGroupBy);
exports.DashboardgraphqlGroupBy = DashboardgraphqlGroupBy;
