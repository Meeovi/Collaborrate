"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardsArgs_1 = require("./args/AggregateDashboardsArgs");
const CreateManyDashboardsArgs_1 = require("./args/CreateManyDashboardsArgs");
const CreateOneDashboardsArgs_1 = require("./args/CreateOneDashboardsArgs");
const DeleteManyDashboardsArgs_1 = require("./args/DeleteManyDashboardsArgs");
const DeleteOneDashboardsArgs_1 = require("./args/DeleteOneDashboardsArgs");
const FindFirstDashboardsArgs_1 = require("./args/FindFirstDashboardsArgs");
const FindFirstDashboardsOrThrowArgs_1 = require("./args/FindFirstDashboardsOrThrowArgs");
const FindManyDashboardsArgs_1 = require("./args/FindManyDashboardsArgs");
const FindUniqueDashboardsArgs_1 = require("./args/FindUniqueDashboardsArgs");
const FindUniqueDashboardsOrThrowArgs_1 = require("./args/FindUniqueDashboardsOrThrowArgs");
const GroupByDashboardsArgs_1 = require("./args/GroupByDashboardsArgs");
const UpdateManyDashboardsArgs_1 = require("./args/UpdateManyDashboardsArgs");
const UpdateOneDashboardsArgs_1 = require("./args/UpdateOneDashboardsArgs");
const UpsertOneDashboardsArgs_1 = require("./args/UpsertOneDashboardsArgs");
const helpers_1 = require("../../../helpers");
const Dashboards_1 = require("../../../models/Dashboards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboards_1 = require("../../outputs/AggregateDashboards");
const DashboardsGroupBy_1 = require("../../outputs/DashboardsGroupBy");
let DashboardsCrudResolver = class DashboardsCrudResolver {
    async aggregateDashboards(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDashboardsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboards(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboards_1.AggregateDashboards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardsArgs_1.AggregateDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "aggregateDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDashboardsArgs_1.CreateManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "createManyDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardsArgs_1.CreateOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "createOneDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardsArgs_1.DeleteManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "deleteManyDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardsArgs_1.DeleteOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "deleteOneDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardsArgs_1.FindFirstDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "findFirstDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardsOrThrowArgs_1.FindFirstDashboardsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "findFirstDashboardsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboards_1.Dashboards], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardsArgs_1.FindManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "findManyDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardsArgs_1.FindUniqueDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "findUniqueDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardsOrThrowArgs_1.FindUniqueDashboardsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "findUniqueDashboardsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardsGroupBy_1.DashboardsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardsArgs_1.GroupByDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "groupByDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardsArgs_1.UpdateManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "updateManyDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardsArgs_1.UpdateOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "updateOneDashboards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardsArgs_1.UpsertOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardsCrudResolver.prototype, "upsertOneDashboards", null);
DashboardsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], DashboardsCrudResolver);
exports.DashboardsCrudResolver = DashboardsCrudResolver;
