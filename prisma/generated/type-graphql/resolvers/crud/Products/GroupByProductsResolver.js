"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByProductsArgs_1 = require("./args/GroupByProductsArgs");
const Products_1 = require("../../../models/Products");
const ProductsGroupBy_1 = require("../../outputs/ProductsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProductsResolver = class GroupByProductsResolver {
    async groupByProducts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductsGroupBy_1.ProductsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProductsArgs_1.GroupByProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByProductsResolver.prototype, "groupByProducts", null);
GroupByProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], GroupByProductsResolver);
exports.GroupByProductsResolver = GroupByProductsResolver;
