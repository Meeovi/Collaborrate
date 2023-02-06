"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWishlistsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWishlistsOrThrowArgs_1 = require("./args/FindUniqueWishlistsOrThrowArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let FindUniqueWishlistsOrThrowResolver = class FindUniqueWishlistsOrThrowResolver {
    async findUniqueWishlistsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWishlistsOrThrowArgs_1.FindUniqueWishlistsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueWishlistsOrThrowResolver.prototype, "findUniqueWishlistsOrThrow", null);
FindUniqueWishlistsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], FindUniqueWishlistsOrThrowResolver);
exports.FindUniqueWishlistsOrThrowResolver = FindUniqueWishlistsOrThrowResolver;
