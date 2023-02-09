"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWarehouseArgs_1 = require("./args/AggregateWarehouseArgs");
const CreateManyWarehouseArgs_1 = require("./args/CreateManyWarehouseArgs");
const CreateOneWarehouseArgs_1 = require("./args/CreateOneWarehouseArgs");
const DeleteManyWarehouseArgs_1 = require("./args/DeleteManyWarehouseArgs");
const DeleteOneWarehouseArgs_1 = require("./args/DeleteOneWarehouseArgs");
const FindFirstWarehouseArgs_1 = require("./args/FindFirstWarehouseArgs");
const FindFirstWarehouseOrThrowArgs_1 = require("./args/FindFirstWarehouseOrThrowArgs");
const FindManyWarehouseArgs_1 = require("./args/FindManyWarehouseArgs");
const FindUniqueWarehouseArgs_1 = require("./args/FindUniqueWarehouseArgs");
const FindUniqueWarehouseOrThrowArgs_1 = require("./args/FindUniqueWarehouseOrThrowArgs");
const GroupByWarehouseArgs_1 = require("./args/GroupByWarehouseArgs");
const UpdateManyWarehouseArgs_1 = require("./args/UpdateManyWarehouseArgs");
const UpdateOneWarehouseArgs_1 = require("./args/UpdateOneWarehouseArgs");
const UpsertOneWarehouseArgs_1 = require("./args/UpsertOneWarehouseArgs");
const helpers_1 = require("../../../helpers");
const Warehouse_1 = require("../../../models/Warehouse");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWarehouse_1 = require("../../outputs/AggregateWarehouse");
const WarehouseGroupBy_1 = require("../../outputs/WarehouseGroupBy");
let WarehouseCrudResolver = class WarehouseCrudResolver {
    async aggregateWarehouse(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWarehouseOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async warehouses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async warehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWarehouse(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWarehouse(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).warehouse.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWarehouse_1.AggregateWarehouse, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWarehouseArgs_1.AggregateWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "aggregateWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWarehouseArgs_1.CreateManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "createManyWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWarehouseArgs_1.CreateOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "createOneWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWarehouseArgs_1.DeleteManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "deleteManyWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWarehouseArgs_1.DeleteOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "deleteOneWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWarehouseArgs_1.FindFirstWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "findFirstWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWarehouseOrThrowArgs_1.FindFirstWarehouseOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "findFirstWarehouseOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Warehouse_1.Warehouse], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWarehouseArgs_1.FindManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "warehouses", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWarehouseArgs_1.FindUniqueWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "warehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWarehouseOrThrowArgs_1.FindUniqueWarehouseOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "getWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WarehouseGroupBy_1.WarehouseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWarehouseArgs_1.GroupByWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "groupByWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWarehouseArgs_1.UpdateManyWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "updateManyWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWarehouseArgs_1.UpdateOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "updateOneWarehouse", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Warehouse_1.Warehouse, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWarehouseArgs_1.UpsertOneWarehouseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCrudResolver.prototype, "upsertOneWarehouse", null);
WarehouseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Warehouse_1.Warehouse)
], WarehouseCrudResolver);
exports.WarehouseCrudResolver = WarehouseCrudResolver;
