"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSegmentsArgs_1 = require("./args/AggregateSegmentsArgs");
const CreateManySegmentsArgs_1 = require("./args/CreateManySegmentsArgs");
const CreateOneSegmentsArgs_1 = require("./args/CreateOneSegmentsArgs");
const DeleteManySegmentsArgs_1 = require("./args/DeleteManySegmentsArgs");
const DeleteOneSegmentsArgs_1 = require("./args/DeleteOneSegmentsArgs");
const FindFirstSegmentsArgs_1 = require("./args/FindFirstSegmentsArgs");
const FindFirstSegmentsOrThrowArgs_1 = require("./args/FindFirstSegmentsOrThrowArgs");
const FindManySegmentsArgs_1 = require("./args/FindManySegmentsArgs");
const FindUniqueSegmentsArgs_1 = require("./args/FindUniqueSegmentsArgs");
const FindUniqueSegmentsOrThrowArgs_1 = require("./args/FindUniqueSegmentsOrThrowArgs");
const GroupBySegmentsArgs_1 = require("./args/GroupBySegmentsArgs");
const UpdateManySegmentsArgs_1 = require("./args/UpdateManySegmentsArgs");
const UpdateOneSegmentsArgs_1 = require("./args/UpdateOneSegmentsArgs");
const UpsertOneSegmentsArgs_1 = require("./args/UpsertOneSegmentsArgs");
const helpers_1 = require("../../../helpers");
const Segments_1 = require("../../../models/Segments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSegments_1 = require("../../outputs/AggregateSegments");
const SegmentsGroupBy_1 = require("../../outputs/SegmentsGroupBy");
let SegmentsCrudResolver = class SegmentsCrudResolver {
    async aggregateSegments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSegmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSegmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySegments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSegments_1.AggregateSegments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSegmentsArgs_1.AggregateSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "aggregateSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySegmentsArgs_1.CreateManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "createManySegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSegmentsArgs_1.CreateOneSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "createOneSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySegmentsArgs_1.DeleteManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "deleteManySegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSegmentsArgs_1.DeleteOneSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "deleteOneSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSegmentsArgs_1.FindFirstSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "findFirstSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSegmentsOrThrowArgs_1.FindFirstSegmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "findFirstSegmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Segments_1.Segments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySegmentsArgs_1.FindManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "findManySegments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSegmentsArgs_1.FindUniqueSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "findUniqueSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSegmentsOrThrowArgs_1.FindUniqueSegmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "findUniqueSegmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SegmentsGroupBy_1.SegmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySegmentsArgs_1.GroupBySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "groupBySegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySegmentsArgs_1.UpdateManySegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "updateManySegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSegmentsArgs_1.UpdateOneSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "updateOneSegments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSegmentsArgs_1.UpsertOneSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SegmentsCrudResolver.prototype, "upsertOneSegments", null);
SegmentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], SegmentsCrudResolver);
exports.SegmentsCrudResolver = SegmentsCrudResolver;
