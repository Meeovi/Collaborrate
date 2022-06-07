"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteRewardsArgs_1 = require("./args/DeleteRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let DeleteRewardsResolver = class DeleteRewardsResolver {
    async deleteRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRewardsArgs_1.DeleteRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteRewardsResolver.prototype, "deleteRewards", null);
DeleteRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], DeleteRewardsResolver);
exports.DeleteRewardsResolver = DeleteRewardsResolver;