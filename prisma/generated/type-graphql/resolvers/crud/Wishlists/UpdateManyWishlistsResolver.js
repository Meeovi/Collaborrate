"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyWishlistsArgs_1 = require("./args/UpdateManyWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyWishlistsResolver = class UpdateManyWishlistsResolver {
    async updateManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWishlistsArgs_1.UpdateManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyWishlistsResolver.prototype, "updateManyWishlists", null);
UpdateManyWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], UpdateManyWishlistsResolver);
exports.UpdateManyWishlistsResolver = UpdateManyWishlistsResolver;
