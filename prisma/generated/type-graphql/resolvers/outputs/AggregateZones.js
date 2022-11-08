"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateZones = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesAvgAggregate_1 = require("../outputs/ZonesAvgAggregate");
const ZonesCountAggregate_1 = require("../outputs/ZonesCountAggregate");
const ZonesMaxAggregate_1 = require("../outputs/ZonesMaxAggregate");
const ZonesMinAggregate_1 = require("../outputs/ZonesMinAggregate");
const ZonesSumAggregate_1 = require("../outputs/ZonesSumAggregate");
let AggregateZones = class AggregateZones {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesCountAggregate_1.ZonesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesCountAggregate_1.ZonesCountAggregate)
], AggregateZones.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesAvgAggregate_1.ZonesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesAvgAggregate_1.ZonesAvgAggregate)
], AggregateZones.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesSumAggregate_1.ZonesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesSumAggregate_1.ZonesSumAggregate)
], AggregateZones.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMinAggregate_1.ZonesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMinAggregate_1.ZonesMinAggregate)
], AggregateZones.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesMaxAggregate_1.ZonesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesMaxAggregate_1.ZonesMaxAggregate)
], AggregateZones.prototype, "_max", void 0);
AggregateZones = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateZones", {
        isAbstract: true
    })
], AggregateZones);
exports.AggregateZones = AggregateZones;
