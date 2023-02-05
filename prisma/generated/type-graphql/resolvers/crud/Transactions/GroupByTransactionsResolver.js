"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTransactionsArgs_1 = require("./args/GroupByTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const TransactionsGroupBy_1 = require("../../outputs/TransactionsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTransactionsResolver = class GroupByTransactionsResolver {
    async groupByTransactions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TransactionsGroupBy_1.TransactionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTransactionsArgs_1.GroupByTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTransactionsResolver.prototype, "groupByTransactions", null);
GroupByTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], GroupByTransactionsResolver);
exports.GroupByTransactionsResolver = GroupByTransactionsResolver;
