"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCurrenciesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCurrenciesArgs_1 = require("./args/DeleteOneCurrenciesArgs");
const Currencies_1 = require("../../../models/Currencies");
const helpers_1 = require("../../../helpers");
let DeleteOneCurrenciesResolver = class DeleteOneCurrenciesResolver {
    async deleteOneCurrencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currencies.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currencies_1.Currencies, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCurrenciesArgs_1.DeleteOneCurrenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCurrenciesResolver.prototype, "deleteOneCurrencies", null);
DeleteOneCurrenciesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currencies_1.Currencies)
], DeleteOneCurrenciesResolver);
exports.DeleteOneCurrenciesResolver = DeleteOneCurrenciesResolver;
