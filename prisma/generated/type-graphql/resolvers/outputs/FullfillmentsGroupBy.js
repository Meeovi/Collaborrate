"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const FullfillmentsAvgAggregate_1 = require("../outputs/FullfillmentsAvgAggregate");
const FullfillmentsCountAggregate_1 = require("../outputs/FullfillmentsCountAggregate");
const FullfillmentsMaxAggregate_1 = require("../outputs/FullfillmentsMaxAggregate");
const FullfillmentsMinAggregate_1 = require("../outputs/FullfillmentsMinAggregate");
const FullfillmentsSumAggregate_1 = require("../outputs/FullfillmentsSumAggregate");
let FullfillmentsGroupBy = class FullfillmentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], FullfillmentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FullfillmentsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "shipping_zones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "country_area", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "pickup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsGroupBy.prototype, "stock", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCountAggregate_1.FullfillmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsCountAggregate_1.FullfillmentsCountAggregate)
], FullfillmentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsAvgAggregate_1.FullfillmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsAvgAggregate_1.FullfillmentsAvgAggregate)
], FullfillmentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsSumAggregate_1.FullfillmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsSumAggregate_1.FullfillmentsSumAggregate)
], FullfillmentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMinAggregate_1.FullfillmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMinAggregate_1.FullfillmentsMinAggregate)
], FullfillmentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsMaxAggregate_1.FullfillmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsMaxAggregate_1.FullfillmentsMaxAggregate)
], FullfillmentsGroupBy.prototype, "_max", void 0);
FullfillmentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FullfillmentsGroupBy", {
        isAbstract: true
    })
], FullfillmentsGroupBy);
exports.FullfillmentsGroupBy = FullfillmentsGroupBy;
