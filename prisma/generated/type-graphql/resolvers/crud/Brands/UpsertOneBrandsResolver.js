"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneBrandsArgs_1 = require("./args/UpsertOneBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let UpsertOneBrandsResolver = class UpsertOneBrandsResolver {
    async upsertOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brands_1.Brands, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBrandsArgs_1.UpsertOneBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneBrandsResolver.prototype, "upsertOneBrands", null);
UpsertOneBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], UpsertOneBrandsResolver);
exports.UpsertOneBrandsResolver = UpsertOneBrandsResolver;
