"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateMediamanagerArgs_1 = require("./args/AggregateMediamanagerArgs");
const CreateManyMediamanagerArgs_1 = require("./args/CreateManyMediamanagerArgs");
const CreateOneMediamanagerArgs_1 = require("./args/CreateOneMediamanagerArgs");
const DeleteManyMediamanagerArgs_1 = require("./args/DeleteManyMediamanagerArgs");
const DeleteOneMediamanagerArgs_1 = require("./args/DeleteOneMediamanagerArgs");
const FindFirstMediamanagerArgs_1 = require("./args/FindFirstMediamanagerArgs");
const FindFirstMediamanagerOrThrowArgs_1 = require("./args/FindFirstMediamanagerOrThrowArgs");
const FindManyMediamanagerArgs_1 = require("./args/FindManyMediamanagerArgs");
const FindUniqueMediamanagerArgs_1 = require("./args/FindUniqueMediamanagerArgs");
const FindUniqueMediamanagerOrThrowArgs_1 = require("./args/FindUniqueMediamanagerOrThrowArgs");
const GroupByMediamanagerArgs_1 = require("./args/GroupByMediamanagerArgs");
const UpdateManyMediamanagerArgs_1 = require("./args/UpdateManyMediamanagerArgs");
const UpdateOneMediamanagerArgs_1 = require("./args/UpdateOneMediamanagerArgs");
const UpsertOneMediamanagerArgs_1 = require("./args/UpsertOneMediamanagerArgs");
const helpers_1 = require("../../../helpers");
const Mediamanager_1 = require("../../../models/Mediamanager");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMediamanager_1 = require("../../outputs/AggregateMediamanager");
const MediamanagerGroupBy_1 = require("../../outputs/MediamanagerGroupBy");
let MediamanagerCrudResolver = class MediamanagerCrudResolver {
    async aggregateMediamanager(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMediamanagerOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mediamanagers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByMediamanager(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneMediamanager(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).mediamanager.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMediamanager_1.AggregateMediamanager, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMediamanagerArgs_1.AggregateMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "aggregateMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMediamanagerArgs_1.CreateManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "createManyMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMediamanagerArgs_1.CreateOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "createOneMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMediamanagerArgs_1.DeleteManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "deleteManyMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMediamanagerArgs_1.DeleteOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "deleteOneMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMediamanagerArgs_1.FindFirstMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "findFirstMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMediamanagerOrThrowArgs_1.FindFirstMediamanagerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "findFirstMediamanagerOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Mediamanager_1.Mediamanager], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMediamanagerArgs_1.FindManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "mediamanagers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMediamanagerArgs_1.FindUniqueMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "mediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMediamanagerOrThrowArgs_1.FindUniqueMediamanagerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "getMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MediamanagerGroupBy_1.MediamanagerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMediamanagerArgs_1.GroupByMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "groupByMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMediamanagerArgs_1.UpdateManyMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "updateManyMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMediamanagerArgs_1.UpdateOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "updateOneMediamanager", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mediamanager_1.Mediamanager, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneMediamanagerArgs_1.UpsertOneMediamanagerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MediamanagerCrudResolver.prototype, "upsertOneMediamanager", null);
MediamanagerCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mediamanager_1.Mediamanager)
], MediamanagerCrudResolver);
exports.MediamanagerCrudResolver = MediamanagerCrudResolver;
