"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_rates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesAvgAggregate_1 = require("../outputs/Currency_ratesAvgAggregate");
const Currency_ratesCountAggregate_1 = require("../outputs/Currency_ratesCountAggregate");
const Currency_ratesMaxAggregate_1 = require("../outputs/Currency_ratesMaxAggregate");
const Currency_ratesMinAggregate_1 = require("../outputs/Currency_ratesMinAggregate");
const Currency_ratesSumAggregate_1 = require("../outputs/Currency_ratesSumAggregate");
let AggregateCurrency_rates = class AggregateCurrency_rates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesCountAggregate_1.Currency_ratesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesCountAggregate_1.Currency_ratesCountAggregate)
], AggregateCurrency_rates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesAvgAggregate_1.Currency_ratesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesAvgAggregate_1.Currency_ratesAvgAggregate)
], AggregateCurrency_rates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesSumAggregate_1.Currency_ratesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesSumAggregate_1.Currency_ratesSumAggregate)
], AggregateCurrency_rates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMinAggregate_1.Currency_ratesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMinAggregate_1.Currency_ratesMinAggregate)
], AggregateCurrency_rates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesMaxAggregate_1.Currency_ratesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesMaxAggregate_1.Currency_ratesMaxAggregate)
], AggregateCurrency_rates.prototype, "_max", void 0);
AggregateCurrency_rates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCurrency_rates", {
        isAbstract: true
    })
], AggregateCurrency_rates);
exports.AggregateCurrency_rates = AggregateCurrency_rates;
