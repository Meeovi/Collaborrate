"use strict";
var Cart_price_rulesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Cart_price_rulesWhereInput = Cart_price_rulesWhereInput_1 = class Cart_price_rulesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Cart_price_rulesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Cart_price_rulesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Cart_price_rulesWhereInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "uses_per_customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Cart_price_rulesWhereInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Cart_price_rulesWhereInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_max_qty_discount_is_applied_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_discount_qty_step", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Cart_price_rulesWhereInput.prototype, "actions_apply_shipping_amount", void 0);
Cart_price_rulesWhereInput = Cart_price_rulesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesWhereInput", {
        isAbstract: true
    })
], Cart_price_rulesWhereInput);
exports.Cart_price_rulesWhereInput = Cart_price_rulesWhereInput;
