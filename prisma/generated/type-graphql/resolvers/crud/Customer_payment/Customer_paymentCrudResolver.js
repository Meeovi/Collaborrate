"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomer_paymentArgs_1 = require("./args/AggregateCustomer_paymentArgs");
const CreateCustomer_paymentArgs_1 = require("./args/CreateCustomer_paymentArgs");
const CreateManyCustomer_paymentArgs_1 = require("./args/CreateManyCustomer_paymentArgs");
const DeleteCustomer_paymentArgs_1 = require("./args/DeleteCustomer_paymentArgs");
const DeleteManyCustomer_paymentArgs_1 = require("./args/DeleteManyCustomer_paymentArgs");
const FindFirstCustomer_paymentArgs_1 = require("./args/FindFirstCustomer_paymentArgs");
const FindManyCustomer_paymentArgs_1 = require("./args/FindManyCustomer_paymentArgs");
const FindUniqueCustomer_paymentArgs_1 = require("./args/FindUniqueCustomer_paymentArgs");
const GroupByCustomer_paymentArgs_1 = require("./args/GroupByCustomer_paymentArgs");
const UpdateCustomer_paymentArgs_1 = require("./args/UpdateCustomer_paymentArgs");
const UpdateManyCustomer_paymentArgs_1 = require("./args/UpdateManyCustomer_paymentArgs");
const UpsertCustomer_paymentArgs_1 = require("./args/UpsertCustomer_paymentArgs");
const helpers_1 = require("../../../helpers");
const Customer_payment_1 = require("../../../models/Customer_payment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomer_payment_1 = require("../../outputs/AggregateCustomer_payment");
const Customer_paymentGroupBy_1 = require("../../outputs/Customer_paymentGroupBy");
let Customer_paymentCrudResolver = class Customer_paymentCrudResolver {
    async customer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async customer_payments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCustomer_payment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCustomer_payment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCustomer_payment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomer_paymentArgs_1.FindUniqueCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "customer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomer_paymentArgs_1.FindFirstCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "findFirstCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_payment_1.Customer_payment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomer_paymentArgs_1.FindManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "customer_payments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCustomer_paymentArgs_1.CreateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "createCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomer_paymentArgs_1.CreateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "createManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCustomer_paymentArgs_1.DeleteCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "deleteCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCustomer_paymentArgs_1.UpdateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "updateCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomer_paymentArgs_1.DeleteManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "deleteManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomer_paymentArgs_1.UpdateManyCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "updateManyCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCustomer_paymentArgs_1.UpsertCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "upsertCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomer_payment_1.AggregateCustomer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomer_paymentArgs_1.AggregateCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "aggregateCustomer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_paymentGroupBy_1.Customer_paymentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomer_paymentArgs_1.GroupByCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentCrudResolver.prototype, "groupByCustomer_payment", null);
Customer_paymentCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], Customer_paymentCrudResolver);
exports.Customer_paymentCrudResolver = Customer_paymentCrudResolver;
