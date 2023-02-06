"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCurrenciesArgs_1 = require("./args/FindFirstCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const helpers_1 = require("../../../helpers");
let FindFirstCurrenciesResolver = class FindFirstCurrenciesResolver {
    async findFirstCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrenciesArgs_1.FindFirstCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCurrenciesResolver.prototype, "findFirstCurrencies", null);
FindFirstCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], FindFirstCurrenciesResolver);
exports.FindFirstCurrenciesResolver = FindFirstCurrenciesResolver;
