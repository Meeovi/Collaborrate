"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomersArgs_1 = require("./args/AggregateCustomersArgs");
const CreateCustomersArgs_1 = require("./args/CreateCustomersArgs");
const CreateManyCustomersArgs_1 = require("./args/CreateManyCustomersArgs");
const DeleteCustomersArgs_1 = require("./args/DeleteCustomersArgs");
const DeleteManyCustomersArgs_1 = require("./args/DeleteManyCustomersArgs");
const FindFirstCustomersArgs_1 = require("./args/FindFirstCustomersArgs");
const FindManyCustomersArgs_1 = require("./args/FindManyCustomersArgs");
const FindUniqueCustomersArgs_1 = require("./args/FindUniqueCustomersArgs");
const GroupByCustomersArgs_1 = require("./args/GroupByCustomersArgs");
const UpdateCustomersArgs_1 = require("./args/UpdateCustomersArgs");
const UpdateManyCustomersArgs_1 = require("./args/UpdateManyCustomersArgs");
const UpsertCustomersArgs_1 = require("./args/UpsertCustomersArgs");
const helpers_1 = require("../../../helpers");
const Customers_1 = require("../../../models/Customers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomers_1 = require("../../outputs/AggregateCustomers");
const CustomersGroupBy_1 = require("../../outputs/CustomersGroupBy");
let CustomersCrudResolver = class CustomersCrudResolver {
    async findUniqueCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCustomers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCustomers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomersArgs_1.FindFirstCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "findFirstCustomers", null);
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
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCustomersArgs_1.CreateCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "createCustomers", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCustomersArgs_1.DeleteCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "deleteCustomers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCustomersArgs_1.UpdateCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "updateCustomers", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCustomersArgs_1.UpsertCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersCrudResolver.prototype, "upsertCustomers", null);
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
CustomersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], CustomersCrudResolver);
exports.CustomersCrudResolver = CustomersCrudResolver;
