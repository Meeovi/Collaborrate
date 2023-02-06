"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInvoices = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvoicesAvgAggregate_1 = require("../outputs/InvoicesAvgAggregate");
const InvoicesCountAggregate_1 = require("../outputs/InvoicesCountAggregate");
const InvoicesMaxAggregate_1 = require("../outputs/InvoicesMaxAggregate");
const InvoicesMinAggregate_1 = require("../outputs/InvoicesMinAggregate");
const InvoicesSumAggregate_1 = require("../outputs/InvoicesSumAggregate");
let AggregateInvoices = class AggregateInvoices {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesCountAggregate_1.InvoicesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesCountAggregate_1.InvoicesCountAggregate)
], AggregateInvoices.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesAvgAggregate_1.InvoicesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesAvgAggregate_1.InvoicesAvgAggregate)
], AggregateInvoices.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesSumAggregate_1.InvoicesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesSumAggregate_1.InvoicesSumAggregate)
], AggregateInvoices.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMinAggregate_1.InvoicesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMinAggregate_1.InvoicesMinAggregate)
], AggregateInvoices.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvoicesMaxAggregate_1.InvoicesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvoicesMaxAggregate_1.InvoicesMaxAggregate)
], AggregateInvoices.prototype, "_max", void 0);
AggregateInvoices = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInvoices", {
        isAbstract: true
    })
], AggregateInvoices);
exports.AggregateInvoices = AggregateInvoices;
