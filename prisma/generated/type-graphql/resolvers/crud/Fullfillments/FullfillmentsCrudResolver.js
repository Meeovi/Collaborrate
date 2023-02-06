"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFullfillmentsArgs_1 = require("./args/AggregateFullfillmentsArgs");
const CreateManyFullfillmentsArgs_1 = require("./args/CreateManyFullfillmentsArgs");
const CreateOneFullfillmentsArgs_1 = require("./args/CreateOneFullfillmentsArgs");
const DeleteManyFullfillmentsArgs_1 = require("./args/DeleteManyFullfillmentsArgs");
const DeleteOneFullfillmentsArgs_1 = require("./args/DeleteOneFullfillmentsArgs");
const FindFirstFullfillmentsArgs_1 = require("./args/FindFirstFullfillmentsArgs");
const FindFirstFullfillmentsOrThrowArgs_1 = require("./args/FindFirstFullfillmentsOrThrowArgs");
const FindManyFullfillmentsArgs_1 = require("./args/FindManyFullfillmentsArgs");
const FindUniqueFullfillmentsArgs_1 = require("./args/FindUniqueFullfillmentsArgs");
const FindUniqueFullfillmentsOrThrowArgs_1 = require("./args/FindUniqueFullfillmentsOrThrowArgs");
const GroupByFullfillmentsArgs_1 = require("./args/GroupByFullfillmentsArgs");
const UpdateManyFullfillmentsArgs_1 = require("./args/UpdateManyFullfillmentsArgs");
const UpdateOneFullfillmentsArgs_1 = require("./args/UpdateOneFullfillmentsArgs");
const UpsertOneFullfillmentsArgs_1 = require("./args/UpsertOneFullfillmentsArgs");
const helpers_1 = require("../../../helpers");
const Fullfillments_1 = require("../../../models/Fullfillments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFullfillments_1 = require("../../outputs/AggregateFullfillments");
const FullfillmentsGroupBy_1 = require("../../outputs/FullfillmentsGroupBy");
let FullfillmentsCrudResolver = class FullfillmentsCrudResolver {
    async aggregateFullfillments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFullfillmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueFullfillmentsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByFullfillments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFullfillments_1.AggregateFullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFullfillmentsArgs_1.AggregateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "aggregateFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFullfillmentsArgs_1.CreateManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "createManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFullfillmentsArgs_1.CreateOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "createOneFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFullfillmentsArgs_1.DeleteManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "deleteManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFullfillmentsArgs_1.DeleteOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "deleteOneFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFullfillmentsArgs_1.FindFirstFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findFirstFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFullfillmentsOrThrowArgs_1.FindFirstFullfillmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findFirstFullfillmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Fullfillments_1.Fullfillments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFullfillmentsArgs_1.FindManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFullfillmentsArgs_1.FindUniqueFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findUniqueFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFullfillmentsOrThrowArgs_1.FindUniqueFullfillmentsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findUniqueFullfillmentsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FullfillmentsGroupBy_1.FullfillmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFullfillmentsArgs_1.GroupByFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "groupByFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFullfillmentsArgs_1.UpdateManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "updateManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFullfillmentsArgs_1.UpdateOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "updateOneFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFullfillmentsArgs_1.UpsertOneFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "upsertOneFullfillments", null);
FullfillmentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], FullfillmentsCrudResolver);
exports.FullfillmentsCrudResolver = FullfillmentsCrudResolver;
