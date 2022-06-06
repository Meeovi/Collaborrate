"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateWithoutTransactionsInput");
const Customer_paymentUpdateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentUpdateWithoutTransactionsInput");
let Customer_paymentUpsertWithoutTransactionsInput = class Customer_paymentUpsertWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutTransactionsInput_1.Customer_paymentUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateWithoutTransactionsInput_1.Customer_paymentUpdateWithoutTransactionsInput)
], Customer_paymentUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput)
], Customer_paymentUpsertWithoutTransactionsInput.prototype, "create", void 0);
Customer_paymentUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentUpsertWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentUpsertWithoutTransactionsInput);
exports.Customer_paymentUpsertWithoutTransactionsInput = Customer_paymentUpsertWithoutTransactionsInput;
