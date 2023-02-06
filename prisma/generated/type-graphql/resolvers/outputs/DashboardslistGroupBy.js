"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslistGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DashboardslistAvgAggregate_1 = require("../outputs/DashboardslistAvgAggregate");
const DashboardslistCountAggregate_1 = require("../outputs/DashboardslistCountAggregate");
const DashboardslistMaxAggregate_1 = require("../outputs/DashboardslistMaxAggregate");
const DashboardslistMinAggregate_1 = require("../outputs/DashboardslistMinAggregate");
const DashboardslistSumAggregate_1 = require("../outputs/DashboardslistSumAggregate");
let DashboardslistGroupBy = class DashboardslistGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DashboardslistGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DashboardslistGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "privacy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "checklists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "visits", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "sales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistCountAggregate_1.DashboardslistCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistCountAggregate_1.DashboardslistCountAggregate)
], DashboardslistGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistAvgAggregate_1.DashboardslistAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistAvgAggregate_1.DashboardslistAvgAggregate)
], DashboardslistGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistSumAggregate_1.DashboardslistSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistSumAggregate_1.DashboardslistSumAggregate)
], DashboardslistGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMinAggregate_1.DashboardslistMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMinAggregate_1.DashboardslistMinAggregate)
], DashboardslistGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistMaxAggregate_1.DashboardslistMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistMaxAggregate_1.DashboardslistMaxAggregate)
], DashboardslistGroupBy.prototype, "_max", void 0);
DashboardslistGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardslistGroupBy", {
        isAbstract: true
    })
], DashboardslistGroupBy);
exports.DashboardslistGroupBy = DashboardslistGroupBy;
