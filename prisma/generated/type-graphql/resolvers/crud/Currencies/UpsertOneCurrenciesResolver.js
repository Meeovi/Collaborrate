"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCurrenciesArgs_1 = require("./args/UpsertOneCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const helpers_1 = require("../../../helpers");
let UpsertOneCurrenciesResolver = class UpsertOneCurrenciesResolver {
    async upsertOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCurrenciesArgs_1.UpsertOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCurrenciesResolver.prototype, "upsertOneCurrencies", null);
UpsertOneCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], UpsertOneCurrenciesResolver);
exports.UpsertOneCurrenciesResolver = UpsertOneCurrenciesResolver;
