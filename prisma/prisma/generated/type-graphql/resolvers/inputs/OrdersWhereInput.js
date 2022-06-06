"use strict";
var OrdersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const ProductsRelationFilter_1 = require("../inputs/ProductsRelationFilter");
const QuotesListRelationFilter_1 = require("../inputs/QuotesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionsListRelationFilter_1 = require("../inputs/TransactionsListRelationFilter");
let OrdersWhereInput = OrdersWhereInput_1 = class OrdersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrdersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrdersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrdersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrdersWhereInput.prototype, "purchase_point", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OrdersWhereInput.prototype, "purchase_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrdersWhereInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrdersWhereInput.prototype, "ship_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrdersWhereInput.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], OrdersWhereInput.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], OrdersWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], OrdersWhereInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrdersWhereInput.prototype, "allocated_sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrdersWhereInput.prototype, "braintree_transaction_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OrdersWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], OrdersWhereInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], OrdersWhereInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsRelationFilter_1.ProductsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsRelationFilter_1.ProductsRelationFilter)
], OrdersWhereInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesListRelationFilter_1.QuotesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesListRelationFilter_1.QuotesListRelationFilter)
], OrdersWhereInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsListRelationFilter_1.TransactionsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsListRelationFilter_1.TransactionsListRelationFilter)
], OrdersWhereInput.prototype, "transactions", void 0);
OrdersWhereInput = OrdersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersWhereInput", {
        isAbstract: true
    })
], OrdersWhereInput);
exports.OrdersWhereInput = OrdersWhereInput;
