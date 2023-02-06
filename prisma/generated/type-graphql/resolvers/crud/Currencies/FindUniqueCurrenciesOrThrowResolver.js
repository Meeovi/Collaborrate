"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrenciesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCurrenciesOrThrowArgs_1 = require("./args/FindUniqueCurrenciesOrThrowArgs");
const Currencies_1 = require("../../../models/Currencies");
const helpers_1 = require("../../../helpers");
let FindUniqueCurrenciesOrThrowResolver = class FindUniqueCurrenciesOrThrowResolver {
    async findUniqueCurrenciesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrenciesOrThrowArgs_1.FindUniqueCurrenciesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCurrenciesOrThrowResolver.prototype, "findUniqueCurrenciesOrThrow", null);
FindUniqueCurrenciesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], FindUniqueCurrenciesOrThrowResolver);
exports.FindUniqueCurrenciesOrThrowResolver = FindUniqueCurrenciesOrThrowResolver;
