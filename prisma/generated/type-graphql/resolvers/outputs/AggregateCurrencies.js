"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrencies = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesAvgAggregate_1 = require("../outputs/CurrenciesAvgAggregate");
const CurrenciesCountAggregate_1 = require("../outputs/CurrenciesCountAggregate");
const CurrenciesMaxAggregate_1 = require("../outputs/CurrenciesMaxAggregate");
const CurrenciesMinAggregate_1 = require("../outputs/CurrenciesMinAggregate");
const CurrenciesSumAggregate_1 = require("../outputs/CurrenciesSumAggregate");
let AggregateCurrencies = class AggregateCurrencies {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesCountAggregate_1.CurrenciesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesCountAggregate_1.CurrenciesCountAggregate)
], AggregateCurrencies.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesAvgAggregate_1.CurrenciesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesAvgAggregate_1.CurrenciesAvgAggregate)
], AggregateCurrencies.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesSumAggregate_1.CurrenciesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesSumAggregate_1.CurrenciesSumAggregate)
], AggregateCurrencies.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMinAggregate_1.CurrenciesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMinAggregate_1.CurrenciesMinAggregate)
], AggregateCurrencies.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMaxAggregate_1.CurrenciesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMaxAggregate_1.CurrenciesMaxAggregate)
], AggregateCurrencies.prototype, "_max", void 0);
AggregateCurrencies = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCurrencies", {
        isAbstract: true
    })
], AggregateCurrencies);
exports.AggregateCurrencies = AggregateCurrencies;
