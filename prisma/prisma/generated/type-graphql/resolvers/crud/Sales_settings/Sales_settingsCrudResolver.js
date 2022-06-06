"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSales_settingsArgs_1 = require("./args/AggregateSales_settingsArgs");
const CreateManySales_settingsArgs_1 = require("./args/CreateManySales_settingsArgs");
const CreateSales_settingsArgs_1 = require("./args/CreateSales_settingsArgs");
const DeleteManySales_settingsArgs_1 = require("./args/DeleteManySales_settingsArgs");
const DeleteSales_settingsArgs_1 = require("./args/DeleteSales_settingsArgs");
const FindFirstSales_settingsArgs_1 = require("./args/FindFirstSales_settingsArgs");
const FindManySales_settingsArgs_1 = require("./args/FindManySales_settingsArgs");
const FindUniqueSales_settingsArgs_1 = require("./args/FindUniqueSales_settingsArgs");
const GroupBySales_settingsArgs_1 = require("./args/GroupBySales_settingsArgs");
const UpdateManySales_settingsArgs_1 = require("./args/UpdateManySales_settingsArgs");
const UpdateSales_settingsArgs_1 = require("./args/UpdateSales_settingsArgs");
const UpsertSales_settingsArgs_1 = require("./args/UpsertSales_settingsArgs");
const helpers_1 = require("../../../helpers");
const Sales_settings_1 = require("../../../models/Sales_settings");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSales_settings_1 = require("../../outputs/AggregateSales_settings");
const Sales_settingsGroupBy_1 = require("../../outputs/Sales_settingsGroupBy");
let Sales_settingsCrudResolver = class Sales_settingsCrudResolver {
    async findUniqueSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSales_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSales_settings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySales_settings(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sales_settings.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSales_settingsArgs_1.FindUniqueSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "findUniqueSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSales_settingsArgs_1.FindFirstSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "findFirstSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sales_settings_1.Sales_settings], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySales_settingsArgs_1.FindManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "findManySales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSales_settingsArgs_1.CreateSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "createSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySales_settingsArgs_1.CreateManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "createManySales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSales_settingsArgs_1.DeleteSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "deleteSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSales_settingsArgs_1.UpdateSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "updateSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySales_settingsArgs_1.DeleteManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "deleteManySales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySales_settingsArgs_1.UpdateManySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "updateManySales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Sales_settings_1.Sales_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSales_settingsArgs_1.UpsertSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "upsertSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSales_settings_1.AggregateSales_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSales_settingsArgs_1.AggregateSales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "aggregateSales_settings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Sales_settingsGroupBy_1.Sales_settingsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySales_settingsArgs_1.GroupBySales_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Sales_settingsCrudResolver.prototype, "groupBySales_settings", null);
Sales_settingsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Sales_settings_1.Sales_settings)
], Sales_settingsCrudResolver);
exports.Sales_settingsCrudResolver = Sales_settingsCrudResolver;
