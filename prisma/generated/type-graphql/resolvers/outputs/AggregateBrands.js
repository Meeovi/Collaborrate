"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBrands = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsAvgAggregate_1 = require("../outputs/BrandsAvgAggregate");
const BrandsCountAggregate_1 = require("../outputs/BrandsCountAggregate");
const BrandsMaxAggregate_1 = require("../outputs/BrandsMaxAggregate");
const BrandsMinAggregate_1 = require("../outputs/BrandsMinAggregate");
const BrandsSumAggregate_1 = require("../outputs/BrandsSumAggregate");
let AggregateBrands = class AggregateBrands {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsCountAggregate_1.BrandsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsCountAggregate_1.BrandsCountAggregate)
], AggregateBrands.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsAvgAggregate_1.BrandsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsAvgAggregate_1.BrandsAvgAggregate)
], AggregateBrands.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsSumAggregate_1.BrandsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsSumAggregate_1.BrandsSumAggregate)
], AggregateBrands.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMinAggregate_1.BrandsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMinAggregate_1.BrandsMinAggregate)
], AggregateBrands.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsMaxAggregate_1.BrandsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsMaxAggregate_1.BrandsMaxAggregate)
], AggregateBrands.prototype, "_max", void 0);
AggregateBrands = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBrands", {
        isAbstract: true
    })
], AggregateBrands);
exports.AggregateBrands = AggregateBrands;
