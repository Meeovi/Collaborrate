"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Customer_paymentAvgAggregate_1 = require("../outputs/Customer_paymentAvgAggregate");
const Customer_paymentCountAggregate_1 = require("../outputs/Customer_paymentCountAggregate");
const Customer_paymentMaxAggregate_1 = require("../outputs/Customer_paymentMaxAggregate");
const Customer_paymentMinAggregate_1 = require("../outputs/Customer_paymentMinAggregate");
const Customer_paymentSumAggregate_1 = require("../outputs/Customer_paymentSumAggregate");
let Customer_paymentGroupBy = class Customer_paymentGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Customer_paymentGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentGroupBy.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentGroupBy.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentGroupBy.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentGroupBy.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCountAggregate_1.Customer_paymentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCountAggregate_1.Customer_paymentCountAggregate)
], Customer_paymentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentAvgAggregate_1.Customer_paymentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentAvgAggregate_1.Customer_paymentAvgAggregate)
], Customer_paymentGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentSumAggregate_1.Customer_paymentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentSumAggregate_1.Customer_paymentSumAggregate)
], Customer_paymentGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMinAggregate_1.Customer_paymentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMinAggregate_1.Customer_paymentMinAggregate)
], Customer_paymentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMaxAggregate_1.Customer_paymentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMaxAggregate_1.Customer_paymentMaxAggregate)
], Customer_paymentGroupBy.prototype, "_max", void 0);
Customer_paymentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_paymentGroupBy", {
        isAbstract: true
    })
], Customer_paymentGroupBy);
exports.Customer_paymentGroupBy = Customer_paymentGroupBy;
