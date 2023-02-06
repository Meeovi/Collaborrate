"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCountriesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCountriesOrThrowArgs_1 = require("./args/FindUniqueCountriesOrThrowArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let FindUniqueCountriesOrThrowResolver = class FindUniqueCountriesOrThrowResolver {
    async findUniqueCountriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCountriesOrThrowArgs_1.FindUniqueCountriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCountriesOrThrowResolver.prototype, "findUniqueCountriesOrThrow", null);
FindUniqueCountriesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], FindUniqueCountriesOrThrowResolver);
exports.FindUniqueCountriesOrThrowResolver = FindUniqueCountriesOrThrowResolver;
