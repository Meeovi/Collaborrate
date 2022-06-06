"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateOrConnectWithoutTransactionsInput");
const Customer_paymentCreateWithoutTransactionsInput_1 = require("../inputs/Customer_paymentCreateWithoutTransactionsInput");
const Customer_paymentWhereUniqueInput_1 = require("../inputs/Customer_paymentWhereUniqueInput");
let Customer_paymentCreateNestedOneWithoutTransactionsInput = class Customer_paymentCreateNestedOneWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateWithoutTransactionsInput_1.Customer_paymentCreateWithoutTransactionsInput)
], Customer_paymentCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutTransactionsInput_1.Customer_paymentCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCreateOrConnectWithoutTransactionsInput_1.Customer_paymentCreateOrConnectWithoutTransactionsInput)
], Customer_paymentCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereUniqueInput_1.Customer_paymentWhereUniqueInput)
], Customer_paymentCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
Customer_paymentCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateNestedOneWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentCreateNestedOneWithoutTransactionsInput);
exports.Customer_paymentCreateNestedOneWithoutTransactionsInput = Customer_paymentCreateNestedOneWithoutTransactionsInput;
