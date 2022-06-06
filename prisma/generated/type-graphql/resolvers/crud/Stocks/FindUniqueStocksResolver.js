"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStocksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueStocksArgs_1 = require("./args/FindUniqueStocksArgs");
const Stocks_1 = require("../../../models/Stocks");
const helpers_1 = require("../../../helpers");
let FindUniqueStocksResolver = class FindUniqueStocksResolver {
    async findUniqueStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stocks_1.Stocks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStocksArgs_1.FindUniqueStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStocksResolver.prototype, "findUniqueStocks", null);
FindUniqueStocksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], FindUniqueStocksResolver);
exports.FindUniqueStocksResolver = FindUniqueStocksResolver;
