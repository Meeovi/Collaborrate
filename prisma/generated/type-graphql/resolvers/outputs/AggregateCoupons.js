"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCoupons = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsAvgAggregate_1 = require("../outputs/CouponsAvgAggregate");
const CouponsCountAggregate_1 = require("../outputs/CouponsCountAggregate");
const CouponsMaxAggregate_1 = require("../outputs/CouponsMaxAggregate");
const CouponsMinAggregate_1 = require("../outputs/CouponsMinAggregate");
const CouponsSumAggregate_1 = require("../outputs/CouponsSumAggregate");
let AggregateCoupons = class AggregateCoupons {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCountAggregate_1.CouponsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCountAggregate_1.CouponsCountAggregate)
], AggregateCoupons.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsAvgAggregate_1.CouponsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsAvgAggregate_1.CouponsAvgAggregate)
], AggregateCoupons.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsSumAggregate_1.CouponsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsSumAggregate_1.CouponsSumAggregate)
], AggregateCoupons.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMinAggregate_1.CouponsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMinAggregate_1.CouponsMinAggregate)
], AggregateCoupons.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMaxAggregate_1.CouponsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMaxAggregate_1.CouponsMaxAggregate)
], AggregateCoupons.prototype, "_max", void 0);
AggregateCoupons = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCoupons", {
        isAbstract: true
    })
], AggregateCoupons);
exports.AggregateCoupons = AggregateCoupons;
