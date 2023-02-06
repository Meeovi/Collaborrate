"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDiscountsArgs_1 = require("./args/AggregateDiscountsArgs");
const CreateManyDiscountsArgs_1 = require("./args/CreateManyDiscountsArgs");
const CreateOneDiscountsArgs_1 = require("./args/CreateOneDiscountsArgs");
const DeleteManyDiscountsArgs_1 = require("./args/DeleteManyDiscountsArgs");
const DeleteOneDiscountsArgs_1 = require("./args/DeleteOneDiscountsArgs");
const FindFirstDiscountsArgs_1 = require("./args/FindFirstDiscountsArgs");
const FindFirstDiscountsOrThrowArgs_1 = require("./args/FindFirstDiscountsOrThrowArgs");
const FindManyDiscountsArgs_1 = require("./args/FindManyDiscountsArgs");
const FindUniqueDiscountsArgs_1 = require("./args/FindUniqueDiscountsArgs");
const FindUniqueDiscountsOrThrowArgs_1 = require("./args/FindUniqueDiscountsOrThrowArgs");
const GroupByDiscountsArgs_1 = require("./args/GroupByDiscountsArgs");
const UpdateManyDiscountsArgs_1 = require("./args/UpdateManyDiscountsArgs");
const UpdateOneDiscountsArgs_1 = require("./args/UpdateOneDiscountsArgs");
const UpsertOneDiscountsArgs_1 = require("./args/UpsertOneDiscountsArgs");
const helpers_1 = require("../../../helpers");
const Discounts_1 = require("../../../models/Discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDiscounts_1 = require("../../outputs/AggregateDiscounts");
const DiscountsGroupBy_1 = require("../../outputs/DiscountsGroupBy");
let DiscountsCrudResolver = class DiscountsCrudResolver {
    async aggregateDiscounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDiscountsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueDiscountsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDiscounts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDiscounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).discounts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDiscounts_1.AggregateDiscounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDiscountsArgs_1.AggregateDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "aggregateDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDiscountsArgs_1.CreateManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "createManyDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDiscountsArgs_1.CreateOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "createOneDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDiscountsArgs_1.DeleteManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "deleteManyDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDiscountsArgs_1.DeleteOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "deleteOneDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDiscountsArgs_1.FindFirstDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "findFirstDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDiscountsOrThrowArgs_1.FindFirstDiscountsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "findFirstDiscountsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Discounts_1.Discounts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDiscountsArgs_1.FindManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "findManyDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDiscountsArgs_1.FindUniqueDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "findUniqueDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDiscountsOrThrowArgs_1.FindUniqueDiscountsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "findUniqueDiscountsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DiscountsGroupBy_1.DiscountsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDiscountsArgs_1.GroupByDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "groupByDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDiscountsArgs_1.UpdateManyDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "updateManyDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDiscountsArgs_1.UpdateOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "updateOneDiscounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Discounts_1.Discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDiscountsArgs_1.UpsertOneDiscountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscountsCrudResolver.prototype, "upsertOneDiscounts", null);
DiscountsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Discounts_1.Discounts)
], DiscountsCrudResolver);
exports.DiscountsCrudResolver = DiscountsCrudResolver;
