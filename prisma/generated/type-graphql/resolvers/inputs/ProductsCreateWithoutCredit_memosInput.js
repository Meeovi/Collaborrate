"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateNestedManyWithoutProducts_couponsToproductsInput");
const OrdersCreateNestedManyWithoutProductsInput_1 = require("../inputs/OrdersCreateNestedManyWithoutProductsInput");
const Product_attributeCreateNestedManyWithoutProductsInput_1 = require("../inputs/Product_attributeCreateNestedManyWithoutProductsInput");
const QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutProducts_productsToquotesInput");
const RatingCreateNestedManyWithoutProductsInput_1 = require("../inputs/RatingCreateNestedManyWithoutProductsInput");
const ReturnsCreateNestedManyWithoutProductsInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutProductsInput");
const Tax_rateCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_rateCreateNestedManyWithoutProductsInput");
const Tax_ruleCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateNestedManyWithoutProductsInput");
let ProductsCreateWithoutCredit_memosInput = class ProductsCreateWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutCredit_memosInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutCredit_memosInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCreateWithoutCredit_memosInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductsCreateWithoutCredit_memosInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCredit_memosInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCredit_memosInput.prototype, "tax_rule", void 0);
ProductsCreateWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateWithoutCredit_memosInput", {
        isAbstract: true
    })
], ProductsCreateWithoutCredit_memosInput);
exports.ProductsCreateWithoutCredit_memosInput = ProductsCreateWithoutCredit_memosInput;
