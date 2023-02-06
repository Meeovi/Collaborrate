"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProductsOrThrowArgs_1 = require("./args/FindUniqueProductsOrThrowArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let FindUniqueProductsOrThrowResolver = class FindUniqueProductsOrThrowResolver {
    async findUniqueProductsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductsOrThrowArgs_1.FindUniqueProductsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProductsOrThrowResolver.prototype, "findUniqueProductsOrThrow", null);
FindUniqueProductsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], FindUniqueProductsOrThrowResolver);
exports.FindUniqueProductsOrThrowResolver = FindUniqueProductsOrThrowResolver;
