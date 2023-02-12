"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardrestapiArgs_1 = require("./args/AggregateDashboardrestapiArgs");
const CreateOneDashboardrestapiArgs_1 = require("./args/CreateOneDashboardrestapiArgs");
const DeleteManyDashboardrestapiArgs_1 = require("./args/DeleteManyDashboardrestapiArgs");
const DeleteOneDashboardrestapiArgs_1 = require("./args/DeleteOneDashboardrestapiArgs");
const FindFirstDashboardrestapiArgs_1 = require("./args/FindFirstDashboardrestapiArgs");
const FindFirstDashboardrestapiOrThrowArgs_1 = require("./args/FindFirstDashboardrestapiOrThrowArgs");
const FindManyDashboardrestapiArgs_1 = require("./args/FindManyDashboardrestapiArgs");
const FindUniqueDashboardrestapiArgs_1 = require("./args/FindUniqueDashboardrestapiArgs");
const FindUniqueDashboardrestapiOrThrowArgs_1 = require("./args/FindUniqueDashboardrestapiOrThrowArgs");
const GroupByDashboardrestapiArgs_1 = require("./args/GroupByDashboardrestapiArgs");
const UpdateManyDashboardrestapiArgs_1 = require("./args/UpdateManyDashboardrestapiArgs");
const UpdateOneDashboardrestapiArgs_1 = require("./args/UpdateOneDashboardrestapiArgs");
const UpsertOneDashboardrestapiArgs_1 = require("./args/UpsertOneDashboardrestapiArgs");
const helpers_1 = require("../../../helpers");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboardrestapi_1 = require("../../outputs/AggregateDashboardrestapi");
const DashboardrestapiGroupBy_1 = require("../../outputs/DashboardrestapiGroupBy");
let DashboardrestapiCrudResolver = class DashboardrestapiCrudResolver {
    async aggregateDashboardrestapi(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardrestapiOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardrestapis(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboardrestapi(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardrestapi_1.AggregateDashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardrestapiArgs_1.AggregateDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "aggregateDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardrestapiArgs_1.CreateOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "createOneDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardrestapiArgs_1.DeleteManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "deleteManyDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardrestapiArgs_1.DeleteOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "deleteOneDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardrestapiArgs_1.FindFirstDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "findFirstDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardrestapiOrThrowArgs_1.FindFirstDashboardrestapiOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "findFirstDashboardrestapiOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardrestapi_1.Dashboardrestapi], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardrestapiArgs_1.FindManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "dashboardrestapis", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardrestapiArgs_1.FindUniqueDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "dashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardrestapiOrThrowArgs_1.FindUniqueDashboardrestapiOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "getDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardrestapiGroupBy_1.DashboardrestapiGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardrestapiArgs_1.GroupByDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "groupByDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardrestapiArgs_1.UpdateManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "updateManyDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardrestapiArgs_1.UpdateOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "updateOneDashboardrestapi", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardrestapiArgs_1.UpsertOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardrestapiCrudResolver.prototype, "upsertOneDashboardrestapi", null);
DashboardrestapiCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], DashboardrestapiCrudResolver);
exports.DashboardrestapiCrudResolver = DashboardrestapiCrudResolver;
