"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateWithoutTransactionsInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentCreateOrConnectWithoutTransactionsInput = class Customer_paymentCreateOrConnectWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput)
], Customer_paymentCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
Customer_paymentCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateOrConnectWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentCreateOrConnectWithoutTransactionsInput);
exports.Customer_paymentCreateOrConnectWithoutTransactionsInput = Customer_paymentCreateOrConnectWithoutTransactionsInput;
