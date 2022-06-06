"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCore_storeArgs_1 = require("./args/AggregateCore_storeArgs");
const CreateCore_storeArgs_1 = require("./args/CreateCore_storeArgs");
const CreateManyCore_storeArgs_1 = require("./args/CreateManyCore_storeArgs");
const DeleteCore_storeArgs_1 = require("./args/DeleteCore_storeArgs");
const DeleteManyCore_storeArgs_1 = require("./args/DeleteManyCore_storeArgs");
const FindFirstCore_storeArgs_1 = require("./args/FindFirstCore_storeArgs");
const FindManyCore_storeArgs_1 = require("./args/FindManyCore_storeArgs");
const FindUniqueCore_storeArgs_1 = require("./args/FindUniqueCore_storeArgs");
const GroupByCore_storeArgs_1 = require("./args/GroupByCore_storeArgs");
const UpdateCore_storeArgs_1 = require("./args/UpdateCore_storeArgs");
const UpdateManyCore_storeArgs_1 = require("./args/UpdateManyCore_storeArgs");
const UpsertCore_storeArgs_1 = require("./args/UpsertCore_storeArgs");
const helpers_1 = require("../../../helpers");
const Core_store_1 = require("../../../models/Core_store");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCore_store_1 = require("../../outputs/AggregateCore_store");
const Core_storeGroupBy_1 = require("../../outputs/Core_storeGroupBy");
let Core_storeCrudResolver = class Core_storeCrudResolver {
    async core_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async core_stores(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCore_store(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCore_store(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCore_store(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).core_store.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Core_store_1.Core_store, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCore_storeArgs_1.FindUniqueCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "core_store", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Core_store_1.Core_store, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCore_storeArgs_1.FindFirstCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "findFirstCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Core_store_1.Core_store], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCore_storeArgs_1.FindManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "core_stores", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCore_storeArgs_1.CreateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "createCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCore_storeArgs_1.CreateManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "createManyCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCore_storeArgs_1.DeleteCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "deleteCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCore_storeArgs_1.UpdateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "updateCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCore_storeArgs_1.DeleteManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "deleteManyCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCore_storeArgs_1.UpdateManyCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "updateManyCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Core_store_1.Core_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCore_storeArgs_1.UpsertCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "upsertCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCore_store_1.AggregateCore_store, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCore_storeArgs_1.AggregateCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "aggregateCore_store", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Core_storeGroupBy_1.Core_storeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCore_storeArgs_1.GroupByCore_storeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Core_storeCrudResolver.prototype, "groupByCore_store", null);
Core_storeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Core_store_1.Core_store)
], Core_storeCrudResolver);
exports.Core_storeCrudResolver = Core_storeCrudResolver;
