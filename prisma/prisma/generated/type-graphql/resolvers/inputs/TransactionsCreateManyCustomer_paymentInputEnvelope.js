"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateManyCustomer_paymentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsCreateManyCustomer_paymentInput_1 = require("../inputs/TransactionsCreateManyCustomer_paymentInput");
let TransactionsCreateManyCustomer_paymentInputEnvelope = class TransactionsCreateManyCustomer_paymentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionsCreateManyCustomer_paymentInput_1.TransactionsCreateManyCustomer_paymentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionsCreateManyCustomer_paymentInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TransactionsCreateManyCustomer_paymentInputEnvelope.prototype, "skipDuplicates", void 0);
TransactionsCreateManyCustomer_paymentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateManyCustomer_paymentInputEnvelope", {
        isAbstract: true
    })
], TransactionsCreateManyCustomer_paymentInputEnvelope);
exports.TransactionsCreateManyCustomer_paymentInputEnvelope = TransactionsCreateManyCustomer_paymentInputEnvelope;
