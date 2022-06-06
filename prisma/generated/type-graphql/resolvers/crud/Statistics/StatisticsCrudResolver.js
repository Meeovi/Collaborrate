"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStatisticsArgs_1 = require("./args/AggregateStatisticsArgs");
const CreateManyStatisticsArgs_1 = require("./args/CreateManyStatisticsArgs");
const CreateStatisticsArgs_1 = require("./args/CreateStatisticsArgs");
const DeleteManyStatisticsArgs_1 = require("./args/DeleteManyStatisticsArgs");
const DeleteStatisticsArgs_1 = require("./args/DeleteStatisticsArgs");
const FindFirstStatisticsArgs_1 = require("./args/FindFirstStatisticsArgs");
const FindManyStatisticsArgs_1 = require("./args/FindManyStatisticsArgs");
const FindUniqueStatisticsArgs_1 = require("./args/FindUniqueStatisticsArgs");
const GroupByStatisticsArgs_1 = require("./args/GroupByStatisticsArgs");
const UpdateManyStatisticsArgs_1 = require("./args/UpdateManyStatisticsArgs");
const UpdateStatisticsArgs_1 = require("./args/UpdateStatisticsArgs");
const UpsertStatisticsArgs_1 = require("./args/UpsertStatisticsArgs");
const helpers_1 = require("../../../helpers");
const Statistics_1 = require("../../../models/Statistics");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStatistics_1 = require("../../outputs/AggregateStatistics");
const StatisticsGroupBy_1 = require("../../outputs/StatisticsGroupBy");
let StatisticsCrudResolver = class StatisticsCrudResolver {
    async findUniqueStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateStatistics(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByStatistics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStatisticsArgs_1.FindUniqueStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "findUniqueStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatisticsArgs_1.FindFirstStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "findFirstStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Statistics_1.Statistics], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStatisticsArgs_1.FindManyStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "findManyStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateStatisticsArgs_1.CreateStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "createStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyStatisticsArgs_1.CreateManyStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "createManyStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteStatisticsArgs_1.DeleteStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "deleteStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateStatisticsArgs_1.UpdateStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "updateStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStatisticsArgs_1.DeleteManyStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "deleteManyStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStatisticsArgs_1.UpdateManyStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "updateManyStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertStatisticsArgs_1.UpsertStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "upsertStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStatistics_1.AggregateStatistics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStatisticsArgs_1.AggregateStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "aggregateStatistics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatisticsGroupBy_1.StatisticsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatisticsArgs_1.GroupByStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StatisticsCrudResolver.prototype, "groupByStatistics", null);
StatisticsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], StatisticsCrudResolver);
exports.StatisticsCrudResolver = StatisticsCrudResolver;
