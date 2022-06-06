"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTransactionsArgs_1 = require("./args/DeleteTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let DeleteTransactionsResolver = class DeleteTransactionsResolver {
    async deleteTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTransactionsArgs_1.DeleteTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTransactionsResolver.prototype, "deleteTransactions", null);
DeleteTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], DeleteTransactionsResolver);
exports.DeleteTransactionsResolver = DeleteTransactionsResolver;
