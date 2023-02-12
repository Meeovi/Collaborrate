"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWishlistsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsOrderByWithRelationInput_1 = require("../../../inputs/WishlistsOrderByWithRelationInput");
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
const WishlistsScalarFieldEnum_1 = require("../../../../enums/WishlistsScalarFieldEnum");
let FindFirstWishlistsArgs = class FindFirstWishlistsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], FindFirstWishlistsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsOrderByWithRelationInput_1.WishlistsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWishlistsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], FindFirstWishlistsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWishlistsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWishlistsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum_1.WishlistsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWishlistsArgs.prototype, "distinct", void 0);
FindFirstWishlistsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWishlistsArgs);
exports.FindFirstWishlistsArgs = FindFirstWishlistsArgs;
