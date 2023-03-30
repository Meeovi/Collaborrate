"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWishlistsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstWishlistsOrThrowArgs_1 = require("./args/FindFirstWishlistsOrThrowArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let FindFirstWishlistsOrThrowResolver = class FindFirstWishlistsOrThrowResolver {
    async findFirstWishlistsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWishlistsOrThrowArgs_1.FindFirstWishlistsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstWishlistsOrThrowResolver.prototype, "findFirstWishlistsOrThrow", null);
FindFirstWishlistsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], FindFirstWishlistsOrThrowResolver);
exports.FindFirstWishlistsOrThrowResolver = FindFirstWishlistsOrThrowResolver;
