"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTransactionsArgs_1 = require("./args/DeleteManyTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTransactionsResolver = class DeleteManyTransactionsResolver {
    async deleteManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTransactionsArgs_1.DeleteManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTransactionsResolver.prototype, "deleteManyTransactions", null);
DeleteManyTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], DeleteManyTransactionsResolver);
exports.DeleteManyTransactionsResolver = DeleteManyTransactionsResolver;
