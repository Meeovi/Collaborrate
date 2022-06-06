"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutTransactionsInput");
const OrdersCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/OrdersCreateNestedOneWithoutTransactionsInput");
let TransactionsCreateInput = class TransactionsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionsCreateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsCreateInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedOneWithoutTransactionsInput_1.OrdersCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedOneWithoutTransactionsInput_1.OrdersCreateNestedOneWithoutTransactionsInput)
], TransactionsCreateInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutTransactionsInput_1.Customer_paymentCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutTransactionsInput_1.Customer_paymentCreateNestedOneWithoutTransactionsInput)
], TransactionsCreateInput.prototype, "customer_payment", void 0);
TransactionsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateInput", {
        isAbstract: true
    })
], TransactionsCreateInput);
exports.TransactionsCreateInput = TransactionsCreateInput;
