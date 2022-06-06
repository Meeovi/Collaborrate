"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStocksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByStocksArgs_1 = require("./args/GroupByStocksArgs");
const Stocks_1 = require("../../../models/Stocks");
const StocksGroupBy_1 = require("../../outputs/StocksGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStocksResolver = class GroupByStocksResolver {
    async groupByStocks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StocksGroupBy_1.StocksGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStocksArgs_1.GroupByStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStocksResolver.prototype, "groupByStocks", null);
GroupByStocksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], GroupByStocksResolver);
exports.GroupByStocksResolver = GroupByStocksResolver;
