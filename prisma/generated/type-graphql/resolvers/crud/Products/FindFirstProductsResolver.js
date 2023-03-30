"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstProductsArgs_1 = require("./args/FindFirstProductsArgs");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let FindFirstProductsResolver = class FindFirstProductsResolver {
    async findFirstProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProductsArgs_1.FindFirstProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProductsResolver.prototype, "findFirstProducts", null);
FindFirstProductsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], FindFirstProductsResolver);
exports.FindFirstProductsResolver = FindFirstProductsResolver;
