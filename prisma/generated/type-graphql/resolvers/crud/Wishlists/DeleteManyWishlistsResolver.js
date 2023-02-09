"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyWishlistsArgs_1 = require("./args/DeleteManyWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyWishlistsResolver = class DeleteManyWishlistsResolver {
    async deleteManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWishlistsArgs_1.DeleteManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyWishlistsResolver.prototype, "deleteManyWishlists", null);
DeleteManyWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], DeleteManyWishlistsResolver);
exports.DeleteManyWishlistsResolver = DeleteManyWishlistsResolver;
