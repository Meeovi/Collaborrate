"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOrdersArgs_1 = require("./args/AggregateOrdersArgs");
const CreateManyOrdersArgs_1 = require("./args/CreateManyOrdersArgs");
const CreateOrdersArgs_1 = require("./args/CreateOrdersArgs");
const DeleteManyOrdersArgs_1 = require("./args/DeleteManyOrdersArgs");
const DeleteOrdersArgs_1 = require("./args/DeleteOrdersArgs");
const FindFirstOrdersArgs_1 = require("./args/FindFirstOrdersArgs");
const FindManyOrdersArgs_1 = require("./args/FindManyOrdersArgs");
const FindUniqueOrdersArgs_1 = require("./args/FindUniqueOrdersArgs");
const GroupByOrdersArgs_1 = require("./args/GroupByOrdersArgs");
const UpdateManyOrdersArgs_1 = require("./args/UpdateManyOrdersArgs");
const UpdateOrdersArgs_1 = require("./args/UpdateOrdersArgs");
const UpsertOrdersArgs_1 = require("./args/UpsertOrdersArgs");
const helpers_1 = require("../../../helpers");
const Orders_1 = require("../../../models/Orders");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOrders_1 = require("../../outputs/AggregateOrders");
const OrdersGroupBy_1 = require("../../outputs/OrdersGroupBy");
let OrdersCrudResolver = class OrdersCrudResolver {
    async findUniqueOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOrders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOrders(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOrdersArgs_1.FindFirstOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "findFirstOrders", null);
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
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOrdersArgs_1.CreateOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "createOrders", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOrdersArgs_1.DeleteOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "deleteOrders", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Orders_1.Orders, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOrdersArgs_1.UpdateOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "updateOrders", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOrdersArgs_1.UpsertOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersCrudResolver.prototype, "upsertOrders", null);
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
OrdersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], OrdersCrudResolver);
exports.OrdersCrudResolver = OrdersCrudResolver;
