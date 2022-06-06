"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProvidersArgs_1 = require("./args/AggregateProvidersArgs");
const CreateManyProvidersArgs_1 = require("./args/CreateManyProvidersArgs");
const CreateProvidersArgs_1 = require("./args/CreateProvidersArgs");
const DeleteManyProvidersArgs_1 = require("./args/DeleteManyProvidersArgs");
const DeleteProvidersArgs_1 = require("./args/DeleteProvidersArgs");
const FindFirstProvidersArgs_1 = require("./args/FindFirstProvidersArgs");
const FindManyProvidersArgs_1 = require("./args/FindManyProvidersArgs");
const FindUniqueProvidersArgs_1 = require("./args/FindUniqueProvidersArgs");
const GroupByProvidersArgs_1 = require("./args/GroupByProvidersArgs");
const UpdateManyProvidersArgs_1 = require("./args/UpdateManyProvidersArgs");
const UpdateProvidersArgs_1 = require("./args/UpdateProvidersArgs");
const UpsertProvidersArgs_1 = require("./args/UpsertProvidersArgs");
const helpers_1 = require("../../../helpers");
const Providers_1 = require("../../../models/Providers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProviders_1 = require("../../outputs/AggregateProviders");
const ProvidersGroupBy_1 = require("../../outputs/ProvidersGroupBy");
let ProvidersCrudResolver = class ProvidersCrudResolver {
    async findUniqueProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProviders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProviders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProvidersArgs_1.FindFirstProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "findFirstProviders", null);
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
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProvidersArgs_1.CreateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "createProviders", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProvidersArgs_1.DeleteProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "deleteProviders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProvidersArgs_1.UpdateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "updateProviders", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProvidersArgs_1.UpsertProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProvidersCrudResolver.prototype, "upsertProviders", null);
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
ProvidersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], ProvidersCrudResolver);
exports.ProvidersCrudResolver = ProvidersCrudResolver;
