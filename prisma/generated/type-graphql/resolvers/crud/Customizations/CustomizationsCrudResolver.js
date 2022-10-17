"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCustomizationsArgs_1 = require("./args/AggregateCustomizationsArgs");
const CreateManyCustomizationsArgs_1 = require("./args/CreateManyCustomizationsArgs");
const CreateOneCustomizationsArgs_1 = require("./args/CreateOneCustomizationsArgs");
const DeleteManyCustomizationsArgs_1 = require("./args/DeleteManyCustomizationsArgs");
const DeleteOneCustomizationsArgs_1 = require("./args/DeleteOneCustomizationsArgs");
const FindFirstCustomizationsArgs_1 = require("./args/FindFirstCustomizationsArgs");
const FindManyCustomizationsArgs_1 = require("./args/FindManyCustomizationsArgs");
const FindUniqueCustomizationsArgs_1 = require("./args/FindUniqueCustomizationsArgs");
const GroupByCustomizationsArgs_1 = require("./args/GroupByCustomizationsArgs");
const UpdateManyCustomizationsArgs_1 = require("./args/UpdateManyCustomizationsArgs");
const UpdateOneCustomizationsArgs_1 = require("./args/UpdateOneCustomizationsArgs");
const UpsertOneCustomizationsArgs_1 = require("./args/UpsertOneCustomizationsArgs");
const helpers_1 = require("../../../helpers");
const Customizations_1 = require("../../../models/Customizations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCustomizations_1 = require("../../outputs/AggregateCustomizations");
const CustomizationsGroupBy_1 = require("../../outputs/CustomizationsGroupBy");
let CustomizationsCrudResolver = class CustomizationsCrudResolver {
    async aggregateCustomizations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCustomizations(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCustomizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customizations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCustomizations_1.AggregateCustomizations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCustomizationsArgs_1.AggregateCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "aggregateCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomizationsArgs_1.CreateManyCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "createManyCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomizationsArgs_1.CreateOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "createOneCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomizationsArgs_1.DeleteManyCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "deleteManyCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCustomizationsArgs_1.DeleteOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "deleteOneCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customizations_1.Customizations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomizationsArgs_1.FindFirstCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "findFirstCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customizations_1.Customizations], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomizationsArgs_1.FindManyCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "findManyCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customizations_1.Customizations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomizationsArgs_1.FindUniqueCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "findUniqueCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CustomizationsGroupBy_1.CustomizationsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomizationsArgs_1.GroupByCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "groupByCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCustomizationsArgs_1.UpdateManyCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "updateManyCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCustomizationsArgs_1.UpdateOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "updateOneCustomizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customizations_1.Customizations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCustomizationsArgs_1.UpsertOneCustomizationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomizationsCrudResolver.prototype, "upsertOneCustomizations", null);
CustomizationsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customizations_1.Customizations)
], CustomizationsCrudResolver);
exports.CustomizationsCrudResolver = CustomizationsCrudResolver;
