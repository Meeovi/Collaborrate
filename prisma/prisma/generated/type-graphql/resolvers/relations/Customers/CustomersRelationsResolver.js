"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comments_1 = require("../../../models/Comments");
const Credit_memos_1 = require("../../../models/Credit_memos");
const Customer_group_1 = require("../../../models/Customer_group");
const Customer_payment_1 = require("../../../models/Customer_payment");
const Customers_1 = require("../../../models/Customers");
const Emails_1 = require("../../../models/Emails");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const Orders_1 = require("../../../models/Orders");
const Quotes_1 = require("../../../models/Quotes");
const Returns_1 = require("../../../models/Returns");
const CustomersCommentsArgs_1 = require("./args/CustomersCommentsArgs");
const CustomersCredit_memosArgs_1 = require("./args/CustomersCredit_memosArgs");
const CustomersCustomer_group_customer_groupTocustomersArgs_1 = require("./args/CustomersCustomer_group_customer_groupTocustomersArgs");
const CustomersEmailsArgs_1 = require("./args/CustomersEmailsArgs");
const CustomersNewsletter_subscribersArgs_1 = require("./args/CustomersNewsletter_subscribersArgs");
const CustomersOrdersArgs_1 = require("./args/CustomersOrdersArgs");
const CustomersQuotesArgs_1 = require("./args/CustomersQuotesArgs");
const CustomersReturnsArgs_1 = require("./args/CustomersReturnsArgs");
const helpers_1 = require("../../../helpers");
let CustomersRelationsResolver = class CustomersRelationsResolver {
    async comments(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).comments(args);
    }
    async credit_memos(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).credit_memos(args);
    }
    async customer_group_customer_groupTocustomers(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).customer_group_customer_groupTocustomers(args);
    }
    async customer_payment(customers, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).customer_payment({});
    }
    async emails(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).emails(args);
    }
    async newsletter_subscribers(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).newsletter_subscribers(args);
    }
    async orders(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).orders(args);
    }
    async quotes(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).quotes(args);
    }
    async returns(customers, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findUnique({
            where: {
                id: customers.id,
            },
        }).returns(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comments_1.Comments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersCommentsArgs_1.CustomersCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "comments", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Credit_memos_1.Credit_memos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersCredit_memosArgs_1.CustomersCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "credit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Customer_group_1.Customer_group], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersCustomer_group_customer_groupTocustomersArgs_1.CustomersCustomer_group_customer_groupTocustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "customer_group_customer_groupTocustomers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customer_payment_1.Customer_payment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "customer_payment", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Emails_1.Emails], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersEmailsArgs_1.CustomersEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "emails", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Newsletter_subscribers_1.Newsletter_subscribers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersNewsletter_subscribersArgs_1.CustomersNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "newsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Orders_1.Orders], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersOrdersArgs_1.CustomersOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Quotes_1.Quotes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersQuotesArgs_1.CustomersQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "quotes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Returns_1.Returns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customers_1.Customers, Object, CustomersReturnsArgs_1.CustomersReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomersRelationsResolver.prototype, "returns", null);
CustomersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], CustomersRelationsResolver);
exports.CustomersRelationsResolver = CustomersRelationsResolver;
