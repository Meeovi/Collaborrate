"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardjsonArgs_1 = require("./args/AggregateDashboardjsonArgs");
const CreateOneDashboardjsonArgs_1 = require("./args/CreateOneDashboardjsonArgs");
const DeleteManyDashboardjsonArgs_1 = require("./args/DeleteManyDashboardjsonArgs");
const DeleteOneDashboardjsonArgs_1 = require("./args/DeleteOneDashboardjsonArgs");
const FindFirstDashboardjsonArgs_1 = require("./args/FindFirstDashboardjsonArgs");
const FindFirstDashboardjsonOrThrowArgs_1 = require("./args/FindFirstDashboardjsonOrThrowArgs");
const FindManyDashboardjsonArgs_1 = require("./args/FindManyDashboardjsonArgs");
const FindUniqueDashboardjsonArgs_1 = require("./args/FindUniqueDashboardjsonArgs");
const FindUniqueDashboardjsonOrThrowArgs_1 = require("./args/FindUniqueDashboardjsonOrThrowArgs");
const GroupByDashboardjsonArgs_1 = require("./args/GroupByDashboardjsonArgs");
const UpdateManyDashboardjsonArgs_1 = require("./args/UpdateManyDashboardjsonArgs");
const UpdateOneDashboardjsonArgs_1 = require("./args/UpdateOneDashboardjsonArgs");
const UpsertOneDashboardjsonArgs_1 = require("./args/UpsertOneDashboardjsonArgs");
const helpers_1 = require("../../../helpers");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboardjson_1 = require("../../outputs/AggregateDashboardjson");
const DashboardjsonGroupBy_1 = require("../../outputs/DashboardjsonGroupBy");
let DashboardjsonCrudResolver = class DashboardjsonCrudResolver {
    async aggregateDashboardjson(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardjsonOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardjsons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboardjson(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardjson_1.AggregateDashboardjson, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardjsonArgs_1.AggregateDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "aggregateDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardjsonArgs_1.CreateOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "createOneDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardjsonArgs_1.DeleteManyDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "deleteManyDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardjsonArgs_1.DeleteOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "deleteOneDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardjsonArgs_1.FindFirstDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "findFirstDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardjsonOrThrowArgs_1.FindFirstDashboardjsonOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "findFirstDashboardjsonOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardjson_1.Dashboardjson], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardjsonArgs_1.FindManyDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "dashboardjsons", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardjsonArgs_1.FindUniqueDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "dashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardjsonOrThrowArgs_1.FindUniqueDashboardjsonOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "getDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardjsonGroupBy_1.DashboardjsonGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardjsonArgs_1.GroupByDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "groupByDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardjsonArgs_1.UpdateManyDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "updateManyDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardjsonArgs_1.UpdateOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "updateOneDashboardjson", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardjsonArgs_1.UpsertOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardjsonCrudResolver.prototype, "upsertOneDashboardjson", null);
DashboardjsonCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], DashboardjsonCrudResolver);
exports.DashboardjsonCrudResolver = DashboardjsonCrudResolver;
