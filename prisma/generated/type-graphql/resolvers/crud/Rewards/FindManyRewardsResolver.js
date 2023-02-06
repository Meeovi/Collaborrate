"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyRewardsArgs_1 = require("./args/FindManyRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let FindManyRewardsResolver = class FindManyRewardsResolver {
    async findManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyRewardsResolver.prototype, "findManyRewards", null);
FindManyRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], FindManyRewardsResolver);
exports.FindManyRewardsResolver = FindManyRewardsResolver;
