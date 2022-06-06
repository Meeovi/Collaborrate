"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertTransactionsArgs_1 = require("./args/UpsertTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let UpsertTransactionsResolver = class UpsertTransactionsResolver {
    async upsertTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTransactionsArgs_1.UpsertTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertTransactionsResolver.prototype, "upsertTransactions", null);
UpsertTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], UpsertTransactionsResolver);
exports.UpsertTransactionsResolver = UpsertTransactionsResolver;
