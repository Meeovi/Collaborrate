"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCasesArgs_1 = require("./args/AggregateCasesArgs");
const CreateCasesArgs_1 = require("./args/CreateCasesArgs");
const CreateManyCasesArgs_1 = require("./args/CreateManyCasesArgs");
const DeleteCasesArgs_1 = require("./args/DeleteCasesArgs");
const DeleteManyCasesArgs_1 = require("./args/DeleteManyCasesArgs");
const FindFirstCasesArgs_1 = require("./args/FindFirstCasesArgs");
const FindManyCasesArgs_1 = require("./args/FindManyCasesArgs");
const FindUniqueCasesArgs_1 = require("./args/FindUniqueCasesArgs");
const GroupByCasesArgs_1 = require("./args/GroupByCasesArgs");
const UpdateCasesArgs_1 = require("./args/UpdateCasesArgs");
const UpdateManyCasesArgs_1 = require("./args/UpdateManyCasesArgs");
const UpsertCasesArgs_1 = require("./args/UpsertCasesArgs");
const helpers_1 = require("../../../helpers");
const Cases_1 = require("../../../models/Cases");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCases_1 = require("../../outputs/AggregateCases");
const CasesGroupBy_1 = require("../../outputs/CasesGroupBy");
let CasesCrudResolver = class CasesCrudResolver {
    async findUniqueCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCases(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCases(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCasesArgs_1.FindUniqueCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "findUniqueCases", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCasesArgs_1.FindFirstCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "findFirstCases", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cases_1.Cases], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCasesArgs_1.FindManyCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "findManyCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCasesArgs_1.CreateCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "createCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCasesArgs_1.CreateManyCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "createManyCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCasesArgs_1.DeleteCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "deleteCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCasesArgs_1.UpdateCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "updateCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCasesArgs_1.DeleteManyCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "deleteManyCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCasesArgs_1.UpdateManyCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "updateManyCases", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCasesArgs_1.UpsertCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "upsertCases", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCases_1.AggregateCases, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCasesArgs_1.AggregateCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "aggregateCases", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CasesGroupBy_1.CasesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCasesArgs_1.GroupByCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CasesCrudResolver.prototype, "groupByCases", null);
CasesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], CasesCrudResolver);
exports.CasesCrudResolver = CasesCrudResolver;
