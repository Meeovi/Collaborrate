"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBrandsArgs_1 = require("./args/DeleteOneBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let DeleteOneBrandsResolver = class DeleteOneBrandsResolver {
    async deleteOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brands_1.Brands, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBrandsArgs_1.DeleteOneBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBrandsResolver.prototype, "deleteOneBrands", null);
DeleteOneBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], DeleteOneBrandsResolver);
exports.DeleteOneBrandsResolver = DeleteOneBrandsResolver;
