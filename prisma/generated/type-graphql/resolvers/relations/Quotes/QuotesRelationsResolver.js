"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customers_1 = require("../../../models/Customers");
const Orders_1 = require("../../../models/Orders");
const Products_1 = require("../../../models/Products");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let QuotesRelationsResolver = class QuotesRelationsResolver {
    async customers_customersToquotes(quotes, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
            where: {
                id: quotes.id,
            },
        }).customers_customersToquotes({});
    }
    async orders(quotes, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
            where: {
                id: quotes.id,
            },
        }).orders({});
    }
    async products_productsToquotes(quotes, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.findUnique({
            where: {
                id: quotes.id,
            },
        }).products_productsToquotes({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Quotes_1.Quotes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesRelationsResolver.prototype, "customers_customersToquotes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Orders_1.Orders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Quotes_1.Quotes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Quotes_1.Quotes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QuotesRelationsResolver.prototype, "products_productsToquotes", null);
QuotesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], QuotesRelationsResolver);
exports.QuotesRelationsResolver = QuotesRelationsResolver;
