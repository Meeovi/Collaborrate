"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsArgs_1 = require("./args/AggregateTagsArgs");
const CreateManyTagsArgs_1 = require("./args/CreateManyTagsArgs");
const CreateTagsArgs_1 = require("./args/CreateTagsArgs");
const DeleteManyTagsArgs_1 = require("./args/DeleteManyTagsArgs");
const DeleteTagsArgs_1 = require("./args/DeleteTagsArgs");
const FindFirstTagsArgs_1 = require("./args/FindFirstTagsArgs");
const FindManyTagsArgs_1 = require("./args/FindManyTagsArgs");
const FindUniqueTagsArgs_1 = require("./args/FindUniqueTagsArgs");
const GroupByTagsArgs_1 = require("./args/GroupByTagsArgs");
const UpdateManyTagsArgs_1 = require("./args/UpdateManyTagsArgs");
const UpdateTagsArgs_1 = require("./args/UpdateTagsArgs");
const UpsertTagsArgs_1 = require("./args/UpsertTagsArgs");
const helpers_1 = require("../../../helpers");
const Tags_1 = require("../../../models/Tags");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTags_1 = require("../../outputs/AggregateTags");
const TagsGroupBy_1 = require("../../outputs/TagsGroupBy");
let TagsCrudResolver = class TagsCrudResolver {
    async findUniqueTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTags(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTags(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsArgs_1.FindFirstTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "findFirstTags", null);
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
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagsArgs_1.CreateTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "createTags", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTagsArgs_1.DeleteTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "deleteTags", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tags_1.Tags, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsArgs_1.UpdateTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "updateTags", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTagsArgs_1.UpsertTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagsCrudResolver.prototype, "upsertTags", null);
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
TagsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], TagsCrudResolver);
exports.TagsCrudResolver = TagsCrudResolver;
