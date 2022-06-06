"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateOrConnectWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateWithoutCustomer_paymentInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsCreateOrConnectWithoutCustomer_paymentInput = class TransactionsCreateOrConnectWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsCreateOrConnectWithoutCustomer_paymentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput)
], TransactionsCreateOrConnectWithoutCustomer_paymentInput.prototype, "create", void 0);
TransactionsCreateOrConnectWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateOrConnectWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsCreateOrConnectWithoutCustomer_paymentInput);
exports.TransactionsCreateOrConnectWithoutCustomer_paymentInput = TransactionsCreateOrConnectWithoutCustomer_paymentInput;
