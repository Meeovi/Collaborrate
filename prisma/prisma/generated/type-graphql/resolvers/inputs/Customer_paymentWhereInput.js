"use strict";
var Customer_paymentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BigIntNullableFilter_1 = require("../inputs/BigIntNullableFilter");
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionsListRelationFilter_1 = require("../inputs/TransactionsListRelationFilter");
let Customer_paymentWhereInput = Customer_paymentWhereInput_1 = class Customer_paymentWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_paymentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Customer_paymentWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Customer_paymentWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Customer_paymentWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Customer_paymentWhereInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Customer_paymentWhereInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Customer_paymentWhereInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntNullableFilter_1.BigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntNullableFilter_1.BigIntNullableFilter)
], Customer_paymentWhereInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], Customer_paymentWhereInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsListRelationFilter_1.TransactionsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsListRelationFilter_1.TransactionsListRelationFilter)
], Customer_paymentWhereInput.prototype, "transactions", void 0);
Customer_paymentWhereInput = Customer_paymentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentWhereInput", {
        isAbstract: true
    })
], Customer_paymentWhereInput);
exports.Customer_paymentWhereInput = Customer_paymentWhereInput;
