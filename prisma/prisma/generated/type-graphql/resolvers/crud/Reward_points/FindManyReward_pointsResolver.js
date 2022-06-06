"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyReward_pointsArgs_1 = require("./args/FindManyReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const helpers_1 = require("../../../helpers");
let FindManyReward_pointsResolver = class FindManyReward_pointsResolver {
    async findManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reward_points_1.Reward_points], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReward_pointsArgs_1.FindManyReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReward_pointsResolver.prototype, "findManyReward_points", null);
FindManyReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], FindManyReward_pointsResolver);
exports.FindManyReward_pointsResolver = FindManyReward_pointsResolver;
