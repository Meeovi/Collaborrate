"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CouponsAvgAggregate_1 = require("../outputs/CouponsAvgAggregate");
const CouponsCountAggregate_1 = require("../outputs/CouponsCountAggregate");
const CouponsMaxAggregate_1 = require("../outputs/CouponsMaxAggregate");
const CouponsMinAggregate_1 = require("../outputs/CouponsMinAggregate");
const CouponsSumAggregate_1 = require("../outputs/CouponsSumAggregate");
let CouponsGroupBy = class CouponsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CouponsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsGroupBy.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CouponsGroupBy.prototype, "products_couponsToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCountAggregate_1.CouponsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCountAggregate_1.CouponsCountAggregate)
], CouponsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsAvgAggregate_1.CouponsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsAvgAggregate_1.CouponsAvgAggregate)
], CouponsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsSumAggregate_1.CouponsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsSumAggregate_1.CouponsSumAggregate)
], CouponsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMinAggregate_1.CouponsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMinAggregate_1.CouponsMinAggregate)
], CouponsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsMaxAggregate_1.CouponsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsMaxAggregate_1.CouponsMaxAggregate)
], CouponsGroupBy.prototype, "_max", void 0);
CouponsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CouponsGroupBy", {
        isAbstract: true
    })
], CouponsGroupBy);
exports.CouponsGroupBy = CouponsGroupBy;
