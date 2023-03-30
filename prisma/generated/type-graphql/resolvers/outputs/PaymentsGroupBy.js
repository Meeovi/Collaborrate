"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const PaymentsAvgAggregate_1 = require("../outputs/PaymentsAvgAggregate");
const PaymentsCountAggregate_1 = require("../outputs/PaymentsCountAggregate");
const PaymentsMaxAggregate_1 = require("../outputs/PaymentsMaxAggregate");
const PaymentsMinAggregate_1 = require("../outputs/PaymentsMinAggregate");
const PaymentsSumAggregate_1 = require("../outputs/PaymentsSumAggregate");
let PaymentsGroupBy = class PaymentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PaymentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaymentsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "host_uri", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "redirect_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "redirect_url_app", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsCountAggregate_1.PaymentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsCountAggregate_1.PaymentsCountAggregate)
], PaymentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsAvgAggregate_1.PaymentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsAvgAggregate_1.PaymentsAvgAggregate)
], PaymentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsSumAggregate_1.PaymentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsSumAggregate_1.PaymentsSumAggregate)
], PaymentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMinAggregate_1.PaymentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMinAggregate_1.PaymentsMinAggregate)
], PaymentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsMaxAggregate_1.PaymentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsMaxAggregate_1.PaymentsMaxAggregate)
], PaymentsGroupBy.prototype, "_max", void 0);
PaymentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PaymentsGroupBy", {
        isAbstract: true
    })
], PaymentsGroupBy);
exports.PaymentsGroupBy = PaymentsGroupBy;
