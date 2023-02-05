"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneWishlistsArgs_1 = require("./args/DeleteOneWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let DeleteOneWishlistsResolver = class DeleteOneWishlistsResolver {
    async deleteOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWishlistsArgs_1.DeleteOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneWishlistsResolver.prototype, "deleteOneWishlists", null);
DeleteOneWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], DeleteOneWishlistsResolver);
exports.DeleteOneWishlistsResolver = DeleteOneWishlistsResolver;
