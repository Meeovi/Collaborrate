"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRewardsArgs_1 = require("./args/FindFirstRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let FindFirstRewardsResolver = class FindFirstRewardsResolver {
    async findFirstRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRewardsArgs_1.FindFirstRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRewardsResolver.prototype, "findFirstRewards", null);
FindFirstRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], FindFirstRewardsResolver);
exports.FindFirstRewardsResolver = FindFirstRewardsResolver;
