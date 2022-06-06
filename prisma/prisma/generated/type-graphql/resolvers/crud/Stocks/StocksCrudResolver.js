"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStocksArgs_1 = require("./args/AggregateStocksArgs");
const CreateManyStocksArgs_1 = require("./args/CreateManyStocksArgs");
const CreateStocksArgs_1 = require("./args/CreateStocksArgs");
const DeleteManyStocksArgs_1 = require("./args/DeleteManyStocksArgs");
const DeleteStocksArgs_1 = require("./args/DeleteStocksArgs");
const FindFirstStocksArgs_1 = require("./args/FindFirstStocksArgs");
const FindManyStocksArgs_1 = require("./args/FindManyStocksArgs");
const FindUniqueStocksArgs_1 = require("./args/FindUniqueStocksArgs");
const GroupByStocksArgs_1 = require("./args/GroupByStocksArgs");
const UpdateManyStocksArgs_1 = require("./args/UpdateManyStocksArgs");
const UpdateStocksArgs_1 = require("./args/UpdateStocksArgs");
const UpsertStocksArgs_1 = require("./args/UpsertStocksArgs");
const helpers_1 = require("../../../helpers");
const Stocks_1 = require("../../../models/Stocks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStocks_1 = require("../../outputs/AggregateStocks");
const StocksGroupBy_1 = require("../../outputs/StocksGroupBy");
let StocksCrudResolver = class StocksCrudResolver {
    async findUniqueStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateStocks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByStocks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], StocksCrudResolver.prototype, "findUniqueStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stocks_1.Stocks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStocksArgs_1.FindFirstStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "findFirstStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stocks_1.Stocks], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStocksArgs_1.FindManyStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "findManyStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stocks_1.Stocks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateStocksArgs_1.CreateStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "createStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyStocksArgs_1.CreateManyStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "createManyStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stocks_1.Stocks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteStocksArgs_1.DeleteStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "deleteStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stocks_1.Stocks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateStocksArgs_1.UpdateStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "updateStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStocksArgs_1.DeleteManyStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "deleteManyStocks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStocksArgs_1.UpdateManyStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StocksCrudResolver.prototype, "updateManyStocks", null);
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
], StocksCrudResolver.prototype, "upsertStocks", null);
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
], StocksCrudResolver.prototype, "aggregateStocks", null);
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
], StocksCrudResolver.prototype, "groupByStocks", null);
StocksCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], StocksCrudResolver);
exports.StocksCrudResolver = StocksCrudResolver;
