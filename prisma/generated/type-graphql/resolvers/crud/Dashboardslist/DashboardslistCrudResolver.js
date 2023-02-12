"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslistCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardslistArgs_1 = require("./args/AggregateDashboardslistArgs");
const CreateOneDashboardslistArgs_1 = require("./args/CreateOneDashboardslistArgs");
const DeleteManyDashboardslistArgs_1 = require("./args/DeleteManyDashboardslistArgs");
const DeleteOneDashboardslistArgs_1 = require("./args/DeleteOneDashboardslistArgs");
const FindFirstDashboardslistArgs_1 = require("./args/FindFirstDashboardslistArgs");
const FindFirstDashboardslistOrThrowArgs_1 = require("./args/FindFirstDashboardslistOrThrowArgs");
const FindManyDashboardslistArgs_1 = require("./args/FindManyDashboardslistArgs");
const FindUniqueDashboardslistArgs_1 = require("./args/FindUniqueDashboardslistArgs");
const FindUniqueDashboardslistOrThrowArgs_1 = require("./args/FindUniqueDashboardslistOrThrowArgs");
const GroupByDashboardslistArgs_1 = require("./args/GroupByDashboardslistArgs");
const UpdateManyDashboardslistArgs_1 = require("./args/UpdateManyDashboardslistArgs");
const UpdateOneDashboardslistArgs_1 = require("./args/UpdateOneDashboardslistArgs");
const UpsertOneDashboardslistArgs_1 = require("./args/UpsertOneDashboardslistArgs");
const helpers_1 = require("../../../helpers");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboardslist_1 = require("../../outputs/AggregateDashboardslist");
const DashboardslistGroupBy_1 = require("../../outputs/DashboardslistGroupBy");
let DashboardslistCrudResolver = class DashboardslistCrudResolver {
    async aggregateDashboardslist(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardslistOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardslists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboardslist(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardslist_1.AggregateDashboardslist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardslistArgs_1.AggregateDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "aggregateDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardslistArgs_1.CreateOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "createOneDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardslistArgs_1.DeleteManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "deleteManyDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardslistArgs_1.DeleteOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "deleteOneDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslistArgs_1.FindFirstDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "findFirstDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslistOrThrowArgs_1.FindFirstDashboardslistOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "findFirstDashboardslistOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardslist_1.Dashboardslist], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardslistArgs_1.FindManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "dashboardslists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardslistArgs_1.FindUniqueDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "dashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardslistOrThrowArgs_1.FindUniqueDashboardslistOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "getDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardslistGroupBy_1.DashboardslistGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardslistArgs_1.GroupByDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "groupByDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardslistArgs_1.UpdateManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "updateManyDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardslistArgs_1.UpdateOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "updateOneDashboardslist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardslistArgs_1.UpsertOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslistCrudResolver.prototype, "upsertOneDashboardslist", null);
DashboardslistCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], DashboardslistCrudResolver);
exports.DashboardslistCrudResolver = DashboardslistCrudResolver;
