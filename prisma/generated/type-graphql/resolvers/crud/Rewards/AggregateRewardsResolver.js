"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRewardsArgs_1 = require("./args/AggregateRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const AggregateRewards_1 = require("../../outputs/AggregateRewards");
const helpers_1 = require("../../../helpers");
let AggregateRewardsResolver = class AggregateRewardsResolver {
    async aggregateRewards(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
], AggregateRewardsResolver.prototype, "aggregateRewards", null);
AggregateRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], AggregateRewardsResolver);
exports.AggregateRewardsResolver = AggregateRewardsResolver;
