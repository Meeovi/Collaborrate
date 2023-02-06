"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsOrderByWithAggregationInput_1 = require("../../../inputs/WishlistsOrderByWithAggregationInput");
const WishlistsScalarWhereWithAggregatesInput_1 = require("../../../inputs/WishlistsScalarWhereWithAggregatesInput");
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
const WishlistsScalarFieldEnum_1 = require("../../../../enums/WishlistsScalarFieldEnum");
let GroupByWishlistsArgs = class GroupByWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], GroupByWishlistsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsOrderByWithAggregationInput_1.WishlistsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWishlistsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum_1.WishlistsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWishlistsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsScalarWhereWithAggregatesInput_1.WishlistsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsScalarWhereWithAggregatesInput_1.WishlistsScalarWhereWithAggregatesInput)
], GroupByWishlistsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWishlistsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWishlistsArgs.prototype, "skip", void 0);
GroupByWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWishlistsArgs);
exports.GroupByWishlistsArgs = GroupByWishlistsArgs;
