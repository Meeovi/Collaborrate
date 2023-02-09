"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSettingsArgs_1 = require("./args/AggregateSettingsArgs");
const CreateManySettingsArgs_1 = require("./args/CreateManySettingsArgs");
const CreateOneSettingsArgs_1 = require("./args/CreateOneSettingsArgs");
const DeleteManySettingsArgs_1 = require("./args/DeleteManySettingsArgs");
const DeleteOneSettingsArgs_1 = require("./args/DeleteOneSettingsArgs");
const FindFirstSettingsArgs_1 = require("./args/FindFirstSettingsArgs");
const FindFirstSettingsOrThrowArgs_1 = require("./args/FindFirstSettingsOrThrowArgs");
const FindManySettingsArgs_1 = require("./args/FindManySettingsArgs");
const FindUniqueSettingsArgs_1 = require("./args/FindUniqueSettingsArgs");
const FindUniqueSettingsOrThrowArgs_1 = require("./args/FindUniqueSettingsOrThrowArgs");
const GroupBySettingsArgs_1 = require("./args/GroupBySettingsArgs");
const UpdateManySettingsArgs_1 = require("./args/UpdateManySettingsArgs");
const UpdateOneSettingsArgs_1 = require("./args/UpdateOneSettingsArgs");
const UpsertOneSettingsArgs_1 = require("./args/UpsertOneSettingsArgs");
const helpers_1 = require("../../../helpers");
const Settings_1 = require("../../../models/Settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSettings_1 = require("../../outputs/AggregateSettings");
const SettingsGroupBy_1 = require("../../outputs/SettingsGroupBy");
let SettingsCrudResolver = class SettingsCrudResolver {
    async aggregateSettings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSettingsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueSettingsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySettings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSettings_1.AggregateSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSettingsArgs_1.AggregateSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "aggregateSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySettingsArgs_1.CreateManySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "createManySettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSettingsArgs_1.CreateOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "createOneSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySettingsArgs_1.DeleteManySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "deleteManySettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsArgs_1.DeleteOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "deleteOneSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsArgs_1.FindFirstSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "findFirstSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsOrThrowArgs_1.FindFirstSettingsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "findFirstSettingsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Settings_1.Settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySettingsArgs_1.FindManySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "findManySettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsArgs_1.FindUniqueSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "findUniqueSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSettingsOrThrowArgs_1.FindUniqueSettingsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "findUniqueSettingsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsGroupBy_1.SettingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsArgs_1.GroupBySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "groupBySettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySettingsArgs_1.UpdateManySettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "updateManySettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSettingsArgs_1.UpdateOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "updateOneSettings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settings_1.Settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSettingsArgs_1.UpsertOneSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingsCrudResolver.prototype, "upsertOneSettings", null);
SettingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settings_1.Settings)
], SettingsCrudResolver);
exports.SettingsCrudResolver = SettingsCrudResolver;
