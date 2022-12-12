"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShipments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsAvgAggregate_1 = require("../outputs/ShipmentsAvgAggregate");
const ShipmentsCountAggregate_1 = require("../outputs/ShipmentsCountAggregate");
const ShipmentsMaxAggregate_1 = require("../outputs/ShipmentsMaxAggregate");
const ShipmentsMinAggregate_1 = require("../outputs/ShipmentsMinAggregate");
const ShipmentsSumAggregate_1 = require("../outputs/ShipmentsSumAggregate");
let AggregateShipments = class AggregateShipments {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCountAggregate_1.ShipmentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsCountAggregate_1.ShipmentsCountAggregate)
], AggregateShipments.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsAvgAggregate_1.ShipmentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsAvgAggregate_1.ShipmentsAvgAggregate)
], AggregateShipments.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsSumAggregate_1.ShipmentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsSumAggregate_1.ShipmentsSumAggregate)
], AggregateShipments.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMinAggregate_1.ShipmentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMinAggregate_1.ShipmentsMinAggregate)
], AggregateShipments.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMaxAggregate_1.ShipmentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMaxAggregate_1.ShipmentsMaxAggregate)
], AggregateShipments.prototype, "_max", void 0);
AggregateShipments = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShipments", {
        isAbstract: true
    })
], AggregateShipments);
exports.AggregateShipments = AggregateShipments;
