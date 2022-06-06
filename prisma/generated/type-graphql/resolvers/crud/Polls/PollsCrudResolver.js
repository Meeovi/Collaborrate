"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePollsArgs_1 = require("./args/AggregatePollsArgs");
const CreateManyPollsArgs_1 = require("./args/CreateManyPollsArgs");
const CreatePollsArgs_1 = require("./args/CreatePollsArgs");
const DeleteManyPollsArgs_1 = require("./args/DeleteManyPollsArgs");
const DeletePollsArgs_1 = require("./args/DeletePollsArgs");
const FindFirstPollsArgs_1 = require("./args/FindFirstPollsArgs");
const FindManyPollsArgs_1 = require("./args/FindManyPollsArgs");
const FindUniquePollsArgs_1 = require("./args/FindUniquePollsArgs");
const GroupByPollsArgs_1 = require("./args/GroupByPollsArgs");
const UpdateManyPollsArgs_1 = require("./args/UpdateManyPollsArgs");
const UpdatePollsArgs_1 = require("./args/UpdatePollsArgs");
const UpsertPollsArgs_1 = require("./args/UpsertPollsArgs");
const helpers_1 = require("../../../helpers");
const Polls_1 = require("../../../models/Polls");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePolls_1 = require("../../outputs/AggregatePolls");
const PollsGroupBy_1 = require("../../outputs/PollsGroupBy");
let PollsCrudResolver = class PollsCrudResolver {
    async findUniquePolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPolls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePolls(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPolls(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).polls.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Polls_1.Polls, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePollsArgs_1.FindUniquePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "findUniquePolls", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Polls_1.Polls, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPollsArgs_1.FindFirstPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "findFirstPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Polls_1.Polls], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPollsArgs_1.FindManyPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "findManyPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Polls_1.Polls, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePollsArgs_1.CreatePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "createPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPollsArgs_1.CreateManyPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "createManyPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Polls_1.Polls, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePollsArgs_1.DeletePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "deletePolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Polls_1.Polls, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePollsArgs_1.UpdatePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "updatePolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPollsArgs_1.DeleteManyPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "deleteManyPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPollsArgs_1.UpdateManyPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "updateManyPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Polls_1.Polls, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPollsArgs_1.UpsertPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "upsertPolls", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePolls_1.AggregatePolls, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePollsArgs_1.AggregatePollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "aggregatePolls", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PollsGroupBy_1.PollsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPollsArgs_1.GroupByPollsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PollsCrudResolver.prototype, "groupByPolls", null);
PollsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Polls_1.Polls)
], PollsCrudResolver);
exports.PollsCrudResolver = PollsCrudResolver;
