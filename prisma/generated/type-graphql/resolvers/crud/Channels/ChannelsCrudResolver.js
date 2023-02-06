"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChannelsArgs_1 = require("./args/AggregateChannelsArgs");
const CreateManyChannelsArgs_1 = require("./args/CreateManyChannelsArgs");
const CreateOneChannelsArgs_1 = require("./args/CreateOneChannelsArgs");
const DeleteManyChannelsArgs_1 = require("./args/DeleteManyChannelsArgs");
const DeleteOneChannelsArgs_1 = require("./args/DeleteOneChannelsArgs");
const FindFirstChannelsArgs_1 = require("./args/FindFirstChannelsArgs");
const FindFirstChannelsOrThrowArgs_1 = require("./args/FindFirstChannelsOrThrowArgs");
const FindManyChannelsArgs_1 = require("./args/FindManyChannelsArgs");
const FindUniqueChannelsArgs_1 = require("./args/FindUniqueChannelsArgs");
const FindUniqueChannelsOrThrowArgs_1 = require("./args/FindUniqueChannelsOrThrowArgs");
const GroupByChannelsArgs_1 = require("./args/GroupByChannelsArgs");
const UpdateManyChannelsArgs_1 = require("./args/UpdateManyChannelsArgs");
const UpdateOneChannelsArgs_1 = require("./args/UpdateOneChannelsArgs");
const UpsertOneChannelsArgs_1 = require("./args/UpsertOneChannelsArgs");
const helpers_1 = require("../../../helpers");
const Channels_1 = require("../../../models/Channels");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateChannels_1 = require("../../outputs/AggregateChannels");
const ChannelsGroupBy_1 = require("../../outputs/ChannelsGroupBy");
let ChannelsCrudResolver = class ChannelsCrudResolver {
    async aggregateChannels(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChannelsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueChannelsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByChannels(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChannels_1.AggregateChannels, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChannelsArgs_1.AggregateChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "aggregateChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyChannelsArgs_1.CreateManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "createManyChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChannelsArgs_1.CreateOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "createOneChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyChannelsArgs_1.DeleteManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "deleteManyChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneChannelsArgs_1.DeleteOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "deleteOneChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChannelsArgs_1.FindFirstChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "findFirstChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChannelsOrThrowArgs_1.FindFirstChannelsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "findFirstChannelsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Channels_1.Channels], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChannelsArgs_1.FindManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "findManyChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChannelsArgs_1.FindUniqueChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "findUniqueChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChannelsOrThrowArgs_1.FindUniqueChannelsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "findUniqueChannelsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChannelsGroupBy_1.ChannelsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChannelsArgs_1.GroupByChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "groupByChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyChannelsArgs_1.UpdateManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "updateManyChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChannelsArgs_1.UpdateOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "updateOneChannels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChannelsArgs_1.UpsertOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChannelsCrudResolver.prototype, "upsertOneChannels", null);
ChannelsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], ChannelsCrudResolver);
exports.ChannelsCrudResolver = ChannelsCrudResolver;
