"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateWithoutCouponsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Credit_memosCreateNestedManyWithoutProductsInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutProductsInput");
const OrdersCreateNestedManyWithoutProductsInput_1 = require("../inputs/OrdersCreateNestedManyWithoutProductsInput");
const Product_attributeCreateNestedManyWithoutProductsInput_1 = require("../inputs/Product_attributeCreateNestedManyWithoutProductsInput");
const QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutProducts_productsToquotesInput");
const RatingCreateNestedManyWithoutProductsInput_1 = require("../inputs/RatingCreateNestedManyWithoutProductsInput");
const ReturnsCreateNestedManyWithoutProductsInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutProductsInput");
const Tax_rateCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_rateCreateNestedManyWithoutProductsInput");
const Tax_ruleCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateNestedManyWithoutProductsInput");
let ProductsCreateWithoutCouponsInput = class ProductsCreateWithoutCouponsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutCouponsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutCouponsInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCreateWithoutCouponsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductsCreateWithoutCouponsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutCouponsInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrdersCreateNestedManyWithoutProductsInput_1.OrdersCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput)
], ProductsCreateWithoutCouponsInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutCouponsInput.prototype, "tax_rule", void 0);
ProductsCreateWithoutCouponsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateWithoutCouponsInput", {
        isAbstract: true
    })
], ProductsCreateWithoutCouponsInput);
exports.ProductsCreateWithoutCouponsInput = ProductsCreateWithoutCouponsInput;
