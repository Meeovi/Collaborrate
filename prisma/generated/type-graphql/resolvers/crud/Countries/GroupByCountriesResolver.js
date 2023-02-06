"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCountriesArgs_1 = require("./args/GroupByCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const CountriesGroupBy_1 = require("../../outputs/CountriesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCountriesResolver = class GroupByCountriesResolver {
    async groupByCountries(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByCountriesResolver.prototype, "groupByCountries", null);
GroupByCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], GroupByCountriesResolver);
exports.GroupByCountriesResolver = GroupByCountriesResolver;
