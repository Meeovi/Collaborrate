"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../inputs/CustomersOrderByWithRelationInput");
const TransactionsOrderByRelationAggregateInput_1 = require("../inputs/TransactionsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_paymentOrderByWithRelationInput = class Customer_paymentOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithRelationInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput)
], Customer_paymentOrderByWithRelationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsOrderByRelationAggregateInput_1.TransactionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsOrderByRelationAggregateInput_1.TransactionsOrderByRelationAggregateInput)
], Customer_paymentOrderByWithRelationInput.prototype, "transactions", void 0);
Customer_paymentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentOrderByWithRelationInput", {
        isAbstract: true
    })
], Customer_paymentOrderByWithRelationInput);
exports.Customer_paymentOrderByWithRelationInput = Customer_paymentOrderByWithRelationInput;
