"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneWishlistsArgs_1 = require("./args/UpsertOneWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let UpsertOneWishlistsResolver = class UpsertOneWishlistsResolver {
    async upsertOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWishlistsArgs_1.UpsertOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneWishlistsResolver.prototype, "upsertOneWishlists", null);
UpsertOneWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], UpsertOneWishlistsResolver);
exports.UpsertOneWishlistsResolver = UpsertOneWishlistsResolver;
