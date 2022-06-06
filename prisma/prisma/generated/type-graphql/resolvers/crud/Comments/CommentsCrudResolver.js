"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCommentsArgs_1 = require("./args/AggregateCommentsArgs");
const CreateCommentsArgs_1 = require("./args/CreateCommentsArgs");
const CreateManyCommentsArgs_1 = require("./args/CreateManyCommentsArgs");
const DeleteCommentsArgs_1 = require("./args/DeleteCommentsArgs");
const DeleteManyCommentsArgs_1 = require("./args/DeleteManyCommentsArgs");
const FindFirstCommentsArgs_1 = require("./args/FindFirstCommentsArgs");
const FindManyCommentsArgs_1 = require("./args/FindManyCommentsArgs");
const FindUniqueCommentsArgs_1 = require("./args/FindUniqueCommentsArgs");
const GroupByCommentsArgs_1 = require("./args/GroupByCommentsArgs");
const UpdateCommentsArgs_1 = require("./args/UpdateCommentsArgs");
const UpdateManyCommentsArgs_1 = require("./args/UpdateManyCommentsArgs");
const UpsertCommentsArgs_1 = require("./args/UpsertCommentsArgs");
const helpers_1 = require("../../../helpers");
const Comments_1 = require("../../../models/Comments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateComments_1 = require("../../outputs/AggregateComments");
const CommentsGroupBy_1 = require("../../outputs/CommentsGroupBy");
let CommentsCrudResolver = class CommentsCrudResolver {
    async findUniqueComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateComments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByComments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comments_1.Comments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentsArgs_1.FindUniqueCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "findUniqueComments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Comments_1.Comments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentsArgs_1.FindFirstCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "findFirstComments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Comments_1.Comments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCommentsArgs_1.FindManyCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "findManyComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCommentsArgs_1.CreateCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "createComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCommentsArgs_1.CreateManyCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "createManyComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCommentsArgs_1.DeleteCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "deleteComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCommentsArgs_1.UpdateCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "updateComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCommentsArgs_1.DeleteManyCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "deleteManyComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCommentsArgs_1.UpdateManyCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "updateManyComments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCommentsArgs_1.UpsertCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "upsertComments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComments_1.AggregateComments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentsArgs_1.AggregateCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "aggregateComments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentsGroupBy_1.CommentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCommentsArgs_1.GroupByCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentsCrudResolver.prototype, "groupByComments", null);
CommentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], CommentsCrudResolver);
exports.CommentsCrudResolver = CommentsCrudResolver;
