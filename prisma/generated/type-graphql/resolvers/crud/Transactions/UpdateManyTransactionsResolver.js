"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTransactionsArgs_1 = require("./args/UpdateManyTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTransactionsResolver = class UpdateManyTransactionsResolver {
    async updateManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTransactionsArgs_1.UpdateManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTransactionsResolver.prototype, "updateManyTransactions", null);
UpdateManyTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], UpdateManyTransactionsResolver);
exports.UpdateManyTransactionsResolver = UpdateManyTransactionsResolver;
