"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneTransactionsArgs_1 = require("./args/UpsertOneTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let UpsertOneTransactionsResolver = class UpsertOneTransactionsResolver {
    async upsertOneTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTransactionsArgs_1.UpsertOneTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTransactionsResolver.prototype, "upsertOneTransactions", null);
UpsertOneTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], UpsertOneTransactionsResolver);
exports.UpsertOneTransactionsResolver = UpsertOneTransactionsResolver;
