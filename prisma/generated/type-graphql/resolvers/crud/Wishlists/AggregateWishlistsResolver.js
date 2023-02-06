"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWishlistsArgs_1 = require("./args/AggregateWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const AggregateWishlists_1 = require("../../outputs/AggregateWishlists");
const helpers_1 = require("../../../helpers");
let AggregateWishlistsResolver = class AggregateWishlistsResolver {
    async aggregateWishlists(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWishlists_1.AggregateWishlists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWishlistsArgs_1.AggregateWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWishlistsResolver.prototype, "aggregateWishlists", null);
AggregateWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], AggregateWishlistsResolver);
exports.AggregateWishlistsResolver = AggregateWishlistsResolver;
