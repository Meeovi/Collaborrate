"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShops = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsAvgAggregate_1 = require("../outputs/ShopsAvgAggregate");
const ShopsCountAggregate_1 = require("../outputs/ShopsCountAggregate");
const ShopsMaxAggregate_1 = require("../outputs/ShopsMaxAggregate");
const ShopsMinAggregate_1 = require("../outputs/ShopsMinAggregate");
const ShopsSumAggregate_1 = require("../outputs/ShopsSumAggregate");
let AggregateShops = class AggregateShops {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsCountAggregate_1.ShopsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsCountAggregate_1.ShopsCountAggregate)
], AggregateShops.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsAvgAggregate_1.ShopsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsAvgAggregate_1.ShopsAvgAggregate)
], AggregateShops.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsSumAggregate_1.ShopsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsSumAggregate_1.ShopsSumAggregate)
], AggregateShops.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMinAggregate_1.ShopsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMinAggregate_1.ShopsMinAggregate)
], AggregateShops.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsMaxAggregate_1.ShopsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsMaxAggregate_1.ShopsMaxAggregate)
], AggregateShops.prototype, "_max", void 0);
AggregateShops = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShops", {
        isAbstract: true
    })
], AggregateShops);
exports.AggregateShops = AggregateShops;
