"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateNestedManyWithoutCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyCustomer_paymentInputEnvelope_1 = require("../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope");
const TransactionsCreateOrConnectWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput");
const TransactionsCreateWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateWithoutCustomer_paymentInput");
const TransactionsWhereUniqueInput_1 = require("../inputs/TransactionsWhereUniqueInput");
let TransactionsCreateNestedManyWithoutCustomer_paymentInput = class TransactionsCreateNestedManyWithoutCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateWithoutCustomer_paymentInput_1.TransactionsCreateWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutCustomer_paymentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutCustomer_paymentInput_1.TransactionsCreateOrConnectWithoutCustomer_paymentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutCustomer_paymentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateManyCustomer_paymentInputEnvelope_1.TransactionsCreateManyCustomer_paymentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateManyCustomer_paymentInputEnvelope_1.TransactionsCreateManyCustomer_paymentInputEnvelope)
], TransactionsCreateNestedManyWithoutCustomer_paymentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput_1.TransactionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateNestedManyWithoutCustomer_paymentInput.prototype, "connect", void 0);
TransactionsCreateNestedManyWithoutCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateNestedManyWithoutCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsCreateNestedManyWithoutCustomer_paymentInput);
exports.TransactionsCreateNestedManyWithoutCustomer_paymentInput = TransactionsCreateNestedManyWithoutCustomer_paymentInput;
