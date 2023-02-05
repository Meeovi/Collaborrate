"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCountriesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCountriesOrThrowArgs_1 = require("./args/FindFirstCountriesOrThrowArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let FindFirstCountriesOrThrowResolver = class FindFirstCountriesOrThrowResolver {
    async findFirstCountriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountriesOrThrowArgs_1.FindFirstCountriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCountriesOrThrowResolver.prototype, "findFirstCountriesOrThrow", null);
FindFirstCountriesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], FindFirstCountriesOrThrowResolver);
exports.FindFirstCountriesOrThrowResolver = FindFirstCountriesOrThrowResolver;
