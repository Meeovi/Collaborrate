"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TransactionsCreateNestedManyWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutCustomer_paymentInput");
let Customer_paymentCreateWithoutCustomersInput = class Customer_paymentCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_paymentCreateWithoutCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateWithoutCustomersInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateWithoutCustomersInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutCustomersInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutCustomersInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutCustomer_paymentInput_1.TransactionsCreateNestedManyWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutCustomer_paymentInput_1.TransactionsCreateNestedManyWithoutCustomer_paymentInput)
], Customer_paymentCreateWithoutCustomersInput.prototype, "transactions", void 0);
Customer_paymentCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_paymentCreateWithoutCustomersInput);
exports.Customer_paymentCreateWithoutCustomersInput = Customer_paymentCreateWithoutCustomersInput;
