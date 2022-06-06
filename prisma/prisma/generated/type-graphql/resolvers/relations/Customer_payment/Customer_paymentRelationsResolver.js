"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_payment_1 = require("../../../models/Customer_payment");
const Customers_1 = require("../../../models/Customers");
const Transactions_1 = require("../../../models/Transactions");
const Customer_paymentTransactionsArgs_1 = require("./args/Customer_paymentTransactionsArgs");
const helpers_1 = require("../../../helpers");
let Customer_paymentRelationsResolver = class Customer_paymentRelationsResolver {
    async customers(customer_payment, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findUnique({
            where: {
                id: customer_payment.id,
            },
        }).customers({});
    }
    async transactions(customer_payment, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.findUnique({
            where: {
                id: customer_payment.id,
            },
        }).transactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_payment_1.Customer_payment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentRelationsResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transactions_1.Transactions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_payment_1.Customer_payment, Object, Customer_paymentTransactionsArgs_1.Customer_paymentTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Customer_paymentRelationsResolver.prototype, "transactions", null);
Customer_paymentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], Customer_paymentRelationsResolver);
exports.Customer_paymentRelationsResolver = Customer_paymentRelationsResolver;
