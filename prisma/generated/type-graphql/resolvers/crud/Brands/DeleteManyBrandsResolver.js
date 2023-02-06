"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBrandsArgs_1 = require("./args/DeleteManyBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBrandsResolver = class DeleteManyBrandsResolver {
    async deleteManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBrandsArgs_1.DeleteManyBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBrandsResolver.prototype, "deleteManyBrands", null);
DeleteManyBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], DeleteManyBrandsResolver);
exports.DeleteManyBrandsResolver = DeleteManyBrandsResolver;
