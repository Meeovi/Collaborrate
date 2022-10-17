"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Currency_symbolsAvgAggregate_1 = require("../outputs/Currency_symbolsAvgAggregate");
const Currency_symbolsCountAggregate_1 = require("../outputs/Currency_symbolsCountAggregate");
const Currency_symbolsMaxAggregate_1 = require("../outputs/Currency_symbolsMaxAggregate");
const Currency_symbolsMinAggregate_1 = require("../outputs/Currency_symbolsMinAggregate");
const Currency_symbolsSumAggregate_1 = require("../outputs/Currency_symbolsSumAggregate");
let Currency_symbolsGroupBy = class Currency_symbolsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsGroupBy.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbolsGroupBy.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_symbolsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsCountAggregate_1.Currency_symbolsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsCountAggregate_1.Currency_symbolsCountAggregate)
], Currency_symbolsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsAvgAggregate_1.Currency_symbolsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsAvgAggregate_1.Currency_symbolsAvgAggregate)
], Currency_symbolsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsSumAggregate_1.Currency_symbolsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsSumAggregate_1.Currency_symbolsSumAggregate)
], Currency_symbolsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMinAggregate_1.Currency_symbolsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMinAggregate_1.Currency_symbolsMinAggregate)
], Currency_symbolsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsMaxAggregate_1.Currency_symbolsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsMaxAggregate_1.Currency_symbolsMaxAggregate)
], Currency_symbolsGroupBy.prototype, "_max", void 0);
Currency_symbolsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsGroupBy", {
        isAbstract: true
    })
], Currency_symbolsGroupBy);
exports.Currency_symbolsGroupBy = Currency_symbolsGroupBy;
