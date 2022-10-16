"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAnalyticsArgs_1 = require("./args/AggregateAnalyticsArgs");
const CreateManyAnalyticsArgs_1 = require("./args/CreateManyAnalyticsArgs");
const CreateOneAnalyticsArgs_1 = require("./args/CreateOneAnalyticsArgs");
const DeleteManyAnalyticsArgs_1 = require("./args/DeleteManyAnalyticsArgs");
const DeleteOneAnalyticsArgs_1 = require("./args/DeleteOneAnalyticsArgs");
const FindFirstAnalyticsArgs_1 = require("./args/FindFirstAnalyticsArgs");
const FindManyAnalyticsArgs_1 = require("./args/FindManyAnalyticsArgs");
const FindUniqueAnalyticsArgs_1 = require("./args/FindUniqueAnalyticsArgs");
const GroupByAnalyticsArgs_1 = require("./args/GroupByAnalyticsArgs");
const UpdateManyAnalyticsArgs_1 = require("./args/UpdateManyAnalyticsArgs");
const UpdateOneAnalyticsArgs_1 = require("./args/UpdateOneAnalyticsArgs");
const UpsertOneAnalyticsArgs_1 = require("./args/UpsertOneAnalyticsArgs");
const helpers_1 = require("../../../helpers");
const Analytics_1 = require("../../../models/Analytics");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAnalytics_1 = require("../../outputs/AggregateAnalytics");
const AnalyticsGroupBy_1 = require("../../outputs/AnalyticsGroupBy");
let AnalyticsCrudResolver = class AnalyticsCrudResolver {
    async aggregateAnalytics(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAnalytics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAnalytics_1.AggregateAnalytics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAnalyticsArgs_1.AggregateAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "aggregateAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAnalyticsArgs_1.CreateManyAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "createManyAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAnalyticsArgs_1.CreateOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "createOneAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAnalyticsArgs_1.DeleteManyAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "deleteManyAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAnalyticsArgs_1.DeleteOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "deleteOneAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Analytics_1.Analytics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAnalyticsArgs_1.FindFirstAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "findFirstAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Analytics_1.Analytics], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAnalyticsArgs_1.FindManyAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "findManyAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Analytics_1.Analytics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAnalyticsArgs_1.FindUniqueAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "findUniqueAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AnalyticsGroupBy_1.AnalyticsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAnalyticsArgs_1.GroupByAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "groupByAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAnalyticsArgs_1.UpdateManyAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "updateManyAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAnalyticsArgs_1.UpdateOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "updateOneAnalytics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAnalyticsArgs_1.UpsertOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AnalyticsCrudResolver.prototype, "upsertOneAnalytics", null);
AnalyticsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], AnalyticsCrudResolver);
exports.AnalyticsCrudResolver = AnalyticsCrudResolver;
