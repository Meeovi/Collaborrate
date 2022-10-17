"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateManufacturer = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerAvgAggregate_1 = require("../outputs/ManufacturerAvgAggregate");
const ManufacturerCountAggregate_1 = require("../outputs/ManufacturerCountAggregate");
const ManufacturerMaxAggregate_1 = require("../outputs/ManufacturerMaxAggregate");
const ManufacturerMinAggregate_1 = require("../outputs/ManufacturerMinAggregate");
const ManufacturerSumAggregate_1 = require("../outputs/ManufacturerSumAggregate");
let AggregateManufacturer = class AggregateManufacturer {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerCountAggregate_1.ManufacturerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerCountAggregate_1.ManufacturerCountAggregate)
], AggregateManufacturer.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerAvgAggregate_1.ManufacturerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerAvgAggregate_1.ManufacturerAvgAggregate)
], AggregateManufacturer.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerSumAggregate_1.ManufacturerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerSumAggregate_1.ManufacturerSumAggregate)
], AggregateManufacturer.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMinAggregate_1.ManufacturerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMinAggregate_1.ManufacturerMinAggregate)
], AggregateManufacturer.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerMaxAggregate_1.ManufacturerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerMaxAggregate_1.ManufacturerMaxAggregate)
], AggregateManufacturer.prototype, "_max", void 0);
AggregateManufacturer = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateManufacturer", {
        isAbstract: true
    })
], AggregateManufacturer);
exports.AggregateManufacturer = AggregateManufacturer;
