"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardgraphqlArgs_1 = require("./args/AggregateDashboardgraphqlArgs");
const CreateOneDashboardgraphqlArgs_1 = require("./args/CreateOneDashboardgraphqlArgs");
const DeleteManyDashboardgraphqlArgs_1 = require("./args/DeleteManyDashboardgraphqlArgs");
const DeleteOneDashboardgraphqlArgs_1 = require("./args/DeleteOneDashboardgraphqlArgs");
const FindFirstDashboardgraphqlArgs_1 = require("./args/FindFirstDashboardgraphqlArgs");
const FindFirstDashboardgraphqlOrThrowArgs_1 = require("./args/FindFirstDashboardgraphqlOrThrowArgs");
const FindManyDashboardgraphqlArgs_1 = require("./args/FindManyDashboardgraphqlArgs");
const FindUniqueDashboardgraphqlArgs_1 = require("./args/FindUniqueDashboardgraphqlArgs");
const FindUniqueDashboardgraphqlOrThrowArgs_1 = require("./args/FindUniqueDashboardgraphqlOrThrowArgs");
const GroupByDashboardgraphqlArgs_1 = require("./args/GroupByDashboardgraphqlArgs");
const UpdateManyDashboardgraphqlArgs_1 = require("./args/UpdateManyDashboardgraphqlArgs");
const UpdateOneDashboardgraphqlArgs_1 = require("./args/UpdateOneDashboardgraphqlArgs");
const UpsertOneDashboardgraphqlArgs_1 = require("./args/UpsertOneDashboardgraphqlArgs");
const helpers_1 = require("../../../helpers");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboardgraphql_1 = require("../../outputs/AggregateDashboardgraphql");
const DashboardgraphqlGroupBy_1 = require("../../outputs/DashboardgraphqlGroupBy");
let DashboardgraphqlCrudResolver = class DashboardgraphqlCrudResolver {
    async aggregateDashboardgraphql(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardgraphqlOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardgraphqls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboardgraphql(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardgraphql_1.AggregateDashboardgraphql, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardgraphqlArgs_1.AggregateDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "aggregateDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardgraphqlArgs_1.CreateOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "createOneDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardgraphqlArgs_1.DeleteManyDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "deleteManyDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardgraphqlArgs_1.DeleteOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "deleteOneDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardgraphqlArgs_1.FindFirstDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "findFirstDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardgraphqlOrThrowArgs_1.FindFirstDashboardgraphqlOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "findFirstDashboardgraphqlOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardgraphql_1.Dashboardgraphql], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardgraphqlArgs_1.FindManyDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "dashboardgraphqls", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardgraphqlArgs_1.FindUniqueDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "dashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardgraphqlOrThrowArgs_1.FindUniqueDashboardgraphqlOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "getDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardgraphqlGroupBy_1.DashboardgraphqlGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardgraphqlArgs_1.GroupByDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "groupByDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardgraphqlArgs_1.UpdateManyDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "updateManyDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardgraphqlArgs_1.UpdateOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "updateOneDashboardgraphql", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardgraphqlArgs_1.UpsertOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardgraphqlCrudResolver.prototype, "upsertOneDashboardgraphql", null);
DashboardgraphqlCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], DashboardgraphqlCrudResolver);
exports.DashboardgraphqlCrudResolver = DashboardgraphqlCrudResolver;
