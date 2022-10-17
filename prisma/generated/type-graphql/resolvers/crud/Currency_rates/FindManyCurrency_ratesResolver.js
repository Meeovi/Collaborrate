"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCurrency_ratesArgs_1 = require("./args/FindManyCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const helpers_1 = require("../../../helpers");
let FindManyCurrency_ratesResolver = class FindManyCurrency_ratesResolver {
    async findManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_rates_1.Currency_rates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCurrency_ratesArgs_1.FindManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCurrency_ratesResolver.prototype, "findManyCurrency_rates", null);
FindManyCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], FindManyCurrency_ratesResolver);
exports.FindManyCurrency_ratesResolver = FindManyCurrency_ratesResolver;
