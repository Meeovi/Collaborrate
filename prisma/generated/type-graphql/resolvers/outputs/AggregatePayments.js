"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePayments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsAvgAggregate_1 = require("../outputs/PaymentsAvgAggregate");
const PaymentsCountAggregate_1 = require("../outputs/PaymentsCountAggregate");
const PaymentsMaxAggregate_1 = require("../outputs/PaymentsMaxAggregate");
const PaymentsMinAggregate_1 = require("../outputs/PaymentsMinAggregate");
const PaymentsSumAggregate_1 = require("../outputs/PaymentsSumAggregate");
let AggregatePayments = class AggregatePayments {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCountAggregate_1.PaymentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsCountAggregate_1.PaymentsCountAggregate)
], AggregatePayments.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsAvgAggregate_1.PaymentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsAvgAggregate_1.PaymentsAvgAggregate)
], AggregatePayments.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsSumAggregate_1.PaymentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsSumAggregate_1.PaymentsSumAggregate)
], AggregatePayments.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMinAggregate_1.PaymentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMinAggregate_1.PaymentsMinAggregate)
], AggregatePayments.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMaxAggregate_1.PaymentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMaxAggregate_1.PaymentsMaxAggregate)
], AggregatePayments.prototype, "_max", void 0);
AggregatePayments = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePayments", {
        isAbstract: true
    })
], AggregatePayments);
exports.AggregatePayments = AggregatePayments;
