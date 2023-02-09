"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateZonesArgs_1 = require("./args/AggregateZonesArgs");
const CreateManyZonesArgs_1 = require("./args/CreateManyZonesArgs");
const CreateOneZonesArgs_1 = require("./args/CreateOneZonesArgs");
const DeleteManyZonesArgs_1 = require("./args/DeleteManyZonesArgs");
const DeleteOneZonesArgs_1 = require("./args/DeleteOneZonesArgs");
const FindFirstZonesArgs_1 = require("./args/FindFirstZonesArgs");
const FindFirstZonesOrThrowArgs_1 = require("./args/FindFirstZonesOrThrowArgs");
const FindManyZonesArgs_1 = require("./args/FindManyZonesArgs");
const FindUniqueZonesArgs_1 = require("./args/FindUniqueZonesArgs");
const FindUniqueZonesOrThrowArgs_1 = require("./args/FindUniqueZonesOrThrowArgs");
const GroupByZonesArgs_1 = require("./args/GroupByZonesArgs");
const UpdateManyZonesArgs_1 = require("./args/UpdateManyZonesArgs");
const UpdateOneZonesArgs_1 = require("./args/UpdateOneZonesArgs");
const UpsertOneZonesArgs_1 = require("./args/UpsertOneZonesArgs");
const helpers_1 = require("../../../helpers");
const Zones_1 = require("../../../models/Zones");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateZones_1 = require("../../outputs/AggregateZones");
const ZonesGroupBy_1 = require("../../outputs/ZonesGroupBy");
let ZonesCrudResolver = class ZonesCrudResolver {
    async aggregateZones(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstZonesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueZonesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByZones(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneZones(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).zones.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateZones_1.AggregateZones, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateZonesArgs_1.AggregateZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "aggregateZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyZonesArgs_1.CreateManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "createManyZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneZonesArgs_1.CreateOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "createOneZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyZonesArgs_1.DeleteManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "deleteManyZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneZonesArgs_1.DeleteOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "deleteOneZones", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstZonesArgs_1.FindFirstZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "findFirstZones", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstZonesOrThrowArgs_1.FindFirstZonesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "findFirstZonesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Zones_1.Zones], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyZonesArgs_1.FindManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "findManyZones", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueZonesArgs_1.FindUniqueZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "findUniqueZones", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueZonesOrThrowArgs_1.FindUniqueZonesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "findUniqueZonesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ZonesGroupBy_1.ZonesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByZonesArgs_1.GroupByZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "groupByZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyZonesArgs_1.UpdateManyZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "updateManyZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneZonesArgs_1.UpdateOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "updateOneZones", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Zones_1.Zones, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneZonesArgs_1.UpsertOneZonesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ZonesCrudResolver.prototype, "upsertOneZones", null);
ZonesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Zones_1.Zones)
], ZonesCrudResolver);
exports.ZonesCrudResolver = ZonesCrudResolver;
