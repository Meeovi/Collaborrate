"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateIntegrationsArgs_1 = require("./args/AggregateIntegrationsArgs");
const CreateManyIntegrationsArgs_1 = require("./args/CreateManyIntegrationsArgs");
const CreateOneIntegrationsArgs_1 = require("./args/CreateOneIntegrationsArgs");
const DeleteManyIntegrationsArgs_1 = require("./args/DeleteManyIntegrationsArgs");
const DeleteOneIntegrationsArgs_1 = require("./args/DeleteOneIntegrationsArgs");
const FindFirstIntegrationsArgs_1 = require("./args/FindFirstIntegrationsArgs");
const FindFirstIntegrationsOrThrowArgs_1 = require("./args/FindFirstIntegrationsOrThrowArgs");
const FindManyIntegrationsArgs_1 = require("./args/FindManyIntegrationsArgs");
const FindUniqueIntegrationsArgs_1 = require("./args/FindUniqueIntegrationsArgs");
const FindUniqueIntegrationsOrThrowArgs_1 = require("./args/FindUniqueIntegrationsOrThrowArgs");
const GroupByIntegrationsArgs_1 = require("./args/GroupByIntegrationsArgs");
const UpdateManyIntegrationsArgs_1 = require("./args/UpdateManyIntegrationsArgs");
const UpdateOneIntegrationsArgs_1 = require("./args/UpdateOneIntegrationsArgs");
const UpsertOneIntegrationsArgs_1 = require("./args/UpsertOneIntegrationsArgs");
const helpers_1 = require("../../../helpers");
const Integrations_1 = require("../../../models/Integrations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIntegrations_1 = require("../../outputs/AggregateIntegrations");
const IntegrationsGroupBy_1 = require("../../outputs/IntegrationsGroupBy");
let IntegrationsCrudResolver = class IntegrationsCrudResolver {
    async aggregateIntegrations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIntegrationsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueIntegrationsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByIntegrations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateIntegrations_1.AggregateIntegrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateIntegrationsArgs_1.AggregateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "aggregateIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIntegrationsArgs_1.CreateManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "createManyIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIntegrationsArgs_1.CreateOneIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "createOneIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyIntegrationsArgs_1.DeleteManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "deleteManyIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneIntegrationsArgs_1.DeleteOneIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "deleteOneIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIntegrationsArgs_1.FindFirstIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findFirstIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIntegrationsOrThrowArgs_1.FindFirstIntegrationsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findFirstIntegrationsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Integrations_1.Integrations], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyIntegrationsArgs_1.FindManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findManyIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIntegrationsArgs_1.FindUniqueIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findUniqueIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIntegrationsOrThrowArgs_1.FindUniqueIntegrationsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findUniqueIntegrationsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [IntegrationsGroupBy_1.IntegrationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByIntegrationsArgs_1.GroupByIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "groupByIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIntegrationsArgs_1.UpdateManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "updateManyIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneIntegrationsArgs_1.UpdateOneIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "updateOneIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneIntegrationsArgs_1.UpsertOneIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "upsertOneIntegrations", null);
IntegrationsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], IntegrationsCrudResolver);
exports.IntegrationsCrudResolver = IntegrationsCrudResolver;
