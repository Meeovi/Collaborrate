"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyRewardsArgs_1 = require("./args/UpdateManyRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyRewardsResolver = class UpdateManyRewardsResolver {
    async updateManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyRewardsResolver.prototype, "updateManyRewards", null);
UpdateManyRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], UpdateManyRewardsResolver);
exports.UpdateManyRewardsResolver = UpdateManyRewardsResolver;
