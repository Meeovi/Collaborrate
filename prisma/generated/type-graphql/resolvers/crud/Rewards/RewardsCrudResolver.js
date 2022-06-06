"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRewardsArgs_1 = require("./args/AggregateRewardsArgs");
const CreateManyRewardsArgs_1 = require("./args/CreateManyRewardsArgs");
const CreateRewardsArgs_1 = require("./args/CreateRewardsArgs");
const DeleteManyRewardsArgs_1 = require("./args/DeleteManyRewardsArgs");
const DeleteRewardsArgs_1 = require("./args/DeleteRewardsArgs");
const FindFirstRewardsArgs_1 = require("./args/FindFirstRewardsArgs");
const FindManyRewardsArgs_1 = require("./args/FindManyRewardsArgs");
const FindUniqueRewardsArgs_1 = require("./args/FindUniqueRewardsArgs");
const GroupByRewardsArgs_1 = require("./args/GroupByRewardsArgs");
const UpdateManyRewardsArgs_1 = require("./args/UpdateManyRewardsArgs");
const UpdateRewardsArgs_1 = require("./args/UpdateRewardsArgs");
const UpsertRewardsArgs_1 = require("./args/UpsertRewardsArgs");
const helpers_1 = require("../../../helpers");
const Rewards_1 = require("../../../models/Rewards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRewards_1 = require("../../outputs/AggregateRewards");
const RewardsGroupBy_1 = require("../../outputs/RewardsGroupBy");
let RewardsCrudResolver = class RewardsCrudResolver {
    async findUniqueRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRewards(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByRewards(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRewardsArgs_1.FindFirstRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "findFirstRewards", null);
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
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateRewardsArgs_1.CreateRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "createRewards", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRewardsArgs_1.DeleteRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "deleteRewards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRewardsArgs_1.UpdateRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "updateRewards", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRewardsArgs_1.UpsertRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RewardsCrudResolver.prototype, "upsertRewards", null);
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
RewardsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], RewardsCrudResolver);
exports.RewardsCrudResolver = RewardsCrudResolver;
