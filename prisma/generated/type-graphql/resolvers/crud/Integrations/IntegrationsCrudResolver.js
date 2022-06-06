"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateIntegrationsArgs_1 = require("./args/AggregateIntegrationsArgs");
const CreateIntegrationsArgs_1 = require("./args/CreateIntegrationsArgs");
const CreateManyIntegrationsArgs_1 = require("./args/CreateManyIntegrationsArgs");
const DeleteIntegrationsArgs_1 = require("./args/DeleteIntegrationsArgs");
const DeleteManyIntegrationsArgs_1 = require("./args/DeleteManyIntegrationsArgs");
const FindFirstIntegrationsArgs_1 = require("./args/FindFirstIntegrationsArgs");
const FindManyIntegrationsArgs_1 = require("./args/FindManyIntegrationsArgs");
const FindUniqueIntegrationsArgs_1 = require("./args/FindUniqueIntegrationsArgs");
const GroupByIntegrationsArgs_1 = require("./args/GroupByIntegrationsArgs");
const UpdateIntegrationsArgs_1 = require("./args/UpdateIntegrationsArgs");
const UpdateManyIntegrationsArgs_1 = require("./args/UpdateManyIntegrationsArgs");
const UpsertIntegrationsArgs_1 = require("./args/UpsertIntegrationsArgs");
const helpers_1 = require("../../../helpers");
const Integrations_1 = require("../../../models/Integrations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateIntegrations_1 = require("../../outputs/AggregateIntegrations");
const IntegrationsGroupBy_1 = require("../../outputs/IntegrationsGroupBy");
let IntegrationsCrudResolver = class IntegrationsCrudResolver {
    async findUniqueIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateIntegrations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByIntegrations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstIntegrationsArgs_1.FindFirstIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "findFirstIntegrations", null);
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
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateIntegrationsArgs_1.CreateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "createIntegrations", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteIntegrationsArgs_1.DeleteIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "deleteIntegrations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateIntegrationsArgs_1.UpdateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "updateIntegrations", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertIntegrationsArgs_1.UpsertIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IntegrationsCrudResolver.prototype, "upsertIntegrations", null);
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
IntegrationsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], IntegrationsCrudResolver);
exports.IntegrationsCrudResolver = IntegrationsCrudResolver;
