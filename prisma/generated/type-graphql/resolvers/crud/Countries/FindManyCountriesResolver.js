"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCountriesArgs_1 = require("./args/FindManyCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let FindManyCountriesResolver = class FindManyCountriesResolver {
    async findManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyCountriesResolver.prototype, "findManyCountries", null);
FindManyCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], FindManyCountriesResolver);
exports.FindManyCountriesResolver = FindManyCountriesResolver;
