"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomer_groupArgs_1 = require("./args/AggregateCustomer_groupArgs");
const CreateManyCustomer_groupArgs_1 = require("./args/CreateManyCustomer_groupArgs");
const CreateOneCustomer_groupArgs_1 = require("./args/CreateOneCustomer_groupArgs");
const DeleteManyCustomer_groupArgs_1 = require("./args/DeleteManyCustomer_groupArgs");
const DeleteOneCustomer_groupArgs_1 = require("./args/DeleteOneCustomer_groupArgs");
const FindFirstCustomer_groupArgs_1 = require("./args/FindFirstCustomer_groupArgs");
const FindManyCustomer_groupArgs_1 = require("./args/FindManyCustomer_groupArgs");
const FindUniqueCustomer_groupArgs_1 = require("./args/FindUniqueCustomer_groupArgs");
const GroupByCustomer_groupArgs_1 = require("./args/GroupByCustomer_groupArgs");
const UpdateManyCustomer_groupArgs_1 = require("./args/UpdateManyCustomer_groupArgs");
const UpdateOneCustomer_groupArgs_1 = require("./args/UpdateOneCustomer_groupArgs");
const UpsertOneCustomer_groupArgs_1 = require("./args/UpsertOneCustomer_groupArgs");
const helpers_1 = require("../../../helpers");
const Customer_group_1 = require("../../../models/Customer_group");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomer_group_1 = require("../../outputs/AggregateCustomer_group");
const Customer_groupGroupBy_1 = require("../../outputs/Customer_groupGroupBy");
let Customer_groupCrudResolver = class Customer_groupCrudResolver {
    async aggregateCustomer_group(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customer_groups(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCustomer_group(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_group_1.AggregateCustomer_group, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomer_groupArgs_1.AggregateCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "aggregateCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomer_groupArgs_1.CreateManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "createManyCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_group_1.Customer_group, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomer_groupArgs_1.CreateOneCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "createOneCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomer_groupArgs_1.DeleteManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "deleteManyCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomer_groupArgs_1.DeleteOneCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "deleteOneCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomer_groupArgs_1.FindFirstCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "findFirstCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_group_1.Customer_group], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomer_groupArgs_1.FindManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "customer_groups", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomer_groupArgs_1.FindUniqueCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "customer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_groupGroupBy_1.Customer_groupGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomer_groupArgs_1.GroupByCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "groupByCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomer_groupArgs_1.UpdateManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "updateManyCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomer_groupArgs_1.UpdateOneCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "updateOneCustomer_group", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_group_1.Customer_group, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCustomer_groupArgs_1.UpsertOneCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_groupCrudResolver.prototype, "upsertOneCustomer_group", null);
Customer_groupCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], Customer_groupCrudResolver);
exports.Customer_groupCrudResolver = Customer_groupCrudResolver;
