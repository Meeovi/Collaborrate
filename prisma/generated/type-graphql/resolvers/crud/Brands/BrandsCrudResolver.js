"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBrandsArgs_1 = require("./args/AggregateBrandsArgs");
const CreateManyBrandsArgs_1 = require("./args/CreateManyBrandsArgs");
const CreateOneBrandsArgs_1 = require("./args/CreateOneBrandsArgs");
const DeleteManyBrandsArgs_1 = require("./args/DeleteManyBrandsArgs");
const DeleteOneBrandsArgs_1 = require("./args/DeleteOneBrandsArgs");
const FindFirstBrandsArgs_1 = require("./args/FindFirstBrandsArgs");
const FindFirstBrandsOrThrowArgs_1 = require("./args/FindFirstBrandsOrThrowArgs");
const FindManyBrandsArgs_1 = require("./args/FindManyBrandsArgs");
const FindUniqueBrandsArgs_1 = require("./args/FindUniqueBrandsArgs");
const FindUniqueBrandsOrThrowArgs_1 = require("./args/FindUniqueBrandsOrThrowArgs");
const GroupByBrandsArgs_1 = require("./args/GroupByBrandsArgs");
const UpdateManyBrandsArgs_1 = require("./args/UpdateManyBrandsArgs");
const UpdateOneBrandsArgs_1 = require("./args/UpdateOneBrandsArgs");
const UpsertOneBrandsArgs_1 = require("./args/UpsertOneBrandsArgs");
const helpers_1 = require("../../../helpers");
const Brands_1 = require("../../../models/Brands");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBrands_1 = require("../../outputs/AggregateBrands");
const BrandsGroupBy_1 = require("../../outputs/BrandsGroupBy");
let BrandsCrudResolver = class BrandsCrudResolver {
    async aggregateBrands(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBrandsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueBrandsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBrands(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrands_1.AggregateBrands, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandsArgs_1.AggregateBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "aggregateBrands", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBrandsArgs_1.CreateManyBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "createManyBrands", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brands_1.Brands, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBrandsArgs_1.CreateOneBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "createOneBrands", null);
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
], BrandsCrudResolver.prototype, "deleteManyBrands", null);
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
], BrandsCrudResolver.prototype, "deleteOneBrands", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Brands_1.Brands, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandsArgs_1.FindFirstBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "findFirstBrands", null);
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
], BrandsCrudResolver.prototype, "findFirstBrandsOrThrow", null);
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
], BrandsCrudResolver.prototype, "findManyBrands", null);
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
], BrandsCrudResolver.prototype, "findUniqueBrands", null);
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
], BrandsCrudResolver.prototype, "findUniqueBrandsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandsGroupBy_1.BrandsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBrandsArgs_1.GroupByBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "groupByBrands", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBrandsArgs_1.UpdateManyBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "updateManyBrands", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brands_1.Brands, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBrandsArgs_1.UpdateOneBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandsCrudResolver.prototype, "updateOneBrands", null);
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
], BrandsCrudResolver.prototype, "upsertOneBrands", null);
BrandsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], BrandsCrudResolver);
exports.BrandsCrudResolver = BrandsCrudResolver;
