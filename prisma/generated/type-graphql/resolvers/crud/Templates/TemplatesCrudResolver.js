"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTemplatesArgs_1 = require("./args/AggregateTemplatesArgs");
const CreateOneTemplatesArgs_1 = require("./args/CreateOneTemplatesArgs");
const DeleteManyTemplatesArgs_1 = require("./args/DeleteManyTemplatesArgs");
const DeleteOneTemplatesArgs_1 = require("./args/DeleteOneTemplatesArgs");
const FindFirstTemplatesArgs_1 = require("./args/FindFirstTemplatesArgs");
const FindFirstTemplatesOrThrowArgs_1 = require("./args/FindFirstTemplatesOrThrowArgs");
const FindManyTemplatesArgs_1 = require("./args/FindManyTemplatesArgs");
const FindUniqueTemplatesArgs_1 = require("./args/FindUniqueTemplatesArgs");
const FindUniqueTemplatesOrThrowArgs_1 = require("./args/FindUniqueTemplatesOrThrowArgs");
const GroupByTemplatesArgs_1 = require("./args/GroupByTemplatesArgs");
const UpdateManyTemplatesArgs_1 = require("./args/UpdateManyTemplatesArgs");
const UpdateOneTemplatesArgs_1 = require("./args/UpdateOneTemplatesArgs");
const UpsertOneTemplatesArgs_1 = require("./args/UpsertOneTemplatesArgs");
const helpers_1 = require("../../../helpers");
const Templates_1 = require("../../../models/Templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTemplates_1 = require("../../outputs/AggregateTemplates");
const TemplatesGroupBy_1 = require("../../outputs/TemplatesGroupBy");
let TemplatesCrudResolver = class TemplatesCrudResolver {
    async aggregateTemplates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTemplatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTemplatesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTemplates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTemplates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTemplates_1.AggregateTemplates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTemplatesArgs_1.AggregateTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "aggregateTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTemplatesArgs_1.CreateOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "createOneTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTemplatesArgs_1.DeleteManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "deleteManyTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTemplatesArgs_1.DeleteOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "deleteOneTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTemplatesArgs_1.FindFirstTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "findFirstTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTemplatesOrThrowArgs_1.FindFirstTemplatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "findFirstTemplatesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Templates_1.Templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTemplatesArgs_1.FindManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "findManyTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTemplatesArgs_1.FindUniqueTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "findUniqueTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTemplatesOrThrowArgs_1.FindUniqueTemplatesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "findUniqueTemplatesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TemplatesGroupBy_1.TemplatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTemplatesArgs_1.GroupByTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "groupByTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTemplatesArgs_1.UpdateManyTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "updateManyTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTemplatesArgs_1.UpdateOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "updateOneTemplates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Templates_1.Templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTemplatesArgs_1.UpsertOneTemplatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplatesCrudResolver.prototype, "upsertOneTemplates", null);
TemplatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Templates_1.Templates)
], TemplatesCrudResolver);
exports.TemplatesCrudResolver = TemplatesCrudResolver;
