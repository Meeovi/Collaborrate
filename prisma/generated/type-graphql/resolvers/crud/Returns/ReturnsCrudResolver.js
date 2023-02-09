"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReturnsArgs_1 = require("./args/AggregateReturnsArgs");
const CreateManyReturnsArgs_1 = require("./args/CreateManyReturnsArgs");
const CreateOneReturnsArgs_1 = require("./args/CreateOneReturnsArgs");
const DeleteManyReturnsArgs_1 = require("./args/DeleteManyReturnsArgs");
const DeleteOneReturnsArgs_1 = require("./args/DeleteOneReturnsArgs");
const FindFirstReturnsArgs_1 = require("./args/FindFirstReturnsArgs");
const FindFirstReturnsOrThrowArgs_1 = require("./args/FindFirstReturnsOrThrowArgs");
const FindManyReturnsArgs_1 = require("./args/FindManyReturnsArgs");
const FindUniqueReturnsArgs_1 = require("./args/FindUniqueReturnsArgs");
const FindUniqueReturnsOrThrowArgs_1 = require("./args/FindUniqueReturnsOrThrowArgs");
const GroupByReturnsArgs_1 = require("./args/GroupByReturnsArgs");
const UpdateManyReturnsArgs_1 = require("./args/UpdateManyReturnsArgs");
const UpdateOneReturnsArgs_1 = require("./args/UpdateOneReturnsArgs");
const UpsertOneReturnsArgs_1 = require("./args/UpsertOneReturnsArgs");
const helpers_1 = require("../../../helpers");
const Returns_1 = require("../../../models/Returns");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReturns_1 = require("../../outputs/AggregateReturns");
const ReturnsGroupBy_1 = require("../../outputs/ReturnsGroupBy");
let ReturnsCrudResolver = class ReturnsCrudResolver {
    async aggregateReturns(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReturnsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueReturnsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByReturns(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReturns_1.AggregateReturns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReturnsArgs_1.AggregateReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "aggregateReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReturnsArgs_1.CreateManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "createManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReturnsArgs_1.CreateOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "createOneReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReturnsArgs_1.DeleteManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "deleteManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReturnsArgs_1.DeleteOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "deleteOneReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReturnsArgs_1.FindFirstReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findFirstReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReturnsOrThrowArgs_1.FindFirstReturnsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findFirstReturnsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Returns_1.Returns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReturnsArgs_1.FindManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReturnsArgs_1.FindUniqueReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findUniqueReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReturnsOrThrowArgs_1.FindUniqueReturnsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findUniqueReturnsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReturnsGroupBy_1.ReturnsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReturnsArgs_1.GroupByReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "groupByReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReturnsArgs_1.UpdateManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "updateManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReturnsArgs_1.UpdateOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "updateOneReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReturnsArgs_1.UpsertOneReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "upsertOneReturns", null);
ReturnsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], ReturnsCrudResolver);
exports.ReturnsCrudResolver = ReturnsCrudResolver;
