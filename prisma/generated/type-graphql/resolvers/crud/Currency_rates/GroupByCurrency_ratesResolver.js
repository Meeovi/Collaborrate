"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCurrency_ratesArgs_1 = require("./args/GroupByCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const Currency_ratesGroupBy_1 = require("../../outputs/Currency_ratesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCurrency_ratesResolver = class GroupByCurrency_ratesResolver {
    async groupByCurrency_rates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_ratesGroupBy_1.Currency_ratesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrency_ratesArgs_1.GroupByCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCurrency_ratesResolver.prototype, "groupByCurrency_rates", null);
GroupByCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], GroupByCurrency_ratesResolver);
exports.GroupByCurrency_ratesResolver = GroupByCurrency_ratesResolver;
