"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_symbols = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsAvgAggregate_1 = require("../outputs/Currency_symbolsAvgAggregate");
const Currency_symbolsCountAggregate_1 = require("../outputs/Currency_symbolsCountAggregate");
const Currency_symbolsMaxAggregate_1 = require("../outputs/Currency_symbolsMaxAggregate");
const Currency_symbolsMinAggregate_1 = require("../outputs/Currency_symbolsMinAggregate");
const Currency_symbolsSumAggregate_1 = require("../outputs/Currency_symbolsSumAggregate");
let AggregateCurrency_symbols = class AggregateCurrency_symbols {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCountAggregate_1.Currency_symbolsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCountAggregate_1.Currency_symbolsCountAggregate)
], AggregateCurrency_symbols.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsAvgAggregate_1.Currency_symbolsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsAvgAggregate_1.Currency_symbolsAvgAggregate)
], AggregateCurrency_symbols.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsSumAggregate_1.Currency_symbolsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsSumAggregate_1.Currency_symbolsSumAggregate)
], AggregateCurrency_symbols.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMinAggregate_1.Currency_symbolsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMinAggregate_1.Currency_symbolsMinAggregate)
], AggregateCurrency_symbols.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMaxAggregate_1.Currency_symbolsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMaxAggregate_1.Currency_symbolsMaxAggregate)
], AggregateCurrency_symbols.prototype, "_max", void 0);
AggregateCurrency_symbols = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCurrency_symbols", {
        isAbstract: true
    })
], AggregateCurrency_symbols);
exports.AggregateCurrency_symbols = AggregateCurrency_symbols;
