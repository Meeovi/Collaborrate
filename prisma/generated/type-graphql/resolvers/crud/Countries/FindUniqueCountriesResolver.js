"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCountriesArgs_1 = require("./args/FindUniqueCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let FindUniqueCountriesResolver = class FindUniqueCountriesResolver {
    async findUniqueCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueCountriesResolver.prototype, "findUniqueCountries", null);
FindUniqueCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], FindUniqueCountriesResolver);
exports.FindUniqueCountriesResolver = FindUniqueCountriesResolver;
