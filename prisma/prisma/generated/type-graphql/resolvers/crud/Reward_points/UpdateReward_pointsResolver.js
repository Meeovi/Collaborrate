"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateReward_pointsArgs_1 = require("./args/UpdateReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const helpers_1 = require("../../../helpers");
let UpdateReward_pointsResolver = class UpdateReward_pointsResolver {
    async updateReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reward_points_1.Reward_points, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReward_pointsArgs_1.UpdateReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateReward_pointsResolver.prototype, "updateReward_points", null);
UpdateReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], UpdateReward_pointsResolver);
exports.UpdateReward_pointsResolver = UpdateReward_pointsResolver;
