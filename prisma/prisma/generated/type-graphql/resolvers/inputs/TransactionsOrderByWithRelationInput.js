"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByWithRelationInput_1 = require("../inputs/Customer_paymentOrderByWithRelationInput");
const OrdersOrderByWithRelationInput_1 = require("../inputs/OrdersOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionsOrderByWithRelationInput = class TransactionsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersOrderByWithRelationInput_1.OrdersOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersOrderByWithRelationInput_1.OrdersOrderByWithRelationInput)
], TransactionsOrderByWithRelationInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentOrderByWithRelationInput_1.Customer_paymentOrderByWithRelationInput)
], TransactionsOrderByWithRelationInput.prototype, "customer_payment", void 0);
TransactionsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsOrderByWithRelationInput", {
        isAbstract: true
    })
], TransactionsOrderByWithRelationInput);
exports.TransactionsOrderByWithRelationInput = TransactionsOrderByWithRelationInput;
