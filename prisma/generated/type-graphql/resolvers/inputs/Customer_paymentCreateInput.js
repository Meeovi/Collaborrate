"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CustomersCreateNestedOneWithoutCustomer_paymentInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCustomer_paymentInput");
const TransactionsCreateNestedManyWithoutCustomer_paymentInput_1 = require("../inputs/TransactionsCreateNestedManyWithoutCustomer_paymentInput");
let Customer_paymentCreateInput = class Customer_paymentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_paymentCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentCreateInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentCreateInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomer_paymentInput_1.CustomersCreateNestedOneWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCustomer_paymentInput_1.CustomersCreateNestedOneWithoutCustomer_paymentInput)
], Customer_paymentCreateInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutCustomer_paymentInput_1.TransactionsCreateNestedManyWithoutCustomer_paymentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsCreateNestedManyWithoutCustomer_paymentInput_1.TransactionsCreateNestedManyWithoutCustomer_paymentInput)
], Customer_paymentCreateInput.prototype, "transactions", void 0);
Customer_paymentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentCreateInput", {
        isAbstract: true
    })
], Customer_paymentCreateInput);
exports.Customer_paymentCreateInput = Customer_paymentCreateInput;
