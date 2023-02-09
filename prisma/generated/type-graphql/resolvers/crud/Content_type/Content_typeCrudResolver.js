"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateContent_typeArgs_1 = require("./args/AggregateContent_typeArgs");
const CreateManyContent_typeArgs_1 = require("./args/CreateManyContent_typeArgs");
const CreateOneContent_typeArgs_1 = require("./args/CreateOneContent_typeArgs");
const DeleteManyContent_typeArgs_1 = require("./args/DeleteManyContent_typeArgs");
const DeleteOneContent_typeArgs_1 = require("./args/DeleteOneContent_typeArgs");
const FindFirstContent_typeArgs_1 = require("./args/FindFirstContent_typeArgs");
const FindFirstContent_typeOrThrowArgs_1 = require("./args/FindFirstContent_typeOrThrowArgs");
const FindManyContent_typeArgs_1 = require("./args/FindManyContent_typeArgs");
const FindUniqueContent_typeArgs_1 = require("./args/FindUniqueContent_typeArgs");
const FindUniqueContent_typeOrThrowArgs_1 = require("./args/FindUniqueContent_typeOrThrowArgs");
const GroupByContent_typeArgs_1 = require("./args/GroupByContent_typeArgs");
const UpdateManyContent_typeArgs_1 = require("./args/UpdateManyContent_typeArgs");
const UpdateOneContent_typeArgs_1 = require("./args/UpdateOneContent_typeArgs");
const UpsertOneContent_typeArgs_1 = require("./args/UpsertOneContent_typeArgs");
const helpers_1 = require("../../../helpers");
const Content_type_1 = require("../../../models/Content_type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateContent_type_1 = require("../../outputs/AggregateContent_type");
const Content_typeGroupBy_1 = require("../../outputs/Content_typeGroupBy");
let Content_typeCrudResolver = class Content_typeCrudResolver {
    async aggregateContent_type(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstContent_typeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async content_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async content_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByContent_type(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneContent_type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).content_type.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateContent_type_1.AggregateContent_type, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateContent_typeArgs_1.AggregateContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "aggregateContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyContent_typeArgs_1.CreateManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "createManyContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneContent_typeArgs_1.CreateOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "createOneContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyContent_typeArgs_1.DeleteManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "deleteManyContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneContent_typeArgs_1.DeleteOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "deleteOneContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstContent_typeArgs_1.FindFirstContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "findFirstContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstContent_typeOrThrowArgs_1.FindFirstContent_typeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "findFirstContent_typeOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Content_type_1.Content_type], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyContent_typeArgs_1.FindManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "content_types", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContent_typeArgs_1.FindUniqueContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "content_type", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContent_typeOrThrowArgs_1.FindUniqueContent_typeOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "getContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Content_typeGroupBy_1.Content_typeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByContent_typeArgs_1.GroupByContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "groupByContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyContent_typeArgs_1.UpdateManyContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "updateManyContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneContent_typeArgs_1.UpdateOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "updateOneContent_type", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Content_type_1.Content_type, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneContent_typeArgs_1.UpsertOneContent_typeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Content_typeCrudResolver.prototype, "upsertOneContent_type", null);
Content_typeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Content_type_1.Content_type)
], Content_typeCrudResolver);
exports.Content_typeCrudResolver = Content_typeCrudResolver;
