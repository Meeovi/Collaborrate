"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePaymentsArgs_1 = require("./args/AggregatePaymentsArgs");
const CreateManyPaymentsArgs_1 = require("./args/CreateManyPaymentsArgs");
const CreateOnePaymentsArgs_1 = require("./args/CreateOnePaymentsArgs");
const DeleteManyPaymentsArgs_1 = require("./args/DeleteManyPaymentsArgs");
const DeleteOnePaymentsArgs_1 = require("./args/DeleteOnePaymentsArgs");
const FindFirstPaymentsArgs_1 = require("./args/FindFirstPaymentsArgs");
const FindFirstPaymentsOrThrowArgs_1 = require("./args/FindFirstPaymentsOrThrowArgs");
const FindManyPaymentsArgs_1 = require("./args/FindManyPaymentsArgs");
const FindUniquePaymentsArgs_1 = require("./args/FindUniquePaymentsArgs");
const FindUniquePaymentsOrThrowArgs_1 = require("./args/FindUniquePaymentsOrThrowArgs");
const GroupByPaymentsArgs_1 = require("./args/GroupByPaymentsArgs");
const UpdateManyPaymentsArgs_1 = require("./args/UpdateManyPaymentsArgs");
const UpdateOnePaymentsArgs_1 = require("./args/UpdateOnePaymentsArgs");
const UpsertOnePaymentsArgs_1 = require("./args/UpsertOnePaymentsArgs");
const helpers_1 = require("../../../helpers");
const Payments_1 = require("../../../models/Payments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePayments_1 = require("../../outputs/AggregatePayments");
const PaymentsGroupBy_1 = require("../../outputs/PaymentsGroupBy");
let PaymentsCrudResolver = class PaymentsCrudResolver {
    async aggregatePayments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPaymentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePaymentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPayments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePaymentsArgs_1.CreateOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "createOnePayments", null);
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
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePaymentsArgs_1.DeleteOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "deleteOnePayments", null);
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
    TypeGraphQL.Query(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPaymentsOrThrowArgs_1.FindFirstPaymentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "findFirstPaymentsOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePaymentsOrThrowArgs_1.FindUniquePaymentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "findUniquePaymentsOrThrow", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePaymentsArgs_1.UpdateOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "updateOnePayments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePaymentsArgs_1.UpsertOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaymentsCrudResolver.prototype, "upsertOnePayments", null);
PaymentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], PaymentsCrudResolver);
exports.PaymentsCrudResolver = PaymentsCrudResolver;
