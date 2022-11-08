"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDiscounts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsAvgAggregate_1 = require("../outputs/DiscountsAvgAggregate");
const DiscountsCountAggregate_1 = require("../outputs/DiscountsCountAggregate");
const DiscountsMaxAggregate_1 = require("../outputs/DiscountsMaxAggregate");
const DiscountsMinAggregate_1 = require("../outputs/DiscountsMinAggregate");
const DiscountsSumAggregate_1 = require("../outputs/DiscountsSumAggregate");
let AggregateDiscounts = class AggregateDiscounts {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsCountAggregate_1.DiscountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsCountAggregate_1.DiscountsCountAggregate)
], AggregateDiscounts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsAvgAggregate_1.DiscountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsAvgAggregate_1.DiscountsAvgAggregate)
], AggregateDiscounts.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsSumAggregate_1.DiscountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsSumAggregate_1.DiscountsSumAggregate)
], AggregateDiscounts.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMinAggregate_1.DiscountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMinAggregate_1.DiscountsMinAggregate)
], AggregateDiscounts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsMaxAggregate_1.DiscountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsMaxAggregate_1.DiscountsMaxAggregate)
], AggregateDiscounts.prototype, "_max", void 0);
AggregateDiscounts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateDiscounts", {
        isAbstract: true
    })
], AggregateDiscounts);
exports.AggregateDiscounts = AggregateDiscounts;
