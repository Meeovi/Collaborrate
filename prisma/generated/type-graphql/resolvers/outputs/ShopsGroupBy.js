"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsAvgAggregate_1 = require("../outputs/ShopsAvgAggregate");
const ShopsCountAggregate_1 = require("../outputs/ShopsCountAggregate");
const ShopsMaxAggregate_1 = require("../outputs/ShopsMaxAggregate");
const ShopsMinAggregate_1 = require("../outputs/ShopsMinAggregate");
const ShopsSumAggregate_1 = require("../outputs/ShopsSumAggregate");
let ShopsGroupBy = class ShopsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ShopsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "polls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "gift_certificates", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "invoices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "reports", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "reward_points", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "special_discounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "statistics", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsGroupBy.prototype, "stocks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsCountAggregate_1.ShopsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsCountAggregate_1.ShopsCountAggregate)
], ShopsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsAvgAggregate_1.ShopsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsAvgAggregate_1.ShopsAvgAggregate)
], ShopsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsSumAggregate_1.ShopsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsSumAggregate_1.ShopsSumAggregate)
], ShopsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMinAggregate_1.ShopsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMinAggregate_1.ShopsMinAggregate)
], ShopsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMaxAggregate_1.ShopsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMaxAggregate_1.ShopsMaxAggregate)
], ShopsGroupBy.prototype, "_max", void 0);
ShopsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShopsGroupBy", {
        isAbstract: true
    })
], ShopsGroupBy);
exports.ShopsGroupBy = ShopsGroupBy;
