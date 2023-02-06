"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBrandsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBrandsOrThrowArgs_1 = require("./args/FindUniqueBrandsOrThrowArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let FindUniqueBrandsOrThrowResolver = class FindUniqueBrandsOrThrowResolver {
    async findUniqueBrandsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBrandsOrThrowArgs_1.FindUniqueBrandsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBrandsOrThrowResolver.prototype, "findUniqueBrandsOrThrow", null);
FindUniqueBrandsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], FindUniqueBrandsOrThrowResolver);
exports.FindUniqueBrandsOrThrowResolver = FindUniqueBrandsOrThrowResolver;
