"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSpecial_discountsArgs_1 = require("./args/AggregateSpecial_discountsArgs");
const CreateManySpecial_discountsArgs_1 = require("./args/CreateManySpecial_discountsArgs");
const CreateSpecial_discountsArgs_1 = require("./args/CreateSpecial_discountsArgs");
const DeleteManySpecial_discountsArgs_1 = require("./args/DeleteManySpecial_discountsArgs");
const DeleteSpecial_discountsArgs_1 = require("./args/DeleteSpecial_discountsArgs");
const FindFirstSpecial_discountsArgs_1 = require("./args/FindFirstSpecial_discountsArgs");
const FindManySpecial_discountsArgs_1 = require("./args/FindManySpecial_discountsArgs");
const FindUniqueSpecial_discountsArgs_1 = require("./args/FindUniqueSpecial_discountsArgs");
const GroupBySpecial_discountsArgs_1 = require("./args/GroupBySpecial_discountsArgs");
const UpdateManySpecial_discountsArgs_1 = require("./args/UpdateManySpecial_discountsArgs");
const UpdateSpecial_discountsArgs_1 = require("./args/UpdateSpecial_discountsArgs");
const UpsertSpecial_discountsArgs_1 = require("./args/UpsertSpecial_discountsArgs");
const helpers_1 = require("../../../helpers");
const Special_discounts_1 = require("../../../models/Special_discounts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSpecial_discounts_1 = require("../../outputs/AggregateSpecial_discounts");
const Special_discountsGroupBy_1 = require("../../outputs/Special_discountsGroupBy");
let Special_discountsCrudResolver = class Special_discountsCrudResolver {
    async findUniqueSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSpecial_discounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSpecial_discounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySpecial_discounts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).special_discounts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSpecial_discountsArgs_1.FindUniqueSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "findUniqueSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSpecial_discountsArgs_1.FindFirstSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "findFirstSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Special_discounts_1.Special_discounts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySpecial_discountsArgs_1.FindManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "findManySpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSpecial_discountsArgs_1.CreateSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "createSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySpecial_discountsArgs_1.CreateManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "createManySpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSpecial_discountsArgs_1.DeleteSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "deleteSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSpecial_discountsArgs_1.UpdateSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "updateSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySpecial_discountsArgs_1.DeleteManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "deleteManySpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySpecial_discountsArgs_1.UpdateManySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "updateManySpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Special_discounts_1.Special_discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSpecial_discountsArgs_1.UpsertSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "upsertSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSpecial_discounts_1.AggregateSpecial_discounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSpecial_discountsArgs_1.AggregateSpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "aggregateSpecial_discounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Special_discountsGroupBy_1.Special_discountsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySpecial_discountsArgs_1.GroupBySpecial_discountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Special_discountsCrudResolver.prototype, "groupBySpecial_discounts", null);
Special_discountsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Special_discounts_1.Special_discounts)
], Special_discountsCrudResolver);
exports.Special_discountsCrudResolver = Special_discountsCrudResolver;
