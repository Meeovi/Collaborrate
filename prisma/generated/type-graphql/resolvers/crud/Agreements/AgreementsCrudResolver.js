"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAgreementsArgs_1 = require("./args/AggregateAgreementsArgs");
const CreateManyAgreementsArgs_1 = require("./args/CreateManyAgreementsArgs");
const CreateOneAgreementsArgs_1 = require("./args/CreateOneAgreementsArgs");
const DeleteManyAgreementsArgs_1 = require("./args/DeleteManyAgreementsArgs");
const DeleteOneAgreementsArgs_1 = require("./args/DeleteOneAgreementsArgs");
const FindFirstAgreementsArgs_1 = require("./args/FindFirstAgreementsArgs");
const FindFirstAgreementsOrThrowArgs_1 = require("./args/FindFirstAgreementsOrThrowArgs");
const FindManyAgreementsArgs_1 = require("./args/FindManyAgreementsArgs");
const FindUniqueAgreementsArgs_1 = require("./args/FindUniqueAgreementsArgs");
const FindUniqueAgreementsOrThrowArgs_1 = require("./args/FindUniqueAgreementsOrThrowArgs");
const GroupByAgreementsArgs_1 = require("./args/GroupByAgreementsArgs");
const UpdateManyAgreementsArgs_1 = require("./args/UpdateManyAgreementsArgs");
const UpdateOneAgreementsArgs_1 = require("./args/UpdateOneAgreementsArgs");
const UpsertOneAgreementsArgs_1 = require("./args/UpsertOneAgreementsArgs");
const helpers_1 = require("../../../helpers");
const Agreements_1 = require("../../../models/Agreements");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAgreements_1 = require("../../outputs/AggregateAgreements");
const AgreementsGroupBy_1 = require("../../outputs/AgreementsGroupBy");
let AgreementsCrudResolver = class AgreementsCrudResolver {
    async aggregateAgreements(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAgreementsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueAgreementsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAgreements(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAgreementsArgs_1.CreateOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "createOneAgreements", null);
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
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAgreementsArgs_1.DeleteOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "deleteOneAgreements", null);
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
    TypeGraphQL.Query(_returns => Agreements_1.Agreements, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAgreementsOrThrowArgs_1.FindFirstAgreementsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "findFirstAgreementsOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAgreementsOrThrowArgs_1.FindUniqueAgreementsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "findUniqueAgreementsOrThrow", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAgreementsArgs_1.UpdateOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "updateOneAgreements", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAgreementsArgs_1.UpsertOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AgreementsCrudResolver.prototype, "upsertOneAgreements", null);
AgreementsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], AgreementsCrudResolver);
exports.AgreementsCrudResolver = AgreementsCrudResolver;
