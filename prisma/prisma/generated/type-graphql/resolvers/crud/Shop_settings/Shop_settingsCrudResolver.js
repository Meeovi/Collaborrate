"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShop_settingsArgs_1 = require("./args/AggregateShop_settingsArgs");
const CreateManyShop_settingsArgs_1 = require("./args/CreateManyShop_settingsArgs");
const CreateShop_settingsArgs_1 = require("./args/CreateShop_settingsArgs");
const DeleteManyShop_settingsArgs_1 = require("./args/DeleteManyShop_settingsArgs");
const DeleteShop_settingsArgs_1 = require("./args/DeleteShop_settingsArgs");
const FindFirstShop_settingsArgs_1 = require("./args/FindFirstShop_settingsArgs");
const FindManyShop_settingsArgs_1 = require("./args/FindManyShop_settingsArgs");
const FindUniqueShop_settingsArgs_1 = require("./args/FindUniqueShop_settingsArgs");
const GroupByShop_settingsArgs_1 = require("./args/GroupByShop_settingsArgs");
const UpdateManyShop_settingsArgs_1 = require("./args/UpdateManyShop_settingsArgs");
const UpdateShop_settingsArgs_1 = require("./args/UpdateShop_settingsArgs");
const UpsertShop_settingsArgs_1 = require("./args/UpsertShop_settingsArgs");
const helpers_1 = require("../../../helpers");
const Shop_settings_1 = require("../../../models/Shop_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShop_settings_1 = require("../../outputs/AggregateShop_settings");
const Shop_settingsGroupBy_1 = require("../../outputs/Shop_settingsGroupBy");
let Shop_settingsCrudResolver = class Shop_settingsCrudResolver {
    async findUniqueShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateShop_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByShop_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShop_settingsArgs_1.FindUniqueShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "findUniqueShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShop_settingsArgs_1.FindFirstShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "findFirstShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shop_settings_1.Shop_settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShop_settingsArgs_1.FindManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "findManyShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateShop_settingsArgs_1.CreateShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "createShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShop_settingsArgs_1.CreateManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "createManyShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteShop_settingsArgs_1.DeleteShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "deleteShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateShop_settingsArgs_1.UpdateShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "updateShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShop_settingsArgs_1.DeleteManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "deleteManyShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShop_settingsArgs_1.UpdateManyShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "updateManyShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertShop_settingsArgs_1.UpsertShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "upsertShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShop_settings_1.AggregateShop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShop_settingsArgs_1.AggregateShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "aggregateShop_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shop_settingsGroupBy_1.Shop_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShop_settingsArgs_1.GroupByShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Shop_settingsCrudResolver.prototype, "groupByShop_settings", null);
Shop_settingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], Shop_settingsCrudResolver);
exports.Shop_settingsCrudResolver = Shop_settingsCrudResolver;
