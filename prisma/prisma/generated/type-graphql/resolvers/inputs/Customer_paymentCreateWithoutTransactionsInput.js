"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCustomer_paymentInput");
let Customer_paymentCreateWithoutTransactionsInput = class Customer_paymentCreateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomer_paymentInput_1.CustomersCreateNestedOneWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCustomer_paymentInput_1.CustomersCreateNestedOneWithoutCustomer_paymentInput)
], Customer_paymentCreateWithoutTransactionsInput.prototype, "customers", void 0);
Customer_paymentCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateWithoutTransactionsInput", {
        isAbstract: true
    })
], Customer_paymentCreateWithoutTransactionsInput);
exports.Customer_paymentCreateWithoutTransactionsInput = Customer_paymentCreateWithoutTransactionsInput;
