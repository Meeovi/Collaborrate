"use strict";
var Catalog_price_ruleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Catalog_price_ruleWhereInput = Catalog_price_ruleWhereInput_1 = class Catalog_price_ruleWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Catalog_price_ruleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "customer_groups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Catalog_price_ruleWhereInput.prototype, "actions_discard_subsequent_rules", void 0);
Catalog_price_ruleWhereInput = Catalog_price_ruleWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleWhereInput", {
        isAbstract: true
    })
], Catalog_price_ruleWhereInput);
exports.Catalog_price_ruleWhereInput = Catalog_price_ruleWhereInput;
