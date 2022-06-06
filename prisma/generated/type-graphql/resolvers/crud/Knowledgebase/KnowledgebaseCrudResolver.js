"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateKnowledgebaseArgs_1 = require("./args/AggregateKnowledgebaseArgs");
const CreateKnowledgebaseArgs_1 = require("./args/CreateKnowledgebaseArgs");
const CreateManyKnowledgebaseArgs_1 = require("./args/CreateManyKnowledgebaseArgs");
const DeleteKnowledgebaseArgs_1 = require("./args/DeleteKnowledgebaseArgs");
const DeleteManyKnowledgebaseArgs_1 = require("./args/DeleteManyKnowledgebaseArgs");
const FindFirstKnowledgebaseArgs_1 = require("./args/FindFirstKnowledgebaseArgs");
const FindManyKnowledgebaseArgs_1 = require("./args/FindManyKnowledgebaseArgs");
const FindUniqueKnowledgebaseArgs_1 = require("./args/FindUniqueKnowledgebaseArgs");
const GroupByKnowledgebaseArgs_1 = require("./args/GroupByKnowledgebaseArgs");
const UpdateKnowledgebaseArgs_1 = require("./args/UpdateKnowledgebaseArgs");
const UpdateManyKnowledgebaseArgs_1 = require("./args/UpdateManyKnowledgebaseArgs");
const UpsertKnowledgebaseArgs_1 = require("./args/UpsertKnowledgebaseArgs");
const helpers_1 = require("../../../helpers");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateKnowledgebase_1 = require("../../outputs/AggregateKnowledgebase");
const KnowledgebaseGroupBy_1 = require("../../outputs/KnowledgebaseGroupBy");
let KnowledgebaseCrudResolver = class KnowledgebaseCrudResolver {
    async knowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async knowledgebases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateKnowledgebase(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByKnowledgebase(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueKnowledgebaseArgs_1.FindUniqueKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "knowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstKnowledgebaseArgs_1.FindFirstKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "findFirstKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Knowledgebase_1.Knowledgebase], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyKnowledgebaseArgs_1.FindManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "knowledgebases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateKnowledgebaseArgs_1.CreateKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "createKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyKnowledgebaseArgs_1.CreateManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "createManyKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteKnowledgebaseArgs_1.DeleteKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "deleteKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateKnowledgebaseArgs_1.UpdateKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "updateKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyKnowledgebaseArgs_1.DeleteManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "deleteManyKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyKnowledgebaseArgs_1.UpdateManyKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "updateManyKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertKnowledgebaseArgs_1.UpsertKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "upsertKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateKnowledgebase_1.AggregateKnowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateKnowledgebaseArgs_1.AggregateKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "aggregateKnowledgebase", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [KnowledgebaseGroupBy_1.KnowledgebaseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByKnowledgebaseArgs_1.GroupByKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], KnowledgebaseCrudResolver.prototype, "groupByKnowledgebase", null);
KnowledgebaseCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], KnowledgebaseCrudResolver);
exports.KnowledgebaseCrudResolver = KnowledgebaseCrudResolver;
