"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrency_ratesArgs_1 = require("./args/AggregateCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const AggregateCurrency_rates_1 = require("../../outputs/AggregateCurrency_rates");
const helpers_1 = require("../../../helpers");
let AggregateCurrency_ratesResolver = class AggregateCurrency_ratesResolver {
    async aggregateCurrency_rates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrency_rates_1.AggregateCurrency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrency_ratesArgs_1.AggregateCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCurrency_ratesResolver.prototype, "aggregateCurrency_rates", null);
AggregateCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], AggregateCurrency_ratesResolver);
exports.AggregateCurrency_ratesResolver = AggregateCurrency_ratesResolver;
