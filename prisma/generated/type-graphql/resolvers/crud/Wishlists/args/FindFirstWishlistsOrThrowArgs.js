"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWishlistsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WishlistsOrderByWithRelationInput_1 = require("../../../inputs/WishlistsOrderByWithRelationInput");
const WishlistsWhereInput_1 = require("../../../inputs/WishlistsWhereInput");
const WishlistsWhereUniqueInput_1 = require("../../../inputs/WishlistsWhereUniqueInput");
const WishlistsScalarFieldEnum_1 = require("../../../../enums/WishlistsScalarFieldEnum");
let FindFirstWishlistsOrThrowArgs = class FindFirstWishlistsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereInput_1.WishlistsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereInput_1.WishlistsWhereInput)
], FindFirstWishlistsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsOrderByWithRelationInput_1.WishlistsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWishlistsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WishlistsWhereUniqueInput_1.WishlistsWhereUniqueInput)
], FindFirstWishlistsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWishlistsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWishlistsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WishlistsScalarFieldEnum_1.WishlistsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWishlistsOrThrowArgs.prototype, "distinct", void 0);
FindFirstWishlistsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWishlistsOrThrowArgs);
exports.FindFirstWishlistsOrThrowArgs = FindFirstWishlistsOrThrowArgs;
