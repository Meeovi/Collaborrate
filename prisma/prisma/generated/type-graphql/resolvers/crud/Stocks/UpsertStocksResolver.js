"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStocksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertStocksArgs_1 = require("./args/UpsertStocksArgs");
const Stocks_1 = require("../../../models/Stocks");
const helpers_1 = require("../../../helpers");
let UpsertStocksResolver = class UpsertStocksResolver {
    async upsertStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stocks_1.Stocks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertStocksArgs_1.UpsertStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertStocksResolver.prototype, "upsertStocks", null);
UpsertStocksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], UpsertStocksResolver);
exports.UpsertStocksResolver = UpsertStocksResolver;
