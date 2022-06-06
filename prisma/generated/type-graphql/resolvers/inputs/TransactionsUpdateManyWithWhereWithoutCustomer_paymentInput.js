"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsScalarWhereInput_1 = require("../inputs/TransactionsScalarWhereInput");
const TransactionsUpdateManyMutationInput_1 = require("../inputs/TransactionsUpdateManyMutationInput");
let TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput = class TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsScalarWhereInput_1.TransactionsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsScalarWhereInput_1.TransactionsScalarWhereInput)
], TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionsUpdateManyMutationInput_1.TransactionsUpdateManyMutationInput)
], TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput.prototype, "data", void 0);
TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput);
exports.TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput = TransactionsUpdateManyWithWhereWithoutCustomer_paymentInput;
