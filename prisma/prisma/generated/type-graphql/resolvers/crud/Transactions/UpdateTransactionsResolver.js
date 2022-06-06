"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateTransactionsArgs_1 = require("./args/UpdateTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let UpdateTransactionsResolver = class UpdateTransactionsResolver {
    async updateTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTransactionsArgs_1.UpdateTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateTransactionsResolver.prototype, "updateTransactions", null);
UpdateTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], UpdateTransactionsResolver);
exports.UpdateTransactionsResolver = UpdateTransactionsResolver;
