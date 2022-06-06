"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCurrency_ratesArgs_1 = require("./args/UpsertCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const helpers_1 = require("../../../helpers");
let UpsertCurrency_ratesResolver = class UpsertCurrency_ratesResolver {
    async upsertCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCurrency_ratesArgs_1.UpsertCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCurrency_ratesResolver.prototype, "upsertCurrency_rates", null);
UpsertCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], UpsertCurrency_ratesResolver);
exports.UpsertCurrency_ratesResolver = UpsertCurrency_ratesResolver;
