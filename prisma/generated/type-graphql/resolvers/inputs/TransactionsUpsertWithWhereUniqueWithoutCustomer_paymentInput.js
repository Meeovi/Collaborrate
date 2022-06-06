"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateWithoutCustomer_paymentInput");
const TransactionsUpdateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsUpdateWithoutCustomer_paymentInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput = class TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput)
], TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateWithoutCustomer_paymentInput_1.TransactionsUpdateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateWithoutCustomer_paymentInput_1.TransactionsUpdateWithoutCustomer_paymentInput)
], TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput)
], TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput.prototype, "create", void 0);
TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput);
exports.TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput = TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput;
