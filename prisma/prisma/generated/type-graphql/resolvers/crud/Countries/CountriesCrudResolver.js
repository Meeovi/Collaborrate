"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCountriesArgs_1 = require("./args/AggregateCountriesArgs");
const CreateCountriesArgs_1 = require("./args/CreateCountriesArgs");
const CreateManyCountriesArgs_1 = require("./args/CreateManyCountriesArgs");
const DeleteCountriesArgs_1 = require("./args/DeleteCountriesArgs");
const DeleteManyCountriesArgs_1 = require("./args/DeleteManyCountriesArgs");
const FindFirstCountriesArgs_1 = require("./args/FindFirstCountriesArgs");
const FindManyCountriesArgs_1 = require("./args/FindManyCountriesArgs");
const FindUniqueCountriesArgs_1 = require("./args/FindUniqueCountriesArgs");
const GroupByCountriesArgs_1 = require("./args/GroupByCountriesArgs");
const UpdateCountriesArgs_1 = require("./args/UpdateCountriesArgs");
const UpdateManyCountriesArgs_1 = require("./args/UpdateManyCountriesArgs");
const UpsertCountriesArgs_1 = require("./args/UpsertCountriesArgs");
const helpers_1 = require("../../../helpers");
const Countries_1 = require("../../../models/Countries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCountries_1 = require("../../outputs/AggregateCountries");
const CountriesGroupBy_1 = require("../../outputs/CountriesGroupBy");
let CountriesCrudResolver = class CountriesCrudResolver {
    async findUniqueCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCountries(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCountries(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountriesArgs_1.FindFirstCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "findFirstCountries", null);
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
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCountriesArgs_1.CreateCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "createCountries", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCountriesArgs_1.DeleteCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "deleteCountries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCountriesArgs_1.UpdateCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "updateCountries", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCountriesArgs_1.UpsertCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountriesCrudResolver.prototype, "upsertCountries", null);
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
CountriesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], CountriesCrudResolver);
exports.CountriesCrudResolver = CountriesCrudResolver;
