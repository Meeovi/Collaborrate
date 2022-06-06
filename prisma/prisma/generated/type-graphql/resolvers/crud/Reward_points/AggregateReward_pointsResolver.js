"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReward_pointsArgs_1 = require("./args/AggregateReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const AggregateReward_points_1 = require("../../outputs/AggregateReward_points");
const helpers_1 = require("../../../helpers");
let AggregateReward_pointsResolver = class AggregateReward_pointsResolver {
    async aggregateReward_points(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReward_points_1.AggregateReward_points, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReward_pointsArgs_1.AggregateReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReward_pointsResolver.prototype, "aggregateReward_points", null);
AggregateReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], AggregateReward_pointsResolver);
exports.AggregateReward_pointsResolver = AggregateReward_pointsResolver;
