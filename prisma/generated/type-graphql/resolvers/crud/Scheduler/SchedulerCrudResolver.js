"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSchedulerArgs_1 = require("./args/AggregateSchedulerArgs");
const CreateManySchedulerArgs_1 = require("./args/CreateManySchedulerArgs");
const CreateOneSchedulerArgs_1 = require("./args/CreateOneSchedulerArgs");
const DeleteManySchedulerArgs_1 = require("./args/DeleteManySchedulerArgs");
const DeleteOneSchedulerArgs_1 = require("./args/DeleteOneSchedulerArgs");
const FindFirstSchedulerArgs_1 = require("./args/FindFirstSchedulerArgs");
const FindManySchedulerArgs_1 = require("./args/FindManySchedulerArgs");
const FindUniqueSchedulerArgs_1 = require("./args/FindUniqueSchedulerArgs");
const GroupBySchedulerArgs_1 = require("./args/GroupBySchedulerArgs");
const UpdateManySchedulerArgs_1 = require("./args/UpdateManySchedulerArgs");
const UpdateOneSchedulerArgs_1 = require("./args/UpdateOneSchedulerArgs");
const UpsertOneSchedulerArgs_1 = require("./args/UpsertOneSchedulerArgs");
const helpers_1 = require("../../../helpers");
const Scheduler_1 = require("../../../models/Scheduler");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateScheduler_1 = require("../../outputs/AggregateScheduler");
const SchedulerGroupBy_1 = require("../../outputs/SchedulerGroupBy");
let SchedulerCrudResolver = class SchedulerCrudResolver {
    async aggregateScheduler(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async schedulers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async scheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByScheduler(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateScheduler_1.AggregateScheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSchedulerArgs_1.AggregateSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "aggregateScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySchedulerArgs_1.CreateManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "createManyScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSchedulerArgs_1.CreateOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "createOneScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySchedulerArgs_1.DeleteManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "deleteManyScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSchedulerArgs_1.DeleteOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "deleteOneScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSchedulerArgs_1.FindFirstSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "findFirstScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Scheduler_1.Scheduler], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySchedulerArgs_1.FindManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "schedulers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSchedulerArgs_1.FindUniqueSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "scheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SchedulerGroupBy_1.SchedulerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySchedulerArgs_1.GroupBySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "groupByScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySchedulerArgs_1.UpdateManySchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "updateManyScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSchedulerArgs_1.UpdateOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "updateOneScheduler", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSchedulerArgs_1.UpsertOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchedulerCrudResolver.prototype, "upsertOneScheduler", null);
SchedulerCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], SchedulerCrudResolver);
exports.SchedulerCrudResolver = SchedulerCrudResolver;
