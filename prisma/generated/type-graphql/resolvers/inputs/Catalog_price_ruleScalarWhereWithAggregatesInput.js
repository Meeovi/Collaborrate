"use strict";
var Catalog_price_ruleScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const DecimalNullableWithAggregatesFilter_1 = require("../inputs/DecimalNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let Catalog_price_ruleScalarWhereWithAggregatesInput = Catalog_price_ruleScalarWhereWithAggregatesInput_1 = class Catalog_price_ruleScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "customer_groups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], Catalog_price_ruleScalarWhereWithAggregatesInput.prototype, "actions_discard_subsequent_rules", void 0);
Catalog_price_ruleScalarWhereWithAggregatesInput = Catalog_price_ruleScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], Catalog_price_ruleScalarWhereWithAggregatesInput);
exports.Catalog_price_ruleScalarWhereWithAggregatesInput = Catalog_price_ruleScalarWhereWithAggregatesInput;
