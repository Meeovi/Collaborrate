"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCountries = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesAvgAggregate_1 = require("../outputs/CountriesAvgAggregate");
const CountriesCountAggregate_1 = require("../outputs/CountriesCountAggregate");
const CountriesMaxAggregate_1 = require("../outputs/CountriesMaxAggregate");
const CountriesMinAggregate_1 = require("../outputs/CountriesMinAggregate");
const CountriesSumAggregate_1 = require("../outputs/CountriesSumAggregate");
let AggregateCountries = class AggregateCountries {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesCountAggregate_1.CountriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesCountAggregate_1.CountriesCountAggregate)
], AggregateCountries.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesAvgAggregate_1.CountriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesAvgAggregate_1.CountriesAvgAggregate)
], AggregateCountries.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesSumAggregate_1.CountriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesSumAggregate_1.CountriesSumAggregate)
], AggregateCountries.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMinAggregate_1.CountriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMinAggregate_1.CountriesMinAggregate)
], AggregateCountries.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMaxAggregate_1.CountriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMaxAggregate_1.CountriesMaxAggregate)
], AggregateCountries.prototype, "_max", void 0);
AggregateCountries = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCountries", {
        isAbstract: true
    })
], AggregateCountries);
exports.AggregateCountries = AggregateCountries;
