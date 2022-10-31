"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DiscountsAvgAggregate_1 = require("../outputs/DiscountsAvgAggregate");
const DiscountsCountAggregate_1 = require("../outputs/DiscountsCountAggregate");
const DiscountsMaxAggregate_1 = require("../outputs/DiscountsMaxAggregate");
const DiscountsMinAggregate_1 = require("../outputs/DiscountsMinAggregate");
const DiscountsSumAggregate_1 = require("../outputs/DiscountsSumAggregate");
let DiscountsGroupBy = class DiscountsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DiscountsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "discount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DiscountsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "special_offers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "rewards", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "expiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "creditMemo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "billToName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DiscountsGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsCountAggregate_1.DiscountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsCountAggregate_1.DiscountsCountAggregate)
], DiscountsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsAvgAggregate_1.DiscountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsAvgAggregate_1.DiscountsAvgAggregate)
], DiscountsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsSumAggregate_1.DiscountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsSumAggregate_1.DiscountsSumAggregate)
], DiscountsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMinAggregate_1.DiscountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMinAggregate_1.DiscountsMinAggregate)
], DiscountsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMaxAggregate_1.DiscountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMaxAggregate_1.DiscountsMaxAggregate)
], DiscountsGroupBy.prototype, "_max", void 0);
DiscountsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DiscountsGroupBy", {
        isAbstract: true
    })
], DiscountsGroupBy);
exports.DiscountsGroupBy = DiscountsGroupBy;
