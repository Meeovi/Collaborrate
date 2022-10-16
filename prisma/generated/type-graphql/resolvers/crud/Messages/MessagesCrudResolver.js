"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMessagesArgs_1 = require("./args/AggregateMessagesArgs");
const CreateManyMessagesArgs_1 = require("./args/CreateManyMessagesArgs");
const CreateOneMessagesArgs_1 = require("./args/CreateOneMessagesArgs");
const DeleteManyMessagesArgs_1 = require("./args/DeleteManyMessagesArgs");
const DeleteOneMessagesArgs_1 = require("./args/DeleteOneMessagesArgs");
const FindFirstMessagesArgs_1 = require("./args/FindFirstMessagesArgs");
const FindManyMessagesArgs_1 = require("./args/FindManyMessagesArgs");
const FindUniqueMessagesArgs_1 = require("./args/FindUniqueMessagesArgs");
const GroupByMessagesArgs_1 = require("./args/GroupByMessagesArgs");
const UpdateManyMessagesArgs_1 = require("./args/UpdateManyMessagesArgs");
const UpdateOneMessagesArgs_1 = require("./args/UpdateOneMessagesArgs");
const UpsertOneMessagesArgs_1 = require("./args/UpsertOneMessagesArgs");
const helpers_1 = require("../../../helpers");
const Messages_1 = require("../../../models/Messages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMessages_1 = require("../../outputs/AggregateMessages");
const MessagesGroupBy_1 = require("../../outputs/MessagesGroupBy");
let MessagesCrudResolver = class MessagesCrudResolver {
    async aggregateMessages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByMessages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneMessages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).messages.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMessages_1.AggregateMessages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMessagesArgs_1.AggregateMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "aggregateMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMessagesArgs_1.CreateManyMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "createManyMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Messages_1.Messages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMessagesArgs_1.CreateOneMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "createOneMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMessagesArgs_1.DeleteManyMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "deleteManyMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Messages_1.Messages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMessagesArgs_1.DeleteOneMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "deleteOneMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Messages_1.Messages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMessagesArgs_1.FindFirstMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "findFirstMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Messages_1.Messages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMessagesArgs_1.FindManyMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "findManyMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Messages_1.Messages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMessagesArgs_1.FindUniqueMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "findUniqueMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MessagesGroupBy_1.MessagesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMessagesArgs_1.GroupByMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "groupByMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMessagesArgs_1.UpdateManyMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "updateManyMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Messages_1.Messages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMessagesArgs_1.UpdateOneMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "updateOneMessages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Messages_1.Messages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneMessagesArgs_1.UpsertOneMessagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessagesCrudResolver.prototype, "upsertOneMessages", null);
MessagesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Messages_1.Messages)
], MessagesCrudResolver);
exports.MessagesCrudResolver = MessagesCrudResolver;
