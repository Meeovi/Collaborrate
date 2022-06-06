"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomerArgs_1 = require("./args/AggregateCustomerArgs");
const CreateCustomerArgs_1 = require("./args/CreateCustomerArgs");
const CreateManyCustomerArgs_1 = require("./args/CreateManyCustomerArgs");
const DeleteCustomerArgs_1 = require("./args/DeleteCustomerArgs");
const DeleteManyCustomerArgs_1 = require("./args/DeleteManyCustomerArgs");
const FindFirstCustomerArgs_1 = require("./args/FindFirstCustomerArgs");
const FindManyCustomerArgs_1 = require("./args/FindManyCustomerArgs");
const FindUniqueCustomerArgs_1 = require("./args/FindUniqueCustomerArgs");
const GroupByCustomerArgs_1 = require("./args/GroupByCustomerArgs");
const UpdateCustomerArgs_1 = require("./args/UpdateCustomerArgs");
const UpdateManyCustomerArgs_1 = require("./args/UpdateManyCustomerArgs");
const UpsertCustomerArgs_1 = require("./args/UpsertCustomerArgs");
const helpers_1 = require("../../../helpers");
const Customer_1 = require("../../../models/Customer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomer_1 = require("../../outputs/AggregateCustomer");
const CustomerGroupBy_1 = require("../../outputs/CustomerGroupBy");
let CustomerCrudResolver = class CustomerCrudResolver {
    async customer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCustomer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCustomer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_1.Customer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomerArgs_1.FindUniqueCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "customer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_1.Customer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomerArgs_1.FindFirstCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "findFirstCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_1.Customer], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomerArgs_1.FindManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCustomerArgs_1.CreateCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "createCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomerArgs_1.CreateManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "createManyCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCustomerArgs_1.DeleteCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "deleteCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCustomerArgs_1.UpdateCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "updateCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomerArgs_1.DeleteManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "deleteManyCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomerArgs_1.UpdateManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "updateManyCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_1.Customer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCustomerArgs_1.UpsertCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "upsertCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_1.AggregateCustomer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomerArgs_1.AggregateCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "aggregateCustomer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomerGroupBy_1.CustomerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomerArgs_1.GroupByCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerCrudResolver.prototype, "groupByCustomer", null);
CustomerCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], CustomerCrudResolver);
exports.CustomerCrudResolver = CustomerCrudResolver;
