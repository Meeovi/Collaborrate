"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePartnersArgs_1 = require("./args/AggregatePartnersArgs");
const CreateManyPartnersArgs_1 = require("./args/CreateManyPartnersArgs");
const CreateOnePartnersArgs_1 = require("./args/CreateOnePartnersArgs");
const DeleteManyPartnersArgs_1 = require("./args/DeleteManyPartnersArgs");
const DeleteOnePartnersArgs_1 = require("./args/DeleteOnePartnersArgs");
const FindFirstPartnersArgs_1 = require("./args/FindFirstPartnersArgs");
const FindFirstPartnersOrThrowArgs_1 = require("./args/FindFirstPartnersOrThrowArgs");
const FindManyPartnersArgs_1 = require("./args/FindManyPartnersArgs");
const FindUniquePartnersArgs_1 = require("./args/FindUniquePartnersArgs");
const FindUniquePartnersOrThrowArgs_1 = require("./args/FindUniquePartnersOrThrowArgs");
const GroupByPartnersArgs_1 = require("./args/GroupByPartnersArgs");
const UpdateManyPartnersArgs_1 = require("./args/UpdateManyPartnersArgs");
const UpdateOnePartnersArgs_1 = require("./args/UpdateOnePartnersArgs");
const UpsertOnePartnersArgs_1 = require("./args/UpsertOnePartnersArgs");
const helpers_1 = require("../../../helpers");
const Partners_1 = require("../../../models/Partners");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePartners_1 = require("../../outputs/AggregatePartners");
const PartnersGroupBy_1 = require("../../outputs/PartnersGroupBy");
let PartnersCrudResolver = class PartnersCrudResolver {
    async aggregatePartners(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPartnersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePartnersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPartners(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePartners(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).partners.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePartners_1.AggregatePartners, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePartnersArgs_1.AggregatePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "aggregatePartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPartnersArgs_1.CreateManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "createManyPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePartnersArgs_1.CreateOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "createOnePartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPartnersArgs_1.DeleteManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "deleteManyPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePartnersArgs_1.DeleteOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "deleteOnePartners", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPartnersArgs_1.FindFirstPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "findFirstPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPartnersOrThrowArgs_1.FindFirstPartnersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "findFirstPartnersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Partners_1.Partners], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPartnersArgs_1.FindManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "findManyPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePartnersArgs_1.FindUniquePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "findUniquePartners", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePartnersOrThrowArgs_1.FindUniquePartnersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "findUniquePartnersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PartnersGroupBy_1.PartnersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPartnersArgs_1.GroupByPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "groupByPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPartnersArgs_1.UpdateManyPartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "updateManyPartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePartnersArgs_1.UpdateOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "updateOnePartners", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Partners_1.Partners, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePartnersArgs_1.UpsertOnePartnersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PartnersCrudResolver.prototype, "upsertOnePartners", null);
PartnersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Partners_1.Partners)
], PartnersCrudResolver);
exports.PartnersCrudResolver = PartnersCrudResolver;
