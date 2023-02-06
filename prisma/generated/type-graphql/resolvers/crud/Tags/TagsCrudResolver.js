"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTagsArgs_1 = require("./args/AggregateTagsArgs");
const CreateManyTagsArgs_1 = require("./args/CreateManyTagsArgs");
const CreateOneTagsArgs_1 = require("./args/CreateOneTagsArgs");
const DeleteManyTagsArgs_1 = require("./args/DeleteManyTagsArgs");
const DeleteOneTagsArgs_1 = require("./args/DeleteOneTagsArgs");
const FindFirstTagsArgs_1 = require("./args/FindFirstTagsArgs");
const FindFirstTagsOrThrowArgs_1 = require("./args/FindFirstTagsOrThrowArgs");
const FindManyTagsArgs_1 = require("./args/FindManyTagsArgs");
const FindUniqueTagsArgs_1 = require("./args/FindUniqueTagsArgs");
const FindUniqueTagsOrThrowArgs_1 = require("./args/FindUniqueTagsOrThrowArgs");
const GroupByTagsArgs_1 = require("./args/GroupByTagsArgs");
const UpdateManyTagsArgs_1 = require("./args/UpdateManyTagsArgs");
const UpdateOneTagsArgs_1 = require("./args/UpdateOneTagsArgs");
const UpsertOneTagsArgs_1 = require("./args/UpsertOneTagsArgs");
const helpers_1 = require("../../../helpers");
const Tags_1 = require("../../../models/Tags");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTags_1 = require("../../outputs/AggregateTags");
const TagsGroupBy_1 = require("../../outputs/TagsGroupBy");
let TagsCrudResolver = class TagsCrudResolver {
    async aggregateTags(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTagsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTagsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTags(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTags_1.AggregateTags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsArgs_1.AggregateTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "aggregateTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsArgs_1.CreateManyTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "createManyTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTagsArgs_1.CreateOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "createOneTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTagsArgs_1.DeleteManyTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "deleteManyTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTagsArgs_1.DeleteOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "deleteOneTags", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsArgs_1.FindFirstTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findFirstTags", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOrThrowArgs_1.FindFirstTagsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findFirstTagsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tags_1.Tags], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsArgs_1.FindManyTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findManyTags", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsArgs_1.FindUniqueTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findUniqueTags", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOrThrowArgs_1.FindUniqueTagsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findUniqueTagsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsGroupBy_1.TagsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsArgs_1.GroupByTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "groupByTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTagsArgs_1.UpdateManyTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "updateManyTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTagsArgs_1.UpdateOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "updateOneTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTagsArgs_1.UpsertOneTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "upsertOneTags", null);
TagsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], TagsCrudResolver);
exports.TagsCrudResolver = TagsCrudResolver;
