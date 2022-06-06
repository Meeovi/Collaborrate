"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePaymentsArgs_1 = require("./args/AggregatePaymentsArgs");
const CreateManyPaymentsArgs_1 = require("./args/CreateManyPaymentsArgs");
const CreatePaymentsArgs_1 = require("./args/CreatePaymentsArgs");
const DeleteManyPaymentsArgs_1 = require("./args/DeleteManyPaymentsArgs");
const DeletePaymentsArgs_1 = require("./args/DeletePaymentsArgs");
const FindFirstPaymentsArgs_1 = require("./args/FindFirstPaymentsArgs");
const FindManyPaymentsArgs_1 = require("./args/FindManyPaymentsArgs");
const FindUniquePaymentsArgs_1 = require("./args/FindUniquePaymentsArgs");
const GroupByPaymentsArgs_1 = require("./args/GroupByPaymentsArgs");
const UpdateManyPaymentsArgs_1 = require("./args/UpdateManyPaymentsArgs");
const UpdatePaymentsArgs_1 = require("./args/UpdatePaymentsArgs");
const UpsertPaymentsArgs_1 = require("./args/UpsertPaymentsArgs");
const helpers_1 = require("../../../helpers");
const Payments_1 = require("../../../models/Payments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePayments_1 = require("../../outputs/AggregatePayments");
const PaymentsGroupBy_1 = require("../../outputs/PaymentsGroupBy");
let PaymentsCrudResolver = class PaymentsCrudResolver {
    async findUniquePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePayments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPayments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePaymentsArgs_1.FindUniquePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "findUniquePayments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPaymentsArgs_1.FindFirstPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "findFirstPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Payments_1.Payments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPaymentsArgs_1.FindManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "findManyPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePaymentsArgs_1.CreatePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "createPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPaymentsArgs_1.CreateManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "createManyPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePaymentsArgs_1.DeletePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "deletePayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePaymentsArgs_1.UpdatePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "updatePayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPaymentsArgs_1.DeleteManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "deleteManyPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPaymentsArgs_1.UpdateManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "updateManyPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPaymentsArgs_1.UpsertPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "upsertPayments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePayments_1.AggregatePayments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePaymentsArgs_1.AggregatePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "aggregatePayments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PaymentsGroupBy_1.PaymentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPaymentsArgs_1.GroupByPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "groupByPayments", null);
PaymentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], PaymentsCrudResolver);
exports.PaymentsCrudResolver = PaymentsCrudResolver;
