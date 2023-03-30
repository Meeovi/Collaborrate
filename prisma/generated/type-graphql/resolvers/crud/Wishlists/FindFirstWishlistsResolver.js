"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstWishlistsArgs_1 = require("./args/FindFirstWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let FindFirstWishlistsResolver = class FindFirstWishlistsResolver {
    async findFirstWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWishlistsArgs_1.FindFirstWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstWishlistsResolver.prototype, "findFirstWishlists", null);
FindFirstWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], FindFirstWishlistsResolver);
exports.FindFirstWishlistsResolver = FindFirstWishlistsResolver;
