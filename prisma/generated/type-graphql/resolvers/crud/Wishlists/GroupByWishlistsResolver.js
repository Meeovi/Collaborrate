"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWishlistsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByWishlistsArgs_1 = require("./args/GroupByWishlistsArgs");
const Wishlists_1 = require("../../../models/Wishlists");
const WishlistsGroupBy_1 = require("../../outputs/WishlistsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWishlistsResolver = class GroupByWishlistsResolver {
    async groupByWishlists(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WishlistsGroupBy_1.WishlistsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWishlistsArgs_1.GroupByWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByWishlistsResolver.prototype, "groupByWishlists", null);
GroupByWishlistsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], GroupByWishlistsResolver);
exports.GroupByWishlistsResolver = GroupByWishlistsResolver;
