"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCurrenciesArgs_1 = require("./args/GroupByCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const CurrenciesGroupBy_1 = require("../../outputs/CurrenciesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCurrenciesResolver = class GroupByCurrenciesResolver {
    async groupByCurrencies(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CurrenciesGroupBy_1.CurrenciesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrenciesArgs_1.GroupByCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCurrenciesResolver.prototype, "groupByCurrencies", null);
GroupByCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], GroupByCurrenciesResolver);
exports.GroupByCurrenciesResolver = GroupByCurrenciesResolver;
