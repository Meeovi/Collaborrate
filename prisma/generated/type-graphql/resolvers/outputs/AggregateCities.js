"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCities = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesAvgAggregate_1 = require("../outputs/CitiesAvgAggregate");
const CitiesCountAggregate_1 = require("../outputs/CitiesCountAggregate");
const CitiesMaxAggregate_1 = require("../outputs/CitiesMaxAggregate");
const CitiesMinAggregate_1 = require("../outputs/CitiesMinAggregate");
const CitiesSumAggregate_1 = require("../outputs/CitiesSumAggregate");
let AggregateCities = class AggregateCities {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCountAggregate_1.CitiesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesCountAggregate_1.CitiesCountAggregate)
], AggregateCities.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesAvgAggregate_1.CitiesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesAvgAggregate_1.CitiesAvgAggregate)
], AggregateCities.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesSumAggregate_1.CitiesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesSumAggregate_1.CitiesSumAggregate)
], AggregateCities.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMinAggregate_1.CitiesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMinAggregate_1.CitiesMinAggregate)
], AggregateCities.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMaxAggregate_1.CitiesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMaxAggregate_1.CitiesMaxAggregate)
], AggregateCities.prototype, "_max", void 0);
AggregateCities = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCities", {
        isAbstract: true
    })
], AggregateCities);
exports.AggregateCities = AggregateCities;
