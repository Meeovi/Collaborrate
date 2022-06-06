"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_payment_1 = require("../../../models/Customer_payment");
const Orders_1 = require("../../../models/Orders");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let TransactionsRelationsResolver = class TransactionsRelationsResolver {
    async orders(transactions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findUnique({
            where: {
                id: transactions.id,
            },
        }).orders({});
    }
    async customer_payment(transactions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findUnique({
            where: {
                id: transactions.id,
            },
        }).customer_payment({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transactions_1.Transactions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customer_payment_1.Customer_payment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transactions_1.Transactions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsRelationsResolver.prototype, "customer_payment", null);
TransactionsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], TransactionsRelationsResolver);
exports.TransactionsRelationsResolver = TransactionsRelationsResolver;
