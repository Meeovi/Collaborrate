"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DashboardsAvgAggregate_1 = require("../outputs/DashboardsAvgAggregate");
const DashboardsCountAggregate_1 = require("../outputs/DashboardsCountAggregate");
const DashboardsMaxAggregate_1 = require("../outputs/DashboardsMaxAggregate");
const DashboardsMinAggregate_1 = require("../outputs/DashboardsMinAggregate");
const DashboardsSumAggregate_1 = require("../outputs/DashboardsSumAggregate");
let DashboardsGroupBy = class DashboardsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DashboardsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DashboardsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "privacy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "checklists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "visits", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "sales", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsCountAggregate_1.DashboardsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsCountAggregate_1.DashboardsCountAggregate)
], DashboardsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsAvgAggregate_1.DashboardsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsAvgAggregate_1.DashboardsAvgAggregate)
], DashboardsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsSumAggregate_1.DashboardsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsSumAggregate_1.DashboardsSumAggregate)
], DashboardsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMinAggregate_1.DashboardsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMinAggregate_1.DashboardsMinAggregate)
], DashboardsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsMaxAggregate_1.DashboardsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsMaxAggregate_1.DashboardsMaxAggregate)
], DashboardsGroupBy.prototype, "_max", void 0);
DashboardsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DashboardsGroupBy", {
        isAbstract: true
    })
], DashboardsGroupBy);
exports.DashboardsGroupBy = DashboardsGroupBy;
