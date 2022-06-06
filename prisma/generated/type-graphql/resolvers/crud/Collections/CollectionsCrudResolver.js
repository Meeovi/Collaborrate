"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCollectionsArgs_1 = require("./args/AggregateCollectionsArgs");
const CreateCollectionsArgs_1 = require("./args/CreateCollectionsArgs");
const CreateManyCollectionsArgs_1 = require("./args/CreateManyCollectionsArgs");
const DeleteCollectionsArgs_1 = require("./args/DeleteCollectionsArgs");
const DeleteManyCollectionsArgs_1 = require("./args/DeleteManyCollectionsArgs");
const FindFirstCollectionsArgs_1 = require("./args/FindFirstCollectionsArgs");
const FindManyCollectionsArgs_1 = require("./args/FindManyCollectionsArgs");
const FindUniqueCollectionsArgs_1 = require("./args/FindUniqueCollectionsArgs");
const GroupByCollectionsArgs_1 = require("./args/GroupByCollectionsArgs");
const UpdateCollectionsArgs_1 = require("./args/UpdateCollectionsArgs");
const UpdateManyCollectionsArgs_1 = require("./args/UpdateManyCollectionsArgs");
const UpsertCollectionsArgs_1 = require("./args/UpsertCollectionsArgs");
const helpers_1 = require("../../../helpers");
const Collections_1 = require("../../../models/Collections");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCollections_1 = require("../../outputs/AggregateCollections");
const CollectionsGroupBy_1 = require("../../outputs/CollectionsGroupBy");
let CollectionsCrudResolver = class CollectionsCrudResolver {
    async findUniqueCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCollections(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCollections(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCollectionsArgs_1.FindUniqueCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findUniqueCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCollectionsArgs_1.FindFirstCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findFirstCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Collections_1.Collections], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCollectionsArgs_1.FindManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "findManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCollectionsArgs_1.CreateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "createCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCollectionsArgs_1.CreateManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "createManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCollectionsArgs_1.DeleteCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "deleteCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCollectionsArgs_1.UpdateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "updateCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCollectionsArgs_1.DeleteManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "deleteManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCollectionsArgs_1.UpdateManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "updateManyCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Collections_1.Collections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCollectionsArgs_1.UpsertCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "upsertCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCollections_1.AggregateCollections, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCollectionsArgs_1.AggregateCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "aggregateCollections", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CollectionsGroupBy_1.CollectionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCollectionsArgs_1.GroupByCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CollectionsCrudResolver.prototype, "groupByCollections", null);
CollectionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], CollectionsCrudResolver);
exports.CollectionsCrudResolver = CollectionsCrudResolver;
