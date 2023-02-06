"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTransactionsArgs_1 = require("./args/AggregateTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const AggregateTransactions_1 = require("../../outputs/AggregateTransactions");
const helpers_1 = require("../../../helpers");
let AggregateTransactionsResolver = class AggregateTransactionsResolver {
    async aggregateTransactions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTransactions_1.AggregateTransactions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTransactionsArgs_1.AggregateTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTransactionsResolver.prototype, "aggregateTransactions", null);
AggregateTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], AggregateTransactionsResolver);
exports.AggregateTransactionsResolver = AggregateTransactionsResolver;
