"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTasksArgs_1 = require("./args/AggregateTasksArgs");
const CreateManyTasksArgs_1 = require("./args/CreateManyTasksArgs");
const CreateTasksArgs_1 = require("./args/CreateTasksArgs");
const DeleteManyTasksArgs_1 = require("./args/DeleteManyTasksArgs");
const DeleteTasksArgs_1 = require("./args/DeleteTasksArgs");
const FindFirstTasksArgs_1 = require("./args/FindFirstTasksArgs");
const FindManyTasksArgs_1 = require("./args/FindManyTasksArgs");
const FindUniqueTasksArgs_1 = require("./args/FindUniqueTasksArgs");
const GroupByTasksArgs_1 = require("./args/GroupByTasksArgs");
const UpdateManyTasksArgs_1 = require("./args/UpdateManyTasksArgs");
const UpdateTasksArgs_1 = require("./args/UpdateTasksArgs");
const UpsertTasksArgs_1 = require("./args/UpsertTasksArgs");
const helpers_1 = require("../../../helpers");
const Tasks_1 = require("../../../models/Tasks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTasks_1 = require("../../outputs/AggregateTasks");
const TasksGroupBy_1 = require("../../outputs/TasksGroupBy");
let TasksCrudResolver = class TasksCrudResolver {
    async findUniqueTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTasks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTasks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTasks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tasks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tasks_1.Tasks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTasksArgs_1.FindUniqueTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "findUniqueTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tasks_1.Tasks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTasksArgs_1.FindFirstTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "findFirstTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tasks_1.Tasks], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTasksArgs_1.FindManyTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "findManyTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTasksArgs_1.CreateTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "createTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTasksArgs_1.CreateManyTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "createManyTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTasksArgs_1.DeleteTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "deleteTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTasksArgs_1.UpdateTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "updateTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTasksArgs_1.DeleteManyTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "deleteManyTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTasksArgs_1.UpdateManyTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "updateManyTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tasks_1.Tasks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTasksArgs_1.UpsertTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "upsertTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTasks_1.AggregateTasks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTasksArgs_1.AggregateTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "aggregateTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TasksGroupBy_1.TasksGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTasksArgs_1.GroupByTasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TasksCrudResolver.prototype, "groupByTasks", null);
TasksCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tasks_1.Tasks)
], TasksCrudResolver);
exports.TasksCrudResolver = TasksCrudResolver;
