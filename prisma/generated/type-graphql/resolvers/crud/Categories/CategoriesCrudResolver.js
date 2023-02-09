"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCategoriesArgs_1 = require("./args/AggregateCategoriesArgs");
const CreateManyCategoriesArgs_1 = require("./args/CreateManyCategoriesArgs");
const CreateOneCategoriesArgs_1 = require("./args/CreateOneCategoriesArgs");
const DeleteManyCategoriesArgs_1 = require("./args/DeleteManyCategoriesArgs");
const DeleteOneCategoriesArgs_1 = require("./args/DeleteOneCategoriesArgs");
const FindFirstCategoriesArgs_1 = require("./args/FindFirstCategoriesArgs");
const FindFirstCategoriesOrThrowArgs_1 = require("./args/FindFirstCategoriesOrThrowArgs");
const FindManyCategoriesArgs_1 = require("./args/FindManyCategoriesArgs");
const FindUniqueCategoriesArgs_1 = require("./args/FindUniqueCategoriesArgs");
const FindUniqueCategoriesOrThrowArgs_1 = require("./args/FindUniqueCategoriesOrThrowArgs");
const GroupByCategoriesArgs_1 = require("./args/GroupByCategoriesArgs");
const UpdateManyCategoriesArgs_1 = require("./args/UpdateManyCategoriesArgs");
const UpdateOneCategoriesArgs_1 = require("./args/UpdateOneCategoriesArgs");
const UpsertOneCategoriesArgs_1 = require("./args/UpsertOneCategoriesArgs");
const helpers_1 = require("../../../helpers");
const Categories_1 = require("../../../models/Categories");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCategories_1 = require("../../outputs/AggregateCategories");
const CategoriesGroupBy_1 = require("../../outputs/CategoriesGroupBy");
let CategoriesCrudResolver = class CategoriesCrudResolver {
    async aggregateCategories(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategoriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCategoriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCategories(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCategories_1.AggregateCategories, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCategoriesArgs_1.AggregateCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "aggregateCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCategoriesArgs_1.CreateManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "createManyCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCategoriesArgs_1.CreateOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "createOneCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCategoriesArgs_1.DeleteManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "deleteManyCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCategoriesArgs_1.DeleteOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "deleteOneCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesArgs_1.FindFirstCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "findFirstCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesOrThrowArgs_1.FindFirstCategoriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "findFirstCategoriesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Categories_1.Categories], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCategoriesArgs_1.FindManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "findManyCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoriesArgs_1.FindUniqueCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "findUniqueCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoriesOrThrowArgs_1.FindUniqueCategoriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "findUniqueCategoriesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CategoriesGroupBy_1.CategoriesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCategoriesArgs_1.GroupByCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "groupByCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCategoriesArgs_1.UpdateManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "updateManyCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCategoriesArgs_1.UpdateOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "updateOneCategories", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCategoriesArgs_1.UpsertOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriesCrudResolver.prototype, "upsertOneCategories", null);
CategoriesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], CategoriesCrudResolver);
exports.CategoriesCrudResolver = CategoriesCrudResolver;
