"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCountriesArgs_1 = require("./args/AggregateCountriesArgs");
const CreateManyCountriesArgs_1 = require("./args/CreateManyCountriesArgs");
const CreateOneCountriesArgs_1 = require("./args/CreateOneCountriesArgs");
const DeleteManyCountriesArgs_1 = require("./args/DeleteManyCountriesArgs");
const DeleteOneCountriesArgs_1 = require("./args/DeleteOneCountriesArgs");
const FindFirstCountriesArgs_1 = require("./args/FindFirstCountriesArgs");
const FindFirstCountriesOrThrowArgs_1 = require("./args/FindFirstCountriesOrThrowArgs");
const FindManyCountriesArgs_1 = require("./args/FindManyCountriesArgs");
const FindUniqueCountriesArgs_1 = require("./args/FindUniqueCountriesArgs");
const FindUniqueCountriesOrThrowArgs_1 = require("./args/FindUniqueCountriesOrThrowArgs");
const GroupByCountriesArgs_1 = require("./args/GroupByCountriesArgs");
const UpdateManyCountriesArgs_1 = require("./args/UpdateManyCountriesArgs");
const UpdateOneCountriesArgs_1 = require("./args/UpdateOneCountriesArgs");
const UpsertOneCountriesArgs_1 = require("./args/UpsertOneCountriesArgs");
const helpers_1 = require("../../../helpers");
const Countries_1 = require("../../../models/Countries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCountries_1 = require("../../outputs/AggregateCountries");
const CountriesGroupBy_1 = require("../../outputs/CountriesGroupBy");
let CountriesCrudResolver = class CountriesCrudResolver {
    async aggregateCountries(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCountriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCountriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCountries(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCountries_1.AggregateCountries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCountriesArgs_1.AggregateCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "aggregateCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCountriesArgs_1.CreateManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "createManyCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCountriesArgs_1.CreateOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "createOneCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCountriesArgs_1.DeleteManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "deleteManyCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCountriesArgs_1.DeleteOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "deleteOneCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountriesArgs_1.FindFirstCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findFirstCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountriesOrThrowArgs_1.FindFirstCountriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findFirstCountriesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Countries_1.Countries], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCountriesArgs_1.FindManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findManyCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCountriesArgs_1.FindUniqueCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findUniqueCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCountriesOrThrowArgs_1.FindUniqueCountriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findUniqueCountriesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CountriesGroupBy_1.CountriesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCountriesArgs_1.GroupByCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "groupByCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCountriesArgs_1.UpdateManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "updateManyCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCountriesArgs_1.UpdateOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "updateOneCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCountriesArgs_1.UpsertOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "upsertOneCountries", null);
CountriesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], CountriesCrudResolver);
exports.CountriesCrudResolver = CountriesCrudResolver;
