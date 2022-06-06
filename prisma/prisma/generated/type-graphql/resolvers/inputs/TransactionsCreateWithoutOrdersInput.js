"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateNestedOneWithoutTransactionsInput");
let TransactionsCreateWithoutOrdersInput = class TransactionsCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateWithoutOrdersInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateWithoutOrdersInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionsCreateWithoutOrdersInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsCreateWithoutOrdersInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateNestedOneWithoutTransactionsInput_1.Customer_paymentCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateNestedOneWithoutTransactionsInput_1.Customer_paymentCreateNestedOneWithoutTransactionsInput)
], TransactionsCreateWithoutOrdersInput.prototype, "customer_payment", void 0);
TransactionsCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateWithoutOrdersInput", {
        isAbstract: true
    })
], TransactionsCreateWithoutOrdersInput);
exports.TransactionsCreateWithoutOrdersInput = TransactionsCreateWithoutOrdersInput;
