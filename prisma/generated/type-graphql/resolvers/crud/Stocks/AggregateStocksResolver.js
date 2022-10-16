"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStocksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStocksArgs_1 = require("./args/AggregateStocksArgs");
const Stocks_1 = require("../../../models/Stocks");
const AggregateStocks_1 = require("../../outputs/AggregateStocks");
const helpers_1 = require("../../../helpers");
let AggregateStocksResolver = class AggregateStocksResolver {
    async aggregateStocks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStocks_1.AggregateStocks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStocksArgs_1.AggregateStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStocksResolver.prototype, "aggregateStocks", null);
AggregateStocksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], AggregateStocksResolver);
exports.AggregateStocksResolver = AggregateStocksResolver;
