"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReward_pointsArgs_1 = require("./args/GroupByReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const Reward_pointsGroupBy_1 = require("../../outputs/Reward_pointsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReward_pointsResolver = class GroupByReward_pointsResolver {
    async groupByReward_points(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reward_pointsGroupBy_1.Reward_pointsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReward_pointsArgs_1.GroupByReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReward_pointsResolver.prototype, "groupByReward_points", null);
GroupByReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], GroupByReward_pointsResolver);
exports.GroupByReward_pointsResolver = GroupByReward_pointsResolver;
