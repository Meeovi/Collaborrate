"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyWishlistsArgs_1 = require("./args/FindManyWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let FindManyWishlistsResolver = class FindManyWishlistsResolver {
    async findManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Wishlists_1.Wishlists], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWishlistsArgs_1.FindManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyWishlistsResolver.prototype, "findManyWishlists", null);
FindManyWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], FindManyWishlistsResolver);
exports.FindManyWishlistsResolver = FindManyWishlistsResolver;
