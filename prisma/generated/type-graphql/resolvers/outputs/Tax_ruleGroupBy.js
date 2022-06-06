"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Tax_ruleAvgAggregate_1 = require("../outputs/Tax_ruleAvgAggregate");
const Tax_ruleCountAggregate_1 = require("../outputs/Tax_ruleCountAggregate");
const Tax_ruleMaxAggregate_1 = require("../outputs/Tax_ruleMaxAggregate");
const Tax_ruleMinAggregate_1 = require("../outputs/Tax_ruleMinAggregate");
const Tax_ruleSumAggregate_1 = require("../outputs/Tax_ruleSumAggregate");
let Tax_ruleGroupBy = class Tax_ruleGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleGroupBy.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_ruleGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCountAggregate_1.Tax_ruleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCountAggregate_1.Tax_ruleCountAggregate)
], Tax_ruleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleAvgAggregate_1.Tax_ruleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleAvgAggregate_1.Tax_ruleAvgAggregate)
], Tax_ruleGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleSumAggregate_1.Tax_ruleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleSumAggregate_1.Tax_ruleSumAggregate)
], Tax_ruleGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMinAggregate_1.Tax_ruleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMinAggregate_1.Tax_ruleMinAggregate)
], Tax_ruleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMaxAggregate_1.Tax_ruleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMaxAggregate_1.Tax_ruleMaxAggregate)
], Tax_ruleGroupBy.prototype, "_max", void 0);
Tax_ruleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_ruleGroupBy", {
        isAbstract: true
    })
], Tax_ruleGroupBy);
exports.Tax_ruleGroupBy = Tax_ruleGroupBy;
