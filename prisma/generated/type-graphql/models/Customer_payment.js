"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_payment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Customer_paymentCount_1 = require("../resolvers/outputs/Customer_paymentCount");
let Customer_payment = class Customer_payment {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_payment.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_payment.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_payment.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_payment.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_payment.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_payment.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_payment.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCount_1.Customer_paymentCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCount_1.Customer_paymentCount)
], Customer_payment.prototype, "_count", void 0);
Customer_payment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_payment", {
        isAbstract: true
    })
], Customer_payment);
exports.Customer_payment = Customer_payment;
