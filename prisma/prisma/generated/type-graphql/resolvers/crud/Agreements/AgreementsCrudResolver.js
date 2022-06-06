"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAgreementsArgs_1 = require("./args/AggregateAgreementsArgs");
const CreateAgreementsArgs_1 = require("./args/CreateAgreementsArgs");
const CreateManyAgreementsArgs_1 = require("./args/CreateManyAgreementsArgs");
const DeleteAgreementsArgs_1 = require("./args/DeleteAgreementsArgs");
const DeleteManyAgreementsArgs_1 = require("./args/DeleteManyAgreementsArgs");
const FindFirstAgreementsArgs_1 = require("./args/FindFirstAgreementsArgs");
const FindManyAgreementsArgs_1 = require("./args/FindManyAgreementsArgs");
const FindUniqueAgreementsArgs_1 = require("./args/FindUniqueAgreementsArgs");
const GroupByAgreementsArgs_1 = require("./args/GroupByAgreementsArgs");
const UpdateAgreementsArgs_1 = require("./args/UpdateAgreementsArgs");
const UpdateManyAgreementsArgs_1 = require("./args/UpdateManyAgreementsArgs");
const UpsertAgreementsArgs_1 = require("./args/UpsertAgreementsArgs");
const helpers_1 = require("../../../helpers");
const Agreements_1 = require("../../../models/Agreements");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAgreements_1 = require("../../outputs/AggregateAgreements");
const AgreementsGroupBy_1 = require("../../outputs/AgreementsGroupBy");
let AgreementsCrudResolver = class AgreementsCrudResolver {
    async findUniqueAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAgreements(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAgreements(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgreementsArgs_1.FindUniqueAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "findUniqueAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAgreementsArgs_1.FindFirstAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "findFirstAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Agreements_1.Agreements], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAgreementsArgs_1.FindManyAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "findManyAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAgreementsArgs_1.CreateAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "createAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAgreementsArgs_1.CreateManyAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "createManyAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAgreementsArgs_1.DeleteAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "deleteAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAgreementsArgs_1.UpdateAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "updateAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAgreementsArgs_1.DeleteManyAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "deleteManyAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAgreementsArgs_1.UpdateManyAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "updateManyAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAgreementsArgs_1.UpsertAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "upsertAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAgreements_1.AggregateAgreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAgreementsArgs_1.AggregateAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "aggregateAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AgreementsGroupBy_1.AgreementsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAgreementsArgs_1.GroupByAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "groupByAgreements", null);
AgreementsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], AgreementsCrudResolver);
exports.AgreementsCrudResolver = AgreementsCrudResolver;
