"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWishlistsArgs_1 = require("./args/FindUniqueWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let FindUniqueWishlistsResolver = class FindUniqueWishlistsResolver {
    async findUniqueWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWishlistsArgs_1.FindUniqueWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueWishlistsResolver.prototype, "findUniqueWishlists", null);
FindUniqueWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], FindUniqueWishlistsResolver);
exports.FindUniqueWishlistsResolver = FindUniqueWishlistsResolver;
