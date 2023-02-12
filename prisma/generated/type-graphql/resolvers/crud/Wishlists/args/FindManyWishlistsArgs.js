"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsOrderByWithRelationInput_1 = require("../../../inputs/WishlistsOrderByWithRelationInput");
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
const WishlistsScalarFieldEnum_1 = require("../../../../enums/WishlistsScalarFieldEnum");
let FindManyWishlistsArgs = class FindManyWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], FindManyWishlistsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsOrderByWithRelationInput_1.WishlistsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyWishlistsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], FindManyWishlistsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyWishlistsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyWishlistsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum_1.WishlistsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyWishlistsArgs.prototype, "distinct", void 0);
FindManyWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyWishlistsArgs);
exports.FindManyWishlistsArgs = FindManyWishlistsArgs;
