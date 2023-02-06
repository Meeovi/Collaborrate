"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOrdersArgs_1 = require("./args/AggregateOrdersArgs");
const CreateManyOrdersArgs_1 = require("./args/CreateManyOrdersArgs");
const CreateOneOrdersArgs_1 = require("./args/CreateOneOrdersArgs");
const DeleteManyOrdersArgs_1 = require("./args/DeleteManyOrdersArgs");
const DeleteOneOrdersArgs_1 = require("./args/DeleteOneOrdersArgs");
const FindFirstOrdersArgs_1 = require("./args/FindFirstOrdersArgs");
const FindFirstOrdersOrThrowArgs_1 = require("./args/FindFirstOrdersOrThrowArgs");
const FindManyOrdersArgs_1 = require("./args/FindManyOrdersArgs");
const FindUniqueOrdersArgs_1 = require("./args/FindUniqueOrdersArgs");
const FindUniqueOrdersOrThrowArgs_1 = require("./args/FindUniqueOrdersOrThrowArgs");
const GroupByOrdersArgs_1 = require("./args/GroupByOrdersArgs");
const UpdateManyOrdersArgs_1 = require("./args/UpdateManyOrdersArgs");
const UpdateOneOrdersArgs_1 = require("./args/UpdateOneOrdersArgs");
const UpsertOneOrdersArgs_1 = require("./args/UpsertOneOrdersArgs");
const helpers_1 = require("../../../helpers");
const Orders_1 = require("../../../models/Orders");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrders_1 = require("../../outputs/AggregateOrders");
const OrdersGroupBy_1 = require("../../outputs/OrdersGroupBy");
let OrdersCrudResolver = class OrdersCrudResolver {
    async aggregateOrders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrdersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueOrdersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOrders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOrders_1.AggregateOrders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOrdersArgs_1.AggregateOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "aggregateOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOrdersArgs_1.CreateManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "createManyOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOrdersArgs_1.CreateOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "createOneOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOrdersArgs_1.DeleteManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "deleteManyOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOrdersArgs_1.DeleteOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "deleteOneOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrdersArgs_1.FindFirstOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findFirstOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrdersOrThrowArgs_1.FindFirstOrdersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findFirstOrdersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Orders_1.Orders], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOrdersArgs_1.FindManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findManyOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrdersArgs_1.FindUniqueOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findUniqueOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOrdersOrThrowArgs_1.FindUniqueOrdersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findUniqueOrdersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OrdersGroupBy_1.OrdersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOrdersArgs_1.GroupByOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "groupByOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrdersArgs_1.UpdateManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "updateManyOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOrdersArgs_1.UpdateOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "updateOneOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOrdersArgs_1.UpsertOneOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "upsertOneOrders", null);
OrdersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], OrdersCrudResolver);
exports.OrdersCrudResolver = OrdersCrudResolver;
