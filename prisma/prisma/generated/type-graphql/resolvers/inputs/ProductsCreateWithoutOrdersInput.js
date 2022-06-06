"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1 = require("../inputs/CouponsCreateNestedManyWithoutProducts_couponsToproductsInput");
const Credit_memosCreateNestedManyWithoutProductsInput_1 = require("../inputs/Credit_memosCreateNestedManyWithoutProductsInput");
const Product_attributeCreateNestedManyWithoutProductsInput_1 = require("../inputs/Product_attributeCreateNestedManyWithoutProductsInput");
const QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateNestedManyWithoutProducts_productsToquotesInput");
const RatingCreateNestedManyWithoutProductsInput_1 = require("../inputs/RatingCreateNestedManyWithoutProductsInput");
const ReturnsCreateNestedManyWithoutProductsInput_1 = require("../inputs/ReturnsCreateNestedManyWithoutProductsInput");
const Tax_rateCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_rateCreateNestedManyWithoutProductsInput");
const Tax_ruleCreateNestedManyWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateNestedManyWithoutProductsInput");
let ProductsCreateWithoutOrdersInput = class ProductsCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ProductsCreateWithoutOrdersInput.prototype, "sku", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "quantity_per_source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "salable_quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductsCreateWithoutOrdersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "stock_status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "weight", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductsCreateWithoutOrdersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "short_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductsCreateWithoutOrdersInput.prototype, "manufacture", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsCreateNestedManyWithoutProducts_couponsToproductsInput_1.CouponsCreateNestedManyWithoutProducts_couponsToproductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "coupons", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCreateNestedManyWithoutProductsInput_1.Credit_memosCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "credit_memos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateNestedManyWithoutProductsInput_1.Product_attributeCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "product_attribute", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateNestedManyWithoutProducts_productsToquotesInput_1.QuotesCreateNestedManyWithoutProducts_productsToquotesInput)
], ProductsCreateWithoutOrdersInput.prototype, "quotes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedManyWithoutProductsInput_1.RatingCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReturnsCreateNestedManyWithoutProductsInput_1.ReturnsCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "returns", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateNestedManyWithoutProductsInput_1.Tax_rateCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateNestedManyWithoutProductsInput_1.Tax_ruleCreateNestedManyWithoutProductsInput)
], ProductsCreateWithoutOrdersInput.prototype, "tax_rule", void 0);
ProductsCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateWithoutOrdersInput", {
        isAbstract: true
    })
], ProductsCreateWithoutOrdersInput);
exports.ProductsCreateWithoutOrdersInput = ProductsCreateWithoutOrdersInput;
