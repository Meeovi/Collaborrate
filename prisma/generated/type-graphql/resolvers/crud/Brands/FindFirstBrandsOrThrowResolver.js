"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBrandsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBrandsOrThrowArgs_1 = require("./args/FindFirstBrandsOrThrowArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let FindFirstBrandsOrThrowResolver = class FindFirstBrandsOrThrowResolver {
    async findFirstBrandsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandsOrThrowArgs_1.FindFirstBrandsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBrandsOrThrowResolver.prototype, "findFirstBrandsOrThrow", null);
FindFirstBrandsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], FindFirstBrandsOrThrowResolver);
exports.FindFirstBrandsOrThrowResolver = FindFirstBrandsOrThrowResolver;
