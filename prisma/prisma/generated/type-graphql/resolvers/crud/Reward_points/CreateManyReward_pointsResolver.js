"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReward_pointsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyReward_pointsArgs_1 = require("./args/CreateManyReward_pointsArgs");
const Reward_points_1 = require("../../../models/Reward_points");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyReward_pointsResolver = class CreateManyReward_pointsResolver {
    async createManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReward_pointsArgs_1.CreateManyReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyReward_pointsResolver.prototype, "createManyReward_points", null);
CreateManyReward_pointsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], CreateManyReward_pointsResolver);
exports.CreateManyReward_pointsResolver = CreateManyReward_pointsResolver;
