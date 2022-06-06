"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertReward_pointsArgs_1 = require("./args/UpsertReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const helpers_1 = require("../../../helpers");
let UpsertReward_pointsResolver = class UpsertReward_pointsResolver {
    async upsertReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reward_points_1.Reward_points, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReward_pointsArgs_1.UpsertReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertReward_pointsResolver.prototype, "upsertReward_points", null);
UpsertReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], UpsertReward_pointsResolver);
exports.UpsertReward_pointsResolver = UpsertReward_pointsResolver;
