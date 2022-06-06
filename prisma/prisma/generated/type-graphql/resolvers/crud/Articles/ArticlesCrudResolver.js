"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateArticlesArgs_1 = require("./args/AggregateArticlesArgs");
const CreateArticlesArgs_1 = require("./args/CreateArticlesArgs");
const CreateManyArticlesArgs_1 = require("./args/CreateManyArticlesArgs");
const DeleteArticlesArgs_1 = require("./args/DeleteArticlesArgs");
const DeleteManyArticlesArgs_1 = require("./args/DeleteManyArticlesArgs");
const FindFirstArticlesArgs_1 = require("./args/FindFirstArticlesArgs");
const FindManyArticlesArgs_1 = require("./args/FindManyArticlesArgs");
const FindUniqueArticlesArgs_1 = require("./args/FindUniqueArticlesArgs");
const GroupByArticlesArgs_1 = require("./args/GroupByArticlesArgs");
const UpdateArticlesArgs_1 = require("./args/UpdateArticlesArgs");
const UpdateManyArticlesArgs_1 = require("./args/UpdateManyArticlesArgs");
const UpsertArticlesArgs_1 = require("./args/UpsertArticlesArgs");
const helpers_1 = require("../../../helpers");
const Articles_1 = require("../../../models/Articles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateArticles_1 = require("../../outputs/AggregateArticles");
const ArticlesGroupBy_1 = require("../../outputs/ArticlesGroupBy");
let ArticlesCrudResolver = class ArticlesCrudResolver {
    async findUniqueArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateArticles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByArticles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Articles_1.Articles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueArticlesArgs_1.FindUniqueArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "findUniqueArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Articles_1.Articles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstArticlesArgs_1.FindFirstArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "findFirstArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Articles_1.Articles], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyArticlesArgs_1.FindManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "findManyArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Articles_1.Articles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateArticlesArgs_1.CreateArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "createArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyArticlesArgs_1.CreateManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "createManyArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Articles_1.Articles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteArticlesArgs_1.DeleteArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "deleteArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Articles_1.Articles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateArticlesArgs_1.UpdateArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "updateArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyArticlesArgs_1.DeleteManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "deleteManyArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyArticlesArgs_1.UpdateManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "updateManyArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Articles_1.Articles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertArticlesArgs_1.UpsertArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "upsertArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateArticles_1.AggregateArticles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateArticlesArgs_1.AggregateArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "aggregateArticles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ArticlesGroupBy_1.ArticlesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByArticlesArgs_1.GroupByArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticlesCrudResolver.prototype, "groupByArticles", null);
ArticlesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], ArticlesCrudResolver);
exports.ArticlesCrudResolver = ArticlesCrudResolver;
