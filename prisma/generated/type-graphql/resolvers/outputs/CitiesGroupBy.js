"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesAvgAggregate_1 = require("../outputs/CitiesAvgAggregate");
const CitiesCountAggregate_1 = require("../outputs/CitiesCountAggregate");
const CitiesMaxAggregate_1 = require("../outputs/CitiesMaxAggregate");
const CitiesMinAggregate_1 = require("../outputs/CitiesMinAggregate");
const CitiesSumAggregate_1 = require("../outputs/CitiesSumAggregate");
let CitiesGroupBy = class CitiesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CitiesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "postalCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCountAggregate_1.CitiesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesCountAggregate_1.CitiesCountAggregate)
], CitiesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesAvgAggregate_1.CitiesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesAvgAggregate_1.CitiesAvgAggregate)
], CitiesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesSumAggregate_1.CitiesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesSumAggregate_1.CitiesSumAggregate)
], CitiesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMinAggregate_1.CitiesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMinAggregate_1.CitiesMinAggregate)
], CitiesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesMaxAggregate_1.CitiesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesMaxAggregate_1.CitiesMaxAggregate)
], CitiesGroupBy.prototype, "_max", void 0);
CitiesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CitiesGroupBy", {
        isAbstract: true
    })
], CitiesGroupBy);
exports.CitiesGroupBy = CitiesGroupBy;
