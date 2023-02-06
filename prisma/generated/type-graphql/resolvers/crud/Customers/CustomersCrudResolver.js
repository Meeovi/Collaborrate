"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCustomersArgs_1 = require("./args/AggregateCustomersArgs");
const CreateManyCustomersArgs_1 = require("./args/CreateManyCustomersArgs");
const CreateOneCustomersArgs_1 = require("./args/CreateOneCustomersArgs");
const DeleteManyCustomersArgs_1 = require("./args/DeleteManyCustomersArgs");
const DeleteOneCustomersArgs_1 = require("./args/DeleteOneCustomersArgs");
const FindFirstCustomersArgs_1 = require("./args/FindFirstCustomersArgs");
const FindFirstCustomersOrThrowArgs_1 = require("./args/FindFirstCustomersOrThrowArgs");
const FindManyCustomersArgs_1 = require("./args/FindManyCustomersArgs");
const FindUniqueCustomersArgs_1 = require("./args/FindUniqueCustomersArgs");
const FindUniqueCustomersOrThrowArgs_1 = require("./args/FindUniqueCustomersOrThrowArgs");
const GroupByCustomersArgs_1 = require("./args/GroupByCustomersArgs");
const UpdateManyCustomersArgs_1 = require("./args/UpdateManyCustomersArgs");
const UpdateOneCustomersArgs_1 = require("./args/UpdateOneCustomersArgs");
const UpsertOneCustomersArgs_1 = require("./args/UpsertOneCustomersArgs");
const helpers_1 = require("../../../helpers");
const Customers_1 = require("../../../models/Customers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomers_1 = require("../../outputs/AggregateCustomers");
const CustomersGroupBy_1 = require("../../outputs/CustomersGroupBy");
let CustomersCrudResolver = class CustomersCrudResolver {
    async aggregateCustomers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCustomersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCustomers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomers_1.AggregateCustomers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomersArgs_1.AggregateCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "aggregateCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomersArgs_1.CreateManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "createManyCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomersArgs_1.CreateOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "createOneCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomersArgs_1.DeleteManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "deleteManyCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomersArgs_1.DeleteOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "deleteOneCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomersArgs_1.FindFirstCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findFirstCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomersOrThrowArgs_1.FindFirstCustomersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findFirstCustomersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customers_1.Customers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomersArgs_1.FindManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findManyCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomersArgs_1.FindUniqueCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findUniqueCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomersOrThrowArgs_1.FindUniqueCustomersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findUniqueCustomersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomersGroupBy_1.CustomersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomersArgs_1.GroupByCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "groupByCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomersArgs_1.UpdateManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "updateManyCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomersArgs_1.UpdateOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "updateOneCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCustomersArgs_1.UpsertOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "upsertOneCustomers", null);
CustomersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], CustomersCrudResolver);
exports.CustomersCrudResolver = CustomersCrudResolver;
