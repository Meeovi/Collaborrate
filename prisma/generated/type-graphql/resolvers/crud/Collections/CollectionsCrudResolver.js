"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCollectionsArgs_1 = require("./args/AggregateCollectionsArgs");
const CreateManyCollectionsArgs_1 = require("./args/CreateManyCollectionsArgs");
const CreateOneCollectionsArgs_1 = require("./args/CreateOneCollectionsArgs");
const DeleteManyCollectionsArgs_1 = require("./args/DeleteManyCollectionsArgs");
const DeleteOneCollectionsArgs_1 = require("./args/DeleteOneCollectionsArgs");
const FindFirstCollectionsArgs_1 = require("./args/FindFirstCollectionsArgs");
const FindFirstCollectionsOrThrowArgs_1 = require("./args/FindFirstCollectionsOrThrowArgs");
const FindManyCollectionsArgs_1 = require("./args/FindManyCollectionsArgs");
const FindUniqueCollectionsArgs_1 = require("./args/FindUniqueCollectionsArgs");
const FindUniqueCollectionsOrThrowArgs_1 = require("./args/FindUniqueCollectionsOrThrowArgs");
const GroupByCollectionsArgs_1 = require("./args/GroupByCollectionsArgs");
const UpdateManyCollectionsArgs_1 = require("./args/UpdateManyCollectionsArgs");
const UpdateOneCollectionsArgs_1 = require("./args/UpdateOneCollectionsArgs");
const UpsertOneCollectionsArgs_1 = require("./args/UpsertOneCollectionsArgs");
const helpers_1 = require("../../../helpers");
const Collections_1 = require("../../../models/Collections");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCollections_1 = require("../../outputs/AggregateCollections");
const CollectionsGroupBy_1 = require("../../outputs/CollectionsGroupBy");
let CollectionsCrudResolver = class CollectionsCrudResolver {
    async aggregateCollections(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCollectionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCollectionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCollections(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCollections_1.AggregateCollections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCollectionsArgs_1.AggregateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "aggregateCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCollectionsArgs_1.CreateManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "createManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCollectionsArgs_1.CreateOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "createOneCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCollectionsArgs_1.DeleteManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "deleteManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCollectionsArgs_1.DeleteOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "deleteOneCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCollectionsArgs_1.FindFirstCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findFirstCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCollectionsOrThrowArgs_1.FindFirstCollectionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findFirstCollectionsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Collections_1.Collections], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCollectionsArgs_1.FindManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCollectionsArgs_1.FindUniqueCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findUniqueCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCollectionsOrThrowArgs_1.FindUniqueCollectionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findUniqueCollectionsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CollectionsGroupBy_1.CollectionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCollectionsArgs_1.GroupByCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "groupByCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCollectionsArgs_1.UpdateManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "updateManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCollectionsArgs_1.UpdateOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "updateOneCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCollectionsArgs_1.UpsertOneCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "upsertOneCollections", null);
CollectionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], CollectionsCrudResolver);
exports.CollectionsCrudResolver = CollectionsCrudResolver;
