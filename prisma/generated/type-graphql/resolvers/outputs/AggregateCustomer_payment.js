"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomer_payment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentAvgAggregate_1 = require("../outputs/Customer_paymentAvgAggregate");
const Customer_paymentCountAggregate_1 = require("../outputs/Customer_paymentCountAggregate");
const Customer_paymentMaxAggregate_1 = require("../outputs/Customer_paymentMaxAggregate");
const Customer_paymentMinAggregate_1 = require("../outputs/Customer_paymentMinAggregate");
const Customer_paymentSumAggregate_1 = require("../outputs/Customer_paymentSumAggregate");
let AggregateCustomer_payment = class AggregateCustomer_payment {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCountAggregate_1.Customer_paymentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCountAggregate_1.Customer_paymentCountAggregate)
], AggregateCustomer_payment.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentAvgAggregate_1.Customer_paymentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentAvgAggregate_1.Customer_paymentAvgAggregate)
], AggregateCustomer_payment.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentSumAggregate_1.Customer_paymentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentSumAggregate_1.Customer_paymentSumAggregate)
], AggregateCustomer_payment.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMinAggregate_1.Customer_paymentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMinAggregate_1.Customer_paymentMinAggregate)
], AggregateCustomer_payment.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMaxAggregate_1.Customer_paymentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMaxAggregate_1.Customer_paymentMaxAggregate)
], AggregateCustomer_payment.prototype, "_max", void 0);
AggregateCustomer_payment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCustomer_payment", {
        isAbstract: true
    })
], AggregateCustomer_payment);
exports.AggregateCustomer_payment = AggregateCustomer_payment;
