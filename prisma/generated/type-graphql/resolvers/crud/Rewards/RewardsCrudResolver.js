"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRewardsArgs_1 = require("./args/AggregateRewardsArgs");
const CreateManyRewardsArgs_1 = require("./args/CreateManyRewardsArgs");
const CreateOneRewardsArgs_1 = require("./args/CreateOneRewardsArgs");
const DeleteManyRewardsArgs_1 = require("./args/DeleteManyRewardsArgs");
const DeleteOneRewardsArgs_1 = require("./args/DeleteOneRewardsArgs");
const FindFirstRewardsArgs_1 = require("./args/FindFirstRewardsArgs");
const FindFirstRewardsOrThrowArgs_1 = require("./args/FindFirstRewardsOrThrowArgs");
const FindManyRewardsArgs_1 = require("./args/FindManyRewardsArgs");
const FindUniqueRewardsArgs_1 = require("./args/FindUniqueRewardsArgs");
const FindUniqueRewardsOrThrowArgs_1 = require("./args/FindUniqueRewardsOrThrowArgs");
const GroupByRewardsArgs_1 = require("./args/GroupByRewardsArgs");
const UpdateManyRewardsArgs_1 = require("./args/UpdateManyRewardsArgs");
const UpdateOneRewardsArgs_1 = require("./args/UpdateOneRewardsArgs");
const UpsertOneRewardsArgs_1 = require("./args/UpsertOneRewardsArgs");
const helpers_1 = require("../../../helpers");
const Rewards_1 = require("../../../models/Rewards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRewards_1 = require("../../outputs/AggregateRewards");
const RewardsGroupBy_1 = require("../../outputs/RewardsGroupBy");
let RewardsCrudResolver = class RewardsCrudResolver {
    async aggregateRewards(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRewardsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRewardsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRewards(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRewards_1.AggregateRewards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRewardsArgs_1.AggregateRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "aggregateRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRewardsArgs_1.CreateManyRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "createManyRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRewardsArgs_1.CreateOneRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "createOneRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRewardsArgs_1.DeleteManyRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "deleteManyRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRewardsArgs_1.DeleteOneRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "deleteOneRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRewardsArgs_1.FindFirstRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findFirstRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRewardsOrThrowArgs_1.FindFirstRewardsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findFirstRewardsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Rewards_1.Rewards], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRewardsArgs_1.FindManyRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findManyRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRewardsArgs_1.FindUniqueRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findUniqueRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRewardsOrThrowArgs_1.FindUniqueRewardsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findUniqueRewardsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RewardsGroupBy_1.RewardsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRewardsArgs_1.GroupByRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "groupByRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRewardsArgs_1.UpdateManyRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "updateManyRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRewardsArgs_1.UpdateOneRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "updateOneRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRewardsArgs_1.UpsertOneRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "upsertOneRewards", null);
RewardsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], RewardsCrudResolver);
exports.RewardsCrudResolver = RewardsCrudResolver;
