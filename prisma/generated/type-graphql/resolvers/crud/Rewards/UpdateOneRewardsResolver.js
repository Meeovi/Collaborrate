"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneRewardsArgs_1 = require("./args/UpdateOneRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let UpdateOneRewardsResolver = class UpdateOneRewardsResolver {
    async updateOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateOneRewardsResolver.prototype, "updateOneRewards", null);
UpdateOneRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], UpdateOneRewardsResolver);
exports.UpdateOneRewardsResolver = UpdateOneRewardsResolver;
