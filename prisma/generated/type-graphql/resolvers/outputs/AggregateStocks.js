"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStocks = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksAvgAggregate_1 = require("../outputs/StocksAvgAggregate");
const StocksCountAggregate_1 = require("../outputs/StocksCountAggregate");
const StocksMaxAggregate_1 = require("../outputs/StocksMaxAggregate");
const StocksMinAggregate_1 = require("../outputs/StocksMinAggregate");
const StocksSumAggregate_1 = require("../outputs/StocksSumAggregate");
let AggregateStocks = class AggregateStocks {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCountAggregate_1.StocksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksCountAggregate_1.StocksCountAggregate)
], AggregateStocks.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksAvgAggregate_1.StocksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksAvgAggregate_1.StocksAvgAggregate)
], AggregateStocks.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksSumAggregate_1.StocksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksSumAggregate_1.StocksSumAggregate)
], AggregateStocks.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMinAggregate_1.StocksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMinAggregate_1.StocksMinAggregate)
], AggregateStocks.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMaxAggregate_1.StocksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMaxAggregate_1.StocksMaxAggregate)
], AggregateStocks.prototype, "_max", void 0);
AggregateStocks = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStocks", {
        isAbstract: true
    })
], AggregateStocks);
exports.AggregateStocks = AggregateStocks;
