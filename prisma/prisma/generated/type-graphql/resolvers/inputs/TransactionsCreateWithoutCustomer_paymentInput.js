"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/OrdersCreateNestedOneWithoutTransactionsInput");
let TransactionsCreateWithoutCustomer_paymentInput = class TransactionsCreateWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateWithoutCustomer_paymentInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateWithoutCustomer_paymentInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionsCreateWithoutCustomer_paymentInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsCreateWithoutCustomer_paymentInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutTransactionsInput_1.OrdersCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedOneWithoutTransactionsInput_1.OrdersCreateNestedOneWithoutTransactionsInput)
], TransactionsCreateWithoutCustomer_paymentInput.prototype, "orders", void 0);
TransactionsCreateWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsCreateWithoutCustomer_paymentInput);
exports.TransactionsCreateWithoutCustomer_paymentInput = TransactionsCreateWithoutCustomer_paymentInput;
