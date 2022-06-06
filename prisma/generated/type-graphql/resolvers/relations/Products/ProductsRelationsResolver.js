"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Coupons_1 = require("../../../models/Coupons");
const Credit_memos_1 = require("../../../models/Credit_memos");
const Orders_1 = require("../../../models/Orders");
const Product_attribute_1 = require("../../../models/Product_attribute");
const Products_1 = require("../../../models/Products");
const Quotes_1 = require("../../../models/Quotes");
const Rating_1 = require("../../../models/Rating");
const Returns_1 = require("../../../models/Returns");
const Tax_rate_1 = require("../../../models/Tax_rate");
const Tax_rule_1 = require("../../../models/Tax_rule");
const ProductsCouponsArgs_1 = require("./args/ProductsCouponsArgs");
const ProductsCredit_memosArgs_1 = require("./args/ProductsCredit_memosArgs");
const ProductsOrdersArgs_1 = require("./args/ProductsOrdersArgs");
const ProductsProduct_attributeArgs_1 = require("./args/ProductsProduct_attributeArgs");
const ProductsQuotesArgs_1 = require("./args/ProductsQuotesArgs");
const ProductsRatingArgs_1 = require("./args/ProductsRatingArgs");
const ProductsReturnsArgs_1 = require("./args/ProductsReturnsArgs");
const ProductsTax_rateArgs_1 = require("./args/ProductsTax_rateArgs");
const ProductsTax_ruleArgs_1 = require("./args/ProductsTax_ruleArgs");
const helpers_1 = require("../../../helpers");
let ProductsRelationsResolver = class ProductsRelationsResolver {
    async coupons(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).coupons(args);
    }
    async credit_memos(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).credit_memos(args);
    }
    async orders(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).orders(args);
    }
    async product_attribute(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).product_attribute(args);
    }
    async quotes(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).quotes(args);
    }
    async rating(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).rating(args);
    }
    async returns(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).returns(args);
    }
    async tax_rate(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).tax_rate(args);
    }
    async tax_rule(products, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).products.findUnique({
            where: {
                id: products.id,
            },
        }).tax_rule(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Coupons_1.Coupons], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsCouponsArgs_1.ProductsCouponsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "coupons", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Credit_memos_1.Credit_memos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsCredit_memosArgs_1.ProductsCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "credit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Orders_1.Orders], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsOrdersArgs_1.ProductsOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "orders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_attribute_1.Product_attribute], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsProduct_attributeArgs_1.ProductsProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "product_attribute", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Quotes_1.Quotes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsQuotesArgs_1.ProductsQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "quotes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Rating_1.Rating], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsRatingArgs_1.ProductsRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "rating", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Returns_1.Returns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsReturnsArgs_1.ProductsReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "returns", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Tax_rate_1.Tax_rate], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsTax_rateArgs_1.ProductsTax_rateArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "tax_rate", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Tax_rule_1.Tax_rule], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Products_1.Products, Object, ProductsTax_ruleArgs_1.ProductsTax_ruleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsRelationsResolver.prototype, "tax_rule", null);
ProductsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Products_1.Products)
], ProductsRelationsResolver);
exports.ProductsRelationsResolver = ProductsRelationsResolver;
