"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRewardsArgs_1 = require("./args/GroupByRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const RewardsGroupBy_1 = require("../../outputs/RewardsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRewardsResolver = class GroupByRewardsResolver {
    async groupByRewards(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByRewardsResolver.prototype, "groupByRewards", null);
GroupByRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], GroupByRewardsResolver);
exports.GroupByRewardsResolver = GroupByRewardsResolver;
