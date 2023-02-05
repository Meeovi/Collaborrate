"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTaxesArgs_1 = require("./args/AggregateTaxesArgs");
const CreateManyTaxesArgs_1 = require("./args/CreateManyTaxesArgs");
const CreateOneTaxesArgs_1 = require("./args/CreateOneTaxesArgs");
const DeleteManyTaxesArgs_1 = require("./args/DeleteManyTaxesArgs");
const DeleteOneTaxesArgs_1 = require("./args/DeleteOneTaxesArgs");
const FindFirstTaxesArgs_1 = require("./args/FindFirstTaxesArgs");
const FindFirstTaxesOrThrowArgs_1 = require("./args/FindFirstTaxesOrThrowArgs");
const FindManyTaxesArgs_1 = require("./args/FindManyTaxesArgs");
const FindUniqueTaxesArgs_1 = require("./args/FindUniqueTaxesArgs");
const FindUniqueTaxesOrThrowArgs_1 = require("./args/FindUniqueTaxesOrThrowArgs");
const GroupByTaxesArgs_1 = require("./args/GroupByTaxesArgs");
const UpdateManyTaxesArgs_1 = require("./args/UpdateManyTaxesArgs");
const UpdateOneTaxesArgs_1 = require("./args/UpdateOneTaxesArgs");
const UpsertOneTaxesArgs_1 = require("./args/UpsertOneTaxesArgs");
const helpers_1 = require("../../../helpers");
const Taxes_1 = require("../../../models/Taxes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTaxes_1 = require("../../outputs/AggregateTaxes");
const TaxesGroupBy_1 = require("../../outputs/TaxesGroupBy");
let TaxesCrudResolver = class TaxesCrudResolver {
    async aggregateTaxes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTaxesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTaxesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTaxes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTaxes_1.AggregateTaxes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTaxesArgs_1.AggregateTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "aggregateTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaxesArgs_1.CreateManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "createManyTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTaxesArgs_1.CreateOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "createOneTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTaxesArgs_1.DeleteManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "deleteManyTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaxesArgs_1.DeleteOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "deleteOneTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaxesArgs_1.FindFirstTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "findFirstTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaxesOrThrowArgs_1.FindFirstTaxesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "findFirstTaxesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Taxes_1.Taxes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTaxesArgs_1.FindManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "findManyTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaxesArgs_1.FindUniqueTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "findUniqueTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaxesOrThrowArgs_1.FindUniqueTaxesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "findUniqueTaxesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaxesGroupBy_1.TaxesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaxesArgs_1.GroupByTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "groupByTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaxesArgs_1.UpdateManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "updateManyTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaxesArgs_1.UpdateOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "updateOneTaxes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaxesArgs_1.UpsertOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxesCrudResolver.prototype, "upsertOneTaxes", null);
TaxesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], TaxesCrudResolver);
exports.TaxesCrudResolver = TaxesCrudResolver;
