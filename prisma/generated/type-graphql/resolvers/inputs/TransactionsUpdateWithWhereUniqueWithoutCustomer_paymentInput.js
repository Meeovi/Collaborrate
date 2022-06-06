"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsUpdateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpdateWithoutCustomer_paymentInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput = class TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateWithoutCustomer_paymentInput_1.TransactionsUpdateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateWithoutCustomer_paymentInput_1.TransactionsUpdateWithoutCustomer_paymentInput)
], TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput.prototype, "data", void 0);
TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput);
exports.TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput = TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput;
