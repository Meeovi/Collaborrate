"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTax_rule = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleAvgAggregate_1 = require("../outputs/Tax_ruleAvgAggregate");
const Tax_ruleCountAggregate_1 = require("../outputs/Tax_ruleCountAggregate");
const Tax_ruleMaxAggregate_1 = require("../outputs/Tax_ruleMaxAggregate");
const Tax_ruleMinAggregate_1 = require("../outputs/Tax_ruleMinAggregate");
const Tax_ruleSumAggregate_1 = require("../outputs/Tax_ruleSumAggregate");
let AggregateTax_rule = class AggregateTax_rule {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCountAggregate_1.Tax_ruleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCountAggregate_1.Tax_ruleCountAggregate)
], AggregateTax_rule.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleAvgAggregate_1.Tax_ruleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleAvgAggregate_1.Tax_ruleAvgAggregate)
], AggregateTax_rule.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleSumAggregate_1.Tax_ruleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleSumAggregate_1.Tax_ruleSumAggregate)
], AggregateTax_rule.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMinAggregate_1.Tax_ruleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMinAggregate_1.Tax_ruleMinAggregate)
], AggregateTax_rule.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMaxAggregate_1.Tax_ruleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMaxAggregate_1.Tax_ruleMaxAggregate)
], AggregateTax_rule.prototype, "_max", void 0);
AggregateTax_rule = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTax_rule", {
        isAbstract: true
    })
], AggregateTax_rule);
exports.AggregateTax_rule = AggregateTax_rule;
