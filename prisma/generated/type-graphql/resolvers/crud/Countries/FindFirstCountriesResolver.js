"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCountriesArgs_1 = require("./args/FindFirstCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let FindFirstCountriesResolver = class FindFirstCountriesResolver {
    async findFirstCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountriesArgs_1.FindFirstCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCountriesResolver.prototype, "findFirstCountries", null);
FindFirstCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], FindFirstCountriesResolver);
exports.FindFirstCountriesResolver = FindFirstCountriesResolver;
