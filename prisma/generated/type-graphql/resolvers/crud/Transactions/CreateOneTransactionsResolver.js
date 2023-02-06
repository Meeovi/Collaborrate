"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTransactionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTransactionsArgs_1 = require("./args/CreateOneTransactionsArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let CreateOneTransactionsResolver = class CreateOneTransactionsResolver {
    async createOneTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTransactionsArgs_1.CreateOneTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTransactionsResolver.prototype, "createOneTransactions", null);
CreateOneTransactionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], CreateOneTransactionsResolver);
exports.CreateOneTransactionsResolver = CreateOneTransactionsResolver;
