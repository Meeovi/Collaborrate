"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRewardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertRewardsArgs_1 = require("./args/UpsertRewardsArgs");
const Rewards_1 = require("../../../models/Rewards");
const helpers_1 = require("../../../helpers");
let UpsertRewardsResolver = class UpsertRewardsResolver {
    async upsertRewards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rewards.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rewards_1.Rewards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRewardsArgs_1.UpsertRewardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertRewardsResolver.prototype, "upsertRewards", null);
UpsertRewardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rewards_1.Rewards)
], UpsertRewardsResolver);
exports.UpsertRewardsResolver = UpsertRewardsResolver;
