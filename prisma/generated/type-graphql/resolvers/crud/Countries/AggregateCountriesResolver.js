"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCountriesArgs_1 = require("./args/AggregateCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const AggregateCountries_1 = require("../../outputs/AggregateCountries");
const helpers_1 = require("../../../helpers");
let AggregateCountriesResolver = class AggregateCountriesResolver {
    async aggregateCountries(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
], AggregateCountriesResolver.prototype, "aggregateCountries", null);
AggregateCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], AggregateCountriesResolver);
exports.AggregateCountriesResolver = AggregateCountriesResolver;
