"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWishlists = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsAvgAggregate_1 = require("../outputs/WishlistsAvgAggregate");
const WishlistsCountAggregate_1 = require("../outputs/WishlistsCountAggregate");
const WishlistsMaxAggregate_1 = require("../outputs/WishlistsMaxAggregate");
const WishlistsMinAggregate_1 = require("../outputs/WishlistsMinAggregate");
const WishlistsSumAggregate_1 = require("../outputs/WishlistsSumAggregate");
let AggregateWishlists = class AggregateWishlists {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsCountAggregate_1.WishlistsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsCountAggregate_1.WishlistsCountAggregate)
], AggregateWishlists.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsAvgAggregate_1.WishlistsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsAvgAggregate_1.WishlistsAvgAggregate)
], AggregateWishlists.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsSumAggregate_1.WishlistsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsSumAggregate_1.WishlistsSumAggregate)
], AggregateWishlists.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMinAggregate_1.WishlistsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMinAggregate_1.WishlistsMinAggregate)
], AggregateWishlists.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsMaxAggregate_1.WishlistsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsMaxAggregate_1.WishlistsMaxAggregate)
], AggregateWishlists.prototype, "_max", void 0);
AggregateWishlists = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWishlists", {
        isAbstract: true
    })
], AggregateWishlists);
exports.AggregateWishlists = AggregateWishlists;
