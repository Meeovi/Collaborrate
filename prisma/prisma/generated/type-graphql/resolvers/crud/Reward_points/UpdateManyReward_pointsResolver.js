"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyReward_pointsArgs_1 = require("./args/UpdateManyReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyReward_pointsResolver = class UpdateManyReward_pointsResolver {
    async updateManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReward_pointsArgs_1.UpdateManyReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyReward_pointsResolver.prototype, "updateManyReward_points", null);
UpdateManyReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], UpdateManyReward_pointsResolver);
exports.UpdateManyReward_pointsResolver = UpdateManyReward_pointsResolver;
