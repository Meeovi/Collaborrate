"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardslidesArgs_1 = require("./args/AggregateDashboardslidesArgs");
const CreateOneDashboardslidesArgs_1 = require("./args/CreateOneDashboardslidesArgs");
const DeleteManyDashboardslidesArgs_1 = require("./args/DeleteManyDashboardslidesArgs");
const DeleteOneDashboardslidesArgs_1 = require("./args/DeleteOneDashboardslidesArgs");
const FindFirstDashboardslidesArgs_1 = require("./args/FindFirstDashboardslidesArgs");
const FindFirstDashboardslidesOrThrowArgs_1 = require("./args/FindFirstDashboardslidesOrThrowArgs");
const FindManyDashboardslidesArgs_1 = require("./args/FindManyDashboardslidesArgs");
const FindUniqueDashboardslidesArgs_1 = require("./args/FindUniqueDashboardslidesArgs");
const FindUniqueDashboardslidesOrThrowArgs_1 = require("./args/FindUniqueDashboardslidesOrThrowArgs");
const GroupByDashboardslidesArgs_1 = require("./args/GroupByDashboardslidesArgs");
const UpdateManyDashboardslidesArgs_1 = require("./args/UpdateManyDashboardslidesArgs");
const UpdateOneDashboardslidesArgs_1 = require("./args/UpdateOneDashboardslidesArgs");
const UpsertOneDashboardslidesArgs_1 = require("./args/UpsertOneDashboardslidesArgs");
const helpers_1 = require("../../../helpers");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDashboardslides_1 = require("../../outputs/AggregateDashboardslides");
const DashboardslidesGroupBy_1 = require("../../outputs/DashboardslidesGroupBy");
let DashboardslidesCrudResolver = class DashboardslidesCrudResolver {
    async aggregateDashboardslides(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDashboardslidesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDashboardslidesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDashboardslides(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardslides_1.AggregateDashboardslides, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardslidesArgs_1.AggregateDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "aggregateDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardslidesArgs_1.CreateOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "createOneDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardslidesArgs_1.DeleteManyDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "deleteManyDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardslidesArgs_1.DeleteOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "deleteOneDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslidesArgs_1.FindFirstDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "findFirstDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslidesOrThrowArgs_1.FindFirstDashboardslidesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "findFirstDashboardslidesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardslides_1.Dashboardslides], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardslidesArgs_1.FindManyDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "findManyDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardslidesArgs_1.FindUniqueDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "findUniqueDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardslidesOrThrowArgs_1.FindUniqueDashboardslidesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "findUniqueDashboardslidesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardslidesGroupBy_1.DashboardslidesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardslidesArgs_1.GroupByDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "groupByDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardslidesArgs_1.UpdateManyDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "updateManyDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardslidesArgs_1.UpdateOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "updateOneDashboardslides", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardslidesArgs_1.UpsertOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DashboardslidesCrudResolver.prototype, "upsertOneDashboardslides", null);
DashboardslidesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], DashboardslidesCrudResolver);
exports.DashboardslidesCrudResolver = DashboardslidesCrudResolver;
