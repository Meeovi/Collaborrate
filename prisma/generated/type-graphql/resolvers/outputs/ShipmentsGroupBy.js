"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ShipmentsAvgAggregate_1 = require("../outputs/ShipmentsAvgAggregate");
const ShipmentsCountAggregate_1 = require("../outputs/ShipmentsCountAggregate");
const ShipmentsMaxAggregate_1 = require("../outputs/ShipmentsMaxAggregate");
const ShipmentsMinAggregate_1 = require("../outputs/ShipmentsMinAggregate");
const ShipmentsSumAggregate_1 = require("../outputs/ShipmentsSumAggregate");
let ShipmentsGroupBy = class ShipmentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "speed_grade", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ShipmentsGroupBy.prototype, "ship_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "carrier_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "transit_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "tracking_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ShipmentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCountAggregate_1.ShipmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsCountAggregate_1.ShipmentsCountAggregate)
], ShipmentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsAvgAggregate_1.ShipmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsAvgAggregate_1.ShipmentsAvgAggregate)
], ShipmentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsSumAggregate_1.ShipmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsSumAggregate_1.ShipmentsSumAggregate)
], ShipmentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMinAggregate_1.ShipmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMinAggregate_1.ShipmentsMinAggregate)
], ShipmentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMaxAggregate_1.ShipmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMaxAggregate_1.ShipmentsMaxAggregate)
], ShipmentsGroupBy.prototype, "_max", void 0);
ShipmentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShipmentsGroupBy", {
        isAbstract: true
    })
], ShipmentsGroupBy);
exports.ShipmentsGroupBy = ShipmentsGroupBy;
