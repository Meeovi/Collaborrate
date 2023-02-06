"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProvidersArgs_1 = require("./args/AggregateProvidersArgs");
const CreateManyProvidersArgs_1 = require("./args/CreateManyProvidersArgs");
const CreateOneProvidersArgs_1 = require("./args/CreateOneProvidersArgs");
const DeleteManyProvidersArgs_1 = require("./args/DeleteManyProvidersArgs");
const DeleteOneProvidersArgs_1 = require("./args/DeleteOneProvidersArgs");
const FindFirstProvidersArgs_1 = require("./args/FindFirstProvidersArgs");
const FindFirstProvidersOrThrowArgs_1 = require("./args/FindFirstProvidersOrThrowArgs");
const FindManyProvidersArgs_1 = require("./args/FindManyProvidersArgs");
const FindUniqueProvidersArgs_1 = require("./args/FindUniqueProvidersArgs");
const FindUniqueProvidersOrThrowArgs_1 = require("./args/FindUniqueProvidersOrThrowArgs");
const GroupByProvidersArgs_1 = require("./args/GroupByProvidersArgs");
const UpdateManyProvidersArgs_1 = require("./args/UpdateManyProvidersArgs");
const UpdateOneProvidersArgs_1 = require("./args/UpdateOneProvidersArgs");
const UpsertOneProvidersArgs_1 = require("./args/UpsertOneProvidersArgs");
const helpers_1 = require("../../../helpers");
const Providers_1 = require("../../../models/Providers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProviders_1 = require("../../outputs/AggregateProviders");
const ProvidersGroupBy_1 = require("../../outputs/ProvidersGroupBy");
let ProvidersCrudResolver = class ProvidersCrudResolver {
    async aggregateProviders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProvidersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueProvidersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByProviders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProviders_1.AggregateProviders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProvidersArgs_1.AggregateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "aggregateProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProvidersArgs_1.CreateManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "createManyProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProvidersArgs_1.CreateOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "createOneProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProvidersArgs_1.DeleteManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "deleteManyProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProvidersArgs_1.DeleteOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "deleteOneProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProvidersArgs_1.FindFirstProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findFirstProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProvidersOrThrowArgs_1.FindFirstProvidersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findFirstProvidersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Providers_1.Providers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProvidersArgs_1.FindManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findManyProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProvidersArgs_1.FindUniqueProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findUniqueProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProvidersOrThrowArgs_1.FindUniqueProvidersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findUniqueProvidersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProvidersGroupBy_1.ProvidersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProvidersArgs_1.GroupByProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "groupByProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProvidersArgs_1.UpdateManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "updateManyProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProvidersArgs_1.UpdateOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "updateOneProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProvidersArgs_1.UpsertOneProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "upsertOneProviders", null);
ProvidersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], ProvidersCrudResolver);
exports.ProvidersCrudResolver = ProvidersCrudResolver;
