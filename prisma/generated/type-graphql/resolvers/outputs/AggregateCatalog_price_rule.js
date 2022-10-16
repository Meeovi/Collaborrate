"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCatalog_price_rule = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleAvgAggregate_1 = require("../outputs/Catalog_price_ruleAvgAggregate");
const Catalog_price_ruleCountAggregate_1 = require("../outputs/Catalog_price_ruleCountAggregate");
const Catalog_price_ruleMaxAggregate_1 = require("../outputs/Catalog_price_ruleMaxAggregate");
const Catalog_price_ruleMinAggregate_1 = require("../outputs/Catalog_price_ruleMinAggregate");
const Catalog_price_ruleSumAggregate_1 = require("../outputs/Catalog_price_ruleSumAggregate");
let AggregateCatalog_price_rule = class AggregateCatalog_price_rule {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCountAggregate_1.Catalog_price_ruleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCountAggregate_1.Catalog_price_ruleCountAggregate)
], AggregateCatalog_price_rule.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleAvgAggregate_1.Catalog_price_ruleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleAvgAggregate_1.Catalog_price_ruleAvgAggregate)
], AggregateCatalog_price_rule.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleSumAggregate_1.Catalog_price_ruleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleSumAggregate_1.Catalog_price_ruleSumAggregate)
], AggregateCatalog_price_rule.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMinAggregate_1.Catalog_price_ruleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMinAggregate_1.Catalog_price_ruleMinAggregate)
], AggregateCatalog_price_rule.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMaxAggregate_1.Catalog_price_ruleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMaxAggregate_1.Catalog_price_ruleMaxAggregate)
], AggregateCatalog_price_rule.prototype, "_max", void 0);
AggregateCatalog_price_rule = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCatalog_price_rule", {
        isAbstract: true
    })
], AggregateCatalog_price_rule);
exports.AggregateCatalog_price_rule = AggregateCatalog_price_rule;
