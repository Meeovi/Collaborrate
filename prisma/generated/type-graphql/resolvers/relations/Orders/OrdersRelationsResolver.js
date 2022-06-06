"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customers_1 = require("../../../models/Customers");
const Orders_1 = require("../../../models/Orders");
const Products_1 = require("../../../models/Products");
const Quotes_1 = require("../../../models/Quotes");
const Transactions_1 = require("../../../models/Transactions");
const OrdersQuotesArgs_1 = require("./args/OrdersQuotesArgs");
const OrdersTransactionsArgs_1 = require("./args/OrdersTransactionsArgs");
const helpers_1 = require("../../../helpers");
let OrdersRelationsResolver = class OrdersRelationsResolver {
    async customers(orders, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            where: {
                id: orders.id,
            },
        }).customers({});
    }
    async products(orders, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            where: {
                id: orders.id,
            },
        }).products({});
    }
    async quotes(orders, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            where: {
                id: orders.id,
            },
        }).quotes(args);
    }
    async transactions(orders, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.findUnique({
            where: {
                id: orders.id,
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
    tslib_1.__metadata("design:paramtypes", [Orders_1.Orders, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersRelationsResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Orders_1.Orders, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersRelationsResolver.prototype, "products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Quotes_1.Quotes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Orders_1.Orders, Object, OrdersQuotesArgs_1.OrdersQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersRelationsResolver.prototype, "quotes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transactions_1.Transactions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Orders_1.Orders, Object, OrdersTransactionsArgs_1.OrdersTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersRelationsResolver.prototype, "transactions", null);
OrdersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], OrdersRelationsResolver);
exports.OrdersRelationsResolver = OrdersRelationsResolver;
