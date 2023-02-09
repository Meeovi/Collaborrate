"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyWishlistsArgs_1 = require("./args/CreateManyWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyWishlistsResolver = class CreateManyWishlistsResolver {
    async createManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWishlistsArgs_1.CreateManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyWishlistsResolver.prototype, "createManyWishlists", null);
CreateManyWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], CreateManyWishlistsResolver);
exports.CreateManyWishlistsResolver = CreateManyWishlistsResolver;
