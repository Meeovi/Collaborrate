"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyRewardsArgs_1 = require("./args/DeleteManyRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRewardsResolver = class DeleteManyRewardsResolver {
    async deleteManyRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRewardsArgs_1.DeleteManyRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRewardsResolver.prototype, "deleteManyRewards", null);
DeleteManyRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], DeleteManyRewardsResolver);
exports.DeleteManyRewardsResolver = DeleteManyRewardsResolver;
