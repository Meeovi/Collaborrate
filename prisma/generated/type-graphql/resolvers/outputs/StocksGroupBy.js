"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksAvgAggregate_1 = require("../outputs/StocksAvgAggregate");
const StocksCountAggregate_1 = require("../outputs/StocksCountAggregate");
const StocksMaxAggregate_1 = require("../outputs/StocksMaxAggregate");
const StocksMinAggregate_1 = require("../outputs/StocksMinAggregate");
const StocksSumAggregate_1 = require("../outputs/StocksSumAggregate");
let StocksGroupBy = class StocksGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StocksGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StocksGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], StocksGroupBy.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksGroupBy.prototype, "sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCountAggregate_1.StocksCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksCountAggregate_1.StocksCountAggregate)
], StocksGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksAvgAggregate_1.StocksAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksAvgAggregate_1.StocksAvgAggregate)
], StocksGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksSumAggregate_1.StocksSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksSumAggregate_1.StocksSumAggregate)
], StocksGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMinAggregate_1.StocksMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMinAggregate_1.StocksMinAggregate)
], StocksGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksMaxAggregate_1.StocksMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksMaxAggregate_1.StocksMaxAggregate)
], StocksGroupBy.prototype, "_max", void 0);
StocksGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StocksGroupBy", {
        isAbstract: true
    })
], StocksGroupBy);
exports.StocksGroupBy = StocksGroupBy;
