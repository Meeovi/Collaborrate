"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShipmentsArgs_1 = require("./args/AggregateShipmentsArgs");
const CreateManyShipmentsArgs_1 = require("./args/CreateManyShipmentsArgs");
const CreateOneShipmentsArgs_1 = require("./args/CreateOneShipmentsArgs");
const DeleteManyShipmentsArgs_1 = require("./args/DeleteManyShipmentsArgs");
const DeleteOneShipmentsArgs_1 = require("./args/DeleteOneShipmentsArgs");
const FindFirstShipmentsArgs_1 = require("./args/FindFirstShipmentsArgs");
const FindFirstShipmentsOrThrowArgs_1 = require("./args/FindFirstShipmentsOrThrowArgs");
const FindManyShipmentsArgs_1 = require("./args/FindManyShipmentsArgs");
const FindUniqueShipmentsArgs_1 = require("./args/FindUniqueShipmentsArgs");
const FindUniqueShipmentsOrThrowArgs_1 = require("./args/FindUniqueShipmentsOrThrowArgs");
const GroupByShipmentsArgs_1 = require("./args/GroupByShipmentsArgs");
const UpdateManyShipmentsArgs_1 = require("./args/UpdateManyShipmentsArgs");
const UpdateOneShipmentsArgs_1 = require("./args/UpdateOneShipmentsArgs");
const UpsertOneShipmentsArgs_1 = require("./args/UpsertOneShipmentsArgs");
const helpers_1 = require("../../../helpers");
const Shipments_1 = require("../../../models/Shipments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShipments_1 = require("../../outputs/AggregateShipments");
const ShipmentsGroupBy_1 = require("../../outputs/ShipmentsGroupBy");
let ShipmentsCrudResolver = class ShipmentsCrudResolver {
    async aggregateShipments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShipmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueShipmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByShipments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneShipments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shipments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShipments_1.AggregateShipments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShipmentsArgs_1.AggregateShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "aggregateShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShipmentsArgs_1.CreateManyShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "createManyShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneShipmentsArgs_1.CreateOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "createOneShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShipmentsArgs_1.DeleteManyShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "deleteManyShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShipmentsArgs_1.DeleteOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "deleteOneShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShipmentsArgs_1.FindFirstShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "findFirstShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShipmentsOrThrowArgs_1.FindFirstShipmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "findFirstShipmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shipments_1.Shipments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShipmentsArgs_1.FindManyShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "findManyShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShipmentsArgs_1.FindUniqueShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "findUniqueShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShipmentsOrThrowArgs_1.FindUniqueShipmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "findUniqueShipmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShipmentsGroupBy_1.ShipmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShipmentsArgs_1.GroupByShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "groupByShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShipmentsArgs_1.UpdateManyShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "updateManyShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneShipmentsArgs_1.UpdateOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "updateOneShipments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shipments_1.Shipments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneShipmentsArgs_1.UpsertOneShipmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShipmentsCrudResolver.prototype, "upsertOneShipments", null);
ShipmentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shipments_1.Shipments)
], ShipmentsCrudResolver);
exports.ShipmentsCrudResolver = ShipmentsCrudResolver;
