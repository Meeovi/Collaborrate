"use strict";
var Cart_price_rulesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const DecimalNullableWithAggregatesFilter_1 = require("../inputs/DecimalNullableWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let Cart_price_rulesScalarWhereWithAggregatesInput = Cart_price_rulesScalarWhereWithAggregatesInput_1 = class Cart_price_rulesScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "uses_per_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableWithAggregatesFilter_1.DecimalNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_discount_qty_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], Cart_price_rulesScalarWhereWithAggregatesInput.prototype, "actions_apply_shipping_amount", void 0);
Cart_price_rulesScalarWhereWithAggregatesInput = Cart_price_rulesScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], Cart_price_rulesScalarWhereWithAggregatesInput);
exports.Cart_price_rulesScalarWhereWithAggregatesInput = Cart_price_rulesScalarWhereWithAggregatesInput;
