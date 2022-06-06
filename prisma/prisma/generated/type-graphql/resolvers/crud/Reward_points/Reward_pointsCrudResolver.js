"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReward_pointsArgs_1 = require("./args/AggregateReward_pointsArgs");
const CreateManyReward_pointsArgs_1 = require("./args/CreateManyReward_pointsArgs");
const CreateReward_pointsArgs_1 = require("./args/CreateReward_pointsArgs");
const DeleteManyReward_pointsArgs_1 = require("./args/DeleteManyReward_pointsArgs");
const DeleteReward_pointsArgs_1 = require("./args/DeleteReward_pointsArgs");
const FindFirstReward_pointsArgs_1 = require("./args/FindFirstReward_pointsArgs");
const FindManyReward_pointsArgs_1 = require("./args/FindManyReward_pointsArgs");
const FindUniqueReward_pointsArgs_1 = require("./args/FindUniqueReward_pointsArgs");
const GroupByReward_pointsArgs_1 = require("./args/GroupByReward_pointsArgs");
const UpdateManyReward_pointsArgs_1 = require("./args/UpdateManyReward_pointsArgs");
const UpdateReward_pointsArgs_1 = require("./args/UpdateReward_pointsArgs");
const UpsertReward_pointsArgs_1 = require("./args/UpsertReward_pointsArgs");
const helpers_1 = require("../../../helpers");
const Reward_points_1 = require("../../../models/Reward_points");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReward_points_1 = require("../../outputs/AggregateReward_points");
const Reward_pointsGroupBy_1 = require("../../outputs/Reward_pointsGroupBy");
let Reward_pointsCrudResolver = class Reward_pointsCrudResolver {
    async findUniqueReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReward_points(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReward_points(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReward_points(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reward_points.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reward_points_1.Reward_points, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReward_pointsArgs_1.FindUniqueReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Reward_pointsCrudResolver.prototype, "findUniqueReward_points", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reward_points_1.Reward_points, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReward_pointsArgs_1.FindFirstReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Reward_pointsCrudResolver.prototype, "findFirstReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "findManyReward_points", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reward_points_1.Reward_points, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReward_pointsArgs_1.CreateReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Reward_pointsCrudResolver.prototype, "createReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "createManyReward_points", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reward_points_1.Reward_points, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReward_pointsArgs_1.DeleteReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Reward_pointsCrudResolver.prototype, "deleteReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "updateReward_points", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReward_pointsArgs_1.DeleteManyReward_pointsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Reward_pointsCrudResolver.prototype, "deleteManyReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "updateManyReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "upsertReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "aggregateReward_points", null);
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
], Reward_pointsCrudResolver.prototype, "groupByReward_points", null);
Reward_pointsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reward_points_1.Reward_points)
], Reward_pointsCrudResolver);
exports.Reward_pointsCrudResolver = Reward_pointsCrudResolver;
