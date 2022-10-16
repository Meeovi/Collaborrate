"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateImportmArgs_1 = require("./args/AggregateImportmArgs");
const CreateManyImportmArgs_1 = require("./args/CreateManyImportmArgs");
const CreateOneImportmArgs_1 = require("./args/CreateOneImportmArgs");
const DeleteManyImportmArgs_1 = require("./args/DeleteManyImportmArgs");
const DeleteOneImportmArgs_1 = require("./args/DeleteOneImportmArgs");
const FindFirstImportmArgs_1 = require("./args/FindFirstImportmArgs");
const FindManyImportmArgs_1 = require("./args/FindManyImportmArgs");
const FindUniqueImportmArgs_1 = require("./args/FindUniqueImportmArgs");
const GroupByImportmArgs_1 = require("./args/GroupByImportmArgs");
const UpdateManyImportmArgs_1 = require("./args/UpdateManyImportmArgs");
const UpdateOneImportmArgs_1 = require("./args/UpdateOneImportmArgs");
const UpsertOneImportmArgs_1 = require("./args/UpsertOneImportmArgs");
const helpers_1 = require("../../../helpers");
const Importm_1 = require("../../../models/Importm");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateImportm_1 = require("../../outputs/AggregateImportm");
const ImportmGroupBy_1 = require("../../outputs/ImportmGroupBy");
let ImportmCrudResolver = class ImportmCrudResolver {
    async aggregateImportm(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async importms(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async importm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByImportm(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateImportm_1.AggregateImportm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateImportmArgs_1.AggregateImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "aggregateImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyImportmArgs_1.CreateManyImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "createManyImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneImportmArgs_1.CreateOneImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "createOneImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyImportmArgs_1.DeleteManyImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "deleteManyImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneImportmArgs_1.DeleteOneImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "deleteOneImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstImportmArgs_1.FindFirstImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "findFirstImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Importm_1.Importm], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyImportmArgs_1.FindManyImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "importms", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueImportmArgs_1.FindUniqueImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "importm", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ImportmGroupBy_1.ImportmGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByImportmArgs_1.GroupByImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "groupByImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyImportmArgs_1.UpdateManyImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "updateManyImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneImportmArgs_1.UpdateOneImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "updateOneImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneImportmArgs_1.UpsertOneImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "upsertOneImportm", null);
ImportmCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], ImportmCrudResolver);
exports.ImportmCrudResolver = ImportmCrudResolver;
