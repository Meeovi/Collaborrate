"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSpecial_discounts = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsAvgAggregate_1 = require("../outputs/Special_discountsAvgAggregate");
const Special_discountsCountAggregate_1 = require("../outputs/Special_discountsCountAggregate");
const Special_discountsMaxAggregate_1 = require("../outputs/Special_discountsMaxAggregate");
const Special_discountsMinAggregate_1 = require("../outputs/Special_discountsMinAggregate");
const Special_discountsSumAggregate_1 = require("../outputs/Special_discountsSumAggregate");
let AggregateSpecial_discounts = class AggregateSpecial_discounts {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsCountAggregate_1.Special_discountsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsCountAggregate_1.Special_discountsCountAggregate)
], AggregateSpecial_discounts.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsAvgAggregate_1.Special_discountsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsAvgAggregate_1.Special_discountsAvgAggregate)
], AggregateSpecial_discounts.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsSumAggregate_1.Special_discountsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsSumAggregate_1.Special_discountsSumAggregate)
], AggregateSpecial_discounts.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMinAggregate_1.Special_discountsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMinAggregate_1.Special_discountsMinAggregate)
], AggregateSpecial_discounts.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsMaxAggregate_1.Special_discountsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsMaxAggregate_1.Special_discountsMaxAggregate)
], AggregateSpecial_discounts.prototype, "_max", void 0);
AggregateSpecial_discounts = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSpecial_discounts", {
        isAbstract: true
    })
], AggregateSpecial_discounts);
exports.AggregateSpecial_discounts = AggregateSpecial_discounts;
