"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const InvoicesAvgAggregate_1 = require("../outputs/InvoicesAvgAggregate");
const InvoicesCountAggregate_1 = require("../outputs/InvoicesCountAggregate");
const InvoicesMaxAggregate_1 = require("../outputs/InvoicesMaxAggregate");
const InvoicesMinAggregate_1 = require("../outputs/InvoicesMinAggregate");
const InvoicesSumAggregate_1 = require("../outputs/InvoicesSumAggregate");
let InvoicesGroupBy = class InvoicesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], InvoicesGroupBy.prototype, "invoice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvoicesGroupBy.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InvoicesGroupBy.prototype, "invoice_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "billing_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "grand_total_base", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "grand_total_purchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "shipping_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "customer_group", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "shipping_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvoicesGroupBy.prototype, "shipping_and_handling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InvoicesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCountAggregate_1.InvoicesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesCountAggregate_1.InvoicesCountAggregate)
], InvoicesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesAvgAggregate_1.InvoicesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesAvgAggregate_1.InvoicesAvgAggregate)
], InvoicesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesSumAggregate_1.InvoicesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesSumAggregate_1.InvoicesSumAggregate)
], InvoicesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMinAggregate_1.InvoicesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMinAggregate_1.InvoicesMinAggregate)
], InvoicesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMaxAggregate_1.InvoicesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMaxAggregate_1.InvoicesMaxAggregate)
], InvoicesGroupBy.prototype, "_max", void 0);
InvoicesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InvoicesGroupBy", {
        isAbstract: true
    })
], InvoicesGroupBy);
exports.InvoicesGroupBy = InvoicesGroupBy;
