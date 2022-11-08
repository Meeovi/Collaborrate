"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVendors = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsAvgAggregate_1 = require("../outputs/VendorsAvgAggregate");
const VendorsCountAggregate_1 = require("../outputs/VendorsCountAggregate");
const VendorsMaxAggregate_1 = require("../outputs/VendorsMaxAggregate");
const VendorsMinAggregate_1 = require("../outputs/VendorsMinAggregate");
const VendorsSumAggregate_1 = require("../outputs/VendorsSumAggregate");
let AggregateVendors = class AggregateVendors {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsCountAggregate_1.VendorsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsCountAggregate_1.VendorsCountAggregate)
], AggregateVendors.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsAvgAggregate_1.VendorsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsAvgAggregate_1.VendorsAvgAggregate)
], AggregateVendors.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsSumAggregate_1.VendorsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsSumAggregate_1.VendorsSumAggregate)
], AggregateVendors.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMinAggregate_1.VendorsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMinAggregate_1.VendorsMinAggregate)
], AggregateVendors.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsMaxAggregate_1.VendorsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsMaxAggregate_1.VendorsMaxAggregate)
], AggregateVendors.prototype, "_max", void 0);
AggregateVendors = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateVendors", {
        isAbstract: true
    })
], AggregateVendors);
exports.AggregateVendors = AggregateVendors;
