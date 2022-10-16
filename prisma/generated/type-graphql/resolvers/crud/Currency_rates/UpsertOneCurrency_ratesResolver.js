"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCurrency_ratesArgs_1 = require("./args/UpsertOneCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const helpers_1 = require("../../../helpers");
let UpsertOneCurrency_ratesResolver = class UpsertOneCurrency_ratesResolver {
    async upsertOneCurrency_rates(ctx, info, args) {
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCurrency_ratesArgs_1.UpsertOneCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCurrency_ratesResolver.prototype, "upsertOneCurrency_rates", null);
UpsertOneCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], UpsertOneCurrency_ratesResolver);
exports.UpsertOneCurrency_ratesResolver = UpsertOneCurrency_ratesResolver;
