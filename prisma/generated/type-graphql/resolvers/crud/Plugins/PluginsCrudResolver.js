"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePluginsArgs_1 = require("./args/AggregatePluginsArgs");
const CreateManyPluginsArgs_1 = require("./args/CreateManyPluginsArgs");
const CreateOnePluginsArgs_1 = require("./args/CreateOnePluginsArgs");
const DeleteManyPluginsArgs_1 = require("./args/DeleteManyPluginsArgs");
const DeleteOnePluginsArgs_1 = require("./args/DeleteOnePluginsArgs");
const FindFirstPluginsArgs_1 = require("./args/FindFirstPluginsArgs");
const FindFirstPluginsOrThrowArgs_1 = require("./args/FindFirstPluginsOrThrowArgs");
const FindManyPluginsArgs_1 = require("./args/FindManyPluginsArgs");
const FindUniquePluginsArgs_1 = require("./args/FindUniquePluginsArgs");
const FindUniquePluginsOrThrowArgs_1 = require("./args/FindUniquePluginsOrThrowArgs");
const GroupByPluginsArgs_1 = require("./args/GroupByPluginsArgs");
const UpdateManyPluginsArgs_1 = require("./args/UpdateManyPluginsArgs");
const UpdateOnePluginsArgs_1 = require("./args/UpdateOnePluginsArgs");
const UpsertOnePluginsArgs_1 = require("./args/UpsertOnePluginsArgs");
const helpers_1 = require("../../../helpers");
const Plugins_1 = require("../../../models/Plugins");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePlugins_1 = require("../../outputs/AggregatePlugins");
const PluginsGroupBy_1 = require("../../outputs/PluginsGroupBy");
let PluginsCrudResolver = class PluginsCrudResolver {
    async aggregatePlugins(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPluginsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePluginsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPlugins(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePlugins_1.AggregatePlugins, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePluginsArgs_1.AggregatePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "aggregatePlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPluginsArgs_1.CreateManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "createManyPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Plugins_1.Plugins, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePluginsArgs_1.CreateOnePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "createOnePlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPluginsArgs_1.DeleteManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "deleteManyPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePluginsArgs_1.DeleteOnePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "deleteOnePlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPluginsArgs_1.FindFirstPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "findFirstPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPluginsOrThrowArgs_1.FindFirstPluginsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "findFirstPluginsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Plugins_1.Plugins], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPluginsArgs_1.FindManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "findManyPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePluginsArgs_1.FindUniquePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "findUniquePlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePluginsOrThrowArgs_1.FindUniquePluginsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "findUniquePluginsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PluginsGroupBy_1.PluginsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPluginsArgs_1.GroupByPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "groupByPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPluginsArgs_1.UpdateManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "updateManyPlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Plugins_1.Plugins, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePluginsArgs_1.UpdateOnePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "updateOnePlugins", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Plugins_1.Plugins, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePluginsArgs_1.UpsertOnePluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PluginsCrudResolver.prototype, "upsertOnePlugins", null);
PluginsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], PluginsCrudResolver);
exports.PluginsCrudResolver = PluginsCrudResolver;
