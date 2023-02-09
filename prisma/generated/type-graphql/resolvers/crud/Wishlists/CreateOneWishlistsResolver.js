"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneWishlistsArgs_1 = require("./args/CreateOneWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const helpers_1 = require("../../../helpers");
let CreateOneWishlistsResolver = class CreateOneWishlistsResolver {
    async createOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWishlistsArgs_1.CreateOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneWishlistsResolver.prototype, "createOneWishlists", null);
CreateOneWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], CreateOneWishlistsResolver);
exports.CreateOneWishlistsResolver = CreateOneWishlistsResolver;
