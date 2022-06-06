"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateImportmArgs_1 = require("./args/AggregateImportmArgs");
const CreateImportmArgs_1 = require("./args/CreateImportmArgs");
const CreateManyImportmArgs_1 = require("./args/CreateManyImportmArgs");
const DeleteImportmArgs_1 = require("./args/DeleteImportmArgs");
const DeleteManyImportmArgs_1 = require("./args/DeleteManyImportmArgs");
const FindFirstImportmArgs_1 = require("./args/FindFirstImportmArgs");
const FindManyImportmArgs_1 = require("./args/FindManyImportmArgs");
const FindUniqueImportmArgs_1 = require("./args/FindUniqueImportmArgs");
const GroupByImportmArgs_1 = require("./args/GroupByImportmArgs");
const UpdateImportmArgs_1 = require("./args/UpdateImportmArgs");
const UpdateManyImportmArgs_1 = require("./args/UpdateManyImportmArgs");
const UpsertImportmArgs_1 = require("./args/UpsertImportmArgs");
const helpers_1 = require("../../../helpers");
const Importm_1 = require("../../../models/Importm");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateImportm_1 = require("../../outputs/AggregateImportm");
const ImportmGroupBy_1 = require("../../outputs/ImportmGroupBy");
let ImportmCrudResolver = class ImportmCrudResolver {
    async importm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.findUnique({
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
    async createImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.update({
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
    async updateManyImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertImportm(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateImportm(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByImportm(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).importm.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateImportmArgs_1.CreateImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "createImportm", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteImportmArgs_1.DeleteImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "deleteImportm", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Importm_1.Importm, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateImportmArgs_1.UpdateImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "updateImportm", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertImportmArgs_1.UpsertImportmArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportmCrudResolver.prototype, "upsertImportm", null);
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
ImportmCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Importm_1.Importm)
], ImportmCrudResolver);
exports.ImportmCrudResolver = ImportmCrudResolver;
