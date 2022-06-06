"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRatingArgs_1 = require("./args/AggregateRatingArgs");
const CreateManyRatingArgs_1 = require("./args/CreateManyRatingArgs");
const CreateRatingArgs_1 = require("./args/CreateRatingArgs");
const DeleteManyRatingArgs_1 = require("./args/DeleteManyRatingArgs");
const DeleteRatingArgs_1 = require("./args/DeleteRatingArgs");
const FindFirstRatingArgs_1 = require("./args/FindFirstRatingArgs");
const FindManyRatingArgs_1 = require("./args/FindManyRatingArgs");
const FindUniqueRatingArgs_1 = require("./args/FindUniqueRatingArgs");
const GroupByRatingArgs_1 = require("./args/GroupByRatingArgs");
const UpdateManyRatingArgs_1 = require("./args/UpdateManyRatingArgs");
const UpdateRatingArgs_1 = require("./args/UpdateRatingArgs");
const UpsertRatingArgs_1 = require("./args/UpsertRatingArgs");
const helpers_1 = require("../../../helpers");
const Rating_1 = require("../../../models/Rating");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRating_1 = require("../../outputs/AggregateRating");
const RatingGroupBy_1 = require("../../outputs/RatingGroupBy");
let RatingCrudResolver = class RatingCrudResolver {
    async rating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ratings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRating(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByRating(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRatingArgs_1.FindUniqueRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "rating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRatingArgs_1.FindFirstRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "findFirstRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Rating_1.Rating], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRatingArgs_1.FindManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "ratings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateRatingArgs_1.CreateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "createRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRatingArgs_1.CreateManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "createManyRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRatingArgs_1.DeleteRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "deleteRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRatingArgs_1.UpdateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "updateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRatingArgs_1.DeleteManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "deleteManyRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRatingArgs_1.UpdateManyRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "updateManyRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRatingArgs_1.UpsertRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "upsertRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRating_1.AggregateRating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRatingArgs_1.AggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "aggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RatingGroupBy_1.RatingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRatingArgs_1.GroupByRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RatingCrudResolver.prototype, "groupByRating", null);
RatingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], RatingCrudResolver);
exports.RatingCrudResolver = RatingCrudResolver;
