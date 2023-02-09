"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateThemesArgs_1 = require("./args/AggregateThemesArgs");
const CreateManyThemesArgs_1 = require("./args/CreateManyThemesArgs");
const CreateOneThemesArgs_1 = require("./args/CreateOneThemesArgs");
const DeleteManyThemesArgs_1 = require("./args/DeleteManyThemesArgs");
const DeleteOneThemesArgs_1 = require("./args/DeleteOneThemesArgs");
const FindFirstThemesArgs_1 = require("./args/FindFirstThemesArgs");
const FindFirstThemesOrThrowArgs_1 = require("./args/FindFirstThemesOrThrowArgs");
const FindManyThemesArgs_1 = require("./args/FindManyThemesArgs");
const FindUniqueThemesArgs_1 = require("./args/FindUniqueThemesArgs");
const FindUniqueThemesOrThrowArgs_1 = require("./args/FindUniqueThemesOrThrowArgs");
const GroupByThemesArgs_1 = require("./args/GroupByThemesArgs");
const UpdateManyThemesArgs_1 = require("./args/UpdateManyThemesArgs");
const UpdateOneThemesArgs_1 = require("./args/UpdateOneThemesArgs");
const UpsertOneThemesArgs_1 = require("./args/UpsertOneThemesArgs");
const helpers_1 = require("../../../helpers");
const Themes_1 = require("../../../models/Themes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateThemes_1 = require("../../outputs/AggregateThemes");
const ThemesGroupBy_1 = require("../../outputs/ThemesGroupBy");
let ThemesCrudResolver = class ThemesCrudResolver {
    async aggregateThemes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstThemesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueThemesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByThemes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThemes_1.AggregateThemes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThemesArgs_1.AggregateThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "aggregateThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThemesArgs_1.CreateManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "createManyThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneThemesArgs_1.CreateOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "createOneThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThemesArgs_1.DeleteManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "deleteManyThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneThemesArgs_1.DeleteOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "deleteOneThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThemesArgs_1.FindFirstThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "findFirstThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstThemesOrThrowArgs_1.FindFirstThemesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "findFirstThemesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Themes_1.Themes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThemesArgs_1.FindManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "findManyThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThemesArgs_1.FindUniqueThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "findUniqueThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThemesOrThrowArgs_1.FindUniqueThemesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "findUniqueThemesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThemesGroupBy_1.ThemesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThemesArgs_1.GroupByThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "groupByThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyThemesArgs_1.UpdateManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "updateManyThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneThemesArgs_1.UpdateOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "updateOneThemes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneThemesArgs_1.UpsertOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThemesCrudResolver.prototype, "upsertOneThemes", null);
ThemesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], ThemesCrudResolver);
exports.ThemesCrudResolver = ThemesCrudResolver;
