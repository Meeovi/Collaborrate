"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneRewardsArgs_1 = require("./args/DeleteOneRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let DeleteOneRewardsResolver = class DeleteOneRewardsResolver {
    async deleteOneRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRewardsArgs_1.DeleteOneRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneRewardsResolver.prototype, "deleteOneRewards", null);
DeleteOneRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], DeleteOneRewardsResolver);
exports.DeleteOneRewardsResolver = DeleteOneRewardsResolver;
