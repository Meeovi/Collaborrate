"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CurrenciesAvgAggregate_1 = require("../outputs/CurrenciesAvgAggregate");
const CurrenciesCountAggregate_1 = require("../outputs/CurrenciesCountAggregate");
const CurrenciesMaxAggregate_1 = require("../outputs/CurrenciesMaxAggregate");
const CurrenciesMinAggregate_1 = require("../outputs/CurrenciesMinAggregate");
const CurrenciesSumAggregate_1 = require("../outputs/CurrenciesSumAggregate");
let CurrenciesGroupBy = class CurrenciesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CurrenciesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrenciesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesGroupBy.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesGroupBy.prototype, "useStandard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesCountAggregate_1.CurrenciesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesCountAggregate_1.CurrenciesCountAggregate)
], CurrenciesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesAvgAggregate_1.CurrenciesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesAvgAggregate_1.CurrenciesAvgAggregate)
], CurrenciesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesSumAggregate_1.CurrenciesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesSumAggregate_1.CurrenciesSumAggregate)
], CurrenciesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMinAggregate_1.CurrenciesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMinAggregate_1.CurrenciesMinAggregate)
], CurrenciesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesMaxAggregate_1.CurrenciesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesMaxAggregate_1.CurrenciesMaxAggregate)
], CurrenciesGroupBy.prototype, "_max", void 0);
CurrenciesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CurrenciesGroupBy", {
        isAbstract: true
    })
], CurrenciesGroupBy);
exports.CurrenciesGroupBy = CurrenciesGroupBy;
