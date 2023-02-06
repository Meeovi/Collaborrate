"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCurrenciesArgs_1 = require("./args/AggregateCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const AggregateCurrencies_1 = require("../../outputs/AggregateCurrencies");
const helpers_1 = require("../../../helpers");
let AggregateCurrenciesResolver = class AggregateCurrenciesResolver {
    async aggregateCurrencies(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrencies_1.AggregateCurrencies, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrenciesArgs_1.AggregateCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCurrenciesResolver.prototype, "aggregateCurrencies", null);
AggregateCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], AggregateCurrenciesResolver);
exports.AggregateCurrenciesResolver = AggregateCurrenciesResolver;
