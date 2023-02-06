"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBrandsArgs_1 = require("./args/FindUniqueBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let FindUniqueBrandsResolver = class FindUniqueBrandsResolver {
    async findUniqueBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Brands_1.Brands, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBrandsArgs_1.FindUniqueBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBrandsResolver.prototype, "findUniqueBrands", null);
FindUniqueBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], FindUniqueBrandsResolver);
exports.FindUniqueBrandsResolver = FindUniqueBrandsResolver;
