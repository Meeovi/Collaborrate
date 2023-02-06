"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesAvgAggregate_1 = require("../outputs/CountriesAvgAggregate");
const CountriesCountAggregate_1 = require("../outputs/CountriesCountAggregate");
const CountriesMaxAggregate_1 = require("../outputs/CountriesMaxAggregate");
const CountriesMinAggregate_1 = require("../outputs/CountriesMinAggregate");
const CountriesSumAggregate_1 = require("../outputs/CountriesSumAggregate");
let CountriesGroupBy = class CountriesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CountriesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountriesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesGroupBy.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesCountAggregate_1.CountriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesCountAggregate_1.CountriesCountAggregate)
], CountriesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesAvgAggregate_1.CountriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesAvgAggregate_1.CountriesAvgAggregate)
], CountriesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesSumAggregate_1.CountriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesSumAggregate_1.CountriesSumAggregate)
], CountriesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMinAggregate_1.CountriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMinAggregate_1.CountriesMinAggregate)
], CountriesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesMaxAggregate_1.CountriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesMaxAggregate_1.CountriesMaxAggregate)
], CountriesGroupBy.prototype, "_max", void 0);
CountriesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountriesGroupBy", {
        isAbstract: true
    })
], CountriesGroupBy);
exports.CountriesGroupBy = CountriesGroupBy;
