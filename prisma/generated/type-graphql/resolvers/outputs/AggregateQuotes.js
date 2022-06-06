"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateQuotes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesAvgAggregate_1 = require("../outputs/QuotesAvgAggregate");
const QuotesCountAggregate_1 = require("../outputs/QuotesCountAggregate");
const QuotesMaxAggregate_1 = require("../outputs/QuotesMaxAggregate");
const QuotesMinAggregate_1 = require("../outputs/QuotesMinAggregate");
const QuotesSumAggregate_1 = require("../outputs/QuotesSumAggregate");
let AggregateQuotes = class AggregateQuotes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCountAggregate_1.QuotesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCountAggregate_1.QuotesCountAggregate)
], AggregateQuotes.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesAvgAggregate_1.QuotesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesAvgAggregate_1.QuotesAvgAggregate)
], AggregateQuotes.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesSumAggregate_1.QuotesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesSumAggregate_1.QuotesSumAggregate)
], AggregateQuotes.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesMinAggregate_1.QuotesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesMinAggregate_1.QuotesMinAggregate)
], AggregateQuotes.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesMaxAggregate_1.QuotesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesMaxAggregate_1.QuotesMaxAggregate)
], AggregateQuotes.prototype, "_max", void 0);
AggregateQuotes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateQuotes", {
        isAbstract: true
    })
], AggregateQuotes);
exports.AggregateQuotes = AggregateQuotes;
