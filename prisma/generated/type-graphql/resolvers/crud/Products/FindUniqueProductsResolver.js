"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProductsArgs_1 = require("./args/FindUniqueProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let FindUniqueProductsResolver = class FindUniqueProductsResolver {
    async findUniqueProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Products_1.Products, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductsArgs_1.FindUniqueProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProductsResolver.prototype, "findUniqueProducts", null);
FindUniqueProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], FindUniqueProductsResolver);
exports.FindUniqueProductsResolver = FindUniqueProductsResolver;
