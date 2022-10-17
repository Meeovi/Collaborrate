"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Catalog_price_ruleAvgAggregate_1 = require("../outputs/Catalog_price_ruleAvgAggregate");
const Catalog_price_ruleCountAggregate_1 = require("../outputs/Catalog_price_ruleCountAggregate");
const Catalog_price_ruleMaxAggregate_1 = require("../outputs/Catalog_price_ruleMaxAggregate");
const Catalog_price_ruleMinAggregate_1 = require("../outputs/Catalog_price_ruleMinAggregate");
const Catalog_price_ruleSumAggregate_1 = require("../outputs/Catalog_price_ruleSumAggregate");
let Catalog_price_ruleGroupBy = class Catalog_price_ruleGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Catalog_price_ruleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Catalog_price_ruleGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "customer_groups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Catalog_price_ruleGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Catalog_price_ruleGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleGroupBy.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Catalog_price_ruleGroupBy.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Catalog_price_ruleGroupBy.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCountAggregate_1.Catalog_price_ruleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCountAggregate_1.Catalog_price_ruleCountAggregate)
], Catalog_price_ruleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleAvgAggregate_1.Catalog_price_ruleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleAvgAggregate_1.Catalog_price_ruleAvgAggregate)
], Catalog_price_ruleGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleSumAggregate_1.Catalog_price_ruleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleSumAggregate_1.Catalog_price_ruleSumAggregate)
], Catalog_price_ruleGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMinAggregate_1.Catalog_price_ruleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMinAggregate_1.Catalog_price_ruleMinAggregate)
], Catalog_price_ruleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMaxAggregate_1.Catalog_price_ruleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMaxAggregate_1.Catalog_price_ruleMaxAggregate)
], Catalog_price_ruleGroupBy.prototype, "_max", void 0);
Catalog_price_ruleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Catalog_price_ruleGroupBy", {
        isAbstract: true
    })
], Catalog_price_ruleGroupBy);
exports.Catalog_price_ruleGroupBy = Catalog_price_ruleGroupBy;
