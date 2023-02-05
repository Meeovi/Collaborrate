"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReviewsArgs_1 = require("./args/AggregateReviewsArgs");
const CreateManyReviewsArgs_1 = require("./args/CreateManyReviewsArgs");
const CreateOneReviewsArgs_1 = require("./args/CreateOneReviewsArgs");
const DeleteManyReviewsArgs_1 = require("./args/DeleteManyReviewsArgs");
const DeleteOneReviewsArgs_1 = require("./args/DeleteOneReviewsArgs");
const FindFirstReviewsArgs_1 = require("./args/FindFirstReviewsArgs");
const FindFirstReviewsOrThrowArgs_1 = require("./args/FindFirstReviewsOrThrowArgs");
const FindManyReviewsArgs_1 = require("./args/FindManyReviewsArgs");
const FindUniqueReviewsArgs_1 = require("./args/FindUniqueReviewsArgs");
const FindUniqueReviewsOrThrowArgs_1 = require("./args/FindUniqueReviewsOrThrowArgs");
const GroupByReviewsArgs_1 = require("./args/GroupByReviewsArgs");
const UpdateManyReviewsArgs_1 = require("./args/UpdateManyReviewsArgs");
const UpdateOneReviewsArgs_1 = require("./args/UpdateOneReviewsArgs");
const UpsertOneReviewsArgs_1 = require("./args/UpsertOneReviewsArgs");
const helpers_1 = require("../../../helpers");
const Reviews_1 = require("../../../models/Reviews");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReviews_1 = require("../../outputs/AggregateReviews");
const ReviewsGroupBy_1 = require("../../outputs/ReviewsGroupBy");
let ReviewsCrudResolver = class ReviewsCrudResolver {
    async aggregateReviews(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReviewsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueReviewsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByReviews(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReviews_1.AggregateReviews, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReviewsArgs_1.AggregateReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "aggregateReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReviewsArgs_1.CreateManyReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "createManyReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReviewsArgs_1.CreateOneReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "createOneReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReviewsArgs_1.DeleteManyReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "deleteManyReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReviewsArgs_1.DeleteOneReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "deleteOneReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReviewsArgs_1.FindFirstReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "findFirstReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReviewsOrThrowArgs_1.FindFirstReviewsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "findFirstReviewsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reviews_1.Reviews], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReviewsArgs_1.FindManyReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "findManyReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewsArgs_1.FindUniqueReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "findUniqueReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewsOrThrowArgs_1.FindUniqueReviewsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "findUniqueReviewsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReviewsGroupBy_1.ReviewsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReviewsArgs_1.GroupByReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "groupByReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReviewsArgs_1.UpdateManyReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "updateManyReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReviewsArgs_1.UpdateOneReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "updateOneReviews", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reviews_1.Reviews, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReviewsArgs_1.UpsertOneReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewsCrudResolver.prototype, "upsertOneReviews", null);
ReviewsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], ReviewsCrudResolver);
exports.ReviewsCrudResolver = ReviewsCrudResolver;
