"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBrandsArgs_1 = require("./args/FindManyBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let FindManyBrandsResolver = class FindManyBrandsResolver {
    async findManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Brands_1.Brands], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBrandsArgs_1.FindManyBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBrandsResolver.prototype, "findManyBrands", null);
FindManyBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], FindManyBrandsResolver);
exports.FindManyBrandsResolver = FindManyBrandsResolver;
