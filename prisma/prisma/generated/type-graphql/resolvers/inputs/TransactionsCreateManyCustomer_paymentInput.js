"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCreateManyCustomer_paymentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionsCreateManyCustomer_paymentInput = class TransactionsCreateManyCustomer_paymentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateManyCustomer_paymentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateManyCustomer_paymentInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateManyCustomer_paymentInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionsCreateManyCustomer_paymentInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionsCreateManyCustomer_paymentInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsCreateManyCustomer_paymentInput.prototype, "closed", void 0);
TransactionsCreateManyCustomer_paymentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsCreateManyCustomer_paymentInput", {
        isAbstract: true
    })
], TransactionsCreateManyCustomer_paymentInput);
exports.TransactionsCreateManyCustomer_paymentInput = TransactionsCreateManyCustomer_paymentInput;
